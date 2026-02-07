"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useMemo, useCallback, Suspense } from "react";
import { allCourses } from "@/data/courses";
import { Department, CourseLevel } from "@/data/types";
import { filterCourses, parseFiltersFromParams, filtersToParams } from "@/lib/search";
import { SearchBar } from "./SearchBar";
import { FilterBar } from "./FilterBar";
import { CourseCard } from "./CourseCard";

function CourseCatalogInner() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const filters = useMemo(
    () => parseFiltersFromParams(searchParams),
    [searchParams]
  );

  const filtered = useMemo(
    () => filterCourses(allCourses, filters),
    [filters]
  );

  const updateFilters = useCallback(
    (updater: (prev: typeof filters) => typeof filters) => {
      const next = updater(filters);
      const params = filtersToParams(next);
      const qs = params.toString();
      router.push(qs ? `/courses?${qs}` : "/courses", { scroll: false });
    },
    [filters, router]
  );

  const toggleDept = (dept: Department) =>
    updateFilters((f) => ({
      ...f,
      departments: f.departments.includes(dept)
        ? f.departments.filter((d) => d !== dept)
        : [...f.departments, dept],
    }));

  const toggleGrade = (grade: number) =>
    updateFilters((f) => ({
      ...f,
      grades: f.grades.includes(grade)
        ? f.grades.filter((g) => g !== grade)
        : [...f.grades, grade],
    }));

  const toggleLevel = (level: CourseLevel) =>
    updateFilters((f) => ({
      ...f,
      levels: f.levels.includes(level)
        ? f.levels.filter((l) => l !== level)
        : [...f.levels, level],
    }));

  const clearFilters = () =>
    updateFilters(() => ({ q: "", departments: [], grades: [], levels: [] }));

  const setQuery = (q: string) => updateFilters((f) => ({ ...f, q }));

  return (
    <div className="space-y-4">
      <SearchBar value={filters.q} onChange={setQuery} />
      <FilterBar
        departments={filters.departments}
        grades={filters.grades}
        levels={filters.levels}
        onDepartmentToggle={toggleDept}
        onGradeToggle={toggleGrade}
        onLevelToggle={toggleLevel}
        onClear={clearFilters}
        resultCount={filtered.length}
      />

      {filtered.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-text-muted text-sm">No courses match your filters.</p>
          <button
            onClick={clearFilters}
            className="mt-2 text-sm text-mountie-blue hover:underline"
          >
            Clear all filters
          </button>
        </div>
      ) : (
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      )}
    </div>
  );
}

export function CourseCatalog() {
  return (
    <Suspense fallback={<div className="text-sm text-text-muted">Loading...</div>}>
      <CourseCatalogInner />
    </Suspense>
  );
}
