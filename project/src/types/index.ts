export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demo?: string;
  github?: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'programming' | 'web' | 'ai' | 'hardware';
}

export interface TimelineItem {
  date: string;
  title: string;
  description: string;
  icon?: string;
}
