'use client';

import React, { useRef, useState } from 'react';

interface TVCardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function TVCard({ children, className = '', style = {} }: TVCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('');
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;

    setTransform(
      `perspective(1000px) scale3d(1.012, 1.012, 1.012) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`
    );
    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.2,
    });
  };

  const handleMouseLeave = () => {
    setTransform('perspective(1000px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg)');
    setGlare((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: transform || 'perspective(1000px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg)',
        transition: 'transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.2s ease',
        ...style,
      }}
      className={`group relative overflow-hidden rounded-2xl will-change-transform shadow-md ${className}`}
    >
      {/* Specular glare sheen */}
      <div
        className="pointer-events-none absolute inset-0 z-20 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.35), transparent 70%)`,
          opacity: glare.opacity,
        }}
      />
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
}