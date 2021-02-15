export type IImage = {
  url: string;
  alternativeText: string;
};

export type TeamMember = {
  name: string;
  position: string;
  bio: string;
  slug: string;
  linkedin: string;
  github: string;
  twitter: string;
  photo: IImage;
};

export type BlogPostTag = {
  name: string;
  slug: string;
};

export type BlogPost = {
  title: string;
  subtitle: string;
  slug: string;
  image: IImage;
  blog_tags: BlogPostTag[];
  content: string;
};

export type SprintTag = {
  name: string;
};

export type Sprint = {
  title: string;
  name: string;
  slug: string;
  blurb: string;
  image: IImage;
  data_club_tags: SprintTag[];
  fullDescription: string;
};

export type Cohort = {
  id: string;
  startDate: string;
  title: string;
  topicsCovered: string;
  learnMoreModal: string;
};

export type ModuleTopic = {
  title: string;
  content: string;
  order: number;
};

export type Module = {
  id: string;
  title: string;
  description: string;
  order: number;
  module_topics: [ModuleTopic];
};

export enum Schedule {
  PART_TIME = 'PART_TIME',
  FULL_TIME = 'FULL_TIME',
  FLEXI = 'FLEXI',
}

export enum CareerPathwayComponent {
  PATHWAY_TO_DATA_SCIENCE = 'PATHWAY_TO_DATA_SCIENCE',
  HIDDEN = 'HIDDEN',
}

export type CourseSpotlights = {
  image: IImage;
  order: number;
  buttonText: string;
  title: string;
  subtitle: string;
  description: string;
};

export type CourseResource = {
  image: IImage;
  order: number;
  buttonText: string;
  title: string;
  description: string;
  buttonURL: string;
};

export type FAQ = {
  id: string;
  title: string;
  content: string;
  order: number;
};

export enum StepNames {
  LOGIN_TO_LMS = 'LOGIN_TO_LMS',
  FREE_PREP_COURSE = 'FREE_PREP_COURSE',
}

export type Course = {
  slug: string;
  name: string;
  estimatedTime: string;
  numberOfHours: string;
  prereqs: string;
  prereqDetailsModal: string;
  title: string;
  subtitle: string;
  syllabusDownloadURL: string;
  image: IImage;
  videoUrl: string;
  description: string;
  applicationProcessTitle: string;
  applicationProcessImage: IImage;
  applicationProcessURL: string;
  dataClub: boolean;
  upcomingCohortsTitle: string;
  cohorts: [Cohort];
  whatYouWillLearnTitle: string;
  modules: [Module];
  schedule: Schedule;
  careerPathwayComponent: CareerPathwayComponent;
  course_spotlights: [CourseSpotlights];
  getToKnowUsTitle: string;
  course_resources: [CourseResource];
  faqTitle: string;
  faqs: [FAQ];
  allowSignups: boolean;
  signupBlurb: string;
  stepNames: StepNames;
  showProgressBar: boolean;
  courseCode: string;
};
