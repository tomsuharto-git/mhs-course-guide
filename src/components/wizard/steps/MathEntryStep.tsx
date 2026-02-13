"use client";

import { CoursePlan } from '@/lib/journey/plan-state';
import { WizardState } from '@/data/wizard/types';
import { mathEntryPoints } from '@/data/wizard/math-pathways';
import { DEPARTMENT_META } from '@/data/types';
import { WizardHeader } from '../WizardHeader';
import { WizardNavButtons } from '../WizardNavButtons';
import { PathwayCard } from './PathwayCard';

interface MathEntryStepProps {
  stepIndex: number;
  wizard: WizardState;
  plan: CoursePlan;
  applyPathway: (department: string, pathwayId: string, courses: Record<number, string>) => void;
  setGradeChoice: (key: string, courseId: string, grade: number, department: string) => void;
  setMathEntry: (entryId: string) => void;
  goNext: () => void;
  goBack: () => void;
}

export function MathEntryStep({
  stepIndex,
  wizard,
  plan,
  applyPathway,
  setGradeChoice,
  setMathEntry,
  goNext,
  goBack,
}: MathEntryStepProps) {
  const color = DEPARTMENT_META.math.color;
  const selectedEntry = wizard.selections.mathEntry;
  const selectedPathway = wizard.selections.math;
  const entryPoint = mathEntryPoints.find((e) => e.id === selectedEntry);

  const handleEntrySelect = (entryId: string) => {
    setMathEntry(entryId);
    // If entry only has one pathway, auto-select it
    const entry = mathEntryPoints.find((e) => e.id === entryId);
    if (entry?.pathways.length === 1) {
      const pathway = entry.pathways[0];
      applyPathway('math', pathway.id, { ...pathway.courses });
    }
  };

  const handlePathwaySelect = (pathwayId: string) => {
    if (!entryPoint) return;
    const pathway = entryPoint.pathways.find((p) => p.id === pathwayId);
    if (!pathway) return;

    const courses: Record<number, string> = {};
    for (const grade of [9, 10, 11, 12]) {
      const choiceKey = `math-${grade}`;
      const existing = wizard.gradeChoices[choiceKey];
      const choices = pathway.choices?.[grade];
      if (existing && choices?.includes(existing)) {
        courses[grade] = existing;
      } else {
        courses[grade] = pathway.courses[grade];
      }
    }
    applyPathway('math', pathwayId, courses);
  };

  const handleGradeChoice = (key: string, courseId: string, grade: number) => {
    setGradeChoice(key, courseId, grade, 'math');
  };

  // Phase 1: Entry point selection
  if (!selectedEntry) {
    return (
      <div>
        <WizardHeader stepIndex={stepIndex} />

        <p className="text-sm text-text-muted mb-4">
          What was your middle school math level?
        </p>

        <div className="space-y-2">
          {mathEntryPoints.map((entry) => (
            <button
              key={entry.id}
              onClick={() => handleEntrySelect(entry.id)}
              className="w-full text-left rounded-xl border-2 border-border hover:border-border/80 hover:shadow-sm transition-all p-4"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-1 h-8 rounded-full shrink-0" style={{ backgroundColor: color }} />
                <div>
                  <div className="text-[15px] font-semibold text-text">{entry.label}</div>
                  <div className="text-xs text-text-muted mt-0.5">{entry.description}</div>
                </div>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-auto shrink-0 text-text-muted">
                  <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </button>
          ))}
        </div>

        <WizardNavButtons
          currentStep={stepIndex}
          onNext={goNext}
          onBack={goBack}
          canAdvance={false}
          nextLabel="Select an entry point above"
        />
      </div>
    );
  }

  // Phase 2: Pathway selection within entry point
  return (
    <div>
      <WizardHeader stepIndex={stepIndex} />

      {/* Back to entry selection */}
      <button
        onClick={() => setMathEntry('')}
        className="flex items-center gap-1.5 text-sm text-text-muted hover:text-text transition-colors mb-4"
      >
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
          <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Change: {entryPoint?.label}
      </button>

      <div className="space-y-3">
        {entryPoint?.pathways.map((pathway) => (
          <PathwayCard
            key={pathway.id}
            pathway={pathway}
            selected={selectedPathway === pathway.id}
            department="math"
            onSelect={() => handlePathwaySelect(pathway.id)}
            gradeChoices={wizard.gradeChoices}
            onGradeChoice={handleGradeChoice}
          />
        ))}
      </div>

      <WizardNavButtons
        currentStep={stepIndex}
        onNext={goNext}
        onBack={goBack}
        canAdvance={!!selectedPathway}
      />
    </div>
  );
}
