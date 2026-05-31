'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface ReadingProgressProps {
  title: string;
}

export default function ReadingProgress({ title }: ReadingProgressProps) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(Math.min(pct, 100));
      setVisible(scrollTop > 80);
    };
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-gray-900">
      {/* Barra de progresso */}
      <div className="absolute bottom-0 left-0 h-[2px] bg-[#22C55E] transition-all duration-100 ease-out shadow-[0_0_8px_rgba(34,197,94,0.6)]"
        style={{ width: `${progress}%` }}
      />

      <div className="container mx-auto px-6 py-3 flex items-center justify-between gap-4">
        <Link
          href="/#blog"
          className="text-[#22C55E] font-mono text-sm hover:underline flex items-center gap-2 shrink-0"
        >
          ← Blog
        </Link>

        {/* Título aparece na barra ao scrollar */}
        <p className={`text-gray-400 text-sm font-mono truncate text-center transition-all duration-300 ${visible ? 'opacity-100' : 'opacity-0'}`}>
          {title}
        </p>

        <span className="text-gray-600 font-mono text-xs shrink-0">
          {Math.round(progress)}%
        </span>
      </div>
    </header>
  );
}
