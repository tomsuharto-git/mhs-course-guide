import Link from "next/link";
import { allTracks } from "@/data/tracks";
import { DEPARTMENT_META } from "@/data/types";
import { DepartmentIcon } from "@/components/shared/DepartmentIcon";

export const metadata = {
  title: "Course Tracks | MHS Course Guide",
};

export default function TracksPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-[family-name:var(--font-heading)] text-text tracking-wide">
          Course Tracks
        </h1>
        <p className="text-[15px] text-text-muted mt-2 max-w-lg">
          Visual flowcharts showing how courses connect across grade levels.
          Click a track to see the full pathway from 9th through 12th grade.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {allTracks.map((track) => {
          const deptMeta = DEPARTMENT_META[track.department];
          const courseCount = new Set(track.nodes.map(n => n.courseId)).size;
          return (
            <Link
              key={track.id}
              href={`/tracks/${track.id}`}
              className="group bg-white border border-border rounded-xl card-hover overflow-hidden"
            >
              {/* Color block header */}
              <div
                className="relative h-20"
                style={{ backgroundColor: deptMeta.color }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-black/[0.15]" />
              </div>

              {/* Icon badge overlapping boundary */}
              <div className="-mt-6 ml-4 relative z-10">
                <DepartmentIcon department={track.department} size="lg" />
              </div>

              {/* Content */}
              <div className="px-4 pt-2.5 pb-4">
                <h2 className="text-lg font-[family-name:var(--font-heading)] text-text tracking-wide uppercase leading-tight">
                  {track.name}
                </h2>
                <p className="text-xs text-text-muted mt-1 line-clamp-2 leading-relaxed">
                  {track.description}
                </p>
                <p
                  className="link-arrow text-xs font-medium mt-2.5 inline-flex items-center gap-1"
                  style={{ color: deptMeta.color }}
                >
                  {courseCount} courses <span className="arrow">&rarr;</span>
                </p>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="mt-10 p-5 bg-warm-gray rounded-xl text-sm text-text-muted leading-relaxed">
        <p>
          <strong className="text-text">Note:</strong> Flowcharts outline recommended pathways. Actual
          course selections should be made with your school counselor and
          current teacher. Course overrides may be available &mdash; see the{" "}
          <Link href="/selection" className="text-mountie-blue hover:underline">
            Selection &amp; Scheduling
          </Link>{" "}
          page for details.
        </p>
      </div>
    </div>
  );
}
