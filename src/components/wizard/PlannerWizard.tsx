"use client";

import { useState, useCallback } from 'react';
import { usePlan } from '@/lib/journey/use-plan';
import { allCourses } from '@/data/courses';
import { WIZARD_STEPS } from '@/data/wizard/steps';
import { WizardState, INITIAL_WIZARD_STATE } from '@/data/wizard/types';
import { WizardLayout } from './WizardLayout';
import { WizardContent } from './WizardContent';

export function PlannerWizard() {
  const { plan, loaded, addCourse, removeCourse, clearAll, batchUpdate, shareUrl } = usePlan();
  const [wizard, setWizard] = useState<WizardState>(INITIAL_WIZARD_STATE);

  const goToStep = useCallback((step: number) => {
    setWizard((prev) => ({ ...prev, currentStep: Math.max(0, Math.min(step, WIZARD_STEPS.length - 1)) }));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const goNext = useCallback(() => {
    setWizard((prev) => ({
      ...prev,
      currentStep: Math.min(prev.currentStep + 1, WIZARD_STEPS.length - 1),
    }));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const goBack = useCallback(() => {
    setWizard((prev) => ({
      ...prev,
      currentStep: Math.max(prev.currentStep - 1, 0),
    }));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Clear all courses for a department from the plan (via batch)
  const clearDepartmentCourses = useCallback(
    (department: string) => {
      const deptCourseIds = new Set(
        allCourses.filter((c) => c.department === department).map((c) => c.id)
      );
      const removes: { grade: number; courseId: string }[] = [];
      for (const grade of [9, 10, 11, 12]) {
        for (const courseId of plan[grade] ?? []) {
          if (deptCourseIds.has(courseId)) {
            removes.push({ grade, courseId });
          }
        }
      }
      if (removes.length > 0) {
        batchUpdate(removes, []);
      }
    },
    [plan, batchUpdate]
  );

  // Apply a pathway: atomically remove old dept courses + add new ones
  const applyPathway = useCallback(
    (department: string, pathwayId: string, courses: Record<number, string>) => {
      const deptCourseIds = new Set(
        allCourses.filter((c) => c.department === department).map((c) => c.id)
      );
      const removes: { grade: number; courseId: string }[] = [];
      for (const grade of [9, 10, 11, 12]) {
        for (const courseId of plan[grade] ?? []) {
          if (deptCourseIds.has(courseId)) {
            removes.push({ grade, courseId });
          }
        }
      }
      const adds = Object.entries(courses).map(([gradeStr, courseId]) => ({
        grade: Number(gradeStr),
        courseId,
      }));
      batchUpdate(removes, adds);
      setWizard((prev) => {
        // Clear stale gradeChoices for this department so PathwayCard
        // previews show the new pathway's courses, not leftovers.
        const newGradeChoices = { ...prev.gradeChoices };
        for (const key of Object.keys(newGradeChoices)) {
          if (key.startsWith(`${department}-`)) {
            delete newGradeChoices[key];
          }
        }
        return {
          ...prev,
          selections: { ...prev.selections, [department]: pathwayId },
          gradeChoices: newGradeChoices,
        };
      });
    },
    [plan, batchUpdate]
  );

  // Swap a single grade's course within a department
  const setGradeChoice = useCallback(
    (key: string, courseId: string, grade: number, department: string) => {
      const deptCourseIds = new Set(
        allCourses.filter((c) => c.department === department && c.grades.includes(grade)).map((c) => c.id)
      );
      const removes = (plan[grade] ?? [])
        .filter((id) => deptCourseIds.has(id))
        .map((id) => ({ grade, courseId: id }));
      batchUpdate(removes, [{ grade, courseId }]);
      setWizard((prev) => ({
        ...prev,
        gradeChoices: { ...prev.gradeChoices, [key]: courseId },
      }));
    },
    [plan, batchUpdate]
  );

  const setMathEntry = useCallback((entryId: string) => {
    setWizard((prev) => ({
      ...prev,
      selections: { ...prev.selections, mathEntry: entryId || undefined },
    }));
  }, []);

  const setLanguageEntry = useCallback((entryId: string) => {
    setWizard((prev) => ({
      ...prev,
      selections: { ...prev.selections, languageEntry: entryId || undefined },
    }));
  }, []);

  const handleStartOver = useCallback(() => {
    clearAll();
    setWizard(INITIAL_WIZARD_STATE);
  }, [clearAll]);

  // Determine which steps have been "completed"
  const completedSteps = new Set<number>();
  if (wizard.selections.english) completedSteps.add(0);
  if (wizard.selections.math) completedSteps.add(1);
  if (wizard.selections.science) completedSteps.add(2);
  if (wizard.selections['social-studies']) completedSteps.add(3);
  if (wizard.selections['world-languages']) completedSteps.add(4);
  const healthCourses = ['health-9', 'drivers-ed-10', 'health-11', 'health-12'];
  if (healthCourses.some((id) =>
    [9, 10, 11, 12].some((g) => (plan[g] ?? []).includes(id))
  )) {
    completedSteps.add(5);
  }

  if (!loaded) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="w-5 h-5 border-2 border-mountie-blue/30 border-t-mountie-blue rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <WizardLayout
      currentStep={wizard.currentStep}
      completedSteps={completedSteps}
      plan={plan}
      onStepClick={goToStep}
      onStartOver={handleStartOver}
    >
      <WizardContent
        wizard={wizard}
        plan={plan}
        addCourse={addCourse}
        removeCourse={removeCourse}
        clearAll={clearAll}
        shareUrl={shareUrl}
        applyPathway={applyPathway}
        setGradeChoice={setGradeChoice}
        setMathEntry={setMathEntry}
        setLanguageEntry={setLanguageEntry}
        clearDepartmentCourses={clearDepartmentCourses}
        goNext={goNext}
        goBack={goBack}
        goToStep={goToStep}
        completedSteps={completedSteps}
      />
    </WizardLayout>
  );
}
