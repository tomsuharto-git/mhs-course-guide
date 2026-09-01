"use client";

import { useState } from "react";
import { CoursePlan } from "@/lib/journey/plan-state";
import { getCourseById } from "@/data/courses";

const GRADE_LABELS: Record<number, string> = {
  9: 'Grade 9 (Freshman)',
  10: 'Grade 10 (Sophomore)',
  11: 'Grade 11 (Junior)',
  12: 'Grade 12 (Senior)',
};

function buildPlanText(plan: CoursePlan): string {
  const lines = ['MHS 4-Year Course Plan', ''];
  for (const grade of [9, 10, 11, 12]) {
    const ids = plan[grade] ?? [];
    lines.push(GRADE_LABELS[grade]);
    if (ids.length === 0) {
      lines.push('  (none selected)');
    } else {
      for (const id of ids) {
        const course = getCourseById(id);
        if (course) {
          const suffix = course.duration === 'semester' ? ' (semester)' : '';
          lines.push(`  ${course.name}${suffix}`);
        }
      }
    }
    lines.push('');
  }
  return lines.join('\n');
}

export function PlanActions({
  plan,
  onShareUrl,
  onClearAll,
  isEmpty,
}: {
  plan: CoursePlan;
  onShareUrl: () => string;
  onClearAll: () => void;
  isEmpty: boolean;
}) {
  const [copied, setCopied] = useState(false);
  const [confirmClear, setConfirmClear] = useState(false);

  const handleShare = async () => {
    const url = onShareUrl();
    const text = buildPlanText(plan);
    const shareBody = text + 'View/edit: ' + url + '\n';

    // Try native share (mobile share sheet)
    if (navigator.share) {
      try {
        await navigator.share({ title: 'MHS Course Plan', text: shareBody });
        return;
      } catch {
        // User cancelled or share failed — fall through to clipboard
      }
    }

    // Clipboard fallback
    try {
      await navigator.clipboard.writeText(shareBody);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.prompt("Copy your plan:", shareBody);
    }
  };

  const handleClear = () => {
    if (confirmClear) {
      onClearAll();
      setConfirmClear(false);
    } else {
      setConfirmClear(true);
      setTimeout(() => setConfirmClear(false), 3000);
    }
  };

  return (
    <div className="bg-white rounded-xl border border-border shadow-sm p-4 space-y-2">
      {/* Share */}
      <button
        onClick={handleShare}
        disabled={isEmpty}
        className="w-full flex items-center justify-center gap-2 py-2 rounded-lg text-sm font-medium bg-mountie-blue text-white hover:bg-mountie-dark transition-colors disabled:opacity-40 disabled:cursor-not-allowed btn-hover"
      >
        {copied ? (
          <>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 7l3 3 5-6" />
            </svg>
            Copied!
          </>
        ) : (
          <>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M8.5 1.5h4v4M8 6L12.5 1.5M7 2.5H3a1.5 1.5 0 0 0-1.5 1.5v7A1.5 1.5 0 0 0 3 12.5h7A1.5 1.5 0 0 0 11.5 11V7" />
            </svg>
            Share Plan
          </>
        )}
      </button>

      {/* Print */}
      <button
        onClick={() => window.print()}
        disabled={isEmpty}
        className="w-full flex items-center justify-center gap-2 py-2 rounded-lg text-sm font-medium text-text-muted bg-warm-gray hover:bg-border transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3.5 5V1.5h7V5M3.5 10H2a.5.5 0 0 1-.5-.5V6a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v3.5a.5.5 0 0 1-.5.5h-1.5" />
          <rect x="3.5" y="8.5" width="7" height="4" rx=".3" />
        </svg>
        Print
      </button>

      {/* Clear */}
      <button
        onClick={handleClear}
        disabled={isEmpty}
        className={`w-full py-2 rounded-lg text-sm font-medium transition-colors disabled:opacity-40 disabled:cursor-not-allowed ${
          confirmClear
            ? "bg-red-50 text-red-600 border border-red-200 hover:bg-red-100"
            : "text-text-muted hover:text-red-500 hover:bg-red-50"
        }`}
      >
        {confirmClear ? "Confirm Clear All?" : "Clear All"}
      </button>
    </div>
  );
}
