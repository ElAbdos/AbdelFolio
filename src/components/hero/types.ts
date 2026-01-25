export type Language = 'FR' | 'EN';

export interface SocialLink {
  name: string;
  icon: React.ReactNode;
  url: string;
  username: string;
}

export interface StatItem {
  value: string;
  labelKey: string;
}

export interface HeroProps {
  currentLanguage: Language;
}
