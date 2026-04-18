export interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
  isFeatured?: boolean;
}

export interface SkillGroup {
  category: string;
  items: string[];
}
