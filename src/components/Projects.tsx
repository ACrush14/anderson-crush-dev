'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FaGithub, FaStar } from 'react-icons/fa';
import { FiExternalLink, FiTerminal, FiCode, FiChevronDown, FiCheckCircle } from 'react-icons/fi';
import RevealOnScroll from './RevealOnScroll';
import ParticlesBackground from './ParticlesBackground';
import { useLanguage } from '@/contexts/LanguageContext';

type ProjectCategory = 'Full-stack' | 'Front-end' | 'Mobile' | 'Game Dev' | 'Hardware';

type MockupVariant = 'dashboard' | 'hero' | 'grid';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  demoUrl: string | null;
  category: ProjectCategory;
  /** Projetos flagship: entram na vitrine principal com estudo de caso. */
  highlight?: boolean;
  /** Destaques de case study, exibidos apenas nos projetos flagship. */
  metrics?: string[];
  /** Link opcional para o artigo de bastidores no blog. */
  caseStudySlug?: string;
  /** Mockup de tela abstrato (CSS) usado como fallback quando não há screenshot real. */
  mockup?: MockupVariant;
  /** Screenshot real do projeto (public/), exibido dentro da janela de navegador. */
  screenshot?: string;
  screenshotAlt?: string;
  /** Texto exibido na barra de endereço da janela de navegador. */
  urlLabel?: string;
}

