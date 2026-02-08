"use client";

import { CoursePlan } from '@/lib/journey/plan-state';
import { WizardState } from '@/data/wizard/types';
import { WIZARD_STEPS } from '@/data/wizard/steps';
import { CreditSummaryBar } from './CreditSummaryBar';
import { PathwaySelectStep } from './steps/PathwaySelectStep';
import { MathEntryStep } from './steps/MathEntryStep';
import { LanguageSelectStep } from './steps/LanguageSelectStep';
import { AutoFillStep } from './steps/AutoFillStep';
import { ElectiveBrowseStep } from './steps/ElectiveBrowseStep';
import { ReviewStep } from './steps/ReviewStep';

interface WizardContentProps {
  wizard: WizardState;
  plan: CoursePlan;
  addCourse: (grade: number, courseId: string) => void;
  removeCourse: (grade: number, courseId: string) => void;
  clearAll: () => void;
  shareUrl: () => string;
  applyPathway: (department: string, pathwayId: string, courses: Record<number, string>) => void;
  setGradeChoice: (key: string, courseId: string, grade: number, department: string) => void;
  setMathEntry: (entryId: string) => void;
  setLanguageEntry: (entryId: string) => void;
  clearDepartmentCourses: (department: string) => void;
  goNext: () => void;
  goBack: () => void;
  goToStep: (step: number) => void;
  completedSteps: Set<number>;
}

export function WizardContent({
  wizard,
  plan,
  addCourse,
  removeCourse,
  clearAll,
  shareUrl,
  applyPathway,
  setGradeChoice,
  setMathEntry,
  setLanguageEntry,
  clearDepartmentCourses,
  goNext,
  goBack,
  goToStep,
  completedSteps,
}: WizardContentProps) {
  const step = WIZARD_STEPS[wizard.currentStep];

  const sharedProps = {
    stepIndex: wizard.currentStep,
    wizard,
    plan,
    goNext,
    goBack,
  };

  switch (step.type) {
    case 'pathway-select':
      return (
        <>
          <PathwaySelectStep
            {...sharedProps}
            applyPathway={applyPathway}
            setGradeChoice={setGradeChoice}
          />
          <CreditSummaryBar plan={plan} />
        </>
      );

    case 'math-entry':
      return (
        <>
          <MathEntryStep
            {...sharedProps}
            applyPathway={applyPathway}
            setGradeChoice={setGradeChoice}
            setMathEntry={setMathEntry}
          />
          <CreditSummaryBar plan={plan} />
        </>
      );

    case 'language-select':
      return (
        <>
          <LanguageSelectStep
            {...sharedProps}
            applyPathway={applyPathway}
            setGradeChoice={setGradeChoice}
            setLanguageEntry={setLanguageEntry}
            clearDepartmentCourses={clearDepartmentCourses}
          />
          <CreditSummaryBar plan={plan} />
        </>
      );

    case 'auto-fill':
      return (
        <>
          <AutoFillStep
            {...sharedProps}
            addCourse={addCourse}
          />
          <CreditSummaryBar plan={plan} />
        </>
      );

    case 'elective-browse':
      return (
        <>
          <ElectiveBrowseStep
            {...sharedProps}
            addCourse={addCourse}
            removeCourse={removeCourse}
          />
          <CreditSummaryBar plan={plan} />
        </>
      );

    case 'review':
      return (
        <ReviewStep
          plan={plan}
          addCourse={addCourse}
          removeCourse={removeCourse}
          clearAll={clearAll}
          shareUrl={shareUrl}
          goToStep={goToStep}
          completedSteps={completedSteps}
        />
      );

    default:
      return null;
  }
}
