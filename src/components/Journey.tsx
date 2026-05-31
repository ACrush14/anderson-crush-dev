'use client';

import ParticlesBackground from './ParticlesBackground';
import RevealOnScroll from './RevealOnScroll';
import { FaBriefcase, FaGraduationCap, FaTrophy } from 'react-icons/fa';
import { useLanguage } from '@/contexts/LanguageContext';

const journeyDataMap = {
  pt: [
    {
      icon: <FaGraduationCap />,
      year: '2025 - Atual',
      title: 'Ciências da Computação',
      company: 'UNIFOR',
      description: 'Graduação em Ciências da Computação com foco em desenvolvimento de software, algoritmos, estruturas de dados e inteligência artificial.',
    },
    {
      icon: <FaGraduationCap />,
      year: 'out 2025 - fev 2026',
      title: 'CTE-IA — Inteligência Artificial',
      company: 'UFC',
      description: 'Capacitação Técnica e Empreendedora em Inteligência Artificial (Fase 01) pela Universidade Federal do Ceará.',
    },
    {
      icon: <FaTrophy />,
      year: 'out 2025',
      title: 'NASA Space Apps Challenge',
      company: 'Hackathon · Fortaleza',
      description: 'Desenvolvemos o Nebula.exe, plataforma de dados espaciais voltada à saúde urbana de Fortaleza. Certificado NASA.',
    },
    {
      icon: <FaBriefcase />,
      year: '2022 - 2025',
      title: 'Artista de Ambientes em 3D',
      company: 'Anderson Crush Studio',
      description: 'Captação de clientes, modelagem 3D, renderização e pós-produção. Ferramentas: Unreal Engine 5, 3ds Max, Corona Renderer e Photoshop.',
    },
    {
      icon: <FaBriefcase />,
      year: '2023 - 2024',
      title: 'Artista 3D',
      company: 'Rendereasy 3D',
      description: 'Produção de renders arquitetônicos em regime de tempo integral para clientes remotos.',
    },
    {
      icon: <FaGraduationCap />,
      year: '2017 - 2021',
      title: 'Arquitetura e Urbanismo',
      company: 'UNI7',
      description: 'Bacharelado em Arquitetura e Urbanismo com experiência em AutoCAD, SketchUp, Revit, Lumion e V-Ray.',
    },
  ],
  en: [
    {
      icon: <FaGraduationCap />,
      year: '2025 - Present',
      title: 'Computer Science Degree',
      company: 'UNIFOR',
      description: 'Bachelor\'s in Computer Science focused on software development, algorithms, data structures and artificial intelligence.',
    },
    {
      icon: <FaGraduationCap />,
      year: 'Oct 2025 - Feb 2026',
      title: 'CTE-IA — Artificial Intelligence',
      company: 'UFC',
      description: 'Technical and Entrepreneurial Training in Artificial Intelligence (Phase 01) at Universidade Federal do Ceará.',
    },
    {
      icon: <FaTrophy />,
      year: 'Oct 2025',
      title: 'NASA Space Apps Challenge',
      company: 'Hackathon · Fortaleza',
      description: 'Developed Nebula.exe, a spatial data platform focused on urban health in Fortaleza. NASA certificate.',
    },
    {
      icon: <FaBriefcase />,
      year: '2022 - 2025',
      title: '3D Environment Artist',
      company: 'Anderson Crush Studio',
      description: 'Client acquisition, 3D modeling, rendering and post-production. Tools: Unreal Engine 5, 3ds Max, Corona Renderer and Photoshop.',
    },
    {
      icon: <FaBriefcase />,
      year: '2023 - 2024',
      title: '3D Artist',
      company: 'Rendereasy 3D',
      description: 'Production of architectural renders on a full-time basis for remote clients.',
    },
    {
      icon: <FaGraduationCap />,
      year: '2017 - 2021',
      title: 'Architecture and Urbanism',
      company: 'UNI7',
      description: 'Bachelor\'s degree in Architecture and Urbanism with experience in AutoCAD, SketchUp, Revit, Lumion and V-Ray.',
    },
  ],
};

export default function Journey() {
  const { t, language } = useLanguage();

  const selectedData = journeyDataMap[language] ?? journeyDataMap['pt'];
  const journeyDisplayData = [...selectedData, ...selectedData];

  return (
    <section id="journey" className="relative overflow-hidden">
      <ParticlesBackground id="particles-journey">
        <div className="py-24 relative z-10">
          <div className="container mx-auto px-6 mb-16">
            <RevealOnScroll>
              <h2 className="text-4xl font-bold text-center font-heading text-[#22C55E]">
                {t.journeyTitle}
              </h2>
            </RevealOnScroll>
          </div>

          <RevealOnScroll delay={0.2}>
            <div className="group relative w-full overflow-hidden py-20">
              <div className="relative inline-flex animate-marquee hover:[animation-play-state:paused]">
                <div className="absolute top-1/2 left-0 h-[2px] w-full bg-gray-800 -translate-y-1/2 z-0" />
                <div className="absolute top-1/2 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-[#22C55E] to-transparent -translate-y-1/2 z-0 opacity-50 blur-sm" />

                {journeyDisplayData.map((item, index) => (
                  <div key={index} className="relative flex-shrink-0 w-[500px] h-[500px] flex items-center justify-center mx-8">
                    <div className="absolute top-1/2 -translate-y-1/2 z-20 left-1/2 -translate-x-1/2">
                      <div className="relative flex items-center justify-center w-14 h-14 bg-black border-2 border-[#22C55E] shadow-[0_0_15px_rgba(34,197,94,0.3)] z-20">
                        <div className="text-[#22C55E] text-xl relative z-10">{item.icon}</div>
                        <div className="absolute inset-0 bg-[#22C55E] opacity-20 animate-ping" />
                      </div>
                    </div>

                    <div className={`absolute left-1/2 -translate-x-1/2 w-96 p-6
                      bg-[#111111]/90 backdrop-blur-md border border-gray-800
                      hover:border-[#22C55E]/50 hover:shadow-[0_0_30px_rgba(34,197,94,0.1)]
                      transition-all duration-300 z-10 group/card
                      ${index % 2 === 0 ? 'bottom-[60%] mb-8' : 'top-[60%] mt-8'}`}
                    >
                      <div className={`absolute left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-[#22C55E]/50 to-transparent h-8
                        ${index % 2 === 0 ? 'bottom-[-34px] rotate-180' : 'top-[-34px]'}`} />
                      <div className="flex justify-between items-start mb-2">
                        <time className="text-sm font-mono font-bold text-[#22C55E] bg-[#22C55E]/10 px-2 py-1">
                          {item.year}
                        </time>
                      </div>
                      <div className="text-xs font-mono text-green-400 mb-3 border-b border-gray-800 pb-2">
                        {`@ ${item.company}`}
                      </div>
                      <h3 className="text-lg font-bold mb-2 font-heading text-white group-hover/card:text-[#22C55E] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-400 leading-relaxed font-sans">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </ParticlesBackground>
    </section>
  );
}
