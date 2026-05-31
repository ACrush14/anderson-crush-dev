'use client';

import { useState, useRef } from 'react';
import { FaGithub, FaStar } from 'react-icons/fa';
import { FiExternalLink, FiChevronLeft, FiChevronRight, FiTerminal, FiCode } from 'react-icons/fi';
import ParticlesBackground from './ParticlesBackground';
import RevealOnScroll from './RevealOnScroll';
import { useLanguage } from '@/contexts/LanguageContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

type ProjectCategory = 'Todos' | 'Front-end' | 'Mobile' | 'Game Dev' | 'Hardware';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  demoUrl: string | null;
  category: ProjectCategory;
  highlight?: boolean;
}

const projectsDataMap: Record<string, Project[]> = {
  pt: [
    {
      title: 'Site Portfólio Pessoal',
      description: 'Este próprio site! Desenvolvido com Next.js, TypeScript e TailwindCSS. Design moderno, responsivo, com suporte a tema claro/escuro e dois idiomas.',
      technologies: ['Next.js', 'TypeScript', 'TailwindCSS', 'Framer Motion'],
      githubUrl: 'https://github.com/ACrush14/anderson-crush-dev',
      demoUrl: null,
      category: 'Front-end',
      highlight: true,
    },
    {
      title: 'BiblioUnifor Dev AB',
      description: 'Aplicativo mobile para gestão de biblioteca universitária, desenvolvido como projeto acadêmico na UNIFOR.',
      technologies: ['Kotlin', 'XML', 'Android'],
      githubUrl: 'https://github.com/ACrush14/BiblioUnifor_DEV_AB',
      demoUrl: null,
      category: 'Mobile',
    },
    {
      title: 'Conjunto Discreto',
      description: 'Jogo interativo desenvolvido para a disciplina de Natureza Discreta na UNIFOR, explorando conceitos de Conjuntos Numéricos de forma lúdica.',
      technologies: ['Godot', 'GDScript'],
      githubUrl: 'https://github.com/ACrush14/ConjuntoDiscreto',
      demoUrl: null,
      category: 'Game Dev',
    },
    {
      title: 'Calculadora Lógica',
      description: 'Calculadora de expressões lógicas com suporte a operadores booleanos.',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      githubUrl: 'https://github.com/ACrush14/calculadora-logica',
      demoUrl: null,
      category: 'Front-end',
    },
    {
      title: 'Joguinho Godot',
      description: 'Mini-jogo desenvolvido na engine Godot durante a disciplina de Experimentação de Protótipos na UNIFOR.',
      technologies: ['Godot', 'GDScript'],
      githubUrl: 'https://github.com/ACrush14/T166-22---Experimentacao-de-prototipos',
      demoUrl: null,
      category: 'Game Dev',
    },
    {
      title: 'Robô Arduino',
      description: 'Robô que anda, desenvolvido com Arduino durante a disciplina de Experimentação Orientada na UNIFOR. Controle de motores e movimentação autônoma.',
      technologies: ['Arduino', 'C++', 'Eletrônica'],
      githubUrl: 'https://github.com/ACrush14',
      demoUrl: null,
      category: 'Hardware',
    },
  ],
  en: [
    {
      title: 'Personal Portfolio',
      description: 'This very website! Built with Next.js, TypeScript and TailwindCSS. Modern responsive design with light/dark mode and two-language support.',
      technologies: ['Next.js', 'TypeScript', 'TailwindCSS', 'Framer Motion'],
      githubUrl: 'https://github.com/ACrush14/anderson-crush-dev',
      demoUrl: null,
      category: 'Front-end',
      highlight: true,
    },
    {
      title: 'BiblioUnifor Dev AB',
      description: 'Mobile app for university library management, developed as an academic project at UNIFOR.',
      technologies: ['Kotlin', 'XML', 'Android'],
      githubUrl: 'https://github.com/ACrush14/BiblioUnifor_DEV_AB',
      demoUrl: null,
      category: 'Mobile',
    },
    {
      title: 'Discrete Set',
      description: 'Interactive game built for the Discrete Nature course at UNIFOR, exploring Numerical Sets concepts in a playful way.',
      technologies: ['Godot', 'GDScript'],
      githubUrl: 'https://github.com/ACrush14/ConjuntoDiscreto',
      demoUrl: null,
      category: 'Game Dev',
    },
    {
      title: 'Logic Calculator',
      description: 'Logic expression calculator with support for boolean operators.',
      technologies: ['JavaScript', 'HTML', 'CSS'],
      githubUrl: 'https://github.com/ACrush14/calculadora-logica',
      demoUrl: null,
      category: 'Front-end',
    },
    {
      title: 'Godot Mini-game',
      description: 'Mini-game built with the Godot engine during the Prototype Experimentation course at UNIFOR.',
      technologies: ['Godot', 'GDScript'],
      githubUrl: 'https://github.com/ACrush14/T166-22---Experimentacao-de-prototipos',
      demoUrl: null,
      category: 'Game Dev',
    },
    {
      title: 'Arduino Robot',
      description: 'Walking robot built with Arduino during the Guided Experimentation course at UNIFOR. Motor control and autonomous movement.',
      technologies: ['Arduino', 'C++', 'Electronics'],
      githubUrl: 'https://github.com/ACrush14',
      demoUrl: null,
      category: 'Hardware',
    },
  ],
};

