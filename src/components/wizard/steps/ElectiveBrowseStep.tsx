"use client";

import { useState, useMemo } from 'react';
import { CoursePlan } from '@/lib/journey/plan-state';
import { WizardState } from '@/data/wizard/types';
import { vpaCourses, careerTechnicalCourses } from '@/data/courses';
import { getCourseById, allCourses } from '@/data/courses';
import { isPrerequisiteMet } from '@/lib/journey/prerequisite-engine';
import { calculateProgress } from '@/lib/journey/credit-calculator';
import { graduationRequirements } from '@/data/graduation-requirements';
import { DEPARTMENT_META, Course } from '@/data/types';
import { LevelBadge } from '@/components/shared/Badge';
import { WizardHeader } from '../WizardHeader';
import { WizardNavButtons } from '../WizardNavButtons';

type Tab = 'vpa' | 'cte';

const TABS: { id: Tab; label: string; color: string }[] = [
  { id: 'vpa', label: 'Visual & Performing Arts', color: DEPARTMENT_META['visual-performing-arts'].color },
  { id: 'cte', label: 'Career & Technical Ed', color: DEPARTMENT_META['career-technical'].color },
];

// Group VPA courses by discipline
function groupByTag(courses: Course[]): Record<string, Course[]> {
  const groups: Record<string, Course[]> = {};
  for (const course of courses) {
    // Determine group from tags or name
    let group = 'Other';
    if (course.tags.includes('art') || course.name.match(/Art|Drawing|Painting|Ceramics|Sculpture|Fibers|Design|Photography|Portfolio|CAD|Coding/i)) group = 'Studio Art & Design';
    else if (course.tags.includes('theater') || course.name.match(/Acting|Theater|Film Making/i)) group = 'Theater';
    else if (course.tags.includes('dance') || course.name.match(/Dance/i)) group = 'Dance';
    else if (course.tags.includes('music') || course.name.match(/Music|Band|Orchestra|Chorus|Choir|Madrigal/i)) group = 'Music';
    else if (course.tags.includes('yearbook') || course.name.match(/Yearbook/i)) group = 'Yearbook';
    groups[group] = groups[group] ?? [];
    groups[group].push(course);
  }
  return groups;
}

function groupCTEByDiscipline(courses: Course[]): Record<string, Course[]> {
  const groups: Record<string, Course[]> = {};
  for (const course of courses) {
    let group = 'Other';
    if (course.name.match(/Marketing|Advertising|Journalism/i)) group = 'Marketing & Media';
    else if (course.name.match(/Business|Entrepreneur|Finance/i)) group = 'Business & Finance';
    else if (course.name.match(/Computer|CS|AP CS/i)) group = 'Computer Science';
    else if (course.name.match(/Culinary/i)) group = 'Culinary Arts';
    else if (course.name.match(/Carpentry|Power Technology/i)) group = 'Carpentry & Trades';
    else if (course.name.match(/Robotics/i)) group = 'Robotics';
    else if (course.name.match(/Automotive/i)) group = 'Automotive';
    else if (course.name.match(/Architect|Arch/i)) group = 'Architecture & Design';
    groups[group] = groups[group] ?? [];
    groups[group].push(course);
  }
  return groups;
}

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

  // Courses already in the plan
  const planCourseIds = useMemo(() => {
    const ids = new Set<string>();
    for (const grade of [9, 10, 11, 12]) {
      for (const id of plan[grade] ?? []) ids.add(id);
    }
    return ids;
  }, [plan]);

  // Completed courses per grade (for prereq checking)
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

  // Graduation progress for requirement badges
  const progress = useMemo(
    () => calculateProgress(plan, allCourses, graduationRequirements),
    [plan]
  );
  const vpaProgress = progress.find((p) => p.area === 'Visual & Performing Arts');
  const cteProgress = progress.find((p) => p.area === '21st Century Life & Careers / CTE');
  const finLitProgress = progress.find((p) => p.area === 'Financial Literacy');

  const courses = activeTab === 'vpa' ? vpaCourses : careerTechnicalCourses;
  const groups = activeTab === 'vpa' ? groupByTag(courses) : groupCTEByDiscipline(courses);

  // Which grades can a course be added to?
  const getEligibleGrades = (course: Course): number[] => {
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
            onClick={() => setActiveTab(tab.id)}
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

      {/* Course groups */}
      <div className="space-y-6">
        {Object.entries(groups).map(([groupName, groupCourses]) => (
          <div key={groupName}>
            <h3 className="text-xs font-medium text-text-muted uppercase tracking-wider mb-2">
              {groupName}
            </h3>
            <div className="space-y-1.5">
              {groupCourses.map((course) => {
                const inPlan = planCourseIds.has(course.id);
                const eligibleGrades = getEligibleGrades(course);
                const isShowingPicker = addingCourse === course.id;

                const tabColor = TABS.find((t) => t.id === activeTab)?.color ?? '#666';

                return (
                  <div
                    key={course.id}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg border transition-colors ${
                      inPlan ? 'border-transparent' : 'border-border hover:border-border/80'
                    }`}
                    style={inPlan ? { backgroundColor: tabColor, borderColor: tabColor } : undefined}
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className={`text-sm ${inPlan ? 'text-white' : 'text-text'}`}>{course.name}</span>
                        <LevelBadge level={course.level} deptColor={tabColor} inverted={inPlan} />
                      </div>
                      <div className={`text-[11px] mt-0.5 ${inPlan ? 'text-white/70' : 'text-text-muted'}`}>
                        {course.credits} cr &middot; {course.duration}
                        {course.grades.length < 4 && ` · Grades ${course.grades.join(', ')}`}
                      </div>
                    </div>

                    {inPlan ? (
                      <span className="text-[11px] text-white/80 font-medium">In plan</span>
                    ) : isShowingPicker ? (
                      <div className="flex items-center gap-1.5">
                        {eligibleGrades.map((g) => (
                          <button
                            key={g}
                            onClick={() => handleAdd(course.id, g)}
                            className="text-[11px] font-medium px-2 py-1 rounded bg-mountie-blue text-white hover:bg-mountie-dark transition-colors"
                          >
                            {g}th
                          </button>
                        ))}
                        <button
                          onClick={() => setAddingCourse(null)}
                          className="text-[11px] text-text-muted ml-1"
                        >
                          Cancel
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => setAddingCourse(course.id)}
                        disabled={eligibleGrades.length === 0}
                        className={`text-[11px] font-medium px-2.5 py-1 rounded transition-colors ${
                          eligibleGrades.length > 0
                            ? 'bg-mountie-blue/10 text-mountie-blue hover:bg-mountie-blue/20'
                            : 'bg-border/30 text-text-muted/40 cursor-not-allowed'
                        }`}
                      >
                        Add
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
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