/** Janela de navegador com screenshot real do projeto — cai para um mockup abstrato em CSS se não houver imagem. */
function ProjectMockup({ variant, screenshot, screenshotAlt, urlLabel }: { variant: MockupVariant; screenshot?: string; screenshotAlt?: string; urlLabel?: string }) {
  return (
    <div className="relative w-full h-40 bg-black border-b border-gray-800 overflow-hidden shrink-0">
      {/* Barra do navegador */}
      <div className="relative z-10 flex items-center gap-1.5 px-3 py-2 border-b border-gray-900 bg-[#0a0a0a]">
        <span className="w-2 h-2 rounded-full bg-gray-700" />
        <span className="w-2 h-2 rounded-full bg-gray-700" />
        <span className="w-2 h-2 rounded-full bg-gray-700" />
        {urlLabel && <span className="ml-2 text-[9px] font-mono text-gray-600 truncate">{urlLabel}</span>}
      </div>

      {screenshot && (
        <div className="relative h-[calc(100%-2rem)]">
          <Image
            src={screenshot}
            alt={screenshotAlt || ''}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover object-top"
          />
        </div>
      )}

      {!screenshot && variant === 'dashboard' && (
        <div className="flex h-[calc(100%-2rem)]">
          <div className="w-1/4 h-full bg-[#0d0d0d] border-r border-gray-900 p-2 space-y-1.5">
            <div className="h-1.5 w-full bg-[#22C55E]/40" />
            <div className="h-1.5 w-3/4 bg-gray-800" />
            <div className="h-1.5 w-3/4 bg-gray-800" />
            <div className="h-1.5 w-2/3 bg-gray-800" />
          </div>
          <div className="flex-1 p-3 grid grid-cols-3 gap-2">
            <div className="col-span-2 h-full bg-[#111111] border border-gray-900 flex items-end p-1.5 gap-1">
              {[40, 65, 50, 80, 60, 90].map((h, i) => (
                <div key={i} style={{ height: `${h}%` }} className="flex-1 bg-[#22C55E]/50" />
              ))}
            </div>
            <div className="space-y-2">
              <div className="h-1/2 bg-[#111111] border border-gray-900" />
              <div className="h-[calc(50%-0.5rem)] bg-[#111111] border border-[#22C55E]/30" />
            </div>
          </div>
        </div>
      )}

      {!screenshot && variant === 'hero' && (
        <div className="h-[calc(100%-2rem)] p-4 flex flex-col justify-center gap-2">
          <div className="h-2 w-1/3 bg-[#22C55E]/50" />
          <div className="h-3 w-2/3 bg-gray-700" />
          <div className="h-3 w-1/2 bg-gray-700" />
          <div className="h-1.5 w-3/4 bg-gray-900 mt-1" />
          <div className="mt-2 h-4 w-20 bg-[#22C55E]/40" />
        </div>
      )}

      {!screenshot && variant === 'grid' && (
        <div className="h-[calc(100%-2rem)] p-3 grid grid-cols-5 gap-1.5">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className={`aspect-square border ${i % 3 === 0 ? 'border-[#22C55E]/40 bg-[#22C55E]/10' : 'border-gray-900 bg-[#111111]'}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

const flagshipProjectsMap: Record<string, Project[]> = {
  pt: [
    {
      title: 'CondoManage',
      description: 'Plataforma completa de gestão de condomínios com autenticação real, isolamento multi-tenant, IA (Google Gemini) para reservas por linguagem natural, PIX real via Mercado Pago e portaria com QR Code/botão de pânico em tempo real.',
      technologies: ['Next.js', 'PostgreSQL', 'TypeScript', 'Google Gemini', 'Mercado Pago'],
      githubUrl: 'https://github.com/ACrush14/SistemaCondominio',
      demoUrl: 'https://sistemacondominio-nine.vercel.app/apresentacao',
      category: 'Full-stack',
      highlight: true,
      mockup: 'dashboard',
      screenshot: '/projects/condomanage.jpg',
      screenshotAlt: 'Dashboard do Síndico no CondoManage',
      urlLabel: 'sistemacondominio-nine.vercel.app',
      metrics: [
        'Multi-tenant real, com isolamento de dados por condomínio',
        'IA (Google Gemini) para reservas em linguagem natural',
        'Pagamentos PIX reais via Mercado Pago',
        'Portaria com QR Code e botão de pânico em tempo real',
      ],
      caseStudySlug: 'condomanage-o-projeto-que-me-ensinou-full-stack-de-verdade',
    },
    {
      title: 'Site Portfólio Pessoal',
      description: 'Este próprio site! Desenvolvido com Next.js, TypeScript e TailwindCSS. Design moderno, responsivo, com suporte a tema claro/escuro e dois idiomas.',
      technologies: ['Next.js', 'TypeScript', 'TailwindCSS', 'Framer Motion'],
      githubUrl: 'https://github.com/ACrush14/anderson-crush-dev',
      demoUrl: null,
      category: 'Front-end',
      highlight: true,
      mockup: 'hero',
      screenshot: '/projects/portfolio.jpg',
      screenshotAlt: 'Hero do site pessoal de Anderson Crush',
      urlLabel: 'anderson-crush-dev.vercel.app',
      metrics: [
        'Next.js 15 + TypeScript + TailwindCSS',
        'Internacionalização PT/EN e tema claro/escuro',
        'Animações com Framer Motion e Swiper',
      ],
    },
    {
      title: 'Smash Compendium',
      description: 'Um compêndio detalhado focado no cenário competitivo de Super Smash Bros. Conta com dados de personagens, golpes e mecânicas do jogo.',
      technologies: ['React', 'Next.js', 'TailwindCSS', 'TypeScript'],
      githubUrl: 'https://github.com/ACrush14/smash-compendium',
      demoUrl: 'https://smashcompedium.vercel.app',
      category: 'Front-end',
      highlight: true,
      mockup: 'grid',
      screenshot: '/projects/smash-compendium.jpg',
      screenshotAlt: 'Página inicial do Smash Compendium',
      urlLabel: 'smashcompedium.vercel.app',
      metrics: [
        'Base de dados de personagens e mecânicas do jogo',
        'Interface responsiva com filtros dinâmicos',
        'Deploy contínuo via Vercel',
      ],
    },
  ],
  en: [
    {
      title: 'CondoManage',
      description: 'Full condominium management platform with real authentication, multi-tenant data isolation, AI (Google Gemini) for natural-language booking, real PIX payments via Mercado Pago, and a front-desk module with QR Code access and a real-time panic button.',
      technologies: ['Next.js', 'PostgreSQL', 'TypeScript', 'Google Gemini', 'Mercado Pago'],
      githubUrl: 'https://github.com/ACrush14/SistemaCondominio',
      demoUrl: 'https://sistemacondominio-nine.vercel.app/apresentacao',
      category: 'Full-stack',
      highlight: true,
      mockup: 'dashboard',
      screenshot: '/projects/condomanage.jpg',
      screenshotAlt: "CondoManage's manager dashboard",
      urlLabel: 'sistemacondominio-nine.vercel.app',
      metrics: [
        'Real multi-tenant setup with per-building data isolation',
        'AI (Google Gemini) for natural-language booking',
        'Real PIX payments via Mercado Pago',
        'Front desk with QR Code access and real-time panic button',
      ],
      caseStudySlug: 'condomanage-o-projeto-que-me-ensinou-full-stack-de-verdade',
    },
    {
      title: 'Personal Portfolio',
      description: 'This very website! Built with Next.js, TypeScript and TailwindCSS. Modern responsive design with light/dark mode and two-language support.',
      technologies: ['Next.js', 'TypeScript', 'TailwindCSS', 'Framer Motion'],
      githubUrl: 'https://github.com/ACrush14/anderson-crush-dev',
      demoUrl: null,
      category: 'Front-end',
      highlight: true,
      mockup: 'hero',
      screenshot: '/projects/portfolio.jpg',
      screenshotAlt: "Anderson Crush's personal site hero section",
      urlLabel: 'anderson-crush-dev.vercel.app',
      metrics: [
        'Next.js 15 + TypeScript + TailwindCSS',
        'PT/EN i18n and light/dark theme',
        'Framer Motion and Swiper animations',
      ],
    },
    {
      title: 'Smash Compendium',
      description: 'A detailed compendium focused on the competitive Super Smash Bros scene. Features character data, movesets, and game mechanics.',
      technologies: ['React', 'Next.js', 'TailwindCSS', 'TypeScript'],
      githubUrl: 'https://github.com/ACrush14/smash-compendium',
      demoUrl: 'https://smashcompedium.vercel.app',
      category: 'Front-end',
      highlight: true,
      mockup: 'grid',
      screenshot: '/projects/smash-compendium.jpg',
      screenshotAlt: 'Smash Compendium homepage',
      urlLabel: 'smashcompedium.vercel.app',
      metrics: [
        'Character and game-mechanics database',
        'Responsive UI with dynamic filters',
        'Continuous deploy via Vercel',
      ],
    },
  ],
};

const academicProjectsMap: Record<string, Project[]> = {
  pt: [
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
      demoUrl: 'https://calculadora-logica-orcin.vercel.app/',
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
      demoUrl: 'https://calculadora-logica-orcin.vercel.app/',
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
  const [showAcademic, setShowAcademic] = useState(false);

  const flagshipProjects = flagshipProjectsMap[language] ?? flagshipProjectsMap['pt'];
  const academicProjects = academicProjectsMap[language] ?? academicProjectsMap['pt'];

  return (
    <section id="projects" className="relative overflow-hidden">
      <ParticlesBackground id="particles-projects">
      <div className="container mx-auto px-6 py-24 relative z-10">

        <RevealOnScroll>
          <div className="flex items-center justify-center gap-3 mb-4">
            <FiTerminal className="text-[#22C55E]" size={32} />
            <h2 className="text-4xl font-bold text-center font-heading text-[#22C55E]">
              {t.projectsTitle}
            </h2>
          </div>
          <p className="text-center text-gray-500 max-w-xl mx-auto mb-16 font-sans">
            {t.projectsSubtitle}
          </p>
        </RevealOnScroll>

        {/* Vitrine principal — projetos flagship com estudo de caso */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {flagshipProjects.map((project, index) => (
            <RevealOnScroll key={project.title} delay={0.1 * index}>
              <div className="relative overflow-hidden flex flex-col h-full bg-[#111111]/90 backdrop-blur-sm border border-gray-800 transition-all duration-500 ease-out hover:-translate-y-2 hover:border-[#22C55E]/50 hover:shadow-[0_0_30px_rgba(34,197,94,0.15)] group/card">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#22C55E] to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 z-20" />
                {project.mockup && (
                  <ProjectMockup
                    variant={project.mockup}
                    screenshot={project.screenshot}
                    screenshotAlt={project.screenshotAlt}
                    urlLabel={project.urlLabel}
                  />
                )}
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
                  <p className="text-gray-400 text-sm mb-5 leading-relaxed font-sans border-l-2 border-gray-800 pl-3">
                    {project.description}
                  </p>

                  {project.metrics && (
                    <ul className="mb-5 space-y-2">
                      {project.metrics.map((metric) => (
                        <li key={metric} className="flex items-start gap-2 text-xs text-gray-400 font-sans">
                          <FiCheckCircle className="text-[#22C55E] shrink-0 mt-0.5" size={14} />
                          <span>{metric}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="flex flex-wrap gap-2 mt-auto mb-4">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-2 py-1 text-[10px] bg-black text-green-300/80 font-mono border border-gray-800 group-hover/card:border-[#22C55E]/30 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.caseStudySlug && (
                    <a
                      href={`/blog/${project.caseStudySlug}`}
                      className="inline-flex items-center gap-1.5 text-[#22C55E] text-xs font-mono hover:gap-2.5 transition-all"
                    >
                      {t.projectsCaseStudyLink} →
                    </a>
                  )}
                </div>
                {project.highlight && (
                  <div className="absolute top-4 right-4 animate-pulse">
                    <FaStar className="text-[#22C55E]" size={12} />
                  </div>
                )}
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Projetos acadêmicos — recolhidos, transparentes sobre a origem */}
        <RevealOnScroll delay={0.2}>
          <div className="max-w-3xl mx-auto">
            <button
              onClick={() => setShowAcademic((v) => !v)}
              className="w-full flex items-center justify-between gap-3 font-mono text-sm text-gray-500 hover:text-gray-300 border border-gray-800 hover:border-gray-600 px-5 py-3 transition-all"
            >
              <span>{`${showAcademic ? t.projectsAcademicHide : t.projectsAcademicShow} (${academicProjects.length})`}</span>
              <FiChevronDown className={`transition-transform duration-300 ${showAcademic ? 'rotate-180' : ''}`} />
            </button>

            {showAcademic && (
              <div className="mt-4 grid sm:grid-cols-2 gap-4">
                {academicProjects.map((project) => (
                  <div key={project.title} className="p-4 bg-[#0c0c0c] border border-gray-900 hover:border-gray-700 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-sm text-gray-300 font-bold font-heading">{project.title}</h4>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-white transition-colors shrink-0 ml-2">
                        <FaGithub size={16} />
                      </a>
                    </div>
                    <span className="text-[9px] uppercase font-bold tracking-widest text-gray-600 font-mono">
                      //{project.category}
                    </span>
                    <p className="text-gray-500 text-xs mt-2 leading-relaxed font-sans">
                      {project.description}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </RevealOnScroll>
      </div>
      </ParticlesBackground>
    </section>
  );
}
