"use client";

import { Course } from "@/data/types";
import { getCourseById } from "@/data/courses";
import { creditsForGrade } from "@/lib/journey/credit-calculator";
import { CoursePlan } from "@/lib/journey/plan-state";
import { CourseSlot } from "./CourseSlot";
import { allCourses } from "@/data/courses";

const GRADE_LABELS: Record<number, string> = {
  9: "Freshman",
  10: "Sophomore",
  11: "Junior",
  12: "Senior",
};

const EMPTY_HINTS: Record<number, string> = {
  9: "Start with your core classes: English, Math, Science, Social Studies",
  10: "Build on your 9th grade foundation with next-level courses",
  11: "Focus on AP courses and electives in your areas of interest",
  12: "Finish strong with remaining requirements and senior electives",
};

export function YearColumn({
  grade,
  plan,
  onAdd,
  onRemove,
}: {
  grade: number;
  plan: CoursePlan;
  onAdd: () => void;
  onRemove: (courseId: string) => void;
}) {
  const selectedIds = plan[grade] ?? [];
  const courses = selectedIds
    .map((id) => getCourseById(id))
    .filter((c): c is Course => c !== undefined);
  const credits = creditsForGrade(plan, grade, allCourses);

  // 7 periods × 5 cr = 35 cr is a full schedule; 37.5+ means double-booking
  const hasEnoughCourses = courses.length >= 4;
  const creditWarning = credits > 37.5
    ? "overloaded"
    : credits > 32.5
      ? "heavy"
      : hasEnoughCourses && credits < 25
        ? "low"
        : null;

  return (
    <div className="bg-white rounded-xl border border-border shadow-sm flex flex-col min-h-[320px]">
      {/* Header */}
      <div className="px-4 pt-4 pb-3 border-b border-border/60">
        <div className="flex items-baseline justify-between">
          <div>
            <h3 className="text-lg font-[family-name:var(--font-heading)] text-text tracking-wider uppercase">
              Grade {grade}
            </h3>
            <span className="text-xs text-text-muted">{GRADE_LABELS[grade]}</span>
          </div>
          {credits > 0 && (
            <span
              className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                creditWarning === "overloaded"
                  ? "bg-red-50 text-red-600"
                  : creditWarning === "heavy"
                    ? "bg-amber-50 text-amber-700"
                    : creditWarning === "low"
                      ? "bg-red-50 text-red-600"
                      : "bg-warm-gray text-text-muted"
              }`}
            >
              {credits} cr
            </span>
          )}
        </div>
        {creditWarning === "overloaded" && (
          <p className="text-[11px] text-red-500 mt-1">Exceeds a 7-period schedule — remove some courses</p>
        )}
        {creditWarning === "heavy" && (
          <p className="text-[11px] text-amber-600 mt-1">Heavy load — may not fit in 7 periods</p>
        )}
        {creditWarning === "low" && (
          <p className="text-[11px] text-red-500 mt-1">Below typical minimum (25 cr)</p>
        )}
      </div>

      {/* Course list */}
      <div className="flex-1 px-3 py-3 space-y-2">
        {courses.map((course) => (
          <CourseSlot
            key={course.id}
            course={course}
            onRemove={() => onRemove(course.id)}
          />
        ))}

        {courses.length === 0 && (
          <div className="text-center py-5 px-2">
            <p className="text-xs text-text-muted/40 mb-1">No courses yet</p>
            <p className="text-[11px] text-text-muted/30 leading-relaxed">
              {EMPTY_HINTS[grade]}
            </p>
          </div>
        )}
      </div>

      {/* Add button */}
      <div className="px-3 pb-3 mt-auto">
        <button
          onClick={onAdd}
          className="w-full py-2 rounded-lg border border-dashed border-border text-sm text-text-muted hover:border-mountie-blue hover:text-mountie-blue hover:bg-mountie-blue/5 transition-colors"
        >
          + Add Course
        </button>
      </div>
    </div>
  );
}
