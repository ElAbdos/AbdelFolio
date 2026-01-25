import React from 'react';
import type { TimelineStep } from '../types';
import { TimelineItem } from './TimelineItem';

interface TimelineTrackProps {
  steps: TimelineStep[];
  progressHeight: number;
  onMouseMove: (e: MouseEvent, el: HTMLElement | null) => void;
}

export const TimelineTrack: React.FC<TimelineTrackProps> = ({steps, progressHeight, onMouseMove,}) => {
  return (
    <div className="timeline-track">
      <div className="timeline-line"></div>
      <div className="timeline-progress-bar" style={{ height: `${progressHeight}%` }}></div>
      {steps.map((step, index) => (
        <TimelineItem key={index} step={step} index={index} progressHeight={progressHeight} totalSteps={steps.length} onMouseMove={onMouseMove}/>
      ))}
    </div>
  );
};
