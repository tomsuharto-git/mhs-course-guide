import { Track } from '../types';

// Matches the WORLD LANGUAGE COURSE FLOWCHART from page 43 of the
// 2026-2027 Program of Studies. Grid structure:
// 6 language columns (matching PDF order), rows = year/level progression.
//
// Unlike other department tracks (grade columns x pathway rows), WL uses
// language columns because each language IS the pathway — students progress
// sequentially I → II → III → IV → AP/HH within their chosen language.
//
// Spanish is the only language offering both Academic and Honors tracks.
// All other languages are Honors-only.
// Spanish also has the deepest progression: up to AP VI and Cinema HH.

export const worldLanguagesTrack: Track = {
  id: 'world-languages',
  name: 'World Languages',
  department: 'world-languages',
  description: 'Six language pathways: French, German, Italian, Latin, Mandarin, and Spanish. All courses are full year and earn 5.0 credits. Spanish offers both Academic and Honors tracks; all other languages are Honors-only. Spanish and French extend to AP and post-AP levels.',
  columns: ['French', 'German', 'Italian', 'Latin', 'Mandarin', 'Spanish'],
  nodes: [
    // === Row 0: Year 1 (Level I) ===
    { courseId: 'french-1-h', row: 0, col: 0 },
    { courseId: 'german-1-h', row: 0, col: 1 },
    { courseId: 'italian-1-h', row: 0, col: 2 },
    { courseId: 'latin-1-h', row: 0, col: 3 },
    { courseId: 'mandarin-1-h', row: 0, col: 4 },
    { courseId: 'spanish-1', row: 0, col: 5 },
    { courseId: 'spanish-1-h', row: 0, col: 5 },

    // === Row 1: Year 2 (Level II) ===
    { courseId: 'french-2-h', row: 1, col: 0 },
    { courseId: 'german-2-h', row: 1, col: 1 },
    { courseId: 'italian-2-h', row: 1, col: 2 },
    { courseId: 'latin-2-h', row: 1, col: 3 },
    { courseId: 'mandarin-2-h', row: 1, col: 4 },
    { courseId: 'spanish-2', row: 1, col: 5 },
    { courseId: 'spanish-2-h', row: 1, col: 5 },

    // === Row 2: Year 3 (Level III) ===
    { courseId: 'french-3-h', row: 2, col: 0 },
    { courseId: 'german-3-h', row: 2, col: 1 },
    { courseId: 'italian-3-h', row: 2, col: 2 },
    { courseId: 'latin-3-h', row: 2, col: 3 },
    { courseId: 'mandarin-3-h', row: 2, col: 4 },
    { courseId: 'spanish-3', row: 2, col: 5 },
    { courseId: 'spanish-3-h', row: 2, col: 5 },

    // === Row 3: Year 4+ (Level IV, AP, HH) ===
    { courseId: 'french-4-h', row: 3, col: 0 },
    { courseId: 'ap-french-5', row: 3, col: 0, label: 'AP French V' },
    { courseId: 'french-6-hh', row: 3, col: 0, label: 'French VI HH' },
    { courseId: 'german-4-h', row: 3, col: 1 },
    { courseId: 'italian-4-h', row: 3, col: 2 },
    { courseId: 'latin-4-h', row: 3, col: 3 },
    { courseId: 'mandarin-4-h', row: 3, col: 4 },
    { courseId: 'ap-chinese', row: 3, col: 4, label: 'AP Chinese' },
    { courseId: 'spanish-4', row: 3, col: 5 },
    { courseId: 'spanish-4-h', row: 3, col: 5 },
    { courseId: 'ap-spanish-5', row: 3, col: 5, label: 'AP Spanish V' },
    { courseId: 'ap-spanish-6', row: 3, col: 5, label: 'AP Spanish VI' },
    { courseId: 'spanish-6-hh-cinema', row: 3, col: 5, label: 'Spanish Cinema HH' },
  ],
  edges: [], // Grid format — sequential progression shown by row position, not edges
};
