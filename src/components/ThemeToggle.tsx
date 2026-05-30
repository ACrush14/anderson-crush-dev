'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className={`relative p-2 rounded-full transition-all duration-300 ease-in-out focus:outline-none
        ${isDark ? 'bg-gray-700 text-yellow-400' : 'bg-blue-100 text-blue-600'}
        hover:scale-110 border-2 border-transparent hover:border-current`}
      aria-label="Alternar Tema"
    >
      {isDark ? <FaSun size={20} /> : <FaMoon size={20} />}
    </button>
  );
}
