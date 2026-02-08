"use client";

import { useState } from "react";
import { Course, DEPARTMENT_META } from "@/data/types";
import { LevelBadge } from "@/components/shared/Badge";

export function CoursePickerItem({
  course,
  onAdd,
  prerequisiteNote,
}: {
  course: Course;
  onAdd: () => void;
  prerequisiteNote?: string;
}) {
  const dept = DEPARTMENT_META[course.department];
  const [justAdded, setJustAdded] = useState(false);

  const handleAdd = () => {
    onAdd();
    setJustAdded(true);
  };

  // After the brief flash, this item will be removed from the list
  // (filtered out as already selected), so no need to reset state

  return (
    <div
      className={`flex items-center gap-3 py-2 px-3 rounded-lg transition-colors ${
        justAdded
          ? "bg-emerald-50/80"
          : "hover:bg-warm-gray/60"
      }`}
    >
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <span className="text-[13px] font-medium text-text truncate">
            {course.name}
          </span>
          <span className="text-[11px] text-text-muted shrink-0">{course.code}</span>
        </div>
        <div className="flex items-center gap-1.5 mt-0.5">
          <LevelBadge level={course.level} deptColor={dept.color} />
          <span className="text-[11px] text-text-muted">
            {course.credits} cr &middot; {course.duration === "full-year" ? "Full Year" : course.duration === "quarter" ? "Quarter" : "Semester"}
          </span>
        </div>
        {prerequisiteNote && (
          <div className="flex items-center gap-1 mt-1">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-amber-500 shrink-0">
              <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.2" />
              <path d="M6 3.5v3M6 8h.005" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
            <span className="text-[11px] text-amber-600">{prerequisiteNote}</span>
          </div>
        )}
      </div>
      <button
        onClick={handleAdd}
        disabled={justAdded}
        className={`shrink-0 px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
          justAdded
            ? "bg-emerald-500 text-white"
            : "text-mountie-blue bg-mountie-blue/8 hover:bg-mountie-blue hover:text-white"
        }`}
      >
        {justAdded ? "Added" : "Add"}
      </button>
    </div>
  );
}
