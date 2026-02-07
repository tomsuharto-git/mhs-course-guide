import { Track } from '../types';

export const scienceTrack: Track = {
  id: 'science',
  name: 'Science',
  department: 'science',
  description: 'Science pathways from Biology and Geoscience through AP courses in Biology, Chemistry, Physics, and Environmental Science.',
  columns: ['Resource', 'Academic', 'Honors', 'AP'],
  nodes: [
    // Grade 9 (row 0)
    { courseId: 'bio-r', row: 0, col: 0 },
    { courseId: 'geosci', row: 0, col: 1 },
    { courseId: 'bio-h', row: 0, col: 2 },
    { courseId: 'geosci-h', row: 0, col: 2, label: 'Geoscience H' },

    // Grade 10 (row 1)
    { courseId: 'geosci-r', row: 1, col: 0 },
    { courseId: 'chem', row: 1, col: 1 },
    { courseId: 'chem-h', row: 1, col: 2 },

    // Grade 11 (row 2)
    { courseId: 'enviro-r', row: 2, col: 0 },
    { courseId: 'enviro', row: 2, col: 1 },
    { courseId: 'physics-h', row: 2, col: 2 },
    { courseId: 'ap-chem', row: 2, col: 3 },
    { courseId: 'ap-bio', row: 2, col: 3, label: 'AP Biology' },
    { courseId: 'ap-physics-1', row: 2, col: 3, label: 'AP Physics 1' },

    // Grade 12 (row 3)
    { courseId: 'physics', row: 3, col: 1 },
    { courseId: 'enviro-h', row: 3, col: 2, label: 'Enviro Sci H' },
    { courseId: 'anatomy-h', row: 3, col: 2, label: 'Anatomy & Phys H' },
    { courseId: 'ap-enviro', row: 3, col: 3, label: 'AP Enviro Sci' },
    { courseId: 'ap-physics-2', row: 3, col: 3, label: 'AP Physics 2' },
    { courseId: 'ap-physics-c1', row: 3, col: 3, label: 'AP Physics C' },
  ],
  edges: [
    { from: 'bio-r', to: 'geosci-r' },
    { from: 'bio-h', to: 'chem-h' },
    { from: 'geosci', to: 'chem' },
    { from: 'chem-h', to: 'physics-h' },
    { from: 'chem-h', to: 'ap-chem' },
    { from: 'bio-h', to: 'ap-bio' },
    { from: 'chem-h', to: 'ap-physics-1' },
    { from: 'chem', to: 'physics' },
    { from: 'ap-physics-1', to: 'ap-physics-2' },
    { from: 'ap-physics-1', to: 'ap-physics-c1' },
    { from: 'bio-h', to: 'enviro-h' },
    { from: 'bio-h', to: 'ap-enviro' },
    { from: 'bio-h', to: 'anatomy-h' },
  ],
};
