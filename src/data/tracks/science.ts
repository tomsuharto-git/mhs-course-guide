import { Track } from '../types';

// Matches the SCIENCE COURSE FLOWCHART from page 72 of the
// 2026-2027 Program of Studies. Pathway table structure:
// 4 pathways based on Grade 10 track choice, columns = grades.
//
// Key branching: All students take Bio H in G9. The G10 decision
// (Geoscience vs Geoscience Honors) determines the rest of the path.
// Accelerated students can take Chem H at G10 with permission.

export const scienceTrack: Track = {
  id: 'science',
  name: 'Science',
  department: 'science',
  description: 'Science pathways from Biology through AP courses in Biology, Chemistry, Physics, and Environmental Science. Four tracks based on Grade 10 course selection.',
  columns: ['Grade 9', 'Grade 10', 'Grade 11', 'Grade 12'],
  rowGroupHeader: 'Pathway',
  rowGroups: [
    { label: 'Accelerated\n(Chem H at G10)', startRow: 0, endRow: 0 },
    { label: 'Honors', startRow: 1, endRow: 1 },
    { label: 'Academic', startRow: 2, endRow: 2 },
    { label: 'Resource', startRow: 3, endRow: 3 },
  ],
  nodes: [
    // === Row 0: Accelerated (Geosci H + Chem H at G10) ===
    { courseId: 'bio-h', row: 0, col: 0 },
    { courseId: 'geosci-h', row: 0, col: 1 },
    { courseId: 'chem-h', row: 0, col: 1 },
    { courseId: 'ap-bio', row: 0, col: 2 },
    { courseId: 'ap-chem', row: 0, col: 2 },
    { courseId: 'physics-h', row: 0, col: 2 },
    { courseId: 'ap-physics-1', row: 0, col: 2, label: 'AP Physics 1' },
    { courseId: 'ap-physics-2', row: 0, col: 3, label: 'AP Physics 2' },
    { courseId: 'ap-physics-c1', row: 0, col: 3, label: 'AP Physics C-I' },
    { courseId: 'ap-physics-c2', row: 0, col: 3, label: 'AP Physics C-II' },
    { courseId: 'ap-enviro', row: 0, col: 3, label: 'AP Enviro Sci' },

    // === Row 1: Honors (Geosci H → Chem H at G11) ===
    { courseId: 'bio-h', row: 1, col: 0 },
    { courseId: 'geosci-h', row: 1, col: 1 },
    { courseId: 'chem-h', row: 1, col: 2 },
    { courseId: 'ap-bio', row: 1, col: 3 },
    { courseId: 'ap-chem', row: 1, col: 3 },
    { courseId: 'ap-physics-1', row: 1, col: 3, label: 'AP Physics 1' },
    { courseId: 'ap-physics-2', row: 1, col: 3, label: 'AP Physics 2' },
    { courseId: 'ap-physics-c1', row: 1, col: 3, label: 'AP Physics C-I' },
    { courseId: 'ap-enviro', row: 1, col: 3, label: 'AP Enviro Sci' },
    { courseId: 'physics-h', row: 1, col: 3 },
    { courseId: 'enviro-h', row: 1, col: 3, label: 'Enviro Sci H' },
    { courseId: 'anatomy-h', row: 1, col: 3, label: 'Anatomy & Phys H' },

    // === Row 2: Academic (Geosci → Chem) ===
    { courseId: 'bio-h', row: 2, col: 0 },
    { courseId: 'geosci', row: 2, col: 1 },
    { courseId: 'chem', row: 2, col: 2 },
    { courseId: 'physics', row: 2, col: 3 },
    { courseId: 'physics-h', row: 2, col: 3 },
    { courseId: 'enviro', row: 2, col: 3 },
    { courseId: 'enviro-h', row: 2, col: 3, label: 'Enviro Sci H' },
    { courseId: 'anatomy-h', row: 2, col: 3, label: 'Anatomy & Phys H' },

    // === Row 3: Resource ===
    { courseId: 'bio-r', row: 3, col: 0 },
    { courseId: 'geosci-r', row: 3, col: 1 },
    { courseId: 'chem-r', row: 3, col: 2 },
    { courseId: 'enviro-r', row: 3, col: 3 },
  ],
  edges: [], // Pathway table format — progression shown by row structure, not edges
};
