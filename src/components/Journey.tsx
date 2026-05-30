'use client';

import ParticlesBackground from './ParticlesBackground';
import RevealOnScroll from './RevealOnScroll';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import { useLanguage } from '@/contexts/LanguageContext';

const journeyDataMap = {
  pt: [
    {
      icon: <FaGraduationCap />,
      year: '2024 - Atual',
      title: 'Graduação em Ciência da Computação',
      company: 'UNIFOR',
      description: 'Cursando Ciência da Computação com foco em desenvolvimento de software, algoritmos e estruturas de dados.',
    },
    {
      icon: <FaBriefcase />,
      year: '2025',
      title: 'Desenvolvedor Full Stack',
      company: 'Projeto Pessoal',
      description: 'Desenvolvimento de projetos pessoais e para clientes utilizando React, Next.js, Node.js e PostgreSQL.',
    },
    {
      icon: <FaGraduationCap />,
      year: '2024',
      title: 'Formação em Desenvolvimento Web',
      company: 'Curso Online',
      description: 'Formação completa em desenvolvimento web moderno, cobrindo front-end e back-end com as principais tecnologias do mercado.',
    },
    {
      icon: <FaBriefcase />,
      year: '2024',
      title: 'Freelancer Web Developer',
      company: 'Autônomo',
      description: 'Criação de sites e aplicações web para pequenas empresas, utilizando React, TailwindCSS e APIs REST.',
    },
    {
      icon: <FaGraduationCap />,
      year: '2023',
      title: 'Início na Programação',
      company: 'Autodidático',
      description: 'Início da jornada em programação, aprendendo HTML, CSS, JavaScript e os fundamentos do desenvolvimento web.',
    },
  ],
  en: [
    {
      icon: <FaGraduationCap />,
      year: '2024 - Present',
      title: 'Computer Science Degree',
      company: 'UNIFOR',
      description: 'Studying Computer Science with focus on software development, algorithms and data structures.',
    },
    {
      icon: <FaBriefcase />,
      year: '2025',
      title: 'Full Stack Developer',
      company: 'Personal Projects',
      description: 'Developing personal and client projects using React, Next.js, Node.js and PostgreSQL.',
    },
    {
      icon: <FaGraduationCap />,
      year: '2024',
      title: 'Web Development Training',
      company: 'Online Course',
      description: 'Complete training in modern web development, covering front-end and back-end with the main market technologies.',
    },
    {
      icon: <FaBriefcase />,
      year: '2024',
      title: 'Freelancer Web Developer',
      company: 'Self-employed',
      description: 'Building websites and web applications for small businesses using React, TailwindCSS and REST APIs.',
    },
    {
      icon: <FaGraduationCap />,
      year: '2023',
      title: 'Started Programming',
      company: 'Self-taught',
      description: 'Beginning of the programming journey, learning HTML, CSS, JavaScript and web development fundamentals.',
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
