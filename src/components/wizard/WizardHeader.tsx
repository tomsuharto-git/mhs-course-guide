import { WIZARD_STEPS } from '@/data/wizard/steps';
import { DEPARTMENT_META } from '@/data/types';

interface WizardHeaderProps {
  stepIndex: number;
}

export function WizardHeader({ stepIndex }: WizardHeaderProps) {
  const step = WIZARD_STEPS[stepIndex];
  const dept = step.department !== 'review' ? DEPARTMENT_META[step.department] : null;
  const color = dept?.color ?? 'var(--color-mountie-blue)';

  return (
    <div className="mb-6">
      {/* Department color bar */}
      <div className="h-1 w-12 rounded-full mb-3" style={{ backgroundColor: color }} />
      <h2 className="text-2xl font-[family-name:var(--font-heading)] text-text tracking-wide">
        {step.label}
      </h2>
      <p className="text-sm text-text-muted mt-1">{step.subtitle}</p>
    </div>
  );
}
