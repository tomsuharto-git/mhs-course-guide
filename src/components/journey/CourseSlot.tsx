"use client";

import Link from "next/link";
import { Course, DEPARTMENT_META } from "@/data/types";
import { LevelBadge } from "@/components/shared/Badge";

export function CourseSlot({
  course,
  onRemove,
}: {
  course: Course;
  onRemove: () => void;
}) {
  const dept = DEPARTMENT_META[course.department];

  return (
    <div
      className="group relative bg-white rounded-lg border border-border pl-2.5 pr-1.5 py-2 flex items-start gap-2 transition-all duration-200 hover:border-border/80"
    >
      {/* Department color accent */}
      <div
        className="absolute left-0 top-2 bottom-2 w-[3px] rounded-full"
        style={{ backgroundColor: dept.color }}
      />

      <div className="flex-1 min-w-0 ml-1">
        <Link
          href={`/courses/${course.id}`}
          target="_blank"
          className="text-[13px] font-medium text-text leading-tight hover:text-mountie-blue transition-colors line-clamp-2"
        >
          {course.name}
        </Link>
        <div className="flex items-center gap-1.5 mt-1">
          <LevelBadge level={course.level} deptColor={dept.color} />
          <span className="text-[11px] text-text-muted">{course.credits} cr</span>
        </div>
      </div>

      {/* Remove button — always visible for touch, subdued until hover */}
      <button
        onClick={onRemove}
        className="shrink-0 p-1 rounded text-text-muted/30 hover:text-red-500 hover:bg-red-50 active:bg-red-100 transition-colors"
        aria-label={`Remove ${course.name}`}
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
          <path d="M3.5 3.5l7 7M3.5 10.5l7-7" />
        </svg>
      </button>
    </div>
  );
}
