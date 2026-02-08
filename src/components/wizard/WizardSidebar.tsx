"use client";

import { CoursePlan } from '@/lib/journey/plan-state';
import { WIZARD_STEPS } from '@/data/wizard/steps';
import { DEPARTMENT_META } from '@/data/types';
import { GraduationProgress } from '@/components/journey/GraduationProgress';

interface WizardSidebarProps {
  currentStep: number;
  completedSteps: Set<number>;
  plan: CoursePlan;
  onStepClick: (step: number) => void;
  onStartOver: () => void;
}

export function WizardSidebar({
  currentStep,
  completedSteps,
  plan,
  onStepClick,
  onStartOver,
}: WizardSidebarProps) {
  return (
    <div className="sticky top-20 self-start space-y-4">
      {/* Step navigation */}
      <nav className="bg-white rounded-xl border border-border shadow-sm p-3">
        <div className="space-y-0.5">
          {WIZARD_STEPS.map((step, i) => {
            const isCurrent = i === currentStep;
            const isCompleted = completedSteps.has(i);
            const dept = step.department !== 'review' ? DEPARTMENT_META[step.department] : null;
            const color = dept?.color ?? 'var(--color-mountie-blue)';

            return (
              <button
                key={step.id}
                onClick={() => onStepClick(i)}
                className={`w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-left transition-colors ${
                  isCurrent
                    ? 'bg-warm-gray'
                    : 'hover:bg-warm-gray/50'
                }`}
              >
                {/* Step indicator */}
                <div
                  className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-[10px] font-bold transition-colors ${
                    isCompleted
                      ? 'bg-emerald-500 text-white'
                      : isCurrent
                      ? 'text-white'
                      : 'bg-border/60 text-text-muted'
                  }`}
                  style={isCurrent && !isCompleted ? { backgroundColor: color } : undefined}
                >
                  {isCompleted ? (
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2.5 2.5L8 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ) : (
                    i + 1
                  )}
                </div>

                {/* Label */}
                <span
                  className={`text-[13px] leading-tight ${
                    isCurrent ? 'font-semibold text-text' : 'text-text-muted'
                  }`}
                >
                  {step.label}
                </span>

                {/* Current indicator */}
                {isCurrent && (
                  <div className="ml-auto w-1 h-4 rounded-full" style={{ backgroundColor: color }} />
                )}
              </button>
            );
          })}
        </div>
      </nav>

      {/* Graduation progress */}
      <GraduationProgress plan={plan} />

      {/* Start over */}
      <button
        onClick={onStartOver}
        className="w-full text-xs text-text-muted hover:text-red-600 transition-colors py-1"
      >
        Start Over
      </button>
    </div>
  );
}
