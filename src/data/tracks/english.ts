import { Track } from '../types';

// Matches the ENGLISH LANGUAGE ARTS COURSE FLOWCHART from page 25 of the
// 2026-2027 Program of Studies. Pathway table structure:
// 3 pathways, columns = grades.
//
// Key branching: All non-resource students take World Lit H in G9.
// The G10 decision (Eng 10 vs Eng 10 H) determines the G11-12 track.
// Honors students choose between Eng 11 H or AP Lang at G11, and
// Eng 12 H or AP Lit at G12 — this is ONE pathway with options, not two.
// Academic students can move to Honors with A/B grades + teacher rec.
// In G11-12, Academic and Honors students may substitute "Pattern"
// semester courses (African-Am Lit, Film & Lit, etc.) for core English.

export const englishTrack: Track = {
  id: 'english',
  name: 'English Language Arts',
  department: 'english',
  description: 'Core English pathway from World Literature through AP Literature. In grades 11-12, students may substitute semester Pattern courses for core English at either Academic or Honors level (contract to Honors available).',
  columns: ['Grade 9', 'Grade 10', 'Grade 11', 'Grade 12'],
  rowGroupHeader: 'Pathway',
  rowGroups: [
    { label: 'Honors / AP', startRow: 0, endRow: 0 },
    { label: 'Academic', startRow: 1, endRow: 1 },
    { label: 'Resource', startRow: 2, endRow: 2 },
  ],
  nodes: [
    // === Row 0: Honors / AP (Eng 10 H → Eng 11 H or AP Lang → Eng 12 H or AP Lit) ===
    { courseId: 'world-lit-h', row: 0, col: 0 },
    { courseId: 'eng-10-h', row: 0, col: 1 },
    { courseId: 'eng-11-h', row: 0, col: 2 },
    { courseId: 'ap-eng-lang', row: 0, col: 2 },
    { courseId: 'eng-12-h', row: 0, col: 3 },
    { courseId: 'ap-eng-lit', row: 0, col: 3 },

    // === Row 1: Academic (Eng 10 → Eng 11 / Patterns → Eng 12 / Patterns) ===
    { courseId: 'world-lit-h', row: 1, col: 0 },
    { courseId: 'eng-10', row: 1, col: 1 },
    { courseId: 'eng-11', row: 1, col: 2 },
    { courseId: 'eng-12', row: 1, col: 3 },

    // === Row 2: Resource ===
    { courseId: 'world-lit-r', row: 2, col: 0 },
    { courseId: 'eng-10-r', row: 2, col: 1 },
    { courseId: 'eng-11-r', row: 2, col: 2 },
    { courseId: 'eng-12-r', row: 2, col: 3 },
  ],
  edges: [], // Pathway table format — progression shown by row structure, not edges
};
