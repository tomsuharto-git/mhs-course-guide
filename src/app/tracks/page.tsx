import Link from "next/link";
import { allTracks } from "@/data/tracks";
import { DEPARTMENT_META, Department } from "@/data/types";
import { DEPARTMENT_INTROS } from "@/data/department-intros";
import { DepartmentIcon } from "@/components/shared/DepartmentIcon";

export const metadata = {
  title: "Course Tracks | MHS Course Guide",
};

/** Order departments should appear on this page. */
const DEPT_ORDER: Department[] = [
  "english",
  "math",
  "science",
  "social-studies",
  "world-languages",
  "visual-performing-arts",
  "health-pe",
  "career-technical",
];

export default function TracksPage() {
  // Group tracks by department, preserving DEPT_ORDER
  const grouped = DEPT_ORDER.map((dept) => ({
    dept,
    tracks: allTracks.filter((t) => t.department === dept),
  })).filter((g) => g.tracks.length > 0);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-[family-name:var(--font-heading)] text-text tracking-wide">
          Course Tracks
        </h1>
        <p className="text-sm text-text-muted mt-2 max-w-lg">
          Visual flowcharts showing how courses connect across grade levels.
          Click a track to see the full pathway from 9th through 12th grade.
        </p>
      </div>

      {grouped.map(({ dept, tracks }) => {
        const meta = DEPARTMENT_META[dept];
        const intro = DEPARTMENT_INTROS[dept];

        return (
          <section key={dept} className="mb-10">
            <div className="flex items-center gap-2.5 mb-2">
              <DepartmentIcon department={dept} />
              <h2
                className="text-lg font-[family-name:var(--font-heading)] uppercase tracking-wide"
                style={{ color: meta.color }}
              >
                {meta.label}
              </h2>
            </div>

            {intro && (
              <p className="text-sm text-text-muted mb-4 max-w-2xl leading-relaxed">
                {intro}
              </p>
            )}

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-2">
              {tracks.map((track) => (
                <Link
                  key={track.id}
                  href={`/tracks/${track.id}`}
                  className="bg-white border border-border rounded-xl card-hover overflow-hidden group"
                >
                  <div className="h-1" style={{ backgroundColor: meta.color }} />
                  <div className="p-5">
                    <h3 className="text-base font-semibold text-text group-hover:text-mountie-blue transition-colors">
                      {track.name}
                    </h3>
                    <p className="text-xs text-text-muted mt-1 line-clamp-2">
                      {track.description}
                    </p>
                    <p className="link-arrow text-xs text-mountie-blue mt-3 font-medium inline-flex items-center gap-1">
                      {new Set(track.nodes.map((n) => n.courseId)).size} courses{" "}
                      <span className="arrow">&rarr;</span>
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        );
      })}

      <div className="mt-4 p-4 bg-warm-gray rounded-lg text-sm text-text-muted">
        <p>
          <strong className="text-text">Note:</strong> Flowcharts outline
          recommended pathways. Actual course selections should be made with your
          school counselor and current teacher. Course overrides may be available
          &mdash; see the{" "}
          <Link
            href="/selection"
            className="text-mountie-blue hover:underline"
          >
            Selection &amp; Scheduling
          </Link>{" "}
          page for details.
        </p>
      </div>
    </div>
  );
}
