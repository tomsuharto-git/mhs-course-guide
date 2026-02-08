import { MathEntryPoint } from './types';

export const mathEntryPoints: MathEntryPoint[] = [
  {
    id: 'completed-geometry-accel',
    label: 'Completed Geometry Accelerated',
    description: 'Finished accelerated Geometry in 8th grade — ready for Algebra II/Trig Honors',
    pathways: [
      {
        id: 'math-geom-accel-ap',
        label: 'AP Track',
        description: 'Fastest path — Calculus BC by junior year, Calc III or AP Stats senior year',
        level: 'ap',
        courses: { 9: 'alg-2-trig-h', 10: 'ap-precalc-calc', 11: 'ap-calc-bc', 12: 'calc-3-hh' },
        choices: {
          11: ['ap-calc-bc', 'ap-calc-ab'],
          12: ['calc-3-hh', 'ap-stats'],
        },
      },
      {
        id: 'math-geom-accel-honors',
        label: 'Honors',
        description: 'Algebra II/Trig H → AP Precalc → AP Calc AB → AP Stats',
        level: 'honors',
        courses: { 9: 'alg-2-trig-h', 10: 'ap-precalc-calc', 11: 'ap-calc-ab', 12: 'ap-stats' },
        choices: {
          11: ['ap-calc-ab', 'calc-h'],
          12: ['ap-stats', 'ap-calc-bc'],
        },
      },
    ],
  },
  {
    id: 'completed-algebra-accel',
    label: 'Completed Algebra Accelerated',
    description: 'Finished accelerated Algebra I in 8th grade — ready for Geometry',
    pathways: [
      {
        id: 'math-alg-accel-honors-fast',
        label: 'Honors → AP',
        description: 'Geometry H → Alg II/Trig H → AP Precalc → AP Calc',
        level: 'honors',
        courses: { 9: 'geom-h', 10: 'alg-2-trig-h', 11: 'ap-precalc-calc', 12: 'ap-calc-ab' },
        choices: {
          12: ['ap-calc-ab', 'ap-calc-bc', 'ap-stats'],
        },
      },
      {
        id: 'math-alg-accel-honors',
        label: 'Honors',
        description: 'Geometry H → Alg II H → Precalc H → Calc H or AP Stats',
        level: 'honors',
        courses: { 9: 'geom-h', 10: 'alg-2-h', 11: 'precalc-h', 12: 'calc-h' },
        choices: {
          10: ['alg-2-h', 'alg-2-trig-h'],
          11: ['precalc-h', 'ap-precalc'],
          12: ['calc-h', 'ap-calc-ab', 'ap-stats', 'prob-stats-h'],
        },
      },
      {
        id: 'math-alg-accel-academic',
        label: 'Academic',
        description: 'Geometry → Algebra II → Precalculus → Prob & Stats',
        level: 'academic',
        courses: { 9: 'geom', 10: 'alg-2', 11: 'precalc', 12: 'prob-stats' },
        choices: {
          12: ['prob-stats', 'prob-stats-h'],
        },
      },
    ],
  },
  {
    id: 'need-algebra',
    label: 'Need Algebra I',
    description: 'Completed Pre-Algebra or need Algebra I in 9th grade',
    pathways: [
      {
        id: 'math-alg1-honors',
        label: 'Honors',
        description: 'Algebra I H → Geometry H → Algebra II H → Precalc H',
        level: 'honors',
        courses: { 9: 'alg-1-h', 10: 'geom-h', 11: 'alg-2-h', 12: 'precalc-h' },
        choices: {
          12: ['precalc-h', 'prob-stats-h'],
        },
      },
      {
        id: 'math-alg1-academic',
        label: 'Academic',
        description: 'Algebra I → Geometry → Algebra II → Precalc or Stats',
        level: 'academic',
        courses: { 9: 'alg-1', 10: 'geom', 11: 'alg-2', 12: 'precalc' },
        choices: {
          12: ['precalc', 'prob-stats'],
        },
      },
    ],
  },
  {
    id: 'resource',
    label: 'Resource',
    description: 'Modified math instruction with IEP support',
    pathways: [
      {
        id: 'math-resource',
        label: 'Resource',
        description: 'Algebra I → Geometry → Algebra II → Applied Math',
        level: 'resource',
        courses: { 9: 'alg-1-r', 10: 'geom-r', 11: 'alg-2-r', 12: 'applied-math' },
      },
    ],
  },
];
