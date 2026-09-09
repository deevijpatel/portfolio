export type ProjectCategory = 
  | 'Product / Builder'
  | 'Finance / Analytics'
  | 'Operations / Client Management'
  | 'Research / Finance';

export interface StatItem {
  label: string;
  value: string;
  context: string;
}

export interface CaseStudySections {
  overview: string;
  problem: string;
  role: string;
  approach: string[];
  output: string[];
  learned: string[];
  evidence: {
    verifiedMetrics?: Array<{ label: string; value: string; note: string }>;
    documentsOrLinks?: Array<{ title: string; url?: string; note: string }>;
  };
}

export interface ProjectCaseStudy {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  companyOrProduct: string;
  category: ProjectCategory;
  positioning: string;
  cardCopy: string;
  websiteUrl?: string;
  stats?: StatItem[];
  sections: CaseStudySections;
  interactiveType: 'receiptwise' | 'tresvista' | '32bytes' | 'research';
  tags: string[];
}

export interface ProofPoint {
  value: string;
  label: string;
  sublabel: string;
  verificationSource: string;
}

export interface ThoughtPrinciple {
  number: string;
  title: string;
  statement: string;
  elaboration: string;
}

export interface ExperienceItem {
  id: string;
  organization: string;
  role: string;
  period: string;
  type: 'experience' | 'education';
  summary: string;
  bulletPoints: string[];
  badge?: string;
}

export interface ValueAddArea {
  id: string;
  title: string;
  shortDesc: string;
  points: string[];
  icon: string;
}
