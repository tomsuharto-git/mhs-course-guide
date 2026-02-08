import { Course, GraduationRequirement } from '@/data/types';
import { CoursePlan } from './plan-state';

export interface RequirementProgress {
  area: string;
  required: number;
  earned: number;
  met: boolean;
  notes: string;
}

/**
 * Maps course `fulfills` values to graduation requirement area names.
 * Multiple fulfills values can map to the same area.
 */
const FULFILLS_TO_AREA: Record<string, string> = {
  'ELA': 'English Language Arts',
  'Math': 'Mathematics',
  'Algebra I': 'Mathematics',
  'Geometry': 'Mathematics',
  'Algebra II': 'Mathematics',
  'Social Studies': 'Social Studies',
  'World History': 'Social Studies',
  'US History': 'Social Studies',
  'Science': 'Science',
  'Biology': 'Science',
  'World Language': 'World Languages',
  'Financial Literacy': 'Financial Literacy',
  'Health & PE': 'Health & Physical Education',
  'PE': 'Health & Physical Education',
  'VPA': 'Visual & Performing Arts',
  'CTE': '21st Century Life & Careers / CTE',
  '21st Century Life & Career Skills': '21st Century Life & Careers / CTE',
};

/**
 * Calculate progress toward each graduation requirement.
 * Each course contributes its credits to the requirement area(s) it fulfills.
 * A course with multiple fulfills values in the same area only counts once for that area.
 */
export function calculateProgress(
  plan: CoursePlan,
  allCourses: Course[],
  requirements: GraduationRequirement[],
): RequirementProgress[] {
  // Accumulate credits per requirement area
  const earnedByArea: Record<string, number> = {};
  for (const req of requirements) {
    earnedByArea[req.area] = 0;
  }

  // Collect all selected courses
  const selectedCourses = getSelectedCourses(plan, allCourses);

  for (const course of selectedCourses) {
    // Find unique areas this course contributes to
    const areas = new Set<string>();
    for (const f of course.fulfills) {
      const area = FULFILLS_TO_AREA[f];
      if (area && area in earnedByArea) {
        areas.add(area);
      }
    }
    // Add credits once per area
    for (const area of areas) {
      earnedByArea[area] += course.credits;
    }
  }

  return requirements.map((req) => ({
    area: req.area,
    required: req.credits,
    earned: earnedByArea[req.area] ?? 0,
    met: (earnedByArea[req.area] ?? 0) >= req.credits,
    notes: req.notes,
  }));
}

/** Credits for a specific grade */
export function creditsForGrade(plan: CoursePlan, grade: number, allCourses: Course[]): number {
  const courseMap = new Map(allCourses.map((c) => [c.id, c]));
  return (plan[grade] ?? []).reduce((sum, id) => {
    const course = courseMap.get(id);
    return sum + (course?.credits ?? 0);
  }, 0);
}

/** Total credits across all grades */
export function totalCredits(plan: CoursePlan, allCourses: Course[]): number {
  let total = 0;
  for (let g = 9; g <= 12; g++) {
    total += creditsForGrade(plan, g, allCourses);
  }
  return total;
}

/** Get Course objects for all selected IDs in the plan */
function getSelectedCourses(plan: CoursePlan, allCourses: Course[]): Course[] {
  const courseMap = new Map(allCourses.map((c) => [c.id, c]));
  const courses: Course[] = [];
  for (let g = 9; g <= 12; g++) {
    for (const id of plan[g] ?? []) {
      const course = courseMap.get(id);
      if (course) courses.push(course);
    }
  }
  return courses;
}
