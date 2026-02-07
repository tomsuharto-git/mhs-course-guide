import { Course, Department, CourseLevel } from "@/data/types";

export interface FilterState {
  q: string;
  departments: Department[];
  grades: number[];
  levels: CourseLevel[];
}

export function filterCourses(courses: Course[], filters: FilterState): Course[] {
  return courses.filter((course) => {
    // Text search
    if (filters.q) {
      const query = filters.q.toLowerCase();
      const searchable = `${course.name} ${course.code} ${course.description} ${course.tags.join(" ")}`.toLowerCase();
      if (!searchable.includes(query)) return false;
    }

    // Department filter
    if (filters.departments.length > 0) {
      if (!filters.departments.includes(course.department)) return false;
    }

    // Grade filter
    if (filters.grades.length > 0) {
      if (!course.grades.some((g) => filters.grades.includes(g))) return false;
    }

    // Level filter
    if (filters.levels.length > 0) {
      if (!filters.levels.includes(course.level)) return false;
    }

    return true;
  });
}

export function parseFiltersFromParams(params: URLSearchParams): FilterState {
  return {
    q: params.get("q") || "",
    departments: (params.get("dept")?.split(",").filter(Boolean) || []) as Department[],
    grades: params.get("grade")?.split(",").map(Number).filter(Boolean) || [],
    levels: (params.get("level")?.split(",").filter(Boolean) || []) as CourseLevel[],
  };
}

export function filtersToParams(filters: FilterState): URLSearchParams {
  const params = new URLSearchParams();
  if (filters.q) params.set("q", filters.q);
  if (filters.departments.length) params.set("dept", filters.departments.join(","));
  if (filters.grades.length) params.set("grade", filters.grades.join(","));
  if (filters.levels.length) params.set("level", filters.levels.join(","));
  return params;
}
