"use client";

import { useState, useCallback } from 'react';
import { CoursePlan } from '@/lib/journey/plan-state';
import { allCourses } from '@/data/courses';
import { getDependentCourses } from '@/lib/journey/prerequisite-engine';
import { calculateProgress } from '@/lib/journey/credit-calculator';
import { graduationRequirements } from '@/data/graduation-requirements';
import { WIZARD_STEPS } from '@/data/wizard/steps';
import { YearColumn } from '@/components/journey/YearColumn';
import { CoursePicker } from '@/components/journey/CoursePicker';
import { GraduationProgress } from '@/components/journey/GraduationProgress';
import { PlanActions } from '@/components/journey/PlanActions';

const GRADES = [9, 10, 11, 12] as const;

interface ReviewStepProps {
  plan: CoursePlan;
  addCourse: (grade: number, courseId: string) => void;
  removeCourse: (grade: number, courseId: string) => void;
  clearAll: () => void;
  shareUrl: () => string;
  goToStep: (step: number) => void;
  completedSteps: Set<number>;
}

export function ReviewStep({
  plan,
  addCourse,
  removeCourse,
  clearAll,
  shareUrl,
  goToStep,
  completedSteps,
}: ReviewStepProps) {
  const [pickerGrade, setPickerGrade] = useState<number | null>(null);
  const isEmpty = GRADES.every((g) => (plan[g]?.length ?? 0) === 0);

  const progress = calculateProgress(plan, allCourses, graduationRequirements);
  const unmet = progress.filter((p) => !p.met);

  const handleRemove = useCallback(
    (grade: number, courseId: string) => {
      const dependents = getDependentCourses(plan, courseId, grade, allCourses);
      if (dependents.length > 0) {
        const names = dependents.map((c) => c.name).join(', ');
        if (!window.confirm(`Removing this course may affect prerequisites for: ${names}. Continue?`)) {
          return;
        }
      }
      removeCourse(grade, courseId);
    },
    [plan, removeCourse]
  );

  return (
    <div>
      {/* Header */}
      <div className="mb-6">
        <div className="h-1 w-12 rounded-full mb-3 bg-mountie-blue" />
        <h2 className="text-2xl font-[family-name:var(--font-heading)] text-text tracking-wide">
          Review Your Plan
        </h2>
        <p className="text-sm text-text-muted mt-1">
          Your complete 4-year schedule. Make any final adjustments.
        </p>
      </div>

      {/* Unmet requirements warning */}
      {unmet.length > 0 && !isEmpty && (
        <div className="mb-5 p-3 bg-amber-50 border border-amber-200 rounded-lg">
          <div className="text-sm font-medium text-amber-800 mb-1">
            {unmet.length} graduation requirement{unmet.length !== 1 ? 's' : ''} not yet met
          </div>
          <div className="text-xs text-amber-700 space-y-0.5">
            {unmet.map((req) => (
              <div key={req.area}>
                {req.area}: {req.earned}/{req.required} credits
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Edit department shortcuts */}
      <div className="flex flex-wrap gap-2 mb-5">
        {WIZARD_STEPS.slice(0, -1).map((step, i) => (
          <button
            key={step.id}
            onClick={() => goToStep(i)}
            className="text-[11px] px-2.5 py-1 rounded-full border border-border text-text-muted hover:border-mountie-blue hover:text-mountie-blue transition-colors"
          >
            Edit {step.label}
          </button>
        ))}
      </div>

      {/* 4-year grid (reuses existing YearColumn) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {GRADES.map((grade) => (
          <YearColumn
            key={grade}
            grade={grade}
            plan={plan}
            onAdd={() => setPickerGrade(grade)}
            onRemove={(courseId) => handleRemove(grade, courseId)}
          />
        ))}
      </div>

      {/* Actions (desktop only in review — sidebar has them on other steps) */}
      <div className="lg:hidden">
        <GraduationProgress plan={plan} />
        <div className="mt-4">
          <PlanActions
            onShareUrl={shareUrl}
            onClearAll={clearAll}
            isEmpty={isEmpty}
          />
        </div>
      </div>

      <div className="hidden lg:block">
        <PlanActions
          onShareUrl={shareUrl}
          onClearAll={clearAll}
          isEmpty={isEmpty}
        />
      </div>

      {/* Course picker modal */}
      {pickerGrade !== null && (
        <CoursePicker
          initialGrade={pickerGrade}
          plan={plan}
          onAdd={addCourse}
          onClose={() => setPickerGrade(null)}
        />
      )}
    </div>
  );
}
