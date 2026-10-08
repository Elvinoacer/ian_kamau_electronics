/**
 * Graduate Portfolio data model — implemented from the portfolio
 * specification (section 43). Every `verified` flag defaults to false
 * until the real candidate confirms the content.
 */

export type Proficiency =
  | "strong"
  | "working-knowledge"
  | "academic-exposure"
  | "currently-learning"
  | "currently-developing";

export interface SocialLink {
  platform: "linkedin" | "github" | "email" | "phone" | "website";
  label: string;
  url: string;
  placeholder: boolean;
}

export interface Skill {
  name: string;
  proficiency: Proficiency;
  evidence?: string[];
}

export interface SkillGroup {
  id: string;
  title: string;
  description?: string;
  skills: Skill[];
}

export interface CourseworkCategory {
  category: string;
  modules: string[];
}

export interface Education {
  institution: string;
  degree: string;
  school?: string;
  location?: string;
  startYear?: number;
  endYear?: number;
  graduationYear?: number;
  classification?: string;
  classificationPlaceholder?: boolean;
  coursework?: CourseworkCategory[];
  highlights?: string[];
}

export type ExperienceType =
  | "industrial-attachment"
  | "internship"
  | "employment"
  | "research"
  | "volunteer";

export interface Experience {
  id: string;
  organization: string;
  organizationPlaceholder?: boolean;
  role: string;
  location?: string;
  startDate?: string;
  endDate?: string;
  durationWeeks?: number;
  type: ExperienceType;
  summary: string;
  responsibilities: string[];
  equipment?: string[];
  tools?: string[];
  learning?: string;
  verified: boolean;
}

export interface ProjectMetric {
  label: string;
  value: string;
  verified: boolean;
}

export type ProjectType =
  | "final-year-project"
  | "academic"
  | "personal"
  | "team"
  | "research";

export interface Project {
  slug: string;
  title: string;
  subtitle?: string;
  type: ProjectType;
  featured: boolean;
  year?: number;
  duration?: string;
  role?: string;
  teamSize?: number;
  categories: string[];
  /** Hero image path for the work showcase card & case study banner. */
  image?: string;
  imageAlt?: string;
  problem: string;
  objective: string;
  solution: string;
  constraints?: string[];
  requirements?: string[];
  hardware?: string[];
  software?: string[];
  engineeringConcepts?: string[];
  contribution?: string[];
  designDecisions?: string[];
  testing?: string[];
  results?: string[];
  metrics?: ProjectMetric[];
  challenges?: string[];
  iterations?: string[];
  lessons?: string[];
  futureImprovements?: string[];
  status?: string;
  statusPlaceholder?: boolean;
  repoUrl?: string;
  demoUrl?: string;
  reportUrl?: string;
  verified: boolean;
}

export interface Certification {
  name: string;
  issuer: string;
  issueDate?: string;
  credentialId?: string;
  credentialUrl?: string;
  skills?: string[];
  verified: boolean;
}

export interface Achievement {
  title: string;
  issuer?: string;
  date?: string;
  description: string;
  verified: boolean;
}

export interface Reference {
  name: string;
  role: string;
  organization?: string;
  quote?: string;
  contactAvailableOnRequest?: boolean;
  verified: boolean;
}

export interface FocusArea {
  title: string;
  description: string;
  keywords: string[];
  interests: string[];
}

export interface TimelineEntry {
  year: string;
  title: string;
  description: string;
}

export interface LabExperience {
  id: string;
  title: string;
  work: string[];
}

export interface CurrentlyLearningItem {
  topic: string;
  description: string;
  status: string;
}

export interface Profile {
  fullName: string;
  shortName: string;
  professionalTitle: string;
  headline: string;
  summary: string;
  about: string[];
  location: string;
  availability: string;
  graduationYear: number;
  graduationYearPlaceholder: boolean;
  cvUrl: string;
  links: SocialLink[];
}

export interface PortfolioData {
  profile: Profile;
  education: Education;
  focusAreas: FocusArea[];
  skills: SkillGroup[];
  experience: Experience[];
  projects: Project[];
  certifications: Certification[];
  achievements: Achievement[];
  interests: string[];
  currentlyLearning: CurrentlyLearningItem[];
  philosophy: string;
  philosophyExpanded: string;
  leadership: string[];
  references: Reference[];
  timeline: TimelineEntry[];
  labs: LabExperience[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}
