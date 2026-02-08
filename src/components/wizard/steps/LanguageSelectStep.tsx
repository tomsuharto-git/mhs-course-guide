"use client";

import { useState, useEffect, useRef } from 'react';
import { CoursePlan } from '@/lib/journey/plan-state';
import { WizardState } from '@/data/wizard/types';
import { languageOptions } from '@/data/wizard/languages';
import { getCourseById } from '@/data/courses';
import { DEPARTMENT_META } from '@/data/types';
import { LevelBadge } from '@/components/shared/Badge';
import { WizardHeader } from '../WizardHeader';
import { WizardNavButtons } from '../WizardNavButtons';

interface LanguageSelectStepProps {
  stepIndex: number;
  wizard: WizardState;
  plan: CoursePlan;
  applyPathway: (department: string, pathwayId: string, courses: Record<number, string>) => void;
  setLanguageConfig: (config: WizardState['languageConfig']) => void;
  clearDepartmentCourses: (department: string) => void;
  goNext: () => void;
  goBack: () => void;
}

export function LanguageSelectStep({
  stepIndex,
  wizard,
  plan,
  applyPathway,
  setLanguageConfig,
  clearDepartmentCourses,
  goNext,
  goBack,
}: LanguageSelectStepProps) {
  const color = DEPARTMENT_META['world-languages'].color;
  const config = wizard.languageConfig;
  const [language, setLanguage] = useState(config?.language ?? '');
  const [track, setTrack] = useState<'academic' | 'honors'>(config?.track ?? 'honors');
  const [startGrade, setStartGrade] = useState(config?.startGrade ?? 9);
  const [years, setYears] = useState(config?.years ?? 2);
  const isInitialMount = useRef(true);

  const langOption = languageOptions.find((l) => l.id === language);
  const hasAcademic = !!langOption?.academicProgression;
  const progression = track === 'academic' && langOption?.academicProgression
    ? langOption.academicProgression
    : langOption?.honorsProgression ?? [];
  const maxYears = Math.min(langOption?.maxYears ?? 4, 13 - startGrade);
  const actualYears = Math.min(years, maxYears);

  // Compute course preview
  const preview: { grade: number; courseId: string; name: string }[] = [];
  if (langOption) {
    for (let i = 0; i < actualYears; i++) {
      const grade = startGrade + i;
      if (grade > 12) break;
      const courseId = progression[i];
      if (!courseId) break;
      const course = getCourseById(courseId);
      preview.push({ grade, courseId, name: course?.name ?? courseId });
    }
  }

  // Auto-apply when selections change (not on initial mount if config exists)
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      if (config) return; // Already applied from a previous visit
    }
    if (language && preview.length > 0) {
      const courses: Record<number, string> = {};
      for (const { grade, courseId } of preview) {
        courses[grade] = courseId;
      }
      // applyPathway atomically removes old dept courses and adds new ones
      applyPathway('world-languages', `${language}-${track}`, courses);
      setLanguageConfig({ language, track, startGrade, years: actualYears });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language, track, startGrade, years]);

  // Phase 1: Language selection
  if (!language) {
    return (
      <div>
        <WizardHeader stepIndex={stepIndex} />
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {languageOptions.map((lang) => (
            <button
              key={lang.id}
              onClick={() => setLanguage(lang.id)}
              className="text-left rounded-xl border-2 border-border hover:border-border/80 hover:shadow-sm transition-all p-4"
            >
              <div className="text-[15px] font-semibold text-text">{lang.label}</div>
              <div className="text-[11px] text-text-muted mt-1">
                Up to {lang.maxYears} years
              </div>
            </button>
          ))}
        </div>

        <WizardNavButtons
          currentStep={stepIndex}
          onNext={goNext}
          onBack={goBack}
          canAdvance={false}
          nextLabel="Select a language above"
        />
      </div>
    );
  }

  // Phase 2: Configure years/track/start
  return (
    <div>
      <WizardHeader stepIndex={stepIndex} />

      <button
        onClick={() => {
          setLanguage('');
          clearDepartmentCourses('world-languages');
          setLanguageConfig(undefined);
        }}
        className="flex items-center gap-1.5 text-sm text-text-muted hover:text-text transition-colors mb-5"
      >
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
          <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Change language: {langOption?.label}
      </button>

      <div className="space-y-5">
        {hasAcademic && (
          <div>
            <label className="text-xs font-medium text-text-muted uppercase tracking-wider block mb-2">
              Level
            </label>
            <div className="flex gap-2">
              {(['honors', 'academic'] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setTrack(t)}
                  className={`px-3 py-1.5 text-sm rounded-lg border transition-colors ${
                    track === t
                      ? 'border-current font-medium text-text'
                      : 'border-border text-text-muted hover:border-border/80'
                  }`}
                  style={track === t ? { borderColor: color, backgroundColor: color + '10' } : undefined}
                >
                  {t.charAt(0).toUpperCase() + t.slice(1)}
                </button>
              ))}
            </div>
          </div>
        )}

        <div>
          <label className="text-xs font-medium text-text-muted uppercase tracking-wider block mb-2">
            Starting Grade
          </label>
          <div className="flex gap-2">
            {[9, 10, 11, 12].map((g) => (
              <button
                key={g}
                onClick={() => setStartGrade(g)}
                className={`px-3 py-1.5 text-sm rounded-lg border transition-colors ${
                  startGrade === g
                    ? 'border-current font-medium text-text'
                    : 'border-border text-text-muted hover:border-border/80'
                }`}
                style={startGrade === g ? { borderColor: color, backgroundColor: color + '10' } : undefined}
              >
                {g}th
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="text-xs font-medium text-text-muted uppercase tracking-wider block mb-2">
            Years ({actualYears})
          </label>
          <input
            type="range"
            min={1}
            max={maxYears}
            value={actualYears}
            onChange={(e) => setYears(Number(e.target.value))}
            className="w-full accent-[var(--lang-color)]"
            style={{ '--lang-color': color } as React.CSSProperties}
          />
          <div className="flex justify-between text-[11px] text-text-muted mt-1">
            <span>1 year</span>
            <span>{maxYears} years</span>
          </div>
        </div>

        {preview.length > 0 && (
          <div>
            <label className="text-xs font-medium text-text-muted uppercase tracking-wider block mb-2">
              Course Preview
            </label>
            <div className="flex flex-wrap gap-2">
              {preview.map(({ grade, courseId, name }) => {
                const course = getCourseById(courseId);
                return (
                  <div
                    key={grade}
                    className="flex items-center gap-1.5 text-[12px] px-2.5 py-1.5 rounded-lg text-white"
                    style={{ backgroundColor: color }}
                  >
                    <span><span className="font-medium">{grade}th:</span> {name}</span>
                    {course && <LevelBadge level={course.level} inverted />}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      <WizardNavButtons
        currentStep={stepIndex}
        onNext={goNext}
        onBack={goBack}
        canAdvance={preview.length > 0}
      />
    </div>
  );
}
