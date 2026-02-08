import { notFound } from "next/navigation";
import Link from "next/link";
import { allTracks, getTrackById } from "@/data/tracks";
import { DEPARTMENT_META, Department } from "@/data/types";
import { TrackFlowchart } from "@/components/tracks/TrackFlowchart";
import { DepartmentIcon } from "@/components/shared/DepartmentIcon";
import { graduationRequirements } from "@/data/graduation-requirements";

const DEPT_TO_REQ_AREAS: Record<Department, string[]> = {
  english: ["English Language Arts"],
  math: ["Mathematics"],
  science: ["Science"],
  "social-studies": ["Social Studies"],
  "world-languages": ["World Languages"],
  "visual-performing-arts": ["Visual & Performing Arts"],
  "health-pe": ["Health & Physical Education"],
  "career-technical": ["21st Century Life & Careers / CTE"],
  "special-education": [],
};

export function generateStaticParams() {
  return allTracks.map((t) => ({ id: t.id }));
}

export function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  return params.then(({ id }) => {
    const track = getTrackById(id);
    return {
      title: track
        ? `${track.name} Track | MHS Course Guide`
        : "Track Not Found",
    };
  });
}

export default async function TrackDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const track = getTrackById(id);
  if (!track) return notFound();

  const deptMeta = DEPARTMENT_META[track.department];
  const reqAreas = DEPT_TO_REQ_AREAS[track.department];
  const deptReqs = graduationRequirements.filter((r) =>
    reqAreas.includes(r.area)
  );

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
      {/* ── Header: dept color bar + icon + name + description ── */}
      <div className="mb-8">
        <Link
          href="/tracks"
          className="link-back inline-flex items-center gap-1 text-sm text-text-muted hover:text-mountie-blue mb-4 transition-colors"
        >
          <svg className="arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="m15 18-6-6 6-6" />
          </svg>
          All Tracks
        </Link>

        <div className="rounded-xl overflow-hidden border border-border">
          <div className="h-1.5" style={{ backgroundColor: deptMeta.color }} />
          <div className="px-5 py-4 sm:px-6 sm:py-5 bg-white">
            <div className="flex items-center gap-3">
              <DepartmentIcon department={track.department} />
              <h1 className="text-2xl sm:text-3xl font-[family-name:var(--font-heading)] text-text tracking-wide">
                {track.name}
              </h1>
            </div>
            <p className="text-sm text-text-muted mt-2 max-w-3xl leading-relaxed">
              {track.description}
            </p>
          </div>
        </div>
      </div>

      {/* ── Pathway table — the main content ── */}
      <TrackFlowchart track={track} deptColor={deptMeta.color} />

      {/* ── Department overview ── */}
      {deptMeta.overview && (
        <div className="mt-10 pt-8 border-t border-border">
          <h2 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-3">
            {deptMeta.label} Department
          </h2>
          <p className="text-sm text-text-muted leading-relaxed max-w-3xl">
            {deptMeta.overview}
          </p>
        </div>
      )}

      {/* ── Graduation requirements — reference, not navigation ── */}
      {deptReqs.length > 0 && (
        <div className="mt-10 pt-8 border-t border-border">
          <h2 className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-3">
            Graduation Requirements
          </h2>
          <div className="space-y-1.5">
            {deptReqs.map((req) => (
              <div key={req.area} className="flex items-baseline justify-between gap-4">
                <div>
                  <span className="text-sm font-medium text-text">{req.area}</span>
                  <span className="text-xs text-text-muted ml-2">{req.notes}</span>
                </div>
                <span className="text-sm font-bold whitespace-nowrap" style={{ color: deptMeta.color }}>
                  {req.credits} credits
                </span>
              </div>
            ))}
          </div>
          <p className="text-xs text-text-muted mt-3">
            MHS requires 122 total credits for graduation.{" "}
            <Link href="/requirements" className="text-mountie-blue hover:underline">
              View all requirements &rarr;
            </Link>
          </p>
        </div>
      )}
    </div>
  );
}
