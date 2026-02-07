import { Course } from '../types';

export const englishCourses: Course[] = [
  // ═══════════════════════════════════════════════════════════════════════
  // GRADE 9 — CORE
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'world-lit-h',
    code: '1001H',
    name: 'World Literature H',
    department: 'english',
    level: 'honors',
    grades: [9],
    credits: 5,
    duration: 'full-year',
    description:
      'The foundational English course for all ninth-grade students. The focus is on exploring and responding to quality literature from a variety of cultures, divided into four major units: Perspectives, Journey, Tradition and Change, and Fate vs. Freewill. Students examine a range of genres including biography/autobiography, drama, essays, folklore, historical fiction, novels, poetry, and short stories. Students may also examine stories from a historical, literary, or cultural perspective. Writing assignments include literary analysis, extended definition, cause and effect, persuasion, problem solving, character description, and journal writing. Extension projects allow students to demonstrate advanced understanding or immersion in a particular area of special interest. Collaborative learning, heterogeneous grouping, and attention to multiple intelligences are critical components.',
    prerequisites: [],
    tags: ['core', 'grade-9'],
    fulfills: ['ELA'],
  },
  {
    id: 'world-lit-r',
    code: '81001',
    name: 'World Literature',
    department: 'english',
    level: 'resource',
    grades: [9],
    credits: 5,
    duration: 'full-year',
    description:
      'Resource center replacement class taught within the resource center program. IEP goals and objectives are addressed throughout the course. The focus is on reading, exploring, and responding to literature from a variety of cultures. Students study novels, myths, biographies, autobiographies, poetry, and short stories. Writing is an integral part of the course, including analytical, expository, persuasive, descriptive, and narrative essays. Various strategies are taught to enhance student reading and writing skills, along with interactive activities addressing specific writing goals such as cause and effect, sentence variety, outlines, and distinguishing fact from opinion.',
    prerequisites: ['Recommendation by the Child Study Team'],
    tags: ['core', 'grade-9', 'resource'],
    fulfills: ['ELA'],
  },

  // ═══════════════════════════════════════════════════════════════════════
  // GRADE 10 — CORE
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'eng-10',
    code: '1002',
    name: 'English 10',
    department: 'english',
    level: 'academic',
    grades: [10],
    credits: 5,
    duration: 'full-year',
    description:
      'Students explore various types of American and British literature and at the same time improve reading, thinking, writing, and listening skills. Novels, short stories, poems, plays, and essays are assigned. Students learn to write descriptive, narrative, analytical, and expository essays. Thinking skills are improved through the analysis of a wide variety of literary works.',
    prerequisites: ['world-lit-h'],
    tags: ['core', 'grade-10'],
    fulfills: ['ELA'],
    notes:
      'Placement: World Literature H grade of ≤86 and teacher recommendation.',
  },
  {
    id: 'eng-10-r',
    code: '81002',
    name: 'English 10',
    department: 'english',
    level: 'resource',
    grades: [10],
    credits: 5,
    duration: 'full-year',
    description:
      'Resource replacement class taught in the resource setting program. IEP goals and objectives are addressed throughout the course. American and British literature is explored through reading novels, poetry, short stories, and selections from an anthology. Students will develop vocabulary, demonstrate ability to identify main ideas, and develop critical thinking and analytic skills. Writing is an integral part of the course, as is real-world application of skills.',
    prerequisites: ['world-lit-r'],
    tags: ['core', 'grade-10', 'resource'],
    fulfills: ['ELA'],
    notes: 'Recommendation by the Child Study Team required.',
  },
  {
    id: 'eng-10-h',
    code: '1002H',
    name: 'English 10 H',
    department: 'english',
    level: 'honors',
    grades: [10],
    credits: 5,
    duration: 'full-year',
    description:
      'An introduction to American writers, from the pre-Colonial period to the present, with an overview of British literature. Students read selections from major authors, and think about and evaluate what they have read through discussion, oral interpretation, and composition. Students are expected to write analytical, descriptive, narrative, and expository essays. Opportunities for independent study and research are provided.',
    prerequisites: ['world-lit-h'],
    tags: ['core', 'grade-10'],
    fulfills: ['ELA'],
    notes:
      'Requires World Literature H with a grade of A or B (87+) and teacher recommendation.',
  },

  // ═══════════════════════════════════════════════════════════════════════
  // GRADE 11 — CORE
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'eng-11',
    code: '1003',
    name: 'English 11',
    department: 'english',
    level: 'academic',
    grades: [11],
    credits: 5,
    duration: 'full-year',
    description:
      'A thematic course designed to mix traditional and contemporary texts. Students examine four themes: Voice of Tradition and Change, Race and Class, Leadership/Power/Responsibility, and Gender Roles and Sexuality. Students explore literary voices reflecting different cultural and traditional movements including but not limited to Romanticism, Symbolism, Imagism, Harlem Renaissance, The Beats, The Black Arts Movement, and Slam poetry. They also examine themes of racial and social injustice, explore how systems of oppression and individual experiences impact identity, and explore how issues of race and class intersect. Using various works including film, students explore these themes with a historical and modern lens.',
    prerequisites: ['eng-10', 'eng-10-h'],
    tags: ['core', 'grade-11'],
    fulfills: ['ELA'],
    notes:
      'Students may substitute a series of Pattern semester courses instead of English 11.',
  },
  {
    id: 'eng-11-h',
    code: '1003H',
    name: 'English 11 H',
    department: 'english',
    level: 'honors',
    grades: [11],
    credits: 5,
    duration: 'full-year',
    description:
      'Involves students in the study of twentieth-century English language, American short fiction, novels, non-fiction, drama, and poetry. With an emphasis on essay writing, students will develop skill in close, critical reading, writing, speaking, and listening as they engage in a genre-based study of literature.',
    prerequisites: ['eng-10-h', 'eng-10'],
    tags: ['core', 'grade-11'],
    fulfills: ['ELA'],
    notes:
      'Requires English 10 H grade of A or B with teacher recommendation, OR English 10 grade of A or B with teacher recommendation.',
  },
  {
    id: 'eng-11-r',
    code: '81003',
    name: 'English 11',
    department: 'english',
    level: 'resource',
    grades: [11],
    credits: 5,
    duration: 'full-year',
    description:
      'Resource replacement class taught by a dually certified teacher. The English 11 curriculum and instructional strategies are modified based on student needs. IEP goals and objectives are addressed throughout the course. Explicit, systematic vocabulary instruction occurs on a weekly basis. Students will examine themes of racial and social injustice, explore how systems of oppression and individual experiences impact identity, and explore how issues of race and class intersect. Through reading novels, poetry, and short stories, students develop vocabulary, identify main ideas, and develop critical thinking and analytic skills. Writing, daily writing tasks, notetaking, and academic and workplace communication are integral parts of the course.',
    prerequisites: ['eng-10-r'],
    tags: ['core', 'grade-11', 'resource'],
    fulfills: ['ELA'],
    notes: 'Recommendation by the Child Study Team required.',
  },
  {
    id: 'ap-eng-lang',
    code: '1003AP',
    name: 'AP English Language & Composition',
    department: 'english',
    level: 'ap',
    grades: [11],
    credits: 5,
    duration: 'full-year',
    description:
      'A year-long course that prepares students for a college-level course in expository (nonfiction) writing. The course focuses on reading and writing expository, analytical, and argumentative prose, as well as writing and reading personal and reflective pieces. Students examine the writing process through study and practice, gaining a better understanding of rhetorical contexts, purposes, and use of language by working with real writers. The Language course differs from the Grade 12 AP English Literature course in that it examines mostly nonfiction texts, whereas the Literature course examines primarily imaginative (fiction) texts. There is a separate AP test for each course. Emphasis is placed upon critical thinking and writing skills, and the synthesizing of research data into original written work.',
    prerequisites: ['eng-10-h'],
    tags: ['core', 'grade-11', 'ap'],
    fulfills: ['ELA'],
    notes:
      'Requires English 10 H grade of A or B and teacher recommendation.',
  },

  // ═══════════════════════════════════════════════════════════════════════
  // GRADE 12 — CORE
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'eng-12-h',
    code: '1004H',
    name: 'English 12 H',
    department: 'english',
    level: 'honors',
    grades: [12],
    credits: 5,
    duration: 'full-year',
    description:
      'A rigorous program of study for seniors in preparation for college and/or the world of work. The program is composed of five units: Voices of Genocide, Stranger in the Village, Self and Society, Childhood Revisited (Memoir), and Film. Reading, film analysis, and evaluation in both oral and written form are important processes in the class. Traditional and alternative modes of assessment are employed.',
    prerequisites: ['eng-11-h', 'ap-eng-lang'],
    tags: ['core', 'grade-12'],
    fulfills: ['ELA'],
  },
  {
    id: 'eng-12',
    code: '1004',
    name: 'English 12',
    department: 'english',
    level: 'academic',
    grades: [12],
    credits: 5,
    duration: 'full-year',
    description:
      'A program of study for seniors in preparation for college and/or the world of work. The program is composed of four units: Creation of Self in Society, Great Migrations, Voices of Genocide, and From the Page to the Stage. Students will be expected to hone their reading, writing, and speaking skills. Traditional and alternative modes of assessment are employed.',
    prerequisites: ['eng-11'],
    tags: ['core', 'grade-12'],
    fulfills: ['ELA'],
    notes:
      'Also open to students who complete a series of Pattern courses in lieu of English 11.',
  },
  {
    id: 'eng-12-r',
    code: '81004',
    name: 'English 12',
    department: 'english',
    level: 'resource',
    grades: [12],
    credits: 5,
    duration: 'full-year',
    description:
      'Resource center replacement class taught in the resource center program. IEP goals and objectives are addressed throughout the course. Through reading novels, plays, poetry, and short stories, students will develop vocabulary, demonstrate ability to identify main ideas, and develop critical thinking and analytic skills. Writing is an integral part of the course.',
    prerequisites: ['eng-11-r'],
    tags: ['core', 'grade-12', 'resource'],
    fulfills: ['ELA'],
    notes: 'Recommendation by the Child Study Team required.',
  },
  {
    id: 'ap-eng-lit',
    code: '1004AP',
    name: 'AP English Literature & Composition',
    department: 'english',
    level: 'ap',
    grades: [12],
    credits: 5,
    duration: 'full-year',
    description:
      'A course for seniors designed to provide challenging opportunities to respond to a variety of literary types through writing, speaking, and collaborative activities. Students are exposed to various aspects of the English language and to the techniques of expository and critical writing. Emphasis is placed upon the development of critical thinking and writing skills, and the synthesizing of research data into an original written work, which is presented to an appropriate audience for discussion and evaluation. Students will practice responding to text analysis and open-ended questions in preparation for the AP exam.',
    prerequisites: ['eng-11-h', 'ap-eng-lang'],
    tags: ['core', 'grade-12', 'ap'],
    fulfills: ['ELA'],
    notes:
      'Requires English 11 H grade of A or B, or AP English Language, plus teacher recommendation. Also open to Patterns Honors students with grade of A and teacher recommendation.',
  },

  // ═══════════════════════════════════════════════════════════════════════
  // PATTERN COURSES (Grades 11-12)
  // Semester electives that count toward ELA graduation requirements.
  // May be taken at Academic or Honors level (contract to Honors).
  // Can substitute for core English 11/12 in the pathway.
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'african-am-lit-1',
    code: '1101',
    name: 'African-American Literature I',
    department: 'english',
    level: 'academic',
    grades: [11, 12],
    credits: 2.5,
    duration: 'semester',
    description:
      'Offers students the opportunity to develop an understanding and appreciation of the Black experience. Students read, discuss, analyze, and write about the literature of writers from the Ancient Africa era to the Harlem Renaissance period. Students also present orally their creative ideas and build upon research skills.',
    prerequisites: ['eng-10', 'eng-10-h'],
    tags: ['pattern', 'elective'],
    fulfills: ['ELA'],
    contractHonors: true,
  },
  {
    id: 'african-am-lit-2',
    code: '1102',
    name: 'African-American Literature II',
    department: 'english',
    level: 'academic',
    grades: [11, 12],
    credits: 2.5,
    duration: 'semester',
    description:
      'Offers students the opportunity to develop an understanding and appreciation of the Black experience through poetry, novels, fiction, non-fiction, and drama. Students read, discuss, analyze, and write about the literature of African-American writers from the Harlem Renaissance to the present. Students will write analytical, creative, and research-based essays.',
    prerequisites: ['eng-10', 'eng-10-h'],
    tags: ['pattern', 'elective'],
    fulfills: ['ELA'],
    contractHonors: true,
  },
  {
    id: 'film-and-lit',
    code: '1106',
    name: 'Film and Literature',
    department: 'english',
    level: 'academic',
    grades: [11, 12],
    credits: 2.5,
    duration: 'semester',
    description:
      'Designed to encourage students to view film as an art form. Students are introduced to basic film concepts to encourage critical and analytical viewing. Various forms of fiction and nonfiction including short stories, dramas, novels, and essays are read, with students analyzing the adaptation of written forms to film. Students also analyze different periods of history to ascertain how historical happenings influence film genres. Knowledge of filmmaking concepts and an understanding of the processes involved in film production are at the core of this course. More formal writing assignments are provided.',
    prerequisites: ['eng-10', 'eng-10-h'],
    tags: ['pattern', 'elective'],
    fulfills: ['ELA'],
    contractHonors: true,
    notes: 'NON-NCAA APPROVED.',
  },
  {
    id: 'hip-hop-lit',
    code: '1119',
    name: 'Hip Hop as Modern Literature',
    department: 'english',
    level: 'academic',
    grades: [11, 12],
    credits: 2.5,
    duration: 'semester',
    description:
      'Through reading, analysis, discussion, and writing, students explore the beginning and rise of Hip-Hop as a genre of poetry. Students analyze how Hip-Hop poetry formed its identity and how its form and function developed geographically and culturally. Students explore how Hip-Hop serves as a provocateur for social change and a perpetrator of social norms, expectations, and stereotypes, comparing its growth with other forms of poetry from other literary periods. This course will use various literary works, film, and art to explore the genre through a historical and Post-Modern lens.',
    prerequisites: ['eng-10', 'eng-10-h'],
    tags: ['pattern', 'elective'],
    fulfills: ['ELA'],
    contractHonors: true,
  },
  {
    id: 'jewish-lit',
    code: '1120',
    name: 'Jewish Literature',
    department: 'english',
    level: 'academic',
    grades: [11, 12],
    credits: 2.5,
    duration: 'semester',
    description:
      'Offers students an opportunity to explore the richness and diversity of the Jewish literary tradition. Students will read, analyze, and write about works ranging from the Bible to twentieth-century fiction and poetry. Possible writers may include Sholom Aleichem, I.B. Singer, Bernard Malamud, Elie Wiesel, Cynthia Ozick, and Marge Piercy. Particular attention will be given to Holocaust literature, including the graphic novel Maus by Art Spiegelman.',
    prerequisites: ['eng-10', 'eng-10-h'],
    tags: ['pattern', 'elective'],
    fulfills: ['ELA'],
    contractHonors: true,
  },
  {
    id: 'diaspora-lit',
    code: '1121',
    name: 'Literature of the Diaspora',
    department: 'english',
    level: 'academic',
    grades: [11, 12],
    credits: 2.5,
    duration: 'semester',
    description:
      'Examines texts written by Latino/Latina/Latinx/Hispanic, Muslim, Asian, and Black/African American writers through fiction, drama, and poetry. Emphasis is placed on contemporary texts, with issues including identity, transnationalism, U.S. empire, the classic immigrant narrative, assimilation, and multiculturalism. The course also investigates race, religion, class, sexuality, feminism, masculinity, ethnicity, economic inequality, and social injustice.',
    prerequisites: ['eng-10', 'eng-10-h'],
    tags: ['pattern', 'elective'],
    fulfills: ['ELA'],
    contractHonors: true,
  },
  {
    id: 'philosophy-comp',
    code: '1108',
    name: 'Philosophy and Composition',
    department: 'english',
    level: 'academic',
    grades: [11, 12],
    credits: 5,
    duration: 'full-year',
    description:
      'A full-year English course that introduces students to philosophical reflection and examination of some central questions of human existence. Topics include: the basics of philosophy and its relationship to science, logic and reasoning, the existence of god(s), the mind-body problem and consciousness, understanding artificial intelligence, moral theories and applied ethics, and the meaning of life. The class is largely discussion-based. Assignments consist of reading and annotating short texts that mix both classical and modern philosophers, writing personal connections to the content, creating structured arguments, "thought experiments," and film analysis. All content is approached from multiple perspectives to include diverse, yet logical, views and beliefs.',
    prerequisites: ['eng-10', 'eng-10-h'],
    tags: ['pattern', 'elective'],
    fulfills: ['ELA'],
    contractHonors: true,
  },
  {
    id: 'satire-dystopian',
    code: '1113',
    name: 'Satire and Dystopian Literature',
    department: 'english',
    level: 'academic',
    grades: [11, 12],
    credits: 2.5,
    duration: 'semester',
    description:
      'Investigates the literature of social criticism and political protest in all forms (drama, poetry, fiction, film) and all literary time periods (Classical to contemporary). Sarcasm, wit, and irony are focal points through which students examine the experiences of those who seek to expose and improve the human condition. Students read and analyze a wide variety of authors and works, from ancient Greek comedy to 18th-century novels, as well as satirical websites, films, and television programs. In its second semester, the course examines the dystopia as a subgenre of Menippean satire, exploring how writers create imagined worlds that reflect current societal woes.',
    prerequisites: ['eng-10', 'eng-10-h'],
    tags: ['pattern', 'elective'],
    fulfills: ['ELA'],
    contractHonors: true,
  },
  {
    id: 'short-stories',
    code: '1114',
    name: 'Short Stories',
    department: 'english',
    level: 'academic',
    grades: [11, 12],
    credits: 2.5,
    duration: 'semester',
    description:
      'Encourages students to explore short fiction as an art form. Emphasis is placed on thematic exploration, character creation, plot development, setting, and style. A wide variety of American, British, and world writers will be studied. Students will be expected to write analyses of the material covered, offer oral interpretation, and create their own short fiction.',
    prerequisites: ['eng-10', 'eng-10-h'],
    tags: ['pattern', 'elective'],
    fulfills: ['ELA'],
    contractHonors: true,
  },
  {
    id: 'sports-lit',
    code: '1116',
    name: 'Sports and Literature',
    department: 'english',
    level: 'academic',
    grades: [11, 12],
    credits: 2.5,
    duration: 'semester',
    description:
      'A rigorous program of study for juniors and seniors using both fiction and non-fiction texts to examine and analyze the influence of sport on our society, and understand how this is reflected through literature. Topics covered include sport and race, sport and gender, sport and nationalism, and sport and education. Students will be expected to read and comprehend literature, in addition to utilizing the writing process to perform critical analysis.',
    prerequisites: ['eng-10', 'eng-10-h'],
    tags: ['pattern', 'elective'],
    fulfills: ['ELA'],
    contractHonors: true,
  },
  {
    id: 'womens-lit',
    code: '1117',
    name: "Women's Literature",
    department: 'english',
    level: 'academic',
    grades: [11, 12],
    credits: 2.5,
    duration: 'semester',
    description:
      'Introduces students to the history, tradition, and forms of literature written by women, examining the effects of gender on literature. Students explore how women authors have used their writing to give voice to their experiences with societal expectations, growing up, love, marriage and motherhood, and how gender intersects with race, ethnicity, class, sexual orientation, and other factors in shaping identity. Students explore a rich and diverse range of writers and works to identify recurrent images, themes, and styles of an evolving canon. Works of poetry, prose, drama, non-fiction, and film will be studied. A project focused on feminist utopia will culminate the semester.',
    prerequisites: ['eng-10', 'eng-10-h'],
    tags: ['pattern', 'elective'],
    fulfills: ['ELA'],
    contractHonors: true,
  },

  // ═══════════════════════════════════════════════════════════════════════
  // ELECTIVE COURSES (do NOT count toward ELA graduation requirements)
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'creative-writing',
    code: '1105',
    name: 'Creative Writing',
    department: 'english',
    level: 'academic',
    grades: [11, 12],
    credits: 2.5,
    duration: 'semester',
    description:
      'For students with some mastery of writing skills who wish to explore forms of writing such as poetry, drama, short stories, and creative non-fiction. Students are exposed to and read examples of these different forms and are enabled to comprehend, interpret, and evaluate a variety of texts. Class time is devoted to unique experiments, instruction in writing new forms, and workshop situations where students may critique each other\u2019s work and revise their own. Multimedia sources and technological tools are used to facilitate and enhance learning. Projects require students to research, write, and produce a creative project in the form of a blog, podcast, or digital story/poem/essay.',
    prerequisites: ['eng-10', 'eng-10-h'],
    tags: ['elective'],
    fulfills: [],
    contractHonors: true,
    notes:
      'Elective course \u2014 credits do not count towards ELA graduation requirements.',
  },
  {
    id: 'essay-skill-dev',
    code: '1104',
    name: 'Essay and Skill Development 12',
    department: 'english',
    level: 'academic',
    grades: [11, 12],
    credits: 2.5,
    duration: 'semester',
    description:
      'For students who seek to improve their writing, reading, vocabulary, analytic, and test-taking skills. Emphasis is on vocabulary development and usage, literary comprehension, essay writing, and oral presentation. The basic format of standardized tests is examined, and special attention is paid to strategies in analysis, reading comprehension, exposition, and critical thinking. Available software technology is employed to enhance skill development. College entrance essays are examined, evaluated, and modeled.',
    prerequisites: ['eng-10', 'eng-10-h'],
    tags: ['elective'],
    fulfills: [],
    contractHonors: true,
    notes:
      'Elective course \u2014 credits do not count towards ELA graduation requirements.',
  },
  {
    id: 'read-write-think-1',
    code: '1111',
    name: 'Read, Write, Think I',
    department: 'english',
    level: 'academic',
    grades: [11, 12],
    credits: 2.5,
    duration: 'semester',
    description:
      'A workshop course designed to help students develop skills in reading, writing, and thinking. Skills such as pre-writing, mapping main ideas, free writing, and revision and editing are covered in detail. Discussions, both oral and expository, are at the core of the course, and students are encouraged to express their ideas through journal entries, essays, small group interactions, and collaborative learning.',
    prerequisites: ['eng-10', 'eng-10-h'],
    tags: ['elective'],
    fulfills: [],
    contractHonors: true,
    notes:
      'Elective course \u2014 credits do not count towards ELA graduation requirements.',
  },
  {
    id: 'read-write-think-2',
    code: '1112',
    name: 'Read, Write, Think II',
    department: 'english',
    level: 'academic',
    grades: [11, 12],
    credits: 2.5,
    duration: 'semester',
    description:
      'Continuation of Read, Write, Think I. A workshop course that gives students daily experiences in the reading and writing process through discussions, journal entries, essays, small group interactions, and collaborative learning.',
    prerequisites: ['read-write-think-1'],
    tags: ['elective'],
    fulfills: [],
    contractHonors: true,
    notes:
      'Elective course \u2014 credits do not count towards ELA graduation requirements.',
  },

  // ═══════════════════════════════════════════════════════════════════════
  // SKILL DEVELOPMENT (Resource)
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'multisensory-reading-9',
    code: '8825W',
    name: 'Multisensory Reading A (Grade 9)',
    department: 'english',
    level: 'resource',
    grades: [9],
    credits: 5,
    duration: 'full-year',
    description:
      'Remediation and improvement of reading skills through multi-sensory instruction using a combination of the Wilson Reading Program, Orton-Gillingham, and Lindamood-Bell Instruction. Basic reading skills such as using context clues, decoding, encoding, and visualizing are addressed. The Wilson Reading Program is sequenced, building on previously learned skills and tested through dictation. The Orton-Gillingham method delves into the study of morphology such as prefixes, suffixes, root words, Anglo-Saxon, French, etc.',
    prerequisites: ['Recommendation by the Child Study Team'],
    tags: ['resource', 'skill-development'],
    fulfills: [],
  },
  {
    id: 'multisensory-reading-10',
    code: '8826W',
    name: 'Multisensory Reading B (Grade 10)',
    department: 'english',
    level: 'resource',
    grades: [10],
    credits: 5,
    duration: 'full-year',
    description:
      'Remediation and improvement of reading skills through multi-sensory instruction using a combination of the Wilson Reading Program, Orton-Gillingham, and Lindamood-Bell Instruction. Basic reading skills such as using context clues, decoding, encoding, and visualizing are addressed. The Wilson Reading Program is sequenced, building on previously learned skills and tested through dictation. The Orton-Gillingham method delves into the study of morphology such as prefixes, suffixes, root words, Anglo-Saxon, French, etc.',
    prerequisites: ['Recommendation by the Child Study Team'],
    tags: ['resource', 'skill-development'],
    fulfills: [],
  },
  {
    id: 'multisensory-reading-11',
    code: '8827W',
    name: 'Multisensory Reading C (Grade 11)',
    department: 'english',
    level: 'resource',
    grades: [11],
    credits: 5,
    duration: 'full-year',
    description:
      'Remediation and improvement of reading skills through multi-sensory instruction using a combination of the Wilson Reading Program, Orton-Gillingham, and Lindamood-Bell Instruction. Basic reading skills such as using context clues, decoding, encoding, and visualizing are addressed. The Wilson Reading Program is sequenced, building on previously learned skills and tested through dictation. The Orton-Gillingham method delves into the study of morphology such as prefixes, suffixes, root words, Anglo-Saxon, French, etc.',
    prerequisites: ['Recommendation by the Child Study Team'],
    tags: ['resource', 'skill-development'],
    fulfills: [],
  },
  {
    id: 'multisensory-reading-12',
    code: '8828W',
    name: 'Multisensory Reading D (Grade 12)',
    department: 'english',
    level: 'resource',
    grades: [12],
    credits: 5,
    duration: 'full-year',
    description:
      'Remediation and improvement of reading skills through multi-sensory instruction using a combination of the Wilson Reading Program, Orton-Gillingham, and Lindamood-Bell Instruction. Basic reading skills such as using context clues, decoding, encoding, and visualizing are addressed. The Wilson Reading Program is sequenced, building on previously learned skills and tested through dictation. The Orton-Gillingham method delves into the study of morphology such as prefixes, suffixes, root words, Anglo-Saxon, French, etc.',
    prerequisites: ['Recommendation by the Child Study Team'],
    tags: ['resource', 'skill-development'],
    fulfills: [],
  },

  // ═══════════════════════════════════════════════════════════════════════
  // ESL (English for Speakers of Other Languages)
  // ═══════════════════════════════════════════════════════════════════════

  {
    id: 'esl-9',
    code: '1091',
    name: 'ESL Grade 9',
    department: 'english',
    level: 'academic',
    grades: [9],
    credits: 5,
    duration: 'full-year',
    description:
      'For students whose native language is not English. The objective is the acquisition of listening, speaking, reading, and writing skills and full academic command of the English language. Students acquire learning strategies and study skills for all subject area classes. Emphasis is placed on reading comprehension, models of academic writing, and vocabulary development. The WIDA Screener/ACCESS for ELLs 2.0 determines eligibility. Students in Intermediate and Advanced levels may contract for honors credit.',
    prerequisites: [],
    tags: ['esl'],
    fulfills: ['ELA'],
  },
  {
    id: 'esl-10',
    code: '1092',
    name: 'ESL Grade 10',
    department: 'english',
    level: 'academic',
    grades: [10],
    credits: 5,
    duration: 'full-year',
    description:
      'For students whose native language is not English. Continuation of ESL instruction in listening, speaking, reading, and writing with emphasis on academic vocabulary, reading comprehension, and writing development. The WIDA Screener/ACCESS for ELLs 2.0 determines eligibility. Students in Intermediate and Advanced levels may contract for honors credit.',
    prerequisites: [],
    tags: ['esl'],
    fulfills: ['ELA'],
  },
  {
    id: 'esl-11',
    code: '1093',
    name: 'ESL Grade 11',
    department: 'english',
    level: 'academic',
    grades: [11],
    credits: 5,
    duration: 'full-year',
    description:
      'For students whose native language is not English. Continuation of ESL instruction in listening, speaking, reading, and writing with emphasis on academic vocabulary, reading comprehension, and writing development. The WIDA Screener/ACCESS for ELLs 2.0 determines eligibility. Students in Intermediate and Advanced levels may contract for honors credit.',
    prerequisites: [],
    tags: ['esl'],
    fulfills: ['ELA'],
  },
  {
    id: 'esl-12',
    code: '1094',
    name: 'ESL Grade 12',
    department: 'english',
    level: 'academic',
    grades: [12],
    credits: 5,
    duration: 'full-year',
    description:
      'For students whose native language is not English. Continuation of ESL instruction in listening, speaking, reading, and writing with emphasis on academic vocabulary, reading comprehension, and writing development. The WIDA Screener/ACCESS for ELLs 2.0 determines eligibility. Students in Intermediate and Advanced levels may contract for honors credit.',
    prerequisites: [],
    tags: ['esl'],
    fulfills: ['ELA'],
  },
];
