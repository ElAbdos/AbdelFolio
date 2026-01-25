import { Github, Linkedin, Mail } from 'lucide-react';
import type { SocialLink, StatItem } from './types';


export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'GitHub',
    icon: <Github size={22} />,
    url: 'https://github.com/ElAbdos',
    username: '@ElAbdos',
  },
  {
    name: 'LinkedIn',
    icon: <Linkedin size={22} />,
    url: 'https://www.linkedin.com/in/abdel-el-haroria-6a529233b/',
    username: 'Abdel El Haroria',
  },
  {
    name: 'Email',
    icon: <Mail size={22} />,
    url: 'mailto:abdeloffipro@gmail.com',
    username: 'abdeloffipro@gmail.com',
  },
];

export const HERO_STATS: StatItem[] = [
  { value: 'BAC +3', labelKey: 'years' },
  { value: '7+', labelKey: 'projects' },
  { value: '30+', labelKey: 'tech' },
  { value: '12+', labelKey: 'internship' },
];

export const CV_PATH = '/Hero-section/CV El Haroria Abdel V2.pdf';
export const PROFILE_IMAGE_PATH = '/Hero-section/photo.png';
