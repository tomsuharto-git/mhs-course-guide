import { Track } from '../types';

// Matches the SOCIAL STUDIES COURSE FLOWCHART from page 86 of the
// 2026-2027 Program of Studies. Pathway table structure:
// 4 pathways based on Grade 10 track choice, columns = grades.
//
// Key notes from flowchart:
// - All non-resource students take Global Studies H in G9
// - G10 choice (Academic / Honors / High Honors) determines the G11 track
// - US II requirement can be fulfilled by 20th Century Cultural History AND
//   American Foreign Policy taken together in the same year (only this combo)
// - Pattern courses (Grade 12 electives) can be taken for academic or honors
//   credit via contract signed in first two weeks
// - Holocaust, Genocide is offered at the Dual Enrollment level (Kean Univ.)
//
// Grade 12 is entirely elective — the 3-year requirement ends at G11.
// The G12 column shows all available electives per pathway, following
// the Science department pattern where each row shows what's realistic
// for students in that track (cross-level options included).

export const socialStudiesTrack: Track = {
  id: 'social-studies',
  name: 'Social Studies',
  department: 'social-studies',
  description: 'Core Social Studies pathway from Global Studies through U.S. History. Three years required: one year Global Studies (G9) and two years American History (G10-11). In Grade 12, students choose from Pattern semester courses (honors by contract), AP electives, or Economics.',
  columns: ['Grade 9', 'Grade 10', 'Grade 11', 'Grade 12'],
  rowGroupHeader: 'Pathway',
  rowGroups: [
    { label: 'AP', startRow: 0, endRow: 0 },
    { label: 'Honors', startRow: 1, endRow: 1 },
    { label: 'Academic', startRow: 2, endRow: 2 },
    { label: 'Resource', startRow: 3, endRow: 3 },
  ],
  nodes: [
    // === Row 0: AP (Global Studies H → US I HH → AP US Hist → electives) ===
    { courseId: 'global-studies-h', row: 0, col: 0 },
    { courseId: 'us-hist-1-hh', row: 0, col: 1 },
    { courseId: 'ap-us-hist', row: 0, col: 2 },
    { courseId: 'ap-euro-hist', row: 0, col: 3, label: 'AP European History' },
    { courseId: 'ap-world-hist', row: 0, col: 3, label: 'AP World History' },
    { courseId: 'microecon-h', row: 0, col: 3, label: 'Microeconomics H' },
    { courseId: 'macroecon-h', row: 0, col: 3, label: 'Macroeconomics H' },

    // === Row 1: Honors (Global Studies H → US I H → US II H → electives) ===
    // PDF flowchart: Patterns box spans Academic + Honors; AP electives also available
    { courseId: 'global-studies-h', row: 1, col: 0 },
    { courseId: 'us-hist-1-h', row: 1, col: 1 },
    { courseId: 'us-hist-2-h', row: 1, col: 2 },
    { courseId: 'ap-euro-hist', row: 1, col: 3, label: 'AP European History' },
    { courseId: 'ap-world-hist', row: 1, col: 3, label: 'AP World History' },
    { courseId: 'microecon-h', row: 1, col: 3, label: 'Microeconomics H' },
    { courseId: 'macroecon-h', row: 1, col: 3, label: 'Macroeconomics H' },
    { courseId: '20th-century-culture', row: 1, col: 3, label: '20th Century Culture' },
    { courseId: 'am-foreign-policy-h', row: 1, col: 3, label: 'Am. Foreign Policy' },
    { courseId: 'holocaust-genocide', row: 1, col: 3, label: 'Holocaust & Genocide' },

    // === Row 2: Academic (Global Studies H → US I → US II → electives) ===
    { courseId: 'global-studies-h', row: 2, col: 0 },
    { courseId: 'us-hist-1', row: 2, col: 1 },
    { courseId: 'us-hist-2', row: 2, col: 2 },
    { courseId: '20th-century-culture', row: 2, col: 3, label: '20th Century Culture' },
    { courseId: 'am-foreign-policy-h', row: 2, col: 3, label: 'Am. Foreign Policy' },
    { courseId: 'holocaust-genocide', row: 2, col: 3, label: 'Holocaust & Genocide' },
    { courseId: 'african-am-hist', row: 2, col: 3, label: 'African Am. History' },
    { courseId: 'cultural-pluralism', row: 2, col: 3, label: 'Cultural Pluralism' },
    { courseId: 'women-of-world', row: 2, col: 3, label: 'Women of the World' },
    { courseId: 'microecon-h', row: 2, col: 3, label: 'Microeconomics H' },
    { courseId: 'macroecon-h', row: 2, col: 3, label: 'Macroeconomics H' },

    // === Row 3: Resource ===
    { courseId: 'global-studies-r', row: 3, col: 0 },
    { courseId: 'us-hist-1-r', row: 3, col: 1 },
    { courseId: 'us-hist-2-r', row: 3, col: 2 },
  ],
  edges: [], // Pathway table format — progression shown by row structure, not edges
};
