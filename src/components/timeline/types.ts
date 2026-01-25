export type Language = 'FR' | 'EN';

export interface TimelineStep {
  year: string;
  title: string;
  description: string;
  icon: string;
}

export interface TimelineTranslations {
  tag: string;
  title: string;
  subtitle: string;
  steps: TimelineStep[];
}

export interface TimelineProps {
  currentLanguage: Language;
}

export type IconMapType = Record<string, React.ReactNode>;
