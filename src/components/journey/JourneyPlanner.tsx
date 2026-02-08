"use client";

import { useState, useCallback } from "react";
import { usePlan } from "@/lib/journey/use-plan";
import { getDependentCourses } from "@/lib/journey/prerequisite-engine";
import { allCourses } from "@/data/courses";
import { YearColumn } from "./YearColumn";
import { CoursePicker } from "./CoursePicker";
import { GraduationProgress } from "./GraduationProgress";
import { PlanActions } from "./PlanActions";

const GRADES = [9, 10, 11, 12] as const;

export function JourneyPlanner() {
  const { plan, loaded, addCourse, removeCourse, clearAll, shareUrl } = usePlan();
  const [pickerGrade, setPickerGrade] = useState<number | null>(null);

  const handleRemove = useCallback(
    (grade: number, courseId: string) => {
      const dependents = getDependentCourses(plan, courseId, grade, allCourses);
      if (dependents.length > 0) {
        const names = dependents.map((c) => c.name).join(", ");
        if (!window.confirm(`Removing this course may affect prerequisites for: ${names}. Continue?`)) {
          return;
        }
      }
      removeCourse(grade, courseId);
    },
    [plan, removeCourse],
  );

  const isEmpty = GRADES.every((g) => (plan[g]?.length ?? 0) === 0);

  if (!loaded) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="w-5 h-5 border-2 border-mountie-blue/30 border-t-mountie-blue rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Year columns */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {GRADES.map((grade) => (
            <YearColumn
              key={grade}
              grade={grade}
              plan={plan}
              onAdd={() => setPickerGrade(grade)}
              onRemove={(courseId) => handleRemove(grade, courseId)}
            />
          ))}
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-[272px] shrink-0 space-y-4 lg:sticky lg:top-20 lg:self-start">
          <GraduationProgress plan={plan} />
          <PlanActions
            onShareUrl={shareUrl}
            onClearAll={clearAll}
            isEmpty={isEmpty}
          />
        </div>
      </div>

      {/* Course picker modal */}
      {pickerGrade !== null && (
        <CoursePicker
          initialGrade={pickerGrade}
          plan={plan}
          onAdd={addCourse}
          onClose={() => setPickerGrade(null)}
        />
      )}
    </>
  );
}
