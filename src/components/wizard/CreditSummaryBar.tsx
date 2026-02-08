"use client";

import { CoursePlan } from '@/lib/journey/plan-state';
import { totalCredits, creditsForGrade } from '@/lib/journey/credit-calculator';
import { allCourses } from '@/data/courses';
import { totalCreditsRequired } from '@/data/graduation-requirements';

interface CreditSummaryBarProps {
  plan: CoursePlan;
}

export function CreditSummaryBar({ plan }: CreditSummaryBarProps) {
  const total = totalCredits(plan, allCourses);
  if (total === 0) return null;

  const grades = [9, 10, 11, 12] as const;

  return (
    <div className="mt-6 p-3 bg-warm-gray rounded-lg flex items-center gap-4 text-xs">
      <div className="flex items-center gap-3 flex-1">
        {grades.map((g) => {
          const cr = creditsForGrade(plan, g, allCourses);
          return cr > 0 ? (
            <div key={g} className="flex items-center gap-1 text-text-muted">
              <span className="font-medium text-text">{g}th</span>
              <span className="tabular-nums">{cr} cr</span>
            </div>
          ) : null;
        })}
      </div>
      <div className="text-text font-medium tabular-nums">
        {total} / {totalCreditsRequired} total
      </div>
    </div>
  );
}
