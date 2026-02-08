import { Track } from '../types';

// Matches the WORLD LANGUAGE COURSE FLOWCHART from page 43 of the
// 2026-2027 Program of Studies. Pathway table structure:
// 6 language rows, columns = progression level (I → II → III → IV+).
//
// Spanish is the only language offering both Academic and Honors tracks.
// All other languages are Honors-only.
// Spanish also has the deepest progression: up to AP VI and Cinema HH.

export const worldLanguagesTrack: Track = {
  id: 'world-languages',
  name: 'World Languages',
  department: 'world-languages',
  description: 'Six language pathways: French, German, Italian, Latin, Mandarin, and Spanish. All courses are full year and earn 5.0 credits. Spanish offers both Academic and Honors tracks; all other languages are Honors-only. Spanish and French extend to AP and post-AP levels.',
  columns: ['Level I', 'Level II', 'Level III', 'Level IV+'],
  rowGroupHeader: 'Language',
  rowGroups: [
    { label: 'French', startRow: 0, endRow: 0 },
    { label: 'German', startRow: 1, endRow: 1 },
    { label: 'Italian', startRow: 2, endRow: 2 },
    { label: 'Latin', startRow: 3, endRow: 3 },
    { label: 'Mandarin', startRow: 4, endRow: 4 },
    { label: 'Spanish', startRow: 5, endRow: 5 },
  ],
  nodes: [
    // === French (row 0) ===
    { courseId: 'french-1-h', row: 0, col: 0 },
    { courseId: 'french-2-h', row: 0, col: 1 },
    { courseId: 'french-3-h', row: 0, col: 2 },
    { courseId: 'french-4-h', row: 0, col: 3 },
    { courseId: 'ap-french-5', row: 0, col: 3, label: 'AP French V' },
    { courseId: 'french-6-hh', row: 0, col: 3, label: 'French VI HH' },

    // === German (row 1) ===
    { courseId: 'german-1-h', row: 1, col: 0 },
    { courseId: 'german-2-h', row: 1, col: 1 },
    { courseId: 'german-3-h', row: 1, col: 2 },
    { courseId: 'german-4-h', row: 1, col: 3 },

    // === Italian (row 2) ===
    { courseId: 'italian-1-h', row: 2, col: 0 },
    { courseId: 'italian-2-h', row: 2, col: 1 },
    { courseId: 'italian-3-h', row: 2, col: 2 },
    { courseId: 'italian-4-h', row: 2, col: 3 },

    // === Latin (row 3) ===
    { courseId: 'latin-1-h', row: 3, col: 0 },
    { courseId: 'latin-2-h', row: 3, col: 1 },
    { courseId: 'latin-3-h', row: 3, col: 2 },
    { courseId: 'latin-4-h', row: 3, col: 3 },

    // === Mandarin (row 4) ===
    { courseId: 'mandarin-1-h', row: 4, col: 0 },
    { courseId: 'mandarin-2-h', row: 4, col: 1 },
    { courseId: 'mandarin-3-h', row: 4, col: 2 },
    { courseId: 'mandarin-4-h', row: 4, col: 3 },
    { courseId: 'ap-chinese', row: 4, col: 3, label: 'AP Chinese' },

    // === Spanish (row 5) ===
    { courseId: 'spanish-1', row: 5, col: 0 },
    { courseId: 'spanish-1-h', row: 5, col: 0 },
    { courseId: 'spanish-2', row: 5, col: 1 },
    { courseId: 'spanish-2-h', row: 5, col: 1 },
    { courseId: 'spanish-3', row: 5, col: 2 },
    { courseId: 'spanish-3-h', row: 5, col: 2 },
    { courseId: 'spanish-4', row: 5, col: 3 },
    { courseId: 'spanish-4-h', row: 5, col: 3 },
    { courseId: 'ap-spanish-5', row: 5, col: 3, label: 'AP Spanish V' },
    { courseId: 'ap-spanish-6', row: 5, col: 3, label: 'AP Spanish VI' },
    { courseId: 'spanish-6-hh-cinema', row: 5, col: 3, label: 'Spanish Cinema HH' },
  ],
  edges: [],
};
