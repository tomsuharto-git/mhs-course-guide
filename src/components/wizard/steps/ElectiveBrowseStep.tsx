"use client";

import { useState, useMemo } from 'react';
import { CoursePlan } from '@/lib/journey/plan-state';
import { WizardState } from '@/data/wizard/types';
import { getCourseById, allCourses } from '@/data/courses';
import { isPrerequisiteMet } from '@/lib/journey/prerequisite-engine';
import { calculateProgress } from '@/lib/journey/credit-calculator';
import { graduationRequirements } from '@/data/graduation-requirements';
import { DEPARTMENT_META, Track, TrackRowGroup } from '@/data/types';
import { LevelBadge } from '@/components/shared/Badge';
import { WizardHeader } from '../WizardHeader';
import { WizardNavButtons } from '../WizardNavButtons';
import { vpaTrack } from '@/data/tracks/visual-performing-arts';
import { careerTechnicalTrack } from '@/data/tracks/career-technical';

type Tab = 'vpa' | 'cte';

const TABS: { id: Tab; label: string; color: string; track: Track }[] = [
  { id: 'vpa', label: 'Visual & Performing Arts', color: DEPARTMENT_META['visual-performing-arts'].color, track: vpaTrack },
  { id: 'cte', label: 'Career & Technical Ed', color: DEPARTMENT_META['career-technical'].color, track: careerTechnicalTrack },
];

interface ElectiveBrowseStepProps {
  stepIndex: number;
  wizard: WizardState;
  plan: CoursePlan;
  addCourse: (grade: number, courseId: string) => void;
  removeCourse: (grade: number, courseId: string) => void;
  goNext: () => void;
  goBack: () => void;
}

export function ElectiveBrowseStep({
  stepIndex,
  wizard,
  plan,
  addCourse,
  removeCourse,
  goNext,
  goBack,
}: ElectiveBrowseStepProps) {
  const [activeTab, setActiveTab] = useState<Tab>('vpa');
  const [addingCourse, setAddingCourse] = useState<string | null>(null);

  const planCourseIds = useMemo(() => {
    const ids = new Set<string>();
    for (const grade of [9, 10, 11, 12]) {
      for (const id of plan[grade] ?? []) ids.add(id);
    }
    return ids;
  }, [plan]);

  const completedByGrade = useMemo(() => {
    const map: Record<number, Set<string>> = {};
    let cumulative = new Set<string>();
    for (const grade of [9, 10, 11, 12]) {
      map[grade] = new Set(cumulative);
      for (const id of plan[grade] ?? []) {
        cumulative.add(id);
      }
    }
    return map;
  }, [plan]);

  const allCourseIds = useMemo(() => new Set(allCourses.map((c) => c.id)), []);

  const progress = useMemo(
    () => calculateProgress(plan, allCourses, graduationRequirements),
    [plan]
  );
  const vpaProgress = progress.find((p) => p.area === 'Visual & Performing Arts');
  const cteProgress = progress.find((p) => p.area === '21st Century Life & Careers / CTE');
  const finLitProgress = progress.find((p) => p.area === 'Financial Literacy');

  const activeTabData = TABS.find((t) => t.id === activeTab)!;
  const track = activeTabData.track;
  const deptColor = activeTabData.color;

  const getEligibleGrades = (courseId: string) => {
    const course = getCourseById(courseId);
    if (!course) return [];
    return course.grades.filter((g) => {
      if (planCourseIds.has(course.id)) return false;
      return isPrerequisiteMet(course, completedByGrade[g] ?? new Set(), allCourseIds);
    });
  };

  const handleAdd = (courseId: string, grade: number) => {
    addCourse(grade, courseId);
    setAddingCourse(null);
  };

  return (
    <div>
      <WizardHeader stepIndex={stepIndex} />

      {/* Requirement badges */}
      <div className="flex flex-wrap gap-2 mb-5">
        <RequirementBadge label="VPA" earned={vpaProgress?.earned ?? 0} required={vpaProgress?.required ?? 5} met={vpaProgress?.met ?? false} />
        <RequirementBadge label="CTE" earned={cteProgress?.earned ?? 0} required={cteProgress?.required ?? 5} met={cteProgress?.met ?? false} />
        <RequirementBadge label="Financial Lit" earned={finLitProgress?.earned ?? 0} required={finLitProgress?.required ?? 2.5} met={finLitProgress?.met ?? false} />
      </div>

      {/* Tabs */}
      <div className="flex gap-1 mb-5 border-b border-border">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => { setActiveTab(tab.id); setAddingCourse(null); }}
            className={`px-3 py-2 text-sm font-medium border-b-2 transition-colors -mb-px ${
              activeTab === tab.id
                ? 'border-current text-text'
                : 'border-transparent text-text-muted hover:text-text'
            }`}
            style={activeTab === tab.id ? { borderColor: tab.color } : undefined}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Desktop: Progression table */}
      <div className="hidden md:block overflow-x-auto">
        <DisciplineTable
          track={track}
          deptColor={deptColor}
          planCourseIds={planCourseIds}
          addingCourse={addingCourse}
          onStartAdd={setAddingCourse}
          onAdd={handleAdd}
          onRemove={removeCourse}
          getEligibleGrades={getEligibleGrades}
        />
      </div>

      {/* Mobile: Grouped sections */}
      <div className="md:hidden">
        <DisciplineMobile
          track={track}
          deptColor={deptColor}
          planCourseIds={planCourseIds}
          addingCourse={addingCourse}
          onStartAdd={setAddingCourse}
          onAdd={handleAdd}
          onRemove={removeCourse}
          getEligibleGrades={getEligibleGrades}
        />
      </div>

      <WizardNavButtons
        currentStep={stepIndex}
        onNext={goNext}
        onBack={goBack}
        canAdvance={true}
      />
    </div>
  );
}

