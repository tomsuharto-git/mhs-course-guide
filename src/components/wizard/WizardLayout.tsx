"use client";

import { ReactNode } from 'react';
import { CoursePlan } from '@/lib/journey/plan-state';
import { WizardSidebar } from './WizardSidebar';
import { WIZARD_STEPS } from '@/data/wizard/steps';

interface WizardLayoutProps {
  currentStep: number;
  completedSteps: Set<number>;
  plan: CoursePlan;
  onStepClick: (step: number) => void;
  onStartOver: () => void;
  children: ReactNode;
}

export function WizardLayout({
  currentStep,
  completedSteps,
  plan,
  onStepClick,
  onStartOver,
  children,
}: WizardLayoutProps) {
  const stepDef = WIZARD_STEPS[currentStep];

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      {/* Mobile step indicator */}
      <div className="lg:hidden">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs font-medium text-text-muted uppercase tracking-wider">
            Step {currentStep + 1} of {WIZARD_STEPS.length}
          </span>
        </div>
        <div className="flex items-center gap-3 mb-4">
          <h2 className="text-lg font-[family-name:var(--font-heading)] text-text tracking-wide">
            {stepDef.label}
          </h2>
          <div className="flex gap-1.5 ml-auto">
            {WIZARD_STEPS.map((_, i) => (
              <button
                key={i}
                onClick={() => onStepClick(i)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === currentStep
                    ? 'bg-mountie-blue'
                    : completedSteps.has(i)
                    ? 'bg-emerald-400'
                    : 'bg-border'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden lg:block w-[220px] shrink-0">
        <WizardSidebar
          currentStep={currentStep}
          completedSteps={completedSteps}
          plan={plan}
          onStepClick={onStepClick}
          onStartOver={onStartOver}
        />
      </div>

      {/* Content area */}
      <div className="flex-1 min-w-0">
        {children}
      </div>
    </div>
  );
}
