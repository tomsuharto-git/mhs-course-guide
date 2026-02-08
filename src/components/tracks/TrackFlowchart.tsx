"use client";

import Link from "next/link";
import { Track } from "@/data/types";
import { getCourseById } from "@/data/courses";
import { LevelBadge } from "@/components/shared/Badge";

const DEFAULT_GRADE_LABELS = ["Grade 9", "Grade 10", "Grade 11", "Grade 12"];

// Pathway label colors — distinct enough to scan at a glance
const PATHWAY_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  // Honors / AP / Accelerated variants
  "honors / ap": { bg: "#254093", text: "#ffffff", border: "#254093" },
  "honors": { bg: "#254093", text: "#ffffff", border: "#254093" },
  "accelerated": { bg: "#1a2d6b", text: "#ffffff", border: "#1a2d6b" },
  // Academic
  "academic": { bg: "#f0efe8", text: "#1a1a1a", border: "#d0cfc8" },
  // Resource / Foundation
  "resource": { bg: "#ecfdf5", text: "#047857", border: "#a7f3d0" },
  "math foundation": { bg: "#ecfdf5", text: "#047857", border: "#a7f3d0" },
};

function getPathwayStyle(label: string) {
  const key = label.split("\n")[0].toLowerCase().trim();
  return PATHWAY_COLORS[key] ?? { bg: "#f0efe8", text: "#1a1a1a", border: "#d0cfc8" };
}

function ChevronRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-border shrink-0">
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

export function TrackFlowchart({ track, deptColor }: { track: Track; deptColor?: string }) {
  if (track.rowGroups && track.rowGroups.length > 0) {
    return <PathwayTable track={track} deptColor={deptColor} />;
  }
  return <GradeGrid track={track} deptColor={deptColor} />;
}

// ─── Pathway Table (math-style: rows=pathways, cols=grades) ─────────────────

