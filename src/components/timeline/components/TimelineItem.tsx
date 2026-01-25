import React from 'react';
import type { TimelineStep } from '../types';
import { ICON_MAP } from '../constants';

interface TimelineItemProps {
  step: TimelineStep;
  index: number;
  progressHeight: number;
  totalSteps: number;
  onMouseMove: (e: MouseEvent, el: HTMLElement | null) => void;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({
  step,
  index,
  progressHeight,
  totalSteps,
  onMouseMove,
}) => {
  const isEven = index % 2 === 0;
  const isReached = progressHeight > ((index + 0.5) / totalSteps) * 100;

  return (
    <div className={`timeline-item ${isEven ? 'left' : 'right'}`}>
      <div className="timeline-content-wrapper" ref={(el) => {
          if (el) {
            el.addEventListener('mousemove', (e) => onMouseMove(e, el));
          }
        }}>
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
};
