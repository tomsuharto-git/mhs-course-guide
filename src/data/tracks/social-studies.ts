import { Track } from '../types';

export const socialStudiesTrack: Track = {
  id: 'social-studies',
  name: 'Social Studies',
  department: 'social-studies',
  description: 'Core pathway from Global Studies through U.S. History, plus senior electives in AP History, Economics, Psychology, and more.',
  columns: ['Resource', 'Academic', 'Honors / High Honors', 'AP'],
  nodes: [
    // Grade 9 (row 0)
    { courseId: 'global-studies-r', row: 0, col: 0, label: 'Global Studies' },
    { courseId: 'global-studies-h', row: 0, col: 2, label: 'Global Studies H' },

    // Grade 10 (row 1)
    { courseId: 'us-hist-1-r', row: 1, col: 0, label: 'U.S. History I' },
    { courseId: 'us-hist-1', row: 1, col: 1 },
    { courseId: 'us-hist-1-h', row: 1, col: 2 },
    { courseId: 'us-hist-1-hh', row: 1, col: 2, label: 'U.S. History I HH' },

    // Grade 11 (row 2)
    { courseId: 'us-hist-2-r', row: 2, col: 0, label: 'U.S. History II' },
    { courseId: 'us-hist-2', row: 2, col: 1 },
    { courseId: 'us-hist-2-h', row: 2, col: 2 },
    { courseId: 'ap-us-hist', row: 2, col: 3, label: 'AP U.S. History' },

    // Grade 12 electives (row 3) — Patterns semester courses + full-year AP/H
    { courseId: 'holocaust-genocide', row: 3, col: 1, label: 'Holocaust & Genocide' },
    { courseId: 'african-am-hist', row: 3, col: 1, label: 'African Am. History' },
    { courseId: '20th-century-culture', row: 3, col: 1, label: '20th Century Culture' },
    { courseId: 'women-of-world', row: 3, col: 1, label: 'Women of the World' },
    { courseId: 'cultural-pluralism', row: 3, col: 1, label: 'Cultural Pluralism' },
    { courseId: 'microecon-h', row: 3, col: 2, label: 'Microeconomics H' },
    { courseId: 'macroecon-h', row: 3, col: 2, label: 'Macroeconomics H' },
    { courseId: 'am-foreign-policy-h', row: 3, col: 2, label: 'Am. Foreign Policy H' },
    { courseId: 'ap-euro-hist', row: 3, col: 3, label: 'AP European History' },
    { courseId: 'ap-world-hist', row: 3, col: 3, label: 'AP World History' },
    { courseId: 'ap-psych', row: 3, col: 3, label: 'AP Psychology' },
    { courseId: 'ap-african-am-studies', row: 3, col: 3, label: 'AP African Am. Studies' },
    { courseId: 'ap-human-geo', row: 3, col: 3, label: 'AP Human Geography' },
  ],
  edges: [
    { from: 'global-studies-r', to: 'us-hist-1-r' },
    { from: 'global-studies-h', to: 'us-hist-1' },
    { from: 'global-studies-h', to: 'us-hist-1-h' },
    { from: 'global-studies-h', to: 'us-hist-1-hh' },
    { from: 'us-hist-1-r', to: 'us-hist-2-r' },
    { from: 'us-hist-1', to: 'us-hist-2' },
    { from: 'us-hist-1-h', to: 'us-hist-2-h' },
    { from: 'us-hist-1-hh', to: 'ap-us-hist' },
  ],
};
