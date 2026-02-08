"use client";

import { CoursePlan } from '@/lib/journey/plan-state';
import { WizardState } from '@/data/wizard/types';
import { WIZARD_STEPS } from '@/data/wizard/steps';
import { PATHWAY_MAP } from '@/data/wizard/pathways';
import { Department } from '@/data/types';
import { WizardHeader } from '../WizardHeader';
import { WizardNavButtons } from '../WizardNavButtons';
import { PathwayCard } from './PathwayCard';

interface PathwaySelectStepProps {
  stepIndex: number;
  wizard: WizardState;
  plan: CoursePlan;
  applyPathway: (department: string, pathwayId: string, courses: Record<number, string>) => void;
  setGradeChoice: (key: string, courseId: string, grade: number, department: string) => void;
  goNext: () => void;
  goBack: () => void;
}

export function PathwaySelectStep({
  stepIndex,
  wizard,
  plan,
  applyPathway,
  setGradeChoice,
  goNext,
  goBack,
}: PathwaySelectStepProps) {
  const step = WIZARD_STEPS[stepIndex];
  const department = step.department as Department;
  const pathways = PATHWAY_MAP[step.id] ?? [];
  const selectedId = wizard.selections[department as keyof typeof wizard.selections];

  const handleSelect = (pathwayId: string) => {
    const pathway = pathways.find((p) => p.id === pathwayId);
    if (!pathway) return;

    // Build course map, respecting existing grade choices
    const courses: Record<number, string> = {};
    for (const grade of [9, 10, 11, 12]) {
      const choiceKey = `${department}-${grade}`;
      const existingChoice = wizard.gradeChoices[choiceKey];
      const choices = pathway.choices?.[grade];

      if (existingChoice && choices?.includes(existingChoice)) {
        courses[grade] = existingChoice;
      } else {
        courses[grade] = pathway.courses[grade];
      }
    }

    applyPathway(department, pathwayId, courses);
  };

  const handleGradeChoice = (key: string, courseId: string, grade: number) => {
    setGradeChoice(key, courseId, grade, department);
  };

  return (
    <div>
      <WizardHeader stepIndex={stepIndex} />

      <div className="space-y-3">
        {pathways.map((pathway) => (
          <PathwayCard
            key={pathway.id}
            pathway={pathway}
            selected={selectedId === pathway.id}
            department={department}
            onSelect={() => handleSelect(pathway.id)}
            gradeChoices={wizard.gradeChoices}
            onGradeChoice={handleGradeChoice}
          />
        ))}
      </div>

      <WizardNavButtons
        currentStep={stepIndex}
        onNext={goNext}
        onBack={goBack}
        canAdvance={!!selectedId}
      />
    </div>
  );
}
