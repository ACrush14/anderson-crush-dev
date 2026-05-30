'use client';

import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import InteractiveBackground from './InteractiveBackground';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative w-full pt-32 pb-16 overflow-hidden bg-black">

      <div className="absolute inset-4 md:inset-8 z-0 bg-zinc-950/20 overflow-hidden border border-white/5 shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/90 z-10 pointer-events-none" />
        <InteractiveBackground />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">

          {/* Foto */}
          <div className="flex justify-center relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-20"
            >
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
                  width={450}
                  height={450}
                  className="object-contain hover:scale-105 transition-transform duration-500"
                  priority
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 font-heading text-[#E5E5E5]">
              {t.heroGreeting}{' '}
              <span className="text-[#22C55E]">Anderson Crush</span>
            </h1>

            <div className="text-lg md:text-2xl font-semibold text-gray-300 h-10 md:h-12">
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
          </motion.div>

        </div>
      </div>
    </section>
  );
}
