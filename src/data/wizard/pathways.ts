import { PathwayOption } from './types';

// ═══════════════════════════════════════════════════════════════════════
// ENGLISH PATHWAYS
// ═══════════════════════════════════════════════════════════════════════

export const englishPathways: PathwayOption[] = [
  {
    id: 'english-honors-ap',
    label: 'Honors → AP',
    description: 'Honors track with AP options in junior and senior year',
    level: 'honors',
    courses: { 9: 'world-lit-h', 10: 'eng-10-h', 11: 'ap-eng-lang', 12: 'ap-eng-lit' },
    choices: {
      11: ['ap-eng-lang', 'eng-11-h'],
      12: ['ap-eng-lit', 'eng-12-h'],
    },
  },
  {
    id: 'english-academic',
    label: 'Academic',
    description: 'College-prep English across all four years',
    level: 'academic',
    courses: { 9: 'world-lit-h', 10: 'eng-10', 11: 'eng-11', 12: 'eng-12' },
    choices: {
      10: ['eng-10', 'eng-10-h'],
      11: ['eng-11', 'eng-11-h'],
      12: ['eng-12', 'eng-12-h', 'ap-eng-lit'],
    },
  },
  {
    id: 'english-resource',
    label: 'Resource',
    description: 'Modified instruction with IEP support',
    level: 'resource',
    courses: { 9: 'world-lit-r', 10: 'eng-10-r', 11: 'eng-11-r', 12: 'eng-12-r' },
  },
];

// ═══════════════════════════════════════════════════════════════════════
// SCIENCE PATHWAYS
// ═══════════════════════════════════════════════════════════════════════

export const sciencePathways: PathwayOption[] = [
  {
    id: 'science-honors-ap',
    label: 'Honors → AP',
    description: 'Honors sciences with AP options in senior year',
    level: 'honors',
    courses: { 9: 'bio-h', 10: 'geosci-h', 11: 'chem-h', 12: 'ap-chem' },
    choices: {
      12: ['ap-chem', 'ap-bio', 'ap-physics-1', 'ap-enviro', 'physics-h', 'enviro-h'],
    },
  },
  {
    id: 'science-academic',
    label: 'Academic',
    description: 'College-prep science sequence',
    level: 'academic',
    courses: { 9: 'bio-h', 10: 'geosci', 11: 'chem', 12: 'physics' },
    choices: {
      11: ['chem', 'chem-h', 'enviro', 'enviro-h'],
      12: ['physics', 'physics-h', 'enviro', 'enviro-h', 'anatomy-h', 'forensic-sci'],
    },
  },
  {
    id: 'science-resource',
    label: 'Resource',
    description: 'Modified instruction with IEP support',
    level: 'resource',
    courses: { 9: 'bio-r', 10: 'geosci-r', 11: 'chem-r', 12: 'enviro-r' },
    choices: {
      11: ['chem-r', 'enviro-r'],
      12: ['enviro-r', 'chem-r'],
    },
  },
];

// ═══════════════════════════════════════════════════════════════════════
// SOCIAL STUDIES PATHWAYS
// ═══════════════════════════════════════════════════════════════════════

export const socialStudiesPathways: PathwayOption[] = [
  {
    id: 'ss-ap',
    label: 'AP Track',
    description: 'High Honors US History I → AP US History → AP electives',
    level: 'ap',
    courses: { 9: 'global-studies-h', 10: 'us-hist-1-hh', 11: 'ap-us-hist', 12: 'ap-euro-hist' },
    choices: {
      12: [
        'ap-euro-hist', 'ap-world-hist', 'ap-human-geo', 'ap-psych',
        'ap-african-am-studies', 'holocaust-genocide', 'microecon-h',
      ],
    },
  },
  {
    id: 'ss-honors',
    label: 'Honors',
    description: 'Honors sequence with senior elective choices',
    level: 'honors',
    courses: { 9: 'global-studies-h', 10: 'us-hist-1-h', 11: 'us-hist-2-h', 12: 'holocaust-genocide' },
    choices: {
      11: ['us-hist-2-h', 'ap-us-hist'],
      12: [
        'holocaust-genocide', 'african-am-hist', 'cultural-pluralism',
        'women-of-world', 'am-foreign-policy-h', 'microecon-h',
        'ap-euro-hist', 'ap-human-geo', 'ap-african-am-studies',
      ],
    },
  },
  {
    id: 'ss-academic',
    label: 'Academic',
    description: 'College-prep sequence with senior elective choices',
    level: 'academic',
    courses: { 9: 'global-studies-h', 10: 'us-hist-1', 11: 'us-hist-2', 12: 'holocaust-genocide' },
    choices: {
      12: [
        'holocaust-genocide', 'african-am-hist', 'cultural-pluralism',
        'women-of-world', '20th-century-culture', 'am-foreign-policy-h', 'microecon-h',
      ],
    },
  },
  {
    id: 'ss-resource',
    label: 'Resource',
    description: 'Modified instruction with IEP support',
    level: 'resource',
    courses: { 9: 'global-studies-r', 10: 'us-hist-1-r', 11: 'us-hist-2-r', 12: 'holocaust-genocide' },
    choices: {
      12: ['holocaust-genocide', 'african-am-hist', 'cultural-pluralism', 'women-of-world'],
    },
  },
];

// Map step ID to its pathway options
export const PATHWAY_MAP: Record<string, PathwayOption[]> = {
  english: englishPathways,
  science: sciencePathways,
  'social-studies': socialStudiesPathways,
};
