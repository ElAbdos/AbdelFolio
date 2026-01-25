import React, { useRef } from 'react';
import { translations } from '@/constants/translations.ts';
import { useTimelineScroll, useCardMouseTracking } from './hooks';
import { ICON_MAP } from './constants';
import type { TimelineProps } from './types';
import './styles/index.css';

const Timeline: React.FC<TimelineProps> = ({ currentLanguage }) => {
  const t = translations[currentLanguage].timeline;
  const sectionRef = useRef<HTMLDivElement>(null);
  const progressHeight = useTimelineScroll(sectionRef);
  const { handleCardMouseMove } = useCardMouseTracking();

  return (
    <section className="timeline-section" id="timeline" ref={sectionRef}>
      <div className="timeline-bg-grid"></div>
      <div className="timeline-bg-glow"></div>
      <div className="timeline-bg-orb top-left"></div>
      <div className="timeline-bg-orb bottom-right"></div>

      <div className="timeline-particles">
        <div className="timeline-particle"></div>
        <div className="timeline-particle"></div>
        <div className="timeline-particle"></div>
        <div className="timeline-particle"></div>
        <div className="timeline-particle"></div>
      </div>

      <div className="timeline-container">
        <div className="timeline-header">
          <div className="timeline-tag">
            <span>{t.tag}</span>
          </div>
          <h2 className="timeline-title">{t.title}</h2>
          <p className="timeline-subtitle">{t.subtitle}</p>
        </div>
          <div className="timeline-track">
          <div className="timeline-line"></div>
          <div className="timeline-progress-bar" style={{ height: `${progressHeight}%` }}></div>

          {t.steps.map((step, index) => {
            const isEven = index % 2 === 0;
            const isReached = progressHeight > ((index + 0.5) / t.steps.length) * 100;

            return (
              <div key={index} className={`timeline-item ${isEven ? 'left' : 'right'}`}>
                <div
                  className="timeline-content-wrapper"
                  ref={(el) => {
                    if (el) {
                      el.addEventListener('mousemove', (e) => handleCardMouseMove(e, el));
                    }
                  }}
                >
                  <span className="arrow"></span>
                  <span className="timeline-year">
                    <span>📈</span>
                    {step.year}
                  </span>
                  <h3 className="timeline-item-title">{step.title}</h3>
                  <p className="timeline-item-desc">{step.description}</p>
                </div>
                  <div className={`timeline-dot ${isReached || index === 0 ? 'active' : ''}`}>
                  {ICON_MAP[step.icon] || ICON_MAP.Star}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
