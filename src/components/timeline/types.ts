import React from "react";

export type Language = 'FR' | 'EN';

export interface TimelineStep {
  year: string;
  title: string;
  description: string;
  icon: string;
}

export interface TimelineProps {
  currentLanguage: Language;
}

export type IconMapType = Record<string, React.ReactNode>;