export default function Projects() {
  const { t, language } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('Todos');
  const swiperRef = useRef<SwiperType | null>(null);

  const categories: ProjectCategory[] = ['Todos', 'Front-end', 'Mobile', 'Game Dev', 'Hardware'];
  const allProjects = projectsDataMap[language] ?? projectsDataMap['pt'];
  const filteredProjects = activeCategory === 'Todos' ? allProjects : allProjects.filter(p => p.category === activeCategory);
  const sortedProjects = [...filteredProjects].sort((a, b) => (b.highlight ? 1 : 0) - (a.highlight ? 1 : 0));

  return (
    <section id="projects" className="relative overflow-hidden">
      <ParticlesBackground id="particles-projects">
        <div className="container mx-auto px-6 py-24 relative z-10">

          <RevealOnScroll>
            <div className="flex items-center justify-center gap-3 mb-8">
              <FiTerminal className="text-[#22C55E]" size={32} />
              <h2 className="text-4xl font-bold text-center font-heading text-[#22C55E]">
                {t.projectsTitle}
              </h2>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`font-mono text-sm px-4 py-2 transition-all duration-300 border-b-2
                    ${activeCategory === cat
                      ? 'text-[#22C55E] border-[#22C55E] bg-[#22C55E]/10'
                      : 'text-gray-500 border-transparent hover:text-gray-300 hover:border-gray-600'
                    }`}
                >
                  {`> ${cat}`}
                </button>
              ))}
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <div className="relative group/slider px-4 md:px-14">
              <Swiper
                modules={[Navigation, Pagination, A11y, Autoplay]}
                spaceBetween={24}
                slidesPerView={1}
                onBeforeInit={(swiper) => { swiperRef.current = swiper; }}
                pagination={{ clickable: true, dynamicBullets: true }}
                autoplay={{ delay: 6000, disableOnInteraction: true }}
                breakpoints={{
                  640: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1280: { slidesPerView: 3 },
                }}
                className="pb-14 !px-4"
              >
                {sortedProjects.map((project, index) => (
                  <SwiperSlide key={index} className="h-auto py-4">
                    <div className="relative overflow-hidden flex flex-col h-full bg-[#111111]/90 backdrop-blur-sm border border-gray-800 transition-all duration-500 ease-out hover:-translate-y-2 hover:border-[#22C55E]/50 hover:shadow-[0_0_30px_rgba(34,197,94,0.15)] group/card">
                      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#22C55E] to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
                      <div className="p-6 flex-grow flex flex-col relative z-10">
                        <div className="flex justify-between items-start mb-6">
                          <div className="p-2 bg-gray-900 text-[#22C55E] group-hover/card:text-green-300 transition-colors">
                            <FiCode size={20} />
                          </div>
                          <div className="flex gap-3">
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white hover:scale-110 transition-all p-1">
                              <FaGithub size={20} />
                            </a>
                            {project.demoUrl && (
                              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#22C55E] hover:scale-110 transition-all p-1">
                                <FiExternalLink size={20} />
                              </a>
                            )}
                          </div>
                        </div>
                        <h3 className="text-xl text-white font-bold mb-3 font-heading tracking-tight group-hover/card:text-[#22C55E] transition-colors">
                          {project.title}
                        </h3>
                        <div className="mb-4">
                          <span className="text-[10px] uppercase font-bold tracking-widest text-[#22C55E]/80 font-mono">
                            //{project.category}
                          </span>
                        </div>
                        <p className="text-gray-400 text-sm mb-6 leading-relaxed flex-grow font-sans border-l-2 border-gray-800 pl-3">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-auto">
                          {project.technologies.map((tech) => (
                            <span key={tech} className="px-2 py-1 text-[10px] bg-black text-green-300/80 font-mono border border-gray-800 group-hover/card:border-[#22C55E]/30 transition-colors">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      {project.highlight && (
                        <div className="absolute top-4 right-4 animate-pulse">
                          <FaStar className="text-[#22C55E]" size={12} />
                        </div>
                      )}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="absolute top-1/2 -left-2 md:-left-4 z-20 -translate-y-1/2 p-3 text-[#22C55E] hover:text-green-300 transition-all bg-black border border-gray-800 hover:border-[#22C55E] shadow-lg hidden md:flex items-center justify-center group/btn"
                aria-label="Anterior"
              >
                <FiChevronLeft size={24} className="group-hover/btn:-translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => swiperRef.current?.slideNext()}
                className="absolute top-1/2 -right-2 md:-right-4 z-20 -translate-y-1/2 p-3 text-[#22C55E] hover:text-green-300 transition-all bg-black border border-gray-800 hover:border-[#22C55E] shadow-lg hidden md:flex items-center justify-center group/btn"
                aria-label="Próximo"
              >
                <FiChevronRight size={24} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </RevealOnScroll>
        </div>
      </ParticlesBackground>

    </section>
  );
}
