import { Track } from '../types';

// Matches the SCIENCE COURSE FLOWCHART from page 72 of the
// 2026-2027 Program of Studies. Two main pathways: academic (left)
// and honors (right), with AP options branching from honors.

export const scienceTrack: Track = {
  id: 'science',
  name: 'Science',
  department: 'science',
  description: 'Science pathways from Biology through AP courses in Biology, Chemistry, Physics, and Environmental Science.',
  columns: ['Resource', 'Academic', 'Honors', 'AP'],
  nodes: [
    // Grade 9 (row 0) — All students take Biology
    { courseId: 'bio-r', row: 0, col: 0 },
    { courseId: 'bio-h', row: 0, col: 2 },

    // Grade 10 (row 1) — Geoscience split; Chem H available for accelerated
    { courseId: 'geosci-r', row: 1, col: 0 },
    { courseId: 'geosci', row: 1, col: 1 },
    { courseId: 'geosci-h', row: 1, col: 2 },
    { courseId: 'chem-h', row: 1, col: 2, label: 'Chemistry H (accelerated)' },

    // Grade 11 (row 2) — Chemistry core; AP courses begin
    { courseId: 'chem-r', row: 2, col: 0 },
    { courseId: 'chem', row: 2, col: 1 },
    { courseId: 'chem-h', row: 2, col: 2 },
    { courseId: 'physics-h', row: 2, col: 2 },
    { courseId: 'ap-bio', row: 2, col: 3 },
    { courseId: 'ap-chem', row: 2, col: 3 },
    { courseId: 'ap-physics-1', row: 2, col: 3, label: 'AP Physics 1' },

    // Grade 12 (row 3) — Physics, Enviro, Anatomy, and AP electives
    { courseId: 'enviro-r', row: 3, col: 0 },
    { courseId: 'physics', row: 3, col: 1 },
    { courseId: 'enviro', row: 3, col: 1 },
    { courseId: 'enviro-h', row: 3, col: 2, label: 'Enviro Sci H' },
    { courseId: 'anatomy-h', row: 3, col: 2, label: 'Anatomy & Phys H' },
    { courseId: 'ap-enviro', row: 3, col: 3, label: 'AP Enviro Sci' },
    { courseId: 'ap-bio', row: 3, col: 3, label: 'AP Biology' },
    { courseId: 'ap-physics-1', row: 3, col: 3, label: 'AP Physics 1' },
    { courseId: 'ap-physics-2', row: 3, col: 3, label: 'AP Physics 2' },
    { courseId: 'ap-physics-c1', row: 3, col: 3, label: 'AP Physics C-I' },
    { courseId: 'ap-physics-c2', row: 3, col: 3, label: 'AP Physics C-II' },
  ],
  edges: [
    // Resource pathway
    { from: 'bio-r', to: 'geosci-r' },
    { from: 'geosci-r', to: 'chem-r' },
    { from: 'chem-r', to: 'enviro-r' },
    // Academic pathway
    { from: 'bio-h', to: 'geosci' },
    { from: 'geosci', to: 'chem' },
    { from: 'chem', to: 'physics' },
    { from: 'chem', to: 'enviro' },
    // Honors pathway
    { from: 'bio-h', to: 'geosci-h' },
    { from: 'geosci-h', to: 'chem-h' },
    { from: 'chem-h', to: 'physics-h' },
    { from: 'chem-h', to: 'ap-chem' },
    { from: 'chem-h', to: 'ap-physics-1' },
    // AP branches
    { from: 'bio-h', to: 'ap-bio' },
    { from: 'bio-h', to: 'ap-enviro' },
    { from: 'bio-h', to: 'anatomy-h' },
    { from: 'bio-h', to: 'enviro-h' },
    { from: 'ap-physics-1', to: 'ap-physics-2' },
    { from: 'ap-physics-1', to: 'ap-physics-c1' },
    { from: 'ap-physics-c1', to: 'ap-physics-c2' },
  ],
};
