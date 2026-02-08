"use client";

import { useEffect } from 'react';
import { CoursePlan } from '@/lib/journey/plan-state';
import { WizardState } from '@/data/wizard/types';
import { HEALTH_AUTO_COURSES } from '@/data/wizard/health-auto';
import { getCourseById } from '@/data/courses';
import { DEPARTMENT_META } from '@/data/types';
import { LevelBadge } from '@/components/shared/Badge';
import { WizardHeader } from '../WizardHeader';
import { WizardNavButtons } from '../WizardNavButtons';

const GRADE_LABELS: Record<number, string> = {
  9: 'Freshman', 10: 'Sophomore', 11: 'Junior', 12: 'Senior',
};

interface AutoFillStepProps {
  stepIndex: number;
  wizard: WizardState;
  plan: CoursePlan;
  addCourse: (grade: number, courseId: string) => void;
  goNext: () => void;
  goBack: () => void;
}

export function AutoFillStep({
  stepIndex,
  wizard,
  plan,
  addCourse,
  goNext,
  goBack,
}: AutoFillStepProps) {
  const color = DEPARTMENT_META['health-pe'].color;

  // Auto-add health courses on mount
  useEffect(() => {
    for (const [gradeStr, courseId] of Object.entries(HEALTH_AUTO_COURSES)) {
      const grade = Number(gradeStr);
      if (!(plan[grade] ?? []).includes(courseId)) {
        addCourse(grade, courseId);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const entries = Object.entries(HEALTH_AUTO_COURSES).map(([gradeStr, courseId]) => {
    const grade = Number(gradeStr);
    const course = getCourseById(courseId);
    const inPlan = (plan[grade] ?? []).includes(courseId);
    return { grade, courseId, course, inPlan };
  });

  return (
    <div>
      <WizardHeader stepIndex={stepIndex} />

      <p className="text-sm text-text-muted mb-5">
        These required Health & PE courses have been added to your plan. Every student takes them.
      </p>

      <div className="space-y-2">
        {entries.map(({ grade, course, inPlan }) => (
          <div
            key={grade}
            className="flex items-center gap-3 p-3 rounded-lg border border-transparent transition-colors"
            style={inPlan ? { backgroundColor: color, borderColor: color } : { borderColor: 'var(--border)' }}
          >
            {/* Check indicator */}
            <div
              className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
                inPlan ? 'bg-white/20' : 'bg-border/60'
              }`}
            >
              {inPlan && (
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M2 5l2.5 2.5L8 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </div>

            <div className="flex-1 min-w-0">
              <div className={`text-sm font-medium ${inPlan ? 'text-white' : 'text-text'}`}>{course?.name ?? 'Unknown'}</div>
              <div className={`text-[11px] ${inPlan ? 'text-white/70' : 'text-text-muted'}`}>
                {GRADE_LABELS[grade]} ({grade}th) &middot; {course?.credits} credits
              </div>
            </div>

            {course && (
              <LevelBadge level={course.level} deptColor={color} inverted={inPlan} />
            )}
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
