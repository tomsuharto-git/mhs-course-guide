"use client";

import { useState, useMemo, useEffect, useRef } from 'react';
import { CoursePlan } from '@/lib/journey/plan-state';
import { WizardState } from '@/data/wizard/types';
import { getCourseById, allCourses } from '@/data/courses';
import { isPrerequisiteMet } from '@/lib/journey/prerequisite-engine';
import { calculateProgress, creditsForGrade } from '@/lib/journey/credit-calculator';
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

  // Auto-add Finance if no Financial Literacy course is in the plan
  const FIN_LIT_COURSES = ['finance', 'microecon-h', 'macroecon-h', 'monetary-policy-h'];
  const hasFinLit = FIN_LIT_COURSES.some((id) => planCourseIds.has(id));
  const financeAutoAdded = useRef(false);

  useEffect(() => {
    if (!hasFinLit && !financeAutoAdded.current) {
      // Find the least-loaded eligible grade for finance
      const finCourse = getCourseById('finance');
      if (finCourse) {
        const grade = finCourse.grades.find((g) => !(plan[g] ?? []).includes('finance')) ?? 9;
        addCourse(grade, 'finance');
        financeAutoAdded.current = true;
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  const FULL_THRESHOLD = 35; // 7 periods × 5 cr

  const gradeCredits = useMemo(() => {
    const map: Record<number, number> = {};
    for (const g of [9, 10, 11, 12]) {
      map[g] = creditsForGrade(plan, g, allCourses);
    }
    return map;
  }, [plan]);

  const getEligibleGrades = (courseId: string) => {
    const course = getCourseById(courseId);
    if (!course) return [];
    return course.grades.filter((g) => {
      if (planCourseIds.has(course.id)) return false;
      if (gradeCredits[g] >= FULL_THRESHOLD) return false;
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

      {/* Elective selections summary */}
      <ElectivesSummary
        plan={plan}
        planCourseIds={planCourseIds}
        gradeCredits={gradeCredits}
        removeCourse={removeCourse}
      />

      {/* Finance auto-add callout */}
      {financeAutoAdded.current && planCourseIds.has('finance') && (
        <div className="mb-5 px-3 py-2.5 rounded-lg bg-indigo-50 border border-indigo-200/60 text-xs text-indigo-800 leading-relaxed">
          <span className="font-semibold">Finance</span> was automatically added to your plan.
          New Jersey requires 2.5 credits of Financial Literacy to graduate. Since your Social Studies
          pathway doesn&apos;t include Microeconomics or Macroeconomics, this CTE course covers the requirement.
          You can remove it if you plan to take an economics course instead.
        </div>
      )}

      {/* Department toggle */}
      <div className="flex gap-2 mb-5">
        {TABS.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => { setActiveTab(tab.id); setAddingCourse(null); }}
              className={`flex-1 py-3 px-4 rounded-lg text-lg font-[family-name:var(--font-heading)] uppercase tracking-wider transition-all ${
                isActive
                  ? 'text-white shadow-sm'
                  : 'text-text-muted bg-warm-gray hover:bg-border/50'
              }`}
              style={isActive ? { backgroundColor: tab.color } : undefined}
            >
              {tab.label}
            </button>
          );
        })}
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
          gradeCredits={gradeCredits}
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
          gradeCredits={gradeCredits}
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
  gradeCredits: Record<number, number>;
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
  gradeCredits,
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
                          gradeCredits={gradeCredits}
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
  gradeCredits,
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
                              gradeCredits={gradeCredits}
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
  gradeCredits,
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
  gradeCredits: Record<number, number>;
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

  // Auto-add to the best grade if only one has room
  const handleStartAdd = () => {
    if (eligibleGrades.length === 1) {
      onAdd(eligibleGrades[0]);
    } else if (eligibleGrades.length > 1) {
      onStartAdd();
    }
  };

  if (inPlan) {
    return (
      <div
        className="px-2 py-1.5 rounded-md border border-transparent"
        style={{ backgroundColor: deptColor, borderColor: deptColor }}
      >
        <div className="flex items-start gap-1.5">
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="shrink-0 mt-0.5">
            <path d="M2 5l2.5 2.5L8 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-xs font-medium text-white leading-tight">{label || course.name}</span>
        </div>
        <div className="mt-1">
          <LevelBadge level={course.level} deptColor={deptColor} inverted />
        </div>
      </div>
    );
  }

  if (isAdding) {
    // Sort grades by most room available
    const sorted = [...eligibleGrades].sort((a, b) => (gradeCredits[a] ?? 0) - (gradeCredits[b] ?? 0));

    return (
      <div className="px-2 py-1.5 rounded-md border border-border bg-white">
        <span className="text-xs font-medium text-text leading-tight">{label || course.name}</span>
        <div className="mt-1 mb-1.5">
          <LevelBadge level={course.level} deptColor={deptColor} />
        </div>
        <div className="flex items-center gap-1 flex-wrap">
          {sorted.map((g) => (
            <button
              key={g}
              onClick={() => onAdd(g)}
              className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-mountie-blue text-white hover:bg-mountie-dark transition-colors"
            >
              G{g} <span className="opacity-70">({gradeCredits[g] ?? 0}cr)</span>
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
    <div className="group px-2 py-1.5 rounded-md border border-border hover:border-border/80 bg-white transition-colors">
      <div className="flex items-start justify-between gap-1">
        <span className="text-xs font-medium text-text leading-tight">{label || course.name}</span>
        <button
          onClick={handleStartAdd}
          disabled={eligibleGrades.length === 0}
          className={`text-[10px] font-medium px-1.5 py-0.5 rounded shrink-0 transition-colors ${
            eligibleGrades.length > 0
              ? 'bg-mountie-blue/10 text-mountie-blue hover:bg-mountie-blue/20'
              : 'bg-border/30 text-text-muted/40 cursor-not-allowed'
          }`}
        >
          {eligibleGrades.length === 0 ? 'Full' : 'Add'}
        </button>
      </div>
      <div className="mt-1">
        <LevelBadge level={course.level} deptColor={deptColor} />
      </div>
    </div>
  );
}

// ─── Electives Summary Panel ────────────────────────────────────────────────

const ELECTIVE_DEPTS = new Set(['visual-performing-arts', 'career-technical']);
const GRADE_LABELS: Record<number, string> = { 9: 'Grade 9', 10: 'Grade 10', 11: 'Grade 11', 12: 'Grade 12' };
const FULL_CREDIT_THRESHOLD = 35;

function ElectivesSummary({
  plan,
  planCourseIds,
  gradeCredits,
  removeCourse,
}: {
  plan: CoursePlan;
  planCourseIds: Set<string>;
  gradeCredits: Record<number, number>;
  removeCourse: (grade: number, courseId: string) => void;
}) {
  const [open, setOpen] = useState(false);

  // Collect all elective course IDs from both tracks
  const electiveIds = useMemo(() => {
    const ids = new Set<string>();
    for (const node of vpaTrack.nodes) ids.add(node.courseId);
    for (const node of careerTechnicalTrack.nodes) ids.add(node.courseId);
    return ids;
  }, []);

  // Find electives in the plan, grouped by grade
  const byGrade = useMemo(() => {
    const result: Record<number, { id: string; name: string; credits: number; dept: string }[]> = {};
    for (const grade of [9, 10, 11, 12]) {
      const courses = (plan[grade] ?? [])
        .filter((id) => electiveIds.has(id))
        .map((id) => {
          const c = getCourseById(id);
          return c ? { id: c.id, name: c.name, credits: c.credits, dept: c.department } : null;
        })
        .filter((c): c is NonNullable<typeof c> => c !== null);
      if (courses.length > 0) result[grade] = courses;
    }
    return result;
  }, [plan, electiveIds]);

  const totalElectives = Object.values(byGrade).flat().length;
  if (totalElectives === 0) return null;

  const totalElectiveCredits = Object.values(byGrade).flat().reduce((sum, c) => sum + c.credits, 0);

  return (
    <div className="mb-5 rounded-lg border border-border bg-white overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-3 py-2.5 hover:bg-warm-gray/50 transition-colors"
      >
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-text">Your Electives</span>
          <span className="text-[11px] px-2 py-0.5 rounded-full bg-mountie-blue/10 text-mountie-blue font-medium tabular-nums">
            {totalElectives} course{totalElectives !== 1 ? 's' : ''} &middot; {totalElectiveCredits} cr
          </span>
        </div>
        <svg
          width="16" height="16" viewBox="0 0 16 16" fill="none"
          className={`text-text-muted transition-transform ${open ? 'rotate-180' : ''}`}
        >
          <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <div className="px-3 pb-3 border-t border-border/60">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mt-3">
            {([9, 10, 11, 12] as const).map((grade) => {
              const courses = byGrade[grade];
              const credits = gradeCredits[grade] ?? 0;
              const isFull = credits >= FULL_CREDIT_THRESHOLD;

              return (
                <div key={grade}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-semibold text-text-muted uppercase tracking-wider">
                      {GRADE_LABELS[grade]}
                    </span>
                    <span className={`text-[10px] tabular-nums font-medium ${
                      isFull ? 'text-amber-600' : 'text-text-muted'
                    }`}>
                      {credits} cr{isFull ? ' (full)' : ''}
                    </span>
                  </div>
                  {courses && courses.length > 0 ? (
                    <div className="space-y-1">
                      {courses.map((c) => (
                        <div
                          key={c.id}
                          className="flex items-center justify-between gap-1 px-2 py-1 rounded bg-warm-gray/70 group"
                        >
                          <span className="text-[11px] text-text leading-tight">{c.name}</span>
                          <button
                            onClick={() => removeCourse(grade, c.id)}
                            className="text-text-muted/40 hover:text-red-500 transition-colors opacity-0 group-hover:opacity-100"
                            title="Remove"
                          >
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                              <path d="M3 3l6 6M9 3l-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                          </button>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-[10px] text-text-muted/40 py-1">No electives</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
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
