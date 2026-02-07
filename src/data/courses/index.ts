import { Course, Department } from '../types';
import { englishCourses } from './english';
import { mathCourses } from './math';
import { scienceCourses } from './science';
import { socialStudiesCourses } from './social-studies';
import { worldLanguageCourses } from './world-languages';
import { vpaCourses } from './visual-performing-arts';
import { careerTechnicalCourses } from './career-technical';
import { healthPeCourses } from './health-pe';

export {
  englishCourses,
  mathCourses,
  scienceCourses,
  socialStudiesCourses,
  worldLanguageCourses,
  vpaCourses,
  careerTechnicalCourses,
  healthPeCourses,
};

export const allCourses: Course[] = [
  ...englishCourses,
  ...mathCourses,
  ...scienceCourses,
  ...socialStudiesCourses,
  ...worldLanguageCourses,
  ...vpaCourses,
  ...careerTechnicalCourses,
  ...healthPeCourses,
];

export const coursesByDepartment: Record<Department, Course[]> = {
  english: englishCourses,
  math: mathCourses,
  science: scienceCourses,
  'social-studies': socialStudiesCourses,
  'world-languages': worldLanguageCourses,
  'visual-performing-arts': vpaCourses,
  'health-pe': healthPeCourses,
  'career-technical': careerTechnicalCourses,
  'special-education': [],
};

export function getCourseById(id: string): Course | undefined {
  return allCourses.find((c) => c.id === id);
}
