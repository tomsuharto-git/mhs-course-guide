import { Track } from '../types';

export const mathTrack: Track = {
  id: 'math',
  name: 'Mathematics',
  department: 'math',
  description: 'Course pathways from Algebra I through AP Calculus BC and Calculus III. Multiple entry points based on middle school preparation.',
  columns: ['Resource', 'Academic', 'Honors', 'AP / High Honors'],
  nodes: [
    // Grade 9 (row 0)
    { courseId: 'alg-1-r', row: 0, col: 0 },
    { courseId: 'alg-1', row: 0, col: 1 },
    { courseId: 'alg-1-h', row: 0, col: 2 },
    { courseId: 'geom-h', row: 0, col: 2, label: 'Geometry H (from MS Alg)' },
    { courseId: 'alg-2-trig-h', row: 0, col: 3, label: 'Alg II/Trig H (accelerated)' },

    // Grade 10 (row 1)
    { courseId: 'geom-r', row: 1, col: 0 },
    { courseId: 'geom', row: 1, col: 1 },
    { courseId: 'alg-2-h', row: 1, col: 2 },
    { courseId: 'ap-precalc-calc', row: 1, col: 3 },

    // Grade 11 (row 2)
    { courseId: 'alg-2-r', row: 2, col: 0 },
    { courseId: 'alg-2', row: 2, col: 1 },
    { courseId: 'precalc-h', row: 2, col: 2 },
    { courseId: 'ap-calc-bc', row: 2, col: 3, label: 'AP Calc BC' },
    { courseId: 'ap-calc-ab', row: 2, col: 3, label: 'AP Calc AB' },

    // Grade 12 (row 3)
    { courseId: 'applied-math', row: 3, col: 0 },
    { courseId: 'precalc', row: 3, col: 1 },
    { courseId: 'calc-h', row: 3, col: 2 },
    { courseId: 'calc-3-hh', row: 3, col: 3 },
    // Statistics available at multiple levels
    { courseId: 'prob-stats', row: 3, col: 1, label: 'Prob & Stats' },
    { courseId: 'prob-stats-h', row: 3, col: 2, label: 'Prob & Stats H' },
    { courseId: 'ap-stats', row: 3, col: 3, label: 'AP Statistics' },
  ],
  edges: [
    { from: 'alg-1-r', to: 'geom-r' },
    { from: 'alg-1', to: 'geom' },
    { from: 'alg-1-h', to: 'geom-h' },
    { from: 'geom-r', to: 'alg-2-r' },
    { from: 'geom', to: 'alg-2' },
    { from: 'geom-h', to: 'alg-2-h' },
    { from: 'alg-2-trig-h', to: 'ap-precalc-calc' },
    { from: 'alg-2-h', to: 'precalc-h' },
    { from: 'alg-2', to: 'precalc' },
    { from: 'ap-precalc-calc', to: 'ap-calc-bc', label: '≥88' },
    { from: 'ap-precalc-calc', to: 'ap-calc-ab', label: '≥80' },
    { from: 'precalc-h', to: 'calc-h', label: '≥75' },
    { from: 'precalc-h', to: 'ap-calc-ab', label: '≥90' },
    { from: 'ap-calc-bc', to: 'calc-3-hh', label: '≥90' },
    { from: 'alg-2', to: 'prob-stats' },
    { from: 'alg-2-h', to: 'prob-stats-h' },
    { from: 'alg-2-h', to: 'ap-stats', label: '≥80' },
  ],
};
