"use client";

import Link from "next/link";
import { Track } from "@/data/types";
import { getCourseById } from "@/data/courses";
import { LevelBadge } from "@/components/shared/Badge";

const GRADE_LABELS = ["Grade 9", "Grade 10", "Grade 11", "Grade 12"];

export function TrackFlowchart({ track }: { track: Track }) {
  // Group nodes by row
  const nodesByRow = [0, 1, 2, 3].map((row) =>
    track.nodes.filter((n) => n.row === row)
  );

  return (
    <div>
      {/* Desktop: Grid layout */}
      <div className="hidden md:block">
        {/* Column headers */}
        <div
          className="grid gap-3 mb-4"
          style={{ gridTemplateColumns: `100px repeat(${track.columns.length}, 1fr)` }}
        >
          <div />
          {track.columns.map((col) => (
            <div key={col} className="text-xs font-medium text-text-muted text-center">
              {col}
            </div>
          ))}
        </div>

        {/* Rows by grade */}
        {nodesByRow.map((nodes, rowIdx) => (
          <div
            key={rowIdx}
            className="grid gap-3 mb-3"
            style={{ gridTemplateColumns: `100px repeat(${track.columns.length}, 1fr)` }}
          >
            <div className="flex items-center text-xs font-semibold text-text-muted">
              {GRADE_LABELS[rowIdx]}
            </div>
            {track.columns.map((_, colIdx) => {
              const colNodes = nodes.filter((n) => n.col === colIdx);
              return (
                <div key={colIdx} className="space-y-2">
                  {colNodes.map((node) => (
                    <TrackNodeCard
                      key={`${node.courseId}-${node.row}-${node.col}`}
                      courseId={node.courseId}
                      label={node.label}
                    />
                  ))}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {/* Mobile: Vertical stacked list */}
      <div className="md:hidden space-y-6">
        {nodesByRow.map((nodes, rowIdx) => (
          <div key={rowIdx}>
            <h3 className="text-xs font-semibold text-text-muted mb-2 uppercase tracking-wider">
              {GRADE_LABELS[rowIdx]}
            </h3>
            <div className="space-y-2">
              {nodes.map((node) => (
                <TrackNodeCard
                  key={`${node.courseId}-${node.row}-${node.col}-m`}
                  courseId={node.courseId}
                  label={node.label}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="mt-6 p-4 bg-warm-gray rounded-lg">
        <p className="text-xs font-medium text-text-muted mb-2">Level Legend</p>
        <div className="flex flex-wrap gap-2">
          {(["academic", "honors", "ap", "high-honors", "resource"] as const).map(
            (level) => (
              <LevelBadge key={level} level={level} />
            )
          )}
        </div>
        {track.edges.some((e) => e.label) && (
          <p className="text-xs text-text-muted mt-2">
            Arrows with numbers indicate minimum grade averages required for progression.
          </p>
        )}
      </div>
    </div>
  );
}

function TrackNodeCard({
  courseId,
  label,
}: {
  courseId: string;
  label?: string;
}) {
  const course = getCourseById(courseId);
  if (!course) return null;

  return (
    <Link
      href={`/courses/${courseId}`}
      className="block p-2.5 bg-white border border-border rounded-md card-hover text-sm"
    >
      <div className="flex items-center justify-between gap-2">
        <span className="font-medium text-text leading-tight text-xs">
          {label || course.name}
        </span>
        <LevelBadge level={course.level} />
      </div>
      <p className="text-[10px] text-text-muted mt-0.5 font-mono">{course.code}</p>
    </Link>
  );
}
