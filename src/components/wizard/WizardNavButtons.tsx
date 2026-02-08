import { WIZARD_STEPS } from '@/data/wizard/steps';
import { DEPARTMENT_META, Department } from '@/data/types';

interface WizardNavButtonsProps {
  currentStep: number;
  onNext: () => void;
  onBack: () => void;
  canAdvance?: boolean;
  nextLabel?: string;
}

export function WizardNavButtons({
  currentStep,
  onNext,
  onBack,
  canAdvance = true,
  nextLabel,
}: WizardNavButtonsProps) {
  const isFirst = currentStep === 0;
  const isLast = currentStep === WIZARD_STEPS.length - 1;
  const nextStep = WIZARD_STEPS[currentStep + 1];
  const nextColor = nextStep
    ? DEPARTMENT_META[nextStep.department as Department]?.color ?? '#374151'
    : '#374151';

  const defaultNextLabel = isLast
    ? 'Done'
    : `Next: ${nextStep?.label}`;

  return (
    <div className="flex items-center justify-between mt-8 pt-6 border-t border-border/60">
      {!isFirst ? (
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 text-sm text-text-muted hover:text-text transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back
        </button>
      ) : (
        <div />
      )}

      {!isLast && (
        <button
          onClick={onNext}
          disabled={!canAdvance}
          className={`flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-lg transition-all ${
            canAdvance
              ? 'text-white hover:brightness-110'
              : 'bg-border/40 text-text-muted cursor-not-allowed'
          }`}
          style={canAdvance && nextColor ? { backgroundColor: nextColor } : undefined}
        >
          {nextLabel ?? defaultNextLabel}
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      )}
    </div>
  );
}
