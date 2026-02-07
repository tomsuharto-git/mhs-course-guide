import Link from "next/link";
import { allTracks } from "@/data/tracks";
import { DEPARTMENT_META } from "@/data/types";
import { DepartmentIcon } from "@/components/shared/DepartmentIcon";

export const metadata = {
  title: "Course Tracks | MHS Course Guide",
};

export default function TracksPage() {
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

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {allTracks.map((track) => {
          const deptMeta = DEPARTMENT_META[track.department];
          return (
            <Link
              key={track.id}
              href={`/tracks/${track.id}`}
              className="bg-white border border-border rounded-xl card-hover overflow-hidden group"
            >
              <div className="h-1" style={{ backgroundColor: deptMeta.color }} />
              <div className="p-5">
                <div className="mb-3">
                  <DepartmentIcon department={track.department} />
                </div>
                <h2 className="text-base font-semibold text-text group-hover:text-mountie-blue transition-colors">
                  {track.name}
                </h2>
                <p className="text-xs text-text-muted mt-1 line-clamp-2">
                  {track.description}
                </p>
                <p className="link-arrow text-xs text-mountie-blue mt-3 font-medium inline-flex items-center gap-1">
                  {track.nodes.length} courses <span className="arrow">&rarr;</span>
                </p>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="mt-8 p-4 bg-warm-gray rounded-lg text-sm text-text-muted">
        <p>
          <strong className="text-text">Note:</strong> Flowcharts outline recommended pathways. Actual
          course selections should be made with your school counselor and
          current teacher. Course overrides may be available — see the{" "}
          <Link href="/requirements" className="text-mountie-blue hover:underline">
            Requirements
          </Link>{" "}
          page for details.
        </p>
      </div>
    </div>
  );
}
