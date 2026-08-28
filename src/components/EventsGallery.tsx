'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, FreeMode } from 'swiper/modules';
import { FaRocket, FaMicrochip, FaBrain, FaMicrophone } from 'react-icons/fa';
import ParticlesBackground from './ParticlesBackground';
import RevealOnScroll from './RevealOnScroll';
import { useLanguage } from '@/contexts/LanguageContext';
import 'swiper/css';

const milestonesMap = {
  pt: [
    {
      src: '/instagram-nasa.jpg',
      alt: 'NASA Space Apps Challenge',
      icon: FaRocket,
      date: 'Out 2025',
      title: 'NASA Space Apps Challenge',
      caption: 'Hackathon internacional — Nebula.exe, plataforma de dados espaciais para saúde urbana de Fortaleza.',
    },
    {
      src: '/ead-unifor-1.png',
      alt: 'CTE-IA — Inteligência Artificial, UFC',
      icon: FaBrain,
      date: 'Out 2025 – Fev 2026',
      title: 'CTE-IA — Inteligência Artificial',
      caption: 'Capacitação Técnica e Empreendedora em IA (Fase 01) pela Universidade Federal do Ceará.',
    },
    {
      src: '/ead-unifor-2.png',
      alt: 'CTE-IA — aula síncrona, UFC',
      icon: FaBrain,
      date: 'Out 2025 – Fev 2026',
      title: 'CTE-IA — Aula Síncrona',
      caption: 'Fundamentos de IA aplicada, direto da capacitação técnica na UFC.',
    },
    {
      src: '/instagram-carousel.jpg',
      alt: 'Projeto Arduino',
      icon: FaMicrochip,
      date: 'UNIFOR',
      title: 'Robô com Arduino',
      caption: 'Controle de motores e movimentação autônoma, projeto de Experimentação Orientada.',
    },
    {
      src: '/instagram-tech-talk.jpg',
      alt: 'Tech Talk',
      icon: FaMicrophone,
      date: 'Tech Talk',
      title: 'Palestra de Tecnologia',
      caption: 'Compartilhando aprendizados sobre carreira e desenvolvimento de software.',
    },
  ],
  en: [
    {
      src: '/instagram-nasa.jpg',
      alt: 'NASA Space Apps Challenge',
      icon: FaRocket,
      date: 'Oct 2025',
      title: 'NASA Space Apps Challenge',
      caption: 'International hackathon — Nebula.exe, a spatial data platform for urban health in Fortaleza.',
    },
    {
      src: '/ead-unifor-1.png',
      alt: 'CTE-IA — Artificial Intelligence, UFC',
      icon: FaBrain,
      date: 'Oct 2025 – Feb 2026',
      title: 'CTE-IA — Artificial Intelligence',
      caption: 'Technical and Entrepreneurial Training in AI (Phase 01) at Universidade Federal do Ceará.',
    },
    {
      src: '/ead-unifor-2.png',
      alt: 'CTE-IA — live class, UFC',
      icon: FaBrain,
      date: 'Oct 2025 – Feb 2026',
      title: 'CTE-IA — Live Session',
      caption: 'Applied AI fundamentals, straight from the technical training program at UFC.',
    },
    {
      src: '/instagram-carousel.jpg',
      alt: 'Arduino Project',
      icon: FaMicrochip,
      date: 'UNIFOR',
      title: 'Arduino Robot',
      caption: 'Motor control and autonomous movement, built for the Guided Experimentation course.',
    },
    {
      src: '/instagram-tech-talk.jpg',
      alt: 'Tech Talk',
      icon: FaMicrophone,
      date: 'Tech Talk',
      title: 'Tech Talk',
      caption: 'Sharing what I learned about career growth and software development.',
    },
  ],
};

export default function EventsGallery() {
  const { t, language } = useLanguage();
  const milestones = milestonesMap[language] ?? milestonesMap['pt'];

  return (
    <section id="events">
      <ParticlesBackground id="particles-events">
        <div className="py-20">
          <div className="container mx-auto">
            <RevealOnScroll>
              <h2 className="text-4xl font-bold text-center mb-16 font-heading text-[#22C55E]">
                {t.eventsTitle}
              </h2>
            </RevealOnScroll>

            <RevealOnScroll delay={0.2}>
              <div className="px-4 md:px-6">
                <Swiper
                  modules={[A11y, FreeMode]}
                  spaceBetween={20}
                  slidesPerView={1.15}
                  freeMode={{ enabled: true, momentumRatio: 0.6, momentumVelocityRatio: 0.8 }}
                  grabCursor
                  breakpoints={{
                    480:  { slidesPerView: 1.6, spaceBetween: 20 },
                    768:  { slidesPerView: 2.3, spaceBetween: 24 },
                    1024: { slidesPerView: 3.2, spaceBetween: 24 },
                    1280: { slidesPerView: 4, spaceBetween: 24 },
                  }}
                  className="!overflow-visible !pb-2"
                >
                  {milestones.map((item) => {
                    const Icon = item.icon;
                    return (
                      <SwiperSlide key={item.src + item.title} className="!h-auto">
                        <div className="group flex flex-col h-full bg-[#111111]/90 border border-gray-800 hover:border-[#22C55E]/50 hover:shadow-[0_0_25px_rgba(34,197,94,0.12)] transition-all duration-300">
                          <div className="relative w-full h-40 overflow-hidden border-b border-gray-800">
                            <Image
                              src={item.src}
                              alt={item.alt}
                              fill
                              sizes="(max-width: 768px) 85vw, (max-width: 1024px) 40vw, 25vw"
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                            <div className="absolute top-3 left-3 flex items-center justify-center w-8 h-8 bg-black border border-[#22C55E]/50 text-[#22C55E]">
                              <Icon size={14} />
                            </div>
                          </div>
                          <div className="p-4 flex flex-col flex-grow">
                            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#22C55E]/70 mb-2">
                              {item.date}
                            </span>
                            <h3 className="text-sm font-bold font-heading text-white mb-2 leading-snug">
                              {item.title}
                            </h3>
                            <p className="text-gray-500 text-xs leading-relaxed">
                              {item.caption}
                            </p>
                          </div>
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </ParticlesBackground>
    </section>
  );
}
