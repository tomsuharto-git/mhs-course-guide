import { Track } from '../types';

export const englishTrack: Track = {
  id: 'english',
  name: 'English Language Arts',
  department: 'english',
  description: 'Core English pathway from World Literature through AP Literature. Includes Pattern semester courses for juniors and seniors.',
  columns: ['Resource', 'Academic', 'Honors', 'AP'],
  nodes: [
    // Grade 9 (row 0)
    { courseId: 'world-lit-r', row: 0, col: 0 },
    { courseId: 'world-lit-h', row: 0, col: 2 },

    // Grade 10 (row 1)
    { courseId: 'eng-10-r', row: 1, col: 0 },
    { courseId: 'eng-10', row: 1, col: 1 },
    { courseId: 'eng-10-h', row: 1, col: 2 },

    // Grade 11 (row 2)
    { courseId: 'eng-11-r', row: 2, col: 0 },
    { courseId: 'eng-11', row: 2, col: 1, label: 'English 11 / Patterns' },
    { courseId: 'eng-11-h', row: 2, col: 2 },
    { courseId: 'ap-eng-lang', row: 2, col: 3 },

    // Grade 12 (row 3)
    { courseId: 'eng-12-r', row: 3, col: 0 },
    { courseId: 'eng-12', row: 3, col: 1, label: 'English 12 / Patterns' },
    { courseId: 'eng-12-h', row: 3, col: 2 },
    { courseId: 'ap-eng-lit', row: 3, col: 3 },
  ],
  edges: [
    { from: 'world-lit-r', to: 'eng-10-r' },
    { from: 'world-lit-h', to: 'eng-10' },
    { from: 'world-lit-h', to: 'eng-10-h', label: 'A/B (87+)' },
    { from: 'eng-10-r', to: 'eng-11-r' },
    { from: 'eng-10', to: 'eng-11' },
    { from: 'eng-10-h', to: 'eng-11-h', label: 'A/B' },
    { from: 'eng-10-h', to: 'ap-eng-lang', label: 'A/B' },
    { from: 'eng-10', to: 'eng-11-h', label: 'A/B + rec' },
    { from: 'eng-11-r', to: 'eng-12-r' },
    { from: 'eng-11', to: 'eng-12' },
    { from: 'eng-11-h', to: 'eng-12-h' },
    { from: 'eng-11-h', to: 'ap-eng-lit', label: 'A/B' },
    { from: 'ap-eng-lang', to: 'ap-eng-lit' },
    { from: 'ap-eng-lang', to: 'eng-12-h' },
  ],
};
