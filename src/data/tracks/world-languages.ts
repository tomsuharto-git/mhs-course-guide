import { Track } from '../types';

export const worldLanguagesTrack: Track = {
  id: 'world-languages',
  name: 'World Languages',
  department: 'world-languages',
  description: 'Language pathways in Spanish, French, Mandarin, German, Italian, and Latin. Spanish offers the widest range with Resource through AP levels.',
  columns: ['Spanish', 'French', 'Mandarin', 'German / Italian / Latin'],
  nodes: [
    // Year 1 — Grade 9 typical entry (row 0)
    { courseId: 'spanish-1', row: 0, col: 0, label: 'Spanish I' },
    { courseId: 'spanish-1-h', row: 0, col: 0, label: 'Spanish I H' },
    { courseId: 'french-1-h', row: 0, col: 1, label: 'French I H' },
    { courseId: 'mandarin-1-h', row: 0, col: 2, label: 'Mandarin I H' },
    { courseId: 'german-1-h', row: 0, col: 3, label: 'German I H' },
    { courseId: 'italian-1-h', row: 0, col: 3, label: 'Italian I H' },
    { courseId: 'latin-1-h', row: 0, col: 3, label: 'Latin I H' },

    // Year 2 — Grade 10 (row 1)
    { courseId: 'spanish-2', row: 1, col: 0, label: 'Spanish II' },
    { courseId: 'spanish-2-h', row: 1, col: 0, label: 'Spanish II H' },
    { courseId: 'french-2-h', row: 1, col: 1, label: 'French II H' },
    { courseId: 'mandarin-2-h', row: 1, col: 2, label: 'Mandarin II H' },
    { courseId: 'german-2-h', row: 1, col: 3, label: 'German II H' },
    { courseId: 'italian-2-h', row: 1, col: 3, label: 'Italian II H' },
    { courseId: 'latin-2-h', row: 1, col: 3, label: 'Latin II H' },

    // Year 3 — Grade 11 (row 2)
    { courseId: 'spanish-3', row: 2, col: 0, label: 'Spanish III' },
    { courseId: 'spanish-3-h', row: 2, col: 0, label: 'Spanish III H' },
    { courseId: 'french-3-h', row: 2, col: 1, label: 'French III H' },
    { courseId: 'mandarin-3-h', row: 2, col: 2, label: 'Mandarin III H' },
    { courseId: 'german-3-h', row: 2, col: 3, label: 'German III H' },
    { courseId: 'italian-3-h', row: 2, col: 3, label: 'Italian III H' },
    { courseId: 'latin-3-h', row: 2, col: 3, label: 'Latin III H' },

    // Year 4+ — Grade 12 (row 3)
    { courseId: 'spanish-4', row: 3, col: 0, label: 'Spanish IV' },
    { courseId: 'spanish-4-h', row: 3, col: 0, label: 'Spanish IV H' },
    { courseId: 'ap-spanish-5', row: 3, col: 0, label: 'AP Spanish V' },
    { courseId: 'french-4-h', row: 3, col: 1, label: 'French IV H' },
    { courseId: 'ap-french-5', row: 3, col: 1, label: 'AP French V' },
    { courseId: 'mandarin-4-h', row: 3, col: 2, label: 'Mandarin IV H' },
    { courseId: 'ap-chinese', row: 3, col: 2, label: 'AP Chinese' },
    { courseId: 'german-4-h', row: 3, col: 3, label: 'German IV H' },
    { courseId: 'italian-4-h', row: 3, col: 3, label: 'Italian IV H' },
    { courseId: 'latin-4-h', row: 3, col: 3, label: 'Latin IV H' },
  ],
  edges: [
    // Spanish
    { from: 'spanish-1', to: 'spanish-2' },
    { from: 'spanish-1-h', to: 'spanish-2-h' },
    { from: 'spanish-2', to: 'spanish-3' },
    { from: 'spanish-2-h', to: 'spanish-3-h' },
    { from: 'spanish-3', to: 'spanish-4' },
    { from: 'spanish-3-h', to: 'spanish-4-h' },
    { from: 'spanish-4-h', to: 'ap-spanish-5' },
    // French
    { from: 'french-1-h', to: 'french-2-h' },
    { from: 'french-2-h', to: 'french-3-h' },
    { from: 'french-3-h', to: 'french-4-h' },
    { from: 'french-4-h', to: 'ap-french-5' },
    // Mandarin
    { from: 'mandarin-1-h', to: 'mandarin-2-h' },
    { from: 'mandarin-2-h', to: 'mandarin-3-h' },
    { from: 'mandarin-3-h', to: 'mandarin-4-h' },
    { from: 'mandarin-4-h', to: 'ap-chinese' },
    // German
    { from: 'german-1-h', to: 'german-2-h' },
    { from: 'german-2-h', to: 'german-3-h' },
    { from: 'german-3-h', to: 'german-4-h' },
    // Italian
    { from: 'italian-1-h', to: 'italian-2-h' },
    { from: 'italian-2-h', to: 'italian-3-h' },
    { from: 'italian-3-h', to: 'italian-4-h' },
    // Latin
    { from: 'latin-1-h', to: 'latin-2-h' },
    { from: 'latin-2-h', to: 'latin-3-h' },
    { from: 'latin-3-h', to: 'latin-4-h' },
  ],
};
