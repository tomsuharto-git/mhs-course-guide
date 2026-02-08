import { CourseLevel, Department } from '../types';

export type WizardStepType =
  | 'pathway-select'
  | 'math-entry'
  | 'language-select'
  | 'auto-fill'
  | 'elective-browse'
  | 'review';

export interface WizardStepDef {
  id: string;
  department: Department | 'review';
  label: string;
  shortLabel: string;  // for mobile
  type: WizardStepType;
  subtitle: string;
}

export interface PathwayOption {
  id: string;
  label: string;
  description: string;
  level: CourseLevel;
  courses: Record<number, string>;       // grade → default courseId
  choices?: Record<number, string[]>;    // grade → [courseId options] when student picks
}

export interface MathEntryPoint {
  id: string;
  label: string;
  description: string;
  pathways: PathwayOption[];
}

export interface LanguageEntryPoint {
  id: string;
  label: string;
  pathways: PathwayOption[];
}

export interface LanguageOption {
  id: string;
  label: string;
  honorsProgression: string[];   // courseId sequence (e.g. ['spanish-1-h', 'spanish-2-h', ...])
  academicProgression?: string[];  // only Spanish has academic track
  maxYears: number;
}

export interface WizardState {
  currentStep: number;
  selections: {
    english?: string;
    math?: string;
    mathEntry?: string;
    science?: string;
    'social-studies'?: string;
    'world-languages'?: string;
    languageEntry?: string;
  };
  gradeChoices: Record<string, string>;  // "english-11" → courseId
}

export const INITIAL_WIZARD_STATE: WizardState = {
  currentStep: 0,
  selections: {},
  gradeChoices: {},
};
