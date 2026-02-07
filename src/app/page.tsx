import Link from "next/link";
import { DEPARTMENT_META, Department } from "@/data/types";
import { DepartmentIcon } from "@/components/shared/DepartmentIcon";
import { allCourses } from "@/data/courses";

const DEPT_ORDER: Department[] = [
  "english",
  "math",
  "science",
  "social-studies",
  "world-languages",
  "visual-performing-arts",
  "career-technical",
  "health-pe",
  "special-education",
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-mountie-blue text-white py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-3xl sm:text-4xl font-[family-name:var(--font-heading)] leading-tight">
            Montclair High School
            <br />
            Course Guide 2026–2027
          </h1>
          <p className="text-blue-200 mt-3 max-w-xl mx-auto text-sm sm:text-base">
            A searchable, filterable guide to every course in the MHS Program of
            Studies. Built by parents, for parents.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
            <Link
              href="/courses"
              className="px-5 py-2.5 bg-white text-mountie-blue font-semibold rounded-lg text-sm hover:bg-blue-50 transition"
            >
              Browse All Courses
            </Link>
            <Link
              href="/tracks"
              className="px-5 py-2.5 border border-white/30 text-white font-semibold rounded-lg text-sm hover:bg-white/10 transition"
            >
              View Track Flowcharts
            </Link>
          </div>
        </div>
      </section>

      {/* Quick links */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <h2 className="text-lg font-[family-name:var(--font-heading)] text-text mb-6">
          Departments
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {DEPT_ORDER.map((dept) => {
            const meta = DEPARTMENT_META[dept];
            return (
              <Link
                key={dept}
                href={`/courses?dept=${dept}`}
                className="p-4 bg-white border border-border rounded-lg hover:border-mountie-blue/30 hover:shadow-sm transition group"
              >
                <div className="mb-2">
                  <DepartmentIcon department={dept} size="sm" />
                </div>
                <p className="text-sm font-medium text-text group-hover:text-mountie-blue transition-colors">
                  {meta.label}
                </p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Quick stats */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-12">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: "Total Courses", value: String(allCourses.length) },
            { label: "AP Courses", value: String(allCourses.filter((c) => c.level === "ap").length) },
            { label: "Departments", value: "9" },
            { label: "Credits to Graduate", value: "122" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="p-4 bg-white border border-border rounded-lg text-center"
            >
              <p className="text-2xl font-bold text-mountie-blue font-[family-name:var(--font-heading)]">
                {stat.value}
              </p>
              <p className="text-xs text-text-muted mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