function PathwayTable({ track, deptColor }: { track: Track; deptColor?: string }) {
  const maxRow = Math.max(...track.nodes.map((n) => n.row));
  const allRows = Array.from({ length: maxRow + 1 }, (_, i) => i);

  return (
    <div>
      {/* Desktop: HTML table with rowspan for pathway groups */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr>
              <th className="text-left px-3 py-2.5 text-xs font-semibold text-text-muted uppercase tracking-wider bg-warm-gray border border-border w-36">
                {track.rowGroupHeader || "Middle School"}
              </th>
              {track.columns.map((col, i) => (
                <th
                  key={col}
                  className="px-3 py-2.5 text-xs font-semibold uppercase tracking-wider border border-border"
                  style={{ backgroundColor: deptColor ? `${deptColor}0a` : undefined, color: deptColor ?? undefined }}
                >
                  <div className="flex items-center justify-center gap-1.5">
                    {i > 0 && <ChevronRight />}
                    <span>{col}</span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {allRows.map((rowIdx) => {
              const rowNodes = track.nodes.filter((n) => n.row === rowIdx);
              const group = track.rowGroups?.find(
                (g) => g.startRow === rowIdx
              );
              const isFirstInGroup = !!group;
              const groupSpan = group
                ? group.endRow - group.startRow + 1
                : 0;

              const isGroupStart =
                isFirstInGroup && rowIdx > 0;

              return (
                <tr
                  key={rowIdx}
                  className={
                    isGroupStart
                      ? "border-t-2 border-border"
                      : ""
                  }
                >
                  {isFirstInGroup && (
                    <td
                      rowSpan={groupSpan}
                      className="px-3 py-3 border border-border align-middle text-center"
                      style={{
                        backgroundColor: getPathwayStyle(group!.label).bg,
                        color: getPathwayStyle(group!.label).text,
                        borderColor: getPathwayStyle(group!.label).border,
                      }}
                    >
                      <span className="text-xs font-bold uppercase tracking-wider whitespace-pre-line leading-relaxed">
                        {group!.label}
                      </span>
                    </td>
                  )}
                  {track.columns.map((_, colIdx) => {
                    const cellNodes = rowNodes.filter(
                      (n) => n.col === colIdx
                    );
                    return (
                      <td
                        key={colIdx}
                        className="px-2 py-2 border border-border align-top"
                      >
                        <div className="space-y-1">
                          {cellNodes.map((node) => (
                            <TrackNodeCard
                              key={`${node.courseId}-${node.row}-${node.col}`}
                              courseId={node.courseId}
                              label={node.label}
                              compact
                            />
                          ))}
                        </div>
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Mobile: grouped sections */}
      <div className="md:hidden space-y-4">
        {track.rowGroups?.map((group) => {
          const style = getPathwayStyle(group.label);
          return (
            <div key={group.label} className="bg-white border border-border rounded-xl overflow-hidden">
              <div
                className="px-4 py-2.5 border-b"
                style={{ backgroundColor: style.bg, color: style.text, borderColor: style.border }}
              >
                <p className="text-xs font-bold uppercase tracking-wider whitespace-pre-line">
                  {track.rowGroupHeader ? `${track.rowGroupHeader}: ` : ""}{group.label}
                </p>
              </div>
              <div className="divide-y divide-border">
                {Array.from(
                  { length: group.endRow - group.startRow + 1 },
                  (_, i) => group.startRow + i
                ).map((rowIdx) => {
                  const rowNodes = track.nodes.filter(
                    (n) => n.row === rowIdx
                  );
                  if (rowNodes.length === 0) return null;
                  return (
                    <div key={rowIdx} className="px-4 py-3">
                      {track.columns.map((colLabel, colIdx) => {
                        const cellNodes = rowNodes.filter(
                          (n) => n.col === colIdx
                        );
                        if (cellNodes.length === 0) return null;
                        return (
                          <div key={colIdx} className="mb-2 last:mb-0">
                            <p className="text-[10px] font-medium text-text-muted uppercase tracking-wider mb-1">
                              {colLabel}
                            </p>
                            <div className="flex flex-wrap gap-1">
                              {cellNodes.map((node) => (
                                <TrackNodeCard
                                  key={`${node.courseId}-${node.row}-${node.col}-m`}
                                  courseId={node.courseId}
                                  label={node.label}
                                  compact
                                />
                              ))}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <TrackLegend track={track} />
    </div>
  );
}

// ─── Grade Grid (default: rows=grades, cols=levels) ─────────────────────────

function GradeGrid({ track, deptColor }: { track: Track; deptColor?: string }) {
  const rowCount = Math.max(...track.nodes.map((n) => n.row)) + 1;
  const gradeLabels = DEFAULT_GRADE_LABELS.slice(0, rowCount);
  const nodesByRow = Array.from({ length: rowCount }, (_, row) =>
    track.nodes.filter((n) => n.row === row)
  );

  return (
    <div>
      {/* Desktop: Grid layout */}
      <div className="hidden md:block">
        {/* Column headers */}
        <div
          className="grid gap-3 mb-4"
          style={{
            gridTemplateColumns: `100px repeat(${track.columns.length}, 1fr)`,
          }}
        >
          <div />
          {track.columns.map((col) => (
            <div
              key={col}
              className="text-xs font-medium text-center"
              style={{ color: deptColor ?? undefined }}
            >
              {col}
            </div>
          ))}
        </div>

        {/* Rows by grade */}
        {nodesByRow.map((nodes, rowIdx) => (
          <div
            key={rowIdx}
            className="grid gap-3 mb-3 items-start"
            style={{
              gridTemplateColumns: `100px repeat(${track.columns.length}, 1fr)`,
            }}
          >
            <div className="flex items-center gap-1.5 text-xs font-semibold text-text-muted pt-2">
              {rowIdx > 0 && (
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-border">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              )}
              {gradeLabels[rowIdx]}
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
              {gradeLabels[rowIdx]}
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

      <TrackLegend track={track} />
    </div>
  );
}

// ─── Shared components ──────────────────────────────────────────────────────

function TrackNodeCard({
  courseId,
  label,
  compact,
}: {
  courseId: string;
  label?: string;
  compact?: boolean;
}) {
  const course = getCourseById(courseId);

  // Course not in catalog (middle school courses, ICS variants)
  if (!course) {
    if (!label) return null;
    return (
      <div
        className={`${compact ? "px-2 py-1" : "p-2.5"} bg-warm-gray border border-border rounded-md text-xs`}
      >
        <span className="font-medium text-text-muted leading-tight">
          {label}
        </span>
      </div>
    );
  }

  return (
    <Link
      href={`/courses/${courseId}`}
      className={`group block ${compact ? "px-2 py-1.5" : "p-2.5"} bg-white border border-border rounded-md card-hover text-sm hover:border-mountie-blue/30`}
    >
      <div className="flex items-center justify-between gap-2">
        <span className="font-medium text-text leading-tight text-xs group-hover:text-mountie-blue transition-colors">
          {label || course.name}
        </span>
        <LevelBadge level={course.level} />
      </div>
      {!compact && (
        <p className="text-[10px] text-text-muted mt-0.5 font-mono">
          {course.code}
        </p>
      )}
    </Link>
  );
}

function TrackLegend({ track }: { track: Track }) {
  return (
    <div className="mt-6 p-4 bg-warm-gray rounded-lg">
      <p className="text-xs font-medium text-text-muted mb-2">Level Legend</p>
      <div className="flex flex-wrap gap-2">
        {(
          ["academic", "honors", "ap", "high-honors", "resource"] as const
        ).map((level) => (
          <LevelBadge key={level} level={level} />
        ))}
      </div>
      {track.edges.some((e) => e.label) && (
        <p className="text-xs text-text-muted mt-2">
          Arrows with numbers indicate minimum grade averages required for
          progression.
        </p>
      )}
      {track.rowGroups && (
        <p className="text-xs text-text-muted mt-2">
          Each row shows a pathway option. Course cells list possible courses at that grade level.
          Consult with your counselor for specific recommendations.
        </p>
      )}
    </div>
  );
}