// ─── Desktop Table ──────────────────────────────────────────────────────────

function ChevronRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-border shrink-0">
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

interface TableProps {
  track: Track;
  deptColor: string;
  planCourseIds: Set<string>;
  addingCourse: string | null;
  onStartAdd: (courseId: string | null) => void;
  onAdd: (courseId: string, grade: number) => void;
  onRemove: (grade: number, courseId: string) => void;
  getEligibleGrades: (courseId: string) => number[];
}

function DisciplineTable({
  track,
  deptColor,
  planCourseIds,
  addingCourse,
  onStartAdd,
  onAdd,
  onRemove,
  getEligibleGrades,
}: TableProps) {
  const maxRow = Math.max(...track.nodes.map((n) => n.row));
  const allRows = Array.from({ length: maxRow + 1 }, (_, i) => i);

  return (
    <table className="w-full border-collapse text-sm" style={{ tableLayout: 'fixed' }}>
      <thead>
        <tr>
          <th className="text-left px-3 py-2.5 text-xs font-semibold text-text-muted uppercase tracking-wider bg-warm-gray border border-border w-36">
            {track.rowGroupHeader || 'Discipline'}
          </th>
          {track.columns.map((col, i) => (
            <th
              key={col}
              className="px-3 py-2.5 text-xs font-semibold uppercase tracking-wider border border-border"
              style={{ backgroundColor: `${deptColor}0a`, color: deptColor }}
            >
              <div className="flex items-center justify-center gap-1.5">
                {i > 0 && <ChevronRight />}
                <span>{col}</span>
              </div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {allRows.map((rowIdx) => {
          const rowNodes = track.nodes.filter((n) => n.row === rowIdx);
          const group = track.rowGroups?.find((g) => g.startRow === rowIdx);
          const isFirstInGroup = !!group;
          const groupSpan = group ? group.endRow - group.startRow + 1 : 0;
          const isGroupStart = isFirstInGroup && rowIdx > 0;

          return (
            <tr key={rowIdx} className={isGroupStart ? 'border-t-2 border-border' : ''}>
              {isFirstInGroup && (
                <td
                  rowSpan={groupSpan}
                  className="px-3 py-3 border border-border align-middle text-center bg-warm-gray"
                >
                  <span className="text-xs font-bold text-text uppercase tracking-wider whitespace-pre-line leading-relaxed">
                    {group!.label}
                  </span>
                </td>
              )}
              {track.columns.map((_, colIdx) => {
                const cellNodes = rowNodes.filter((n) => n.col === colIdx);
                return (
                  <td key={colIdx} className="px-2 py-2 border border-border align-top">
                    <div className="space-y-1">
                      {cellNodes.map((node) => (
                        <ElectiveCourseCard
                          key={`${node.courseId}-${node.row}-${node.col}`}
                          courseId={node.courseId}
                          label={node.label}
                          deptColor={deptColor}
                          inPlan={planCourseIds.has(node.courseId)}
                          isAdding={addingCourse === node.courseId}
                          eligibleGrades={getEligibleGrades(node.courseId)}
                          onStartAdd={() => onStartAdd(node.courseId)}
                          onCancelAdd={() => onStartAdd(null)}
                          onAdd={(grade) => onAdd(node.courseId, grade)}
                        />
                      ))}
                    </div>
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

// ─── Mobile Grouped View ────────────────────────────────────────────────────

function DisciplineMobile({
  track,
  deptColor,
  planCourseIds,
  addingCourse,
  onStartAdd,
  onAdd,
  onRemove,
  getEligibleGrades,
}: TableProps) {
  const groups = track.rowGroups ?? [];

  return (
    <div className="space-y-4">
      {groups.map((group) => (
        <div key={group.label} className="bg-white border border-border rounded-xl overflow-hidden">
          <div className="px-4 py-2.5 border-b border-border" style={{ backgroundColor: `${deptColor}08` }}>
            <p className="text-xs font-bold uppercase tracking-wider whitespace-pre-line" style={{ color: deptColor }}>
              {group.label}
            </p>
          </div>
          <div className="divide-y divide-border/60">
            {Array.from(
              { length: group.endRow - group.startRow + 1 },
              (_, i) => group.startRow + i
            ).map((rowIdx) => {
              const rowNodes = track.nodes.filter((n) => n.row === rowIdx);
              if (rowNodes.length === 0) return null;
              return (
                <div key={rowIdx} className="px-4 py-3">
                  {track.columns.map((colLabel, colIdx) => {
                    const cellNodes = rowNodes.filter((n) => n.col === colIdx);
                    if (cellNodes.length === 0) return null;
                    return (
                      <div key={colIdx} className="mb-3 last:mb-0">
                        <p className="text-[10px] font-medium text-text-muted uppercase tracking-wider mb-1.5">
                          {colLabel}
                        </p>
                        <div className="space-y-1.5">
                          {cellNodes.map((node) => (
                            <ElectiveCourseCard
                              key={`${node.courseId}-${node.row}-${node.col}-m`}
                              courseId={node.courseId}
                              label={node.label}
                              deptColor={deptColor}
                              inPlan={planCourseIds.has(node.courseId)}
                              isAdding={addingCourse === node.courseId}
                              eligibleGrades={getEligibleGrades(node.courseId)}
                              onStartAdd={() => onStartAdd(node.courseId)}
                              onCancelAdd={() => onStartAdd(null)}
                              onAdd={(grade) => onAdd(node.courseId, grade)}
                            />
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── Course Card with Add/Remove ────────────────────────────────────────────

function ElectiveCourseCard({
  courseId,
  label,
  deptColor,
  inPlan,
  isAdding,
  eligibleGrades,
  onStartAdd,
  onCancelAdd,
  onAdd,
}: {
  courseId: string;
  label?: string;
  deptColor: string;
  inPlan: boolean;
  isAdding: boolean;
  eligibleGrades: number[];
  onStartAdd: () => void;
  onCancelAdd: () => void;
  onAdd: (grade: number) => void;
}) {
  const course = getCourseById(courseId);
  if (!course) {
    if (!label) return null;
    return (
      <div className="px-2 py-1.5 bg-warm-gray border border-border rounded-md text-xs">
        <span className="font-medium text-text-muted">{label}</span>
      </div>
    );
  }

  if (inPlan) {
    return (
      <div
        className="px-2 py-1.5 rounded-md border border-transparent flex items-center justify-between gap-1"
        style={{ backgroundColor: deptColor, borderColor: deptColor }}
      >
        <div className="flex items-center gap-1.5 min-w-0">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="shrink-0">
            <path d="M2 5l2.5 2.5L8 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-xs font-medium text-white leading-tight truncate">{label || course.name}</span>
        </div>
        <LevelBadge level={course.level} deptColor={deptColor} inverted />
      </div>
    );
  }

  if (isAdding) {
    return (
      <div className="px-2 py-1.5 rounded-md border border-border bg-white">
        <div className="flex items-center justify-between gap-1 mb-1.5">
          <span className="text-xs font-medium text-text leading-tight truncate">{label || course.name}</span>
          <LevelBadge level={course.level} deptColor={deptColor} />
        </div>
        <div className="flex items-center gap-1">
          <span className="text-[10px] text-text-muted mr-0.5">Grade:</span>
          {eligibleGrades.map((g) => (
            <button
              key={g}
              onClick={() => onAdd(g)}
              className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-mountie-blue text-white hover:bg-mountie-dark transition-colors"
            >
              {g}
            </button>
          ))}
          <button onClick={onCancelAdd} className="text-[10px] text-text-muted ml-auto hover:text-text">
            Cancel
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="group px-2 py-1.5 rounded-md border border-border hover:border-border/80 bg-white flex items-center justify-between gap-1 transition-colors">
      <div className="flex items-center gap-1.5 min-w-0">
        <span className="text-xs font-medium text-text leading-tight truncate">{label || course.name}</span>
        <LevelBadge level={course.level} deptColor={deptColor} />
      </div>
      <button
        onClick={onStartAdd}
        disabled={eligibleGrades.length === 0}
        className={`text-[10px] font-medium px-1.5 py-0.5 rounded shrink-0 transition-colors ${
          eligibleGrades.length > 0
            ? 'bg-mountie-blue/10 text-mountie-blue hover:bg-mountie-blue/20'
            : 'bg-border/30 text-text-muted/40 cursor-not-allowed'
        }`}
      >
        Add
      </button>
    </div>
  );
}

// ─── Requirement Badge ──────────────────────────────────────────────────────

function RequirementBadge({
  label,
  earned,
  required,
  met,
}: {
  label: string;
  earned: number;
  required: number;
  met: boolean;
}) {
  return (
    <div
      className={`text-[11px] px-2.5 py-1 rounded-full font-medium ${
        met
          ? 'bg-emerald-100 text-emerald-700'
          : 'bg-amber-100 text-amber-800'
      }`}
    >
      {label}: {earned}/{required} cr
      {met && (
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="inline ml-1 -mt-0.5">
          <path d="M2 5l2.5 2.5L8 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )}
    </div>
  );
}
