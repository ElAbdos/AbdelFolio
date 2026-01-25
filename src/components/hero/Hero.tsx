import React from 'react';
import { translations } from '@/constants/translations.ts';
import { useTypewriter } from './hooks';
import { SOCIAL_LINKS, HERO_STATS, CV_PATH, PROFILE_IMAGE_PATH } from './constants';
import type { HeroProps } from './types';
import { InternshipBadge } from './components/InternshipBadge';
import { HeroTitle } from './components/HeroTitle';
import { TypewriterSubtitle } from './components/TypewriterSubtitle';
import { BioBox } from './components/BioBox';
import { ActionButtons } from './components/ActionButtons';
import { Quote } from './components/Quote';
import { ProfileImage } from './components/ProfileImage';
import { ContactCard } from './components/ContactCard';
import { StatsGrid } from './components/StatsGrid';
import './styles/index.css';

const Hero: React.FC<HeroProps> = ({ currentLanguage }) => {
  const t = translations[currentLanguage].hero;
  const displayedText = useTypewriter(t.typewriter_texts);

  const scrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault();
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-section" id="home">
      <div className="glow-bg" />
      <div className="hero-container">
        <div className="hero-content">
          <InternshipBadge text={t.internship_badge} />
          <HeroTitle nameHighlight={t.name_highlight} />
          <TypewriterSubtitle prefix={t.subtitle_prefix} displayedText={displayedText} />
          <BioBox bio={t.bio} />
          <ActionButtons cvPath={CV_PATH} primaryText={t.cta_primary} secondaryText={t.cta_secondary} onScrollToProjects={scrollToProjects}/>
          <Quote text={t.quote} />
        </div>

        <div className="hero-visuals">
          <ProfileImage imagePath={PROFILE_IMAGE_PATH} name="Abdel El Haroria" />
          <ContactCard socialLinks={SOCIAL_LINKS} connectLabel={t.social.connect} availableLabel={t.social.available}/>
        </div>

        <StatsGrid stats={HERO_STATS} translations={t.stats} />
      </div>
    </section>
  );
};

export default Hero;
