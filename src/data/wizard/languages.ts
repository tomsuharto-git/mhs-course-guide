import { LanguageOption } from './types';

export const languageOptions: LanguageOption[] = [
  {
    id: 'spanish',
    label: 'Spanish',
    honorsProgression: ['spanish-1-h', 'spanish-2-h', 'spanish-3-h', 'spanish-4-h', 'ap-spanish-5', 'ap-spanish-6'],
    academicProgression: ['spanish-1', 'spanish-2', 'spanish-3', 'spanish-4'],
    maxYears: 6,
  },
  {
    id: 'french',
    label: 'French',
    honorsProgression: ['french-1-h', 'french-2-h', 'french-3-h', 'french-4-h', 'ap-french-5', 'french-6-hh'],
    maxYears: 6,
  },
  {
    id: 'german',
    label: 'German',
    honorsProgression: ['german-1-h', 'german-2-h', 'german-3-h', 'german-4-h'],
    maxYears: 4,
  },
  {
    id: 'italian',
    label: 'Italian',
    honorsProgression: ['italian-1-h', 'italian-2-h', 'italian-3-h', 'italian-4-h'],
    maxYears: 4,
  },
  {
    id: 'latin',
    label: 'Latin',
    honorsProgression: ['latin-1-h', 'latin-2-h', 'latin-3-h', 'latin-4-h'],
    maxYears: 4,
  },
  {
    id: 'mandarin',
    label: 'Mandarin',
    honorsProgression: ['mandarin-1-h', 'mandarin-2-h', 'mandarin-3-h', 'mandarin-4-h', 'ap-chinese'],
    maxYears: 5,
  },
];
