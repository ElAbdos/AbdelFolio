import React, { useState, useRef } from 'react';
import type { MousePosition } from './types';
import { getTransform3D } from './constants';


// Hook pour gérer l'effet 3D sur la carte au survol de la souris
export const use3DCardEffect = () => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0.5, y: 0.5 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0.5, y: 0.5 });
  };

  const transform = getTransform3D(mousePosition);

  return {cardRef, mousePosition, transform, handleMouseMove, handleMouseLeave,};
};


//Hook pour convertir une couleur hexadécimale en format RGB
export const hexToRgb = (hex: string): string => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
    : '143, 122, 255';
};
