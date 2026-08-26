export interface Profile {
  name: string;
  title: string;
  shortTitle: string;
  location: string;
  email: string;
  phone?: string;
  github: string;
  linkedin: string;
  about: string;
  engineeringPhilosophy: string[];
  currentFocus: string[];
  available: boolean;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  category: string[];
  featured: boolean;
  technologies: string[];
  image: string;
  github: string;
  liveUrl?: string;
  caseStudy: boolean;
  caseStudyData?: CaseStudyData;
  clientProject?: boolean;
  year?: string;
  role?: string;
}

export interface CaseStudyData {
  problem: string;
  solution: string;
  architecture: string;
  keyFeatures: string[];
  engineeringChallenges: string[];
  integrations: string[];
  results?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  type: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  responsibilities: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  category: string[];
  skills: string[];
  credentialId?: string;
  credentialUrl?: string;
  featured?: boolean;
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: 'Strong' | 'Working Knowledge' | 'Learning';
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  grade?: string;
  activities?: string[];
}

export interface Achievement {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  imageUrl?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  icon: string;
  category?: string;
  exploring?: boolean;
}

export interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  updated_at: string;
}
