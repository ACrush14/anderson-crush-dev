'use client';

import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaDownload, FaEnvelope } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import InteractiveBackground from './InteractiveBackground';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  const proofPoints = [t.heroProof1, t.heroProof2, t.heroProof3];

  return (
    <section id="home" className="relative w-full pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden bg-black">

      <div className="absolute inset-4 md:inset-8 z-0 bg-zinc-950/20 overflow-hidden border border-white/5 shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/90 z-10 pointer-events-none" />
        <InteractiveBackground />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-6 items-center">

          {/* Texto — bloco principal, assimétrico, sempre alinhado à esquerda */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-20 order-2 lg:order-1 text-left"
          >
            <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 border border-[#22C55E]/30 bg-[#22C55E]/5 font-mono text-xs text-[#22C55E]">
              <span className="w-1.5 h-1.5 bg-[#22C55E] animate-pulse" />
              {t.heroAvailability}
            </div>

            <h1 className="font-heading font-extrabold text-[#E5E5E5] leading-[0.95] tracking-tight text-5xl sm:text-6xl lg:text-[4.5rem] -ml-0.5">
              {t.heroGreeting}
              <br />
              <span className="text-[#22C55E]">Anderson Crush</span>
            </h1>

            <div className="text-lg md:text-2xl font-semibold text-gray-300 h-10 md:h-12 mt-4">
              <TypeAnimation
                key={t.heroRole1}
                sequence={[
                  t.heroRole1, 1500,
                  t.heroRole2, 1500,
                  t.heroRole3, 1500,
                  t.heroRole4, 1500,
                  t.heroRole5, 1500,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="font-mono text-[#22C55E]"
              />
            </div>

            <p className="mt-5 max-w-xl text-base md:text-lg text-gray-400 leading-relaxed font-sans">
              {t.heroTagline}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="#projects"
                className="group inline-flex items-center gap-2 bg-[#22C55E] text-black font-mono font-bold text-sm py-3 px-6 hover:bg-green-400 transition-all hover:scale-[1.02] shadow-[0_0_20px_rgba(34,197,94,0.3)]"
              >
                {t.heroCtaProjects}
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="/Curriculo_Anderson_Crush.pdf"
                download
                className="inline-flex items-center gap-2 border border-gray-700 text-gray-200 font-mono font-bold text-sm py-3 px-6 hover:border-[#22C55E] hover:text-[#22C55E] transition-all"
              >
                <FaDownload />
                {t.heroCtaResume}
              </a>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 border border-gray-700 text-gray-200 font-mono font-bold text-sm py-3 px-6 hover:border-[#22C55E] hover:text-[#22C55E] transition-all"
              >
                <FaEnvelope />
                {t.heroCtaContact}
              </Link>
            </div>

            {/* Faixa de prova — quebra a leitura tradicional de portfólio júnior */}
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-gray-800 pt-6">
              {proofPoints.map((point) => (
                <div key={point} className="flex items-center gap-2 font-mono text-xs text-gray-500">
                  <span className="text-[#22C55E]">▸</span>
                  {point}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Foto — deslocada, sangrando para a direita, com moldura assimétrica */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute -inset-3 border border-[#22C55E]/25 -z-10 translate-x-3 translate-y-3 hidden sm:block" />
              <div className="absolute -top-2 -left-2 w-10 h-10 border-t-2 border-l-2 border-[#22C55E] z-20" />
              <div className="absolute -bottom-2 -right-2 w-10 h-10 border-b-2 border-r-2 border-[#22C55E] z-20" />

              <motion.div
                animate={{
                  filter: [
                    'drop-shadow(0 0 0px rgba(34, 197, 94, 0))',
                    'drop-shadow(0 0 15px rgba(34, 197, 94, 0.6))',
                    'drop-shadow(0 0 30px rgba(34, 197, 94, 0.8))',
                    'drop-shadow(0 0 15px rgba(34, 197, 94, 0.6))',
                  ],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Image
                  src="/profile.png"
                  alt="Anderson Crush"
                  width={420}
                  height={420}
                  className="object-contain hover:scale-105 transition-transform duration-500"
                  priority
                />
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
