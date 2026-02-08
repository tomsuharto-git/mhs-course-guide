"use client";

import { PathwayOption } from '@/data/wizard/types';
import { getCourseById } from '@/data/courses';
import { DEPARTMENT_META, Department } from '@/data/types';
import { LevelBadge } from '@/components/shared/Badge';

const GRADE_LABELS: Record<number, string> = {
  9: '9th', 10: '10th', 11: '11th', 12: '12th',
};

interface PathwayCardProps {
  pathway: PathwayOption;
  selected: boolean;
  department: Department;
  onSelect: () => void;
  gradeChoices: Record<string, string>;
  onGradeChoice: (key: string, courseId: string, grade: number) => void;
}

export function PathwayCard({
  pathway,
  selected,
  department,
  onSelect,
  gradeChoices,
  onGradeChoice,
}: PathwayCardProps) {
  const color = DEPARTMENT_META[department]?.color ?? '#666';

  return (
    <button
      onClick={onSelect}
      className={`w-full text-left rounded-xl border-2 transition-all ${
        selected
          ? 'border-current shadow-sm'
          : 'border-border hover:border-border/80 hover:shadow-sm'
      }`}
      style={selected ? { borderColor: color } : undefined}
    >
      <div className="p-4">
        {/* Header row */}
        <div className="flex items-center gap-2.5 mb-1">
          {/* Color bar */}
          <div
            className="w-1 h-8 rounded-full shrink-0"
            style={{ backgroundColor: color }}
          />
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-[15px] font-semibold text-text">{pathway.label}</span>
            </div>
            <p className="text-xs text-text-muted leading-snug mt-0.5">{pathway.description}</p>
          </div>

          {/* Radio indicator */}
          <div
            className={`w-5 h-5 rounded-full border-2 shrink-0 flex items-center justify-center transition-colors ${
              selected ? 'border-current' : 'border-border'
            }`}
            style={selected ? { borderColor: color } : undefined}
          >
            {selected && (
              <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: color }} />
            )}
          </div>
        </div>

        {/* 4-year preview (only when selected) */}
        {selected && (
          <div className="mt-3 pt-3 border-t border-border/50">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {([9, 10, 11, 12] as const).map((grade) => {
                const courseId = pathway.courses[grade];
                const choices = pathway.choices?.[grade];
                const choiceKey = `${department}-${grade}`;
                const activeChoice = gradeChoices[choiceKey] ?? courseId;
                const course = getCourseById(activeChoice);

                return (
                  <div key={grade} className="min-w-0">
                    <div className="text-[10px] font-medium text-text-muted uppercase tracking-wider mb-1">
                      {GRADE_LABELS[grade]}
                    </div>
                    {choices && choices.length > 1 ? (
                      <div className="space-y-1.5">
                        {choices.map((choiceId) => {
                          const choiceCourse = getCourseById(choiceId);
                          const isActive = activeChoice === choiceId;
                          return (
                            <button
                              key={choiceId}
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                onGradeChoice(choiceKey, choiceId, grade);
                              }}
                              className={`group w-full text-left rounded-lg border px-2 py-1.5 transition-all duration-200 ${
                                isActive
                                  ? 'border-transparent'
                                  : 'border-border bg-surface hover:border-transparent'
                              }`}
                              style={isActive ? { backgroundColor: color, borderColor: color } : undefined}
                              onMouseEnter={(e) => {
                                if (!isActive) {
                                  e.currentTarget.style.backgroundColor = color;
                                  e.currentTarget.style.borderColor = color;
                                  e.currentTarget.style.opacity = '0.7';
                                }
                              }}
                              onMouseLeave={(e) => {
                                if (!isActive) {
                                  e.currentTarget.style.backgroundColor = '';
                                  e.currentTarget.style.borderColor = '';
                                  e.currentTarget.style.opacity = '';
                                }
                              }}
                            >
                              <div className="flex items-start justify-between gap-1">
                                <span className={`text-[11px] leading-tight transition-colors duration-200 ${
                                  isActive ? 'text-white' : 'text-text group-hover:text-white'
                                }`}>
                                  {choiceCourse?.name ?? choiceId}
                                </span>
                                {choiceCourse && (
                                  <span className="shrink-0">
                                    <span className={isActive ? '' : 'group-hover:hidden'}>
                                      <LevelBadge level={choiceCourse.level} deptColor={color} inverted={isActive} />
                                    </span>
                                    {!isActive && (
                                      <span className="hidden group-hover:inline">
                                        <LevelBadge level={choiceCourse.level} inverted />
                                      </span>
                                    )}
                                  </span>
                                )}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    ) : (
                      <div
                        className="rounded-lg border border-transparent px-2 py-1.5"
                        style={{ backgroundColor: color }}
                      >
                        <div className="flex items-start justify-between gap-1">
                          <span className="text-[11px] leading-tight text-white">
                            {course?.name ?? courseId}
                          </span>
                          {course && (
                            <span className="shrink-0">
                              <LevelBadge level={course.level} inverted />
                            </span>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </button>
  );
}
