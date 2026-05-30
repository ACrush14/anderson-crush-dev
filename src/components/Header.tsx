'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaBars, FaTimes, FaInstagram } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import { useLanguage } from '@/contexts/LanguageContext';

const GITHUB_URL = 'https://github.com/ACrush14';
const LINKEDIN_URL = 'https://www.linkedin.com/in/andersondelimacomputacao/';
const INSTAGRAM_URL = 'https://www.instagram.com/andersoncrushdev/';

const FlagButton = ({ lang, current, onClick, label }: { lang: string; current: string; onClick: () => void; label: string }) => (
  <button
    onClick={onClick}
    className={`font-bold text-xs px-2 py-1 border transition-all ${
      current === lang
        ? 'bg-black text-[#22C55E] border-[#22C55E]'
        : 'bg-transparent text-gray-700 border-transparent hover:bg-gray-300/50'
    }`}
  >
    {label}
  </button>
);

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const closeMenu = () => setIsMenuOpen(false);

  const navLinkClass = "font-bold px-3 py-2 text-gray-800 hover:text-[#22C55E] hover:-translate-y-1 transition-all";

  return (
    <header className="fixed top-0 left-0 w-full bg-[#E5E5E5] z-50 shadow-md transition-colors border-b border-gray-300">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">

        <Link href="/" className="flex items-center" onClick={closeMenu}>
          <span className="text-xl font-extrabold text-gray-900 font-heading tracking-tight">
            Anderson<span className="text-[#22C55E]">.</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center space-x-1">
          <Link href="/#about" className={navLinkClass}>{t.about}</Link>
          <Link href="/#journey" className={navLinkClass}>{t.journey}</Link>
          <Link href="/#projects" className={navLinkClass}>{t.projects}</Link>
          <Link href="/#blog" className={navLinkClass}>{t.blog}</Link>
          <Link href="/#contact" className={navLinkClass}>{t.contact}</Link>
        </div>

        <div className="hidden md:flex items-center space-x-3">
          <div className="flex space-x-1 mr-2 bg-gray-300 p-1">
            <FlagButton lang="pt" current={language} onClick={() => setLanguage('pt')} label="PT" />
            <FlagButton lang="en" current={language} onClick={() => setLanguage('en')} label="EN" />
          </div>
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub className="w-6 h-6 text-gray-800 hover:text-[#22C55E] hover:-translate-y-1 transition-all" />
          </a>
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="w-6 h-6 text-gray-800 hover:text-[#22C55E] hover:-translate-y-1 transition-all" />
          </a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram className="w-6 h-6 text-gray-800 hover:text-[#22C55E] hover:-translate-y-1 transition-all" />
          </a>
          <ThemeToggle />
        </div>

        <div className="md:hidden flex items-center gap-2">
          <div className="flex space-x-1 bg-gray-300 p-1">
            <button onClick={() => setLanguage('pt')} className={`text-xs font-bold p-1 ${language === 'pt' ? 'text-green-600' : 'text-gray-600'}`}>PT</button>
            <button onClick={() => setLanguage('en')} className={`text-xs font-bold p-1 ${language === 'en' ? 'text-green-600' : 'text-gray-600'}`}>EN</button>
          </div>
          <ThemeToggle />
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-800 focus:outline-none p-2">
            {isMenuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#E5E5E5] shadow-lg overflow-hidden border-t border-gray-300"
          >
            <div className="flex flex-col items-center py-4 space-y-2">
              {[
                { href: '/#about', label: t.about },
                { href: '/#journey', label: t.journey },
                { href: '/#projects', label: t.projects },
                { href: '/#blog', label: t.blog },
                { href: '/#contact', label: t.contact },
              ].map(({ href, label }) => (
                <Link key={href} href={href} onClick={closeMenu} className="text-lg font-bold text-gray-800 hover:text-[#22C55E] w-full text-center py-2 border-b border-gray-200">
                  {label}
                </Link>
              ))}
              <div className="flex space-x-6 pt-4 w-full justify-center">
                <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer"><FaGithub className="w-8 h-8 text-gray-800 hover:text-[#22C55E]" /></a>
                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer"><FaLinkedin className="w-8 h-8 text-gray-800 hover:text-[#22C55E]" /></a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
