import Link from "next/link";
import { allTracks } from "@/data/tracks";
import { DEPARTMENT_META } from "@/data/types";
import { DepartmentIconRaw } from "@/components/shared/DepartmentIcon";

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

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {allTracks.map((track) => {
          const deptMeta = DEPARTMENT_META[track.department];
          const courseCount = new Set(track.nodes.map(n => n.courseId)).size;
          return (
            <Link
              key={track.id}
              href={`/tracks/${track.id}`}
              className="dept-btn group flex items-center gap-3 px-4 py-4 rounded-xl border-2 transition-colors duration-200 btn-hover"
              style={
                {
                  borderColor: deptMeta.color,
                  "--dept-color": deptMeta.color,
                } as React.CSSProperties
              }
            >
              <div
                className="dept-icon w-10 h-10 rounded-lg flex items-center justify-center shrink-0 border-2 transition-colors duration-200"
                style={{ borderColor: deptMeta.color, color: deptMeta.color }}
              >
                <DepartmentIconRaw department={track.department} className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <span
                  className="text-xl font-[family-name:var(--font-heading)] tracking-wide leading-tight transition-colors duration-200 block"
                  style={{ color: deptMeta.color }}
                >
                  {track.name}
                </span>
                <span className="text-[11px] text-text-muted transition-colors duration-200 group-hover:text-white/70">
                  {courseCount} courses
                </span>
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
          <Link href="/details" className="text-mountie-blue hover:underline">
            Selection &amp; Scheduling
          </Link>{" "}
          page for details.
        </p>
      </div>
    </div>
  );
}
