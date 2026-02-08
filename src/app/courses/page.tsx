import { CourseCatalog } from "@/components/courses/CourseCatalog";
import { allCourses } from "@/data/courses";

export const metadata = {
  title: "Course Catalog | MHS Course Guide",
};

export default function CoursesPage() {
  const apCount = allCourses.filter((c) => c.level === "ap").length;
  const honorsCount = allCourses.filter((c) => c.level === "honors" || c.level === "high-honors").length;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
      {/* Page header with inline stats */}
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-[family-name:var(--font-heading)] text-text tracking-wide">
          Course Catalog
        </h1>
        <p className="text-[15px] text-text-muted mt-2 max-w-lg">
          Browse all {allCourses.length} courses offered at Montclair High School for 2026-2027.
        </p>
        <div className="flex gap-4 mt-4">
          <span className="text-sm text-text-muted">
            <strong className="text-text font-semibold">{allCourses.length}</strong> total
          </span>
          <span className="text-border">|</span>
          <span className="text-sm text-text-muted">
            <strong className="text-mountie-blue font-semibold">{apCount}</strong> AP
          </span>
          <span className="text-border">|</span>
          <span className="text-sm text-text-muted">
            <strong className="text-text font-semibold">{honorsCount}</strong> Honors
          </span>
        </div>
      </div>
      <CourseCatalog />
    </div>
  );
}
