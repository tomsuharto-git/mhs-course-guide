import { GraduationRequirement } from './types';

export const graduationRequirements: GraduationRequirement[] = [
  { area: 'English Language Arts', credits: 20, notes: '4 years of English courses' },
  { area: 'Mathematics', credits: 15, notes: 'Including Algebra I, Geometry, and a course building on both' },
  { area: 'Social Studies', credits: 15, notes: '5 credits World History + 10 credits US History' },
  { area: 'Science', credits: 15, notes: '5 credits Biology + 10 credits lab/inquiry-based science' },
  { area: 'World Languages', credits: 5, notes: 'Minimum 1 year' },
  { area: 'Financial Literacy', credits: 2.5, notes: 'See Appendix A for qualifying courses' },
  { area: 'Health & Physical Education', credits: 3.75, notes: 'Per year of enrollment (150 min/week)' },
  { area: 'Visual & Performing Arts', credits: 5, notes: 'See Appendix A for qualifying courses' },
  { area: '21st Century Life & Careers / CTE', credits: 5, notes: 'See Appendix A for qualifying courses' },
];

export const totalCreditsRequired = 122;

export const gpaTable = {
  headers: ['Grade', 'High Honors/AP', 'Honors', 'Academic'],
  rows: [
    { grade: 'A', hh: 5, h: 4.5, a: 4 },
    { grade: 'B', hh: 4, h: 3.5, a: 3 },
    { grade: 'C', hh: 3, h: 2.5, a: 2 },
    { grade: 'D', hh: 2, h: 1.5, a: 1 },
    { grade: 'F', hh: 0, h: 0, a: 0 },
  ],
};

export const promotionRequirements = [
  { grade: 'Sophomore (10th)', credits: 25 },
  { grade: 'Junior (11th)', credits: 50 },
  { grade: 'Senior (12th)', credits: 85 },
  { grade: 'Graduation', credits: 122 },
];
