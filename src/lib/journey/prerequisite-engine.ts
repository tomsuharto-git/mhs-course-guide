import { Course } from '@/data/types';
import { CoursePlan } from './plan-state';

/** All course IDs selected in grades before the target grade */
export function getCompletedCourseIds(plan: CoursePlan, beforeGrade: number): Set<string> {
  const ids = new Set<string>();
  for (let g = 9; g < beforeGrade; g++) {
    for (const id of plan[g] ?? []) {
      ids.add(id);
    }
  }
  return ids;
}

/** All course IDs selected across all grades */
export function getAllSelectedIds(plan: CoursePlan): Set<string> {
  const ids = new Set<string>();
  for (let g = 9; g <= 12; g++) {
    for (const id of plan[g] ?? []) {
      ids.add(id);
    }
  }
  return ids;
}

/**
 * Check if a course's prerequisites are met.
 * Prerequisites are OR-logic: any one prerequisite being met is sufficient.
 * Text prerequisites (not matching any course ID) are treated as met (informational only).
 */
export function isPrerequisiteMet(
  course: Course,
  completedIds: Set<string>,
  allCourseIds: Set<string>,
): boolean {
  if (course.prerequisites.length === 0) return true;

  // Separate course-ID prereqs from text prereqs
  const coursePrereqs = course.prerequisites.filter((p) => allCourseIds.has(p));
  const textPrereqs = course.prerequisites.filter((p) => !allCourseIds.has(p));

  // If all prereqs are text-only, course is available (text prereqs are informational)
  if (coursePrereqs.length === 0) return true;

  // OR logic: at least one course prereq must be completed
  return coursePrereqs.some((p) => completedIds.has(p));
}

/** Returns text prerequisites that aren't course IDs */
export function getTextPrerequisites(course: Course, allCourseIds: Set<string>): string[] {
  return course.prerequisites.filter((p) => !allCourseIds.has(p));
}

/**
 * Get all courses available for a specific grade given the current plan.
 * Filters by: grade eligibility, not already selected, prerequisites met.
 */
export function getAvailableCourses(
  plan: CoursePlan,
  targetGrade: number,
  allCourses: Course[],
): Course[] {
  const completedIds = getCompletedCourseIds(plan, targetGrade);
  const selectedIds = getAllSelectedIds(plan);
  const allCourseIds = new Set(allCourses.map((c) => c.id));

  return allCourses.filter((course) => {
    // Must be offered in this grade
    if (!course.grades.includes(targetGrade)) return false;
    // Can't already be in the plan anywhere
    if (selectedIds.has(course.id)) return false;
    // Prerequisites must be met
    if (!isPrerequisiteMet(course, completedIds, allCourseIds)) return false;
    return true;
  });
}

/**
 * Check if removing a course would break prerequisites for any course in later grades.
 * Returns the list of dependent courses that would lose their prerequisite.
 */
export function getDependentCourses(
  plan: CoursePlan,
  courseId: string,
  grade: number,
  allCourses: Course[],
): Course[] {
  const allCourseIds = new Set(allCourses.map((c) => c.id));
  const dependents: Course[] = [];

  // Check courses in later grades
  for (let g = grade + 1; g <= 12; g++) {
    for (const selectedId of plan[g] ?? []) {
      const course = allCourses.find((c) => c.id === selectedId);
      if (!course) continue;

      const coursePrereqs = course.prerequisites.filter((p) => allCourseIds.has(p));
      if (coursePrereqs.includes(courseId)) {
        // Check if there's another completed prereq that would still satisfy the OR
        const completedWithout = getCompletedCourseIds(plan, g);
        completedWithout.delete(courseId);
        if (!coursePrereqs.some((p) => completedWithout.has(p))) {
          dependents.push(course);
        }
      }
    }
  }

  return dependents;
}
