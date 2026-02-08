"use client";

import { CoursePlan } from "@/lib/journey/plan-state";
import { calculateProgress, totalCredits } from "@/lib/journey/credit-calculator";
import { graduationRequirements, totalCreditsRequired } from "@/data/graduation-requirements";
import { allCourses } from "@/data/courses";

export function GraduationProgress({ plan }: { plan: CoursePlan }) {
  const progress = calculateProgress(plan, allCourses, graduationRequirements);
  const total = totalCredits(plan, allCourses);
  const totalPct = Math.min((total / totalCreditsRequired) * 100, 100);
  const metCount = progress.filter((p) => p.met).length;
  const isEmpty = total === 0;

  // Only show requirement areas that have earned credits (or all if 3+ areas have progress)
  const activeAreas = progress.filter((p) => p.earned > 0);
  const showAllAreas = activeAreas.length >= 3;
  const areasToShow = showAllAreas ? progress : activeAreas;

  return (
    <div className="bg-white rounded-xl border border-border shadow-sm p-4">
      <h3 className="text-sm font-[family-name:var(--font-heading)] text-text tracking-wider uppercase mb-4">
        Graduation Progress
      </h3>

      {/* Total credits */}
      <div className={isEmpty ? "" : "mb-5"}>
        <div className="flex items-baseline justify-between mb-1.5">
          <span className="text-2xl font-[family-name:var(--font-heading)] text-text tracking-wide">
            {total}
          </span>
          <span className="text-xs text-text-muted">/ {totalCreditsRequired} credits</span>
        </div>
        <div className="h-2.5 bg-warm-gray rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-500 ease-out"
            style={{
              width: `${totalPct}%`,
              backgroundColor: total >= totalCreditsRequired ? '#059669' : 'var(--color-mountie-blue)',
            }}
          />
        </div>
        {total >= totalCreditsRequired && (
          <p className="text-[11px] text-emerald-600 font-medium mt-1">
            Total credit requirement met
          </p>
        )}
        {isEmpty && (
          <p className="text-[11px] text-text-muted/40 mt-2">
            Add courses to track progress toward 9 graduation requirements
          </p>
        )}
      </div>

      {/* Requirement areas — progressive disclosure */}
      {areasToShow.length > 0 && (
        <div className="space-y-3">
          {areasToShow.map((req) => {
            const pct = req.required > 0 ? Math.min((req.earned / req.required) * 100, 100) : 0;
            return (
              <div key={req.area}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[12px] font-medium text-text leading-tight">
                    {req.area}
                  </span>
                  <div className="flex items-center gap-1">
                    <span className="text-[11px] text-text-muted tabular-nums">
                      {req.earned}/{req.required}
                    </span>
                    {req.met && (
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-emerald-500">
                        <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.2" />
                        <path d="M3.5 6l2 2 3-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </div>
                </div>
                <div className="h-1.5 bg-warm-gray rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500 ease-out"
                    style={{
                      width: `${pct}%`,
                      backgroundColor: req.met ? '#059669' : 'var(--color-mountie-blue)',
                    }}
                  />
                </div>
              </div>
            );
          })}

          {/* Show remaining count when partially expanded */}
          {!showAllAreas && progress.length - areasToShow.length > 0 && (
            <p className="text-[11px] text-text-muted/50 text-center pt-1">
              + {progress.length - areasToShow.length} more requirements
            </p>
          )}
        </div>
      )}

      {/* Summary */}
      {!isEmpty && (
        <div className="mt-4 pt-3 border-t border-border/60">
          <span className="text-xs text-text-muted">
            {metCount} of {progress.length} requirements met
          </span>
        </div>
      )}
    </div>
  );
}
