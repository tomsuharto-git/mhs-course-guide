"use client";

import { useState } from "react";
import type { SpecialProgram } from "@/data/programs";

function ProgramContent({ program }: { program: SpecialProgram }) {
  const gradeLabel =
    program.grades.length === 1
      ? `Grade ${program.grades[0]}`
      : program.grades.length === 4
        ? "Grades 9\u201312"
        : `Grades ${program.grades[0]}\u2013${program.grades[program.grades.length - 1]}`;

  return (
    <div className="space-y-4">
      {/* Meta row */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="inline-flex items-center px-2 py-0.5 text-xs text-text-muted bg-warm-gray rounded">
          {gradeLabel}
        </span>
        {program.credits && (
          <span className="inline-flex items-center px-2 py-0.5 text-xs text-text-muted bg-warm-gray rounded">
            {program.credits} cr/yr
          </span>
        )}
        {program.creditsNote && (
          <span className="text-xs text-text-muted italic">
            {program.creditsNote}
          </span>
        )}
      </div>

      {program.prerequisite && (
        <p className="text-xs text-text-muted">
          <span className="font-medium">Prerequisite:</span>{" "}
          {program.prerequisite}
        </p>
      )}

      <p className="text-[15px] text-text leading-relaxed">
        {program.description}
      </p>

      {program.highlights && program.highlights.length > 0 && (
        <ul className="text-sm text-text-muted space-y-1.5">
          {program.highlights.map((h, i) => (
            <li key={i} className="flex gap-2">
              <span className="text-mountie-blue shrink-0 mt-0.5">&#8226;</span>
              <span>{h}</span>
            </li>
          ))}
        </ul>
      )}

      {program.fulfills && program.fulfills.length > 0 && (
        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border">
          <span className="text-xs text-text-muted">Fulfills:</span>
          {program.fulfills.map((f) => (
            <span
              key={f}
              className="inline-flex items-center px-2 py-0.5 text-xs bg-mountie-blue/5 text-mountie-blue rounded"
            >
              {f}
            </span>
          ))}
        </div>
      )}

      {program.contact && (
        <p className="text-xs text-text-muted pt-3 border-t border-border">
          <span className="font-medium">Contact:</span> {program.contact}
        </p>
      )}
    </div>
  );
}

export function ProgramTabs({
  programs,
  accentColor,
}: {
  programs: SpecialProgram[];
  accentColor: string;
}) {
  const [activeId, setActiveId] = useState(programs[0]?.id ?? "");
  const active = programs.find((p) => p.id === activeId) ?? programs[0];

  return (
    <div className="bg-white border border-border rounded-xl overflow-hidden">
      {/* Tab bar */}
      <div
        className="flex border-b border-border bg-warm-gray/40"
        role="tablist"
      >
        {programs.map((p) => {
          const isActive = p.id === active.id;
          return (
            <button
              key={p.id}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveId(p.id)}
              className="relative flex-1 px-4 py-3 text-sm font-medium transition-colors cursor-pointer text-center"
              style={{
                color: isActive ? accentColor : undefined,
              }}
            >
              <span className="relative z-10">{p.shortName}</span>
              {p.shortName !== p.name && (
                <span className="hidden sm:inline text-xs font-normal text-text-muted ml-1.5">
                  {p.name.length > 30
                    ? p.name.slice(0, 28) + "\u2026"
                    : p.name}
                </span>
              )}
              {/* Active indicator */}
              <span
                className="absolute bottom-0 left-0 right-0 h-0.5 transition-all duration-200"
                style={{
                  backgroundColor: isActive ? accentColor : "transparent",
                  transform: isActive ? "scaleX(1)" : "scaleX(0)",
                }}
              />
            </button>
          );
        })}
      </div>

      {/* Content panel */}
      <div className="p-5 sm:p-6" role="tabpanel">
        <h3 className="text-lg font-semibold text-text mb-3">
          {active.shortName !== active.name && (
            <span style={{ color: accentColor }}>{active.shortName} </span>
          )}
          <span className="font-medium text-base">
            {active.shortName !== active.name
              ? `\u2014 ${active.name}`
              : active.name}
          </span>
        </h3>
        <ProgramContent program={active} />
      </div>
    </div>
  );
}
