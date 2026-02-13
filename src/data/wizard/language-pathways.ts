import { LanguageEntryPoint } from './types';

// ═══════════════════════════════════════════════════════════════════════
// LANGUAGE PATHWAYS
// ═══════════════════════════════════════════════════════════════════════
// Each language is an "entry point" (like math), then students pick a
// commitment-level track shown as PathwayCards.
//
// AP tracks assume the student completed Level I before high school
// (e.g. in middle school). Standard tracks start fresh in 9th grade.
// ═══════════════════════════════════════════════════════════════════════

export const languageEntryPoints: LanguageEntryPoint[] = [
  {
    id: 'spanish',
    label: 'Spanish',
    pathways: [
      {
        id: 'spanish-honors-ap',
        label: 'Honors \u2192 AP',
        description: 'Completed Spanish I before high school \u2014 honors path to AP',
        level: 'honors',
        courses: { 9: 'spanish-2-h', 10: 'spanish-3-h', 11: 'spanish-4-h', 12: 'ap-spanish-5' },
      },
      {
        id: 'spanish-honors-4yr',
        label: 'Honors (4 Years)',
        description: 'Full honors sequence from Spanish I through IV',
        level: 'honors',
        courses: { 9: 'spanish-1-h', 10: 'spanish-2-h', 11: 'spanish-3-h', 12: 'spanish-4-h' },
      },
      {
        id: 'spanish-academic-4yr',
        label: 'Academic (4 Years)',
        description: 'Full academic sequence from Spanish 1 through 4',
        level: 'academic',
        courses: { 9: 'spanish-1', 10: 'spanish-2', 11: 'spanish-3', 12: 'spanish-4' },
      },
      {
        id: 'spanish-3yr',
        label: '3 Years',
        description: 'Three-year sequence through Level III',
        level: 'honors',
        courses: { 9: 'spanish-1-h', 10: 'spanish-2-h', 11: 'spanish-3-h' },
        choices: { 9: ['spanish-1-h', 'spanish-1'], 10: ['spanish-2-h', 'spanish-2'], 11: ['spanish-3-h', 'spanish-3'] },
      },
      {
        id: 'spanish-2yr',
        label: '2 Years',
        description: 'Meets most college language requirements',
        level: 'honors',
        courses: { 9: 'spanish-1-h', 10: 'spanish-2-h' },
        choices: { 9: ['spanish-1-h', 'spanish-1'], 10: ['spanish-2-h', 'spanish-2'] },
      },
      {
        id: 'spanish-1yr',
        label: '1 Year',
        description: 'Try Spanish for one year',
        level: 'honors',
        courses: { 9: 'spanish-1-h' },
        choices: { 9: ['spanish-1-h', 'spanish-1'] },
      },
    ],
  },
  {
    id: 'french',
    label: 'French',
    pathways: [
      {
        id: 'french-honors-ap',
        label: 'Honors \u2192 AP',
        description: 'Completed French I before high school \u2014 honors path to AP',
        level: 'honors',
        courses: { 9: 'french-2-h', 10: 'french-3-h', 11: 'french-4-h', 12: 'ap-french-5' },
      },
      {
        id: 'french-honors-4yr',
        label: 'Honors (4 Years)',
        description: 'Full honors sequence from French I through IV',
        level: 'honors',
        courses: { 9: 'french-1-h', 10: 'french-2-h', 11: 'french-3-h', 12: 'french-4-h' },
      },
      {
        id: 'french-3yr',
        label: '3 Years',
        description: 'Three-year sequence through Level III',
        level: 'honors',
        courses: { 9: 'french-1-h', 10: 'french-2-h', 11: 'french-3-h' },
      },
      {
        id: 'french-2yr',
        label: '2 Years',
        description: 'Meets most college language requirements',
        level: 'honors',
        courses: { 9: 'french-1-h', 10: 'french-2-h' },
      },
      {
        id: 'french-1yr',
        label: '1 Year',
        description: 'Try French for one year',
        level: 'honors',
        courses: { 9: 'french-1-h' },
      },
    ],
  },
  {
    id: 'mandarin',
    label: 'Mandarin',
    pathways: [
      {
        id: 'mandarin-honors-ap',
        label: 'Honors \u2192 AP',
        description: 'Completed Mandarin I before high school \u2014 honors path to AP',
        level: 'honors',
        courses: { 9: 'mandarin-2-h', 10: 'mandarin-3-h', 11: 'mandarin-4-h', 12: 'ap-chinese' },
      },
      {
        id: 'mandarin-honors-4yr',
        label: 'Honors (4 Years)',
        description: 'Full honors sequence from Mandarin I through IV',
        level: 'honors',
        courses: { 9: 'mandarin-1-h', 10: 'mandarin-2-h', 11: 'mandarin-3-h', 12: 'mandarin-4-h' },
      },
      {
        id: 'mandarin-3yr',
        label: '3 Years',
        description: 'Three-year sequence through Level III',
        level: 'honors',
        courses: { 9: 'mandarin-1-h', 10: 'mandarin-2-h', 11: 'mandarin-3-h' },
      },
      {
        id: 'mandarin-2yr',
        label: '2 Years',
        description: 'Meets most college language requirements',
        level: 'honors',
        courses: { 9: 'mandarin-1-h', 10: 'mandarin-2-h' },
      },
      {
        id: 'mandarin-1yr',
        label: '1 Year',
        description: 'Try Mandarin for one year',
        level: 'honors',
        courses: { 9: 'mandarin-1-h' },
      },
    ],
  },
  {
    id: 'german',
    label: 'German',
    pathways: [
      {
        id: 'german-honors-4yr',
        label: '4 Years',
        description: 'Full honors sequence from German I through IV',
        level: 'honors',
        courses: { 9: 'german-1-h', 10: 'german-2-h', 11: 'german-3-h', 12: 'german-4-h' },
      },
      {
        id: 'german-3yr',
        label: '3 Years',
        description: 'Three-year sequence through Level III',
        level: 'honors',
        courses: { 9: 'german-1-h', 10: 'german-2-h', 11: 'german-3-h' },
      },
      {
        id: 'german-2yr',
        label: '2 Years',
        description: 'Meets most college language requirements',
        level: 'honors',
        courses: { 9: 'german-1-h', 10: 'german-2-h' },
      },
      {
        id: 'german-1yr',
        label: '1 Year',
        description: 'Try German for one year',
        level: 'honors',
        courses: { 9: 'german-1-h' },
      },
    ],
  },
  {
    id: 'italian',
    label: 'Italian',
    pathways: [
      {
        id: 'italian-honors-4yr',
        label: '4 Years',
        description: 'Full honors sequence from Italian I through IV',
        level: 'honors',
        courses: { 9: 'italian-1-h', 10: 'italian-2-h', 11: 'italian-3-h', 12: 'italian-4-h' },
      },
      {
        id: 'italian-3yr',
        label: '3 Years',
        description: 'Three-year sequence through Level III',
        level: 'honors',
        courses: { 9: 'italian-1-h', 10: 'italian-2-h', 11: 'italian-3-h' },
      },
      {
        id: 'italian-2yr',
        label: '2 Years',
        description: 'Meets most college language requirements',
        level: 'honors',
        courses: { 9: 'italian-1-h', 10: 'italian-2-h' },
      },
      {
        id: 'italian-1yr',
        label: '1 Year',
        description: 'Try Italian for one year',
        level: 'honors',
        courses: { 9: 'italian-1-h' },
      },
    ],
  },
  {
    id: 'latin',
    label: 'Latin',
    pathways: [
      {
        id: 'latin-honors-4yr',
        label: '4 Years',
        description: 'Full honors sequence from Latin I through IV',
        level: 'honors',
        courses: { 9: 'latin-1-h', 10: 'latin-2-h', 11: 'latin-3-h', 12: 'latin-4-h' },
      },
      {
        id: 'latin-3yr',
        label: '3 Years',
        description: 'Three-year sequence through Level III',
        level: 'honors',
        courses: { 9: 'latin-1-h', 10: 'latin-2-h', 11: 'latin-3-h' },
      },
      {
        id: 'latin-2yr',
        label: '2 Years',
        description: 'Meets most college language requirements',
        level: 'honors',
        courses: { 9: 'latin-1-h', 10: 'latin-2-h' },
      },
      {
        id: 'latin-1yr',
        label: '1 Year',
        description: 'Try Latin for one year',
        level: 'honors',
        courses: { 9: 'latin-1-h' },
      },
    ],
  },
];
