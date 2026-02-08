"use client";

import { CoursePlan } from '@/lib/journey/plan-state';
import { WizardState } from '@/data/wizard/types';
import { languageEntryPoints } from '@/data/wizard/language-pathways';
import { DEPARTMENT_META } from '@/data/types';
import { WizardHeader } from '../WizardHeader';
import { WizardNavButtons } from '../WizardNavButtons';
import { PathwayCard } from './PathwayCard';

interface LanguageSelectStepProps {
  stepIndex: number;
  wizard: WizardState;
  plan: CoursePlan;
  applyPathway: (department: string, pathwayId: string, courses: Record<number, string>) => void;
  setGradeChoice: (key: string, courseId: string, grade: number, department: string) => void;
  setLanguageEntry: (entryId: string) => void;
  clearDepartmentCourses: (department: string) => void;
  goNext: () => void;
  goBack: () => void;
}

export function LanguageSelectStep({
  stepIndex,
  wizard,
  plan,
  applyPathway,
  setGradeChoice,
  setLanguageEntry,
  clearDepartmentCourses,
  goNext,
  goBack,
}: LanguageSelectStepProps) {
  const color = DEPARTMENT_META['world-languages'].color;
  const selectedEntry = wizard.selections.languageEntry;
  const selectedPathway = wizard.selections['world-languages'];
  const entryPoint = languageEntryPoints.find((e) => e.id === selectedEntry);

  const handleEntrySelect = (entryId: string) => {
    setLanguageEntry(entryId);
    // If entry only has one pathway, auto-select it
    const entry = languageEntryPoints.find((e) => e.id === entryId);
    if (entry?.pathways.length === 1) {
      const pathway = entry.pathways[0];
      applyPathway('world-languages', pathway.id, { ...pathway.courses });
    }
  };

  const handlePathwaySelect = (pathwayId: string) => {
    if (!entryPoint) return;
    const pathway = entryPoint.pathways.find((p) => p.id === pathwayId);
    if (!pathway) return;

    const courses: Record<number, string> = {};
    for (const grade of [9, 10, 11, 12]) {
      if (!pathway.courses[grade]) continue;
      const choiceKey = `world-languages-${grade}`;
      const existing = wizard.gradeChoices[choiceKey];
      const choices = pathway.choices?.[grade];
      if (existing && choices?.includes(existing)) {
        courses[grade] = existing;
      } else {
        courses[grade] = pathway.courses[grade];
      }
    }
    applyPathway('world-languages', pathwayId, courses);
  };

  const handleGradeChoice = (key: string, courseId: string, grade: number) => {
    setGradeChoice(key, courseId, grade, 'world-languages');
  };

  // Phase 1: Language selection
  if (!selectedEntry) {
    return (
      <div>
        <WizardHeader stepIndex={stepIndex} />
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {languageEntryPoints.map((lang) => (
            <button
              key={lang.id}
              onClick={() => handleEntrySelect(lang.id)}
              className="text-left rounded-xl border-2 border-border hover:border-border/80 hover:shadow-sm transition-all p-4"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-1 h-8 rounded-full shrink-0" style={{ backgroundColor: color }} />
                <div>
                  <div className="text-[15px] font-semibold text-text">{lang.label}</div>
                  <div className="text-[11px] text-text-muted mt-0.5">
                    {lang.pathways.length} tracks available
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        <WizardNavButtons
          currentStep={stepIndex}
          onNext={goNext}
          onBack={goBack}
          canAdvance={false}
          nextLabel="Select a language above"
        />
      </div>
    );
  }

  // Phase 2: Pathway selection within language
  return (
    <div>
      <WizardHeader stepIndex={stepIndex} />

      <button
        onClick={() => {
          setLanguageEntry('');
          clearDepartmentCourses('world-languages');
        }}
        className="flex items-center gap-1.5 text-sm text-text-muted hover:text-text transition-colors mb-4"
      >
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
          <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Change language: {entryPoint?.label}
      </button>

      <div className="space-y-3">
        {entryPoint?.pathways.map((pathway) => (
          <PathwayCard
            key={pathway.id}
            pathway={pathway}
            selected={selectedPathway === pathway.id}
            department="world-languages"
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
