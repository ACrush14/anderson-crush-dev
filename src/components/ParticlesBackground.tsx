'use client';

import { useEffect, useState, useMemo } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { useTheme } from 'next-themes';
import { Engine, ISourceOptions } from '@tsparticles/engine';

interface ParticlesBackgroundProps {
  children: React.ReactNode;
  id: string;
  className?: string;
}

export default function ParticlesBackground({ children, id, className = '' }: ParticlesBackgroundProps) {
  const [init, setInit] = useState(false);
  const { resolvedTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState<string>('dark');

  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  useEffect(() => {
    if (resolvedTheme) setCurrentTheme(resolvedTheme);
  }, [resolvedTheme]);

  const isDark = currentTheme === 'dark';
  const particleColor = '#22C55E';
  const linksColor = isDark ? '#22C55E' : '#1A1A1A';

  const options: ISourceOptions = useMemo(
    () => ({
      background: { color: { value: 'transparent' } },
      fpsLimit: 120,
      fullScreen: { enable: false },
      interactivity: {
        events: {
          onClick: { enable: true, mode: 'push' },
          onHover: { enable: true, mode: 'grab' },
        },
        modes: {
          push: { quantity: 4 },
          grab: { distance: 140, links: { opacity: 1 } },
        },
      },
      particles: {
        color: { value: particleColor },
        links: {
          color: linksColor,
          distance: 150,
          enable: true,
          opacity: isDark ? 0.2 : 0.15,
          width: 1,
        },
        move: { enable: true, speed: 1.5 },
        number: {
          density: { enable: true, width: 800, height: 800 },
          value: 60,
        },
        opacity: { value: isDark ? 0.4 : 0.3 },
        shape: { type: 'circle' },
        size: { value: { min: 1, max: 3 } },
      },
      detectRetina: true,
    }),
    [isDark, particleColor, linksColor]
  );

  return (
    <div className={`relative w-full bg-background transition-colors duration-500 ${className}`}>
      {init && (
        <Particles
          id={id}
          key={currentTheme}
          className="absolute inset-0 z-0"
          options={options}
        />
      )}
      <div className={`absolute inset-0 z-0 pointer-events-none transition-colors duration-500 ${isDark ? 'bg-black/70' : 'bg-white/40'}`} />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
