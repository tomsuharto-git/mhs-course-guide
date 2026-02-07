import { CourseCatalog } from "@/components/courses/CourseCatalog";

export const metadata = {
  title: "Course Catalog | MHS Course Guide",
};

export default function CoursesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-[family-name:var(--font-heading)] text-text">
          Course Catalog
        </h1>
        <p className="text-sm text-text-muted mt-1">
          Browse all courses offered at Montclair High School for 2026–2027.
        </p>
      </div>
      <CourseCatalog />
    </div>
  );
}
