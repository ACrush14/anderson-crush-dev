'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import ParticlesBackground from './ParticlesBackground';
import RevealOnScroll from './RevealOnScroll';
import { FaBriefcase, FaCertificate, FaChalkboardTeacher, FaGraduationCap, FaLaptopCode, FaPencilRuler, FaTrophy, FaUsers } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useLanguage } from '@/contexts/LanguageContext';

const journeyDataMap = {
  pt: [
    {
      icon: <FaGraduationCap />,
      year: '2017',
      title: 'Início da Formação em Arquitetura',
      company: 'UNI7',
      description: 'Início do Bacharelado em Arquitetura e Urbanismo na UNI7.',
    },
    {
      icon: <FaChalkboardTeacher />,
      year: '2018',
      title: 'Monitor Bolsista de Desenho Assistido por Computador',
      company: 'UNI7',
      description: 'Monitoria remunerada na disciplina de Desenho Assistido por Computador (CAD).',
    },
    {
      icon: <FaChalkboardTeacher />,
      year: '2018',
      title: 'Monitor Voluntário de Desenho Arquitetônico',
      company: 'UNI7',
      description: 'Monitoria voluntária na disciplina de Desenho Arquitetônico.',
    },
    {
      icon: <FaChalkboardTeacher />,
      year: '2019',
      title: 'Monitor Bolsista de Desenho para a Engenharia',
      company: 'UNI7',
      description: 'Monitoria remunerada na disciplina de Desenho para a Engenharia.',
    },
    {
      icon: <FaUsers />,
      year: '2019',
      title: 'Membro do Laboratório de Práticas Profissionais: Beiral',
      company: 'UNI7',
      description: 'Integrante do Beiral, laboratório de práticas profissionais em arquitetura da UNI7.',
    },
    {
      icon: <FaGraduationCap />,
      year: '2022',
      title: 'Conclusão da Graduação em Arquitetura e Urbanismo',
      company: 'UNI7',
      description: 'Bacharelado em Arquitetura e Urbanismo concluído, com experiência em AutoCAD, SketchUp, Revit, Lumion e V-Ray.',
    },
    {
      icon: <FaBriefcase />,
      year: '2022',
      title: 'Artista 3D',
      company: 'Anderson Crush Studio',
      description: 'Captação de clientes, modelagem 3D, renderização e pós-produção. Ferramentas: Unreal Engine 5, 3ds Max, Corona Renderer e Photoshop.',
    },
    {
      icon: <FaBriefcase />,
      year: '2023',
      title: 'Artista 3D',
      company: 'Rendereasy 3D',
      description: 'Produção de renders arquitetônicos em regime de tempo integral para clientes remotos.',
    },
    {
      icon: <FaGraduationCap />,
      year: '2024',
      title: 'Início da Pós-Graduação em Ciência de Dados',
      company: 'UNIFOR',
      description: 'Início da Pós-Graduação em Ciência de Dados pela UNIFOR.',
    },
    {
      icon: <FaCertificate />,
      year: 'jan 2025',
      title: 'Certificado EF SET 68/100 (C1 – Proficiência Eficaz)',
      company: 'EF SET',
      description: 'Certificação internacional de inglês com pontuação equivalente ao nível C1 (Proficiência Eficaz).',
    },
    {
      icon: <FaGraduationCap />,
      year: '2025',
      title: 'Início da Graduação em Ciência da Computação',
      company: 'UNIFOR',
      description: 'Graduação em Ciências da Computação com foco em desenvolvimento de software, algoritmos, estruturas de dados e inteligência artificial.',
    },
    {
      icon: <FaChalkboardTeacher />,
      year: '2025',
      title: 'Monitor Bolsista em Fundamentos de Sistemas Computacionais',
      company: 'UNIFOR',
      description: 'Monitoria remunerada na disciplina de Fundamentos de Sistemas Computacionais.',
    },
    {
      icon: <FaTrophy />,
      year: 'out 2025',
      title: 'NASA Space Apps Challenge',
      company: 'Hackathon · Fortaleza',
      description: 'Desenvolvemos o Nebula.exe, plataforma de dados espaciais voltada à saúde urbana de Fortaleza. Certificado NASA.',
    },
    {
      icon: <FaGraduationCap />,
      year: 'out 2025 - fev 2026',
      title: 'CTE-IA — Inteligência Artificial',
      company: 'UFC',
      description: 'Capacitação Técnica e Empreendedora em Inteligência Artificial (Fase 01) pela Universidade Federal do Ceará.',
    },
    {
      icon: <FaCertificate />,
      year: 'mai 2026',
      title: 'Certificação Desenvolvedor Full Stack',
      company: 'Geração Tech',
      description: 'Certificação em desenvolvimento Full Stack pela Geração Tech.',
    },
    {
      icon: <FaBriefcase />,
      year: '2026',
      title: 'Analista de TI',
      company: 'REVITAR',
      description: 'Atuação como Analista de TI na Revitar.',
    },
    {
      icon: <FaUsers />,
      year: '2026',
      title: 'Líder de Projetos Voluntário',
      company: 'Coda.CE',
      description: 'Liderança voluntária de projetos na comunidade Coda.CE.',
    },
    {
      icon: <FaLaptopCode />,
      year: '2026',
      title: 'Desenvolvedor',
      company: 'Anderson Crush Dev',
      description: 'Desenvolvimento contínuo do próprio portfólio e marca pessoal, Anderson Crush Dev.',
    },
    {
      icon: <FaCertificate />,
      year: 'set 2026',
      title: 'Certificado FullStackClub',
      company: 'Full Stack Club',
      description: 'Certificação concluída pelo Full Stack Club.',
    },
    {
      icon: <FaPencilRuler />,
      year: 'set 2026 - Atual',
      title: 'Web Design',
      company: 'Synapse Lab',
      description: 'Web Design e suporte técnico no Synapse Lab, grupo de pesquisa certificado pelo CNPq e pela UNIFOR em parceria com a UFC — prototipação de interfaces no Figma e colaboração com equipe multidisciplinar de pesquisa.',
    },
    {
      icon: <FaPencilRuler />,
      year: 'set 2026 - Atual',
      title: 'UI/UX Júnior',
      company: 'Oryon System',
      description: 'Design de interfaces para um ERP/CRM de rastreamento veicular — prototipagem no Figma, design system e dashboards, do fluxo de pesquisa ao handoff para desenvolvimento.',
    },
  ],
  en: [
    {
      icon: <FaGraduationCap />,
      year: '2017',
      title: 'Started Architecture Degree',
      company: 'UNI7',
      description: "Began a Bachelor's degree in Architecture and Urbanism at UNI7.",
    },
    {
      icon: <FaChalkboardTeacher />,
      year: '2018',
      title: 'Teaching Assistant — Computer-Aided Design',
      company: 'UNI7',
      description: 'Paid teaching assistant for the Computer-Aided Design (CAD) course.',
    },
    {
      icon: <FaChalkboardTeacher />,
      year: '2018',
      title: 'Volunteer Teaching Assistant — Architectural Drawing',
      company: 'UNI7',
      description: 'Volunteer teaching assistant for the Architectural Drawing course.',
    },
    {
      icon: <FaChalkboardTeacher />,
      year: '2019',
      title: 'Teaching Assistant — Engineering Drawing',
      company: 'UNI7',
      description: 'Paid teaching assistant for the Engineering Drawing course.',
    },
    {
      icon: <FaUsers />,
      year: '2019',
      title: 'Member of the Beiral Professional Practice Lab',
      company: 'UNI7',
      description: "Member of Beiral, UNI7's architecture professional-practice lab.",
    },
    {
      icon: <FaGraduationCap />,
      year: '2022',
      title: 'Graduated in Architecture and Urbanism',
      company: 'UNI7',
      description: "Completed a Bachelor's degree in Architecture and Urbanism, with experience in AutoCAD, SketchUp, Revit, Lumion and V-Ray.",
    },
    {
      icon: <FaBriefcase />,
      year: '2022',
      title: '3D Artist',
      company: 'Anderson Crush Studio',
      description: 'Client acquisition, 3D modeling, rendering and post-production. Tools: Unreal Engine 5, 3ds Max, Corona Renderer and Photoshop.',
    },
    {
      icon: <FaBriefcase />,
      year: '2023',
      title: '3D Artist',
      company: 'Rendereasy 3D',
      description: 'Production of architectural renders on a full-time basis for remote clients.',
    },
    {
      icon: <FaGraduationCap />,
      year: '2024',
      title: 'Started Data Science Postgraduate Studies',
      company: 'UNIFOR',
      description: 'Began a postgraduate program in Data Science at UNIFOR.',
    },
    {
      icon: <FaCertificate />,
      year: 'Jan 2025',
      title: 'EF SET Certificate 68/100 (C1 – Effective Proficiency)',
      company: 'EF SET',
      description: 'International English certification scoring at the C1 (Effective Proficiency) level.',
    },
    {
      icon: <FaGraduationCap />,
      year: '2025',
      title: 'Started Computer Science Degree',
      company: 'UNIFOR',
      description: "Bachelor's in Computer Science focused on software development, algorithms, data structures and artificial intelligence.",
    },
    {
      icon: <FaChalkboardTeacher />,
      year: '2025',
      title: 'Teaching Assistant — Fundamentals of Computer Systems',
      company: 'UNIFOR',
      description: 'Paid teaching assistant for the Fundamentals of Computer Systems course.',
    },
    {
      icon: <FaTrophy />,
      year: 'Oct 2025',
      title: 'NASA Space Apps Challenge',
      company: 'Hackathon · Fortaleza',
      description: 'Developed Nebula.exe, a spatial data platform focused on urban health in Fortaleza. NASA certificate.',
    },
    {
      icon: <FaGraduationCap />,
      year: 'Oct 2025 - Feb 2026',
      title: 'CTE-IA — Artificial Intelligence',
      company: 'UFC',
      description: 'Technical and Entrepreneurial Training in Artificial Intelligence (Phase 01) at Universidade Federal do Ceará.',
    },
    {
      icon: <FaCertificate />,
      year: 'May 2026',
      title: 'Full Stack Developer Certification',
      company: 'Geração Tech',
      description: 'Full Stack development certification from Geração Tech.',
    },
    {
      icon: <FaBriefcase />,
      year: '2026',
      title: 'IT Analyst',
      company: 'REVITAR',
      description: 'Working as an IT Analyst at Revitar.',
    },
    {
      icon: <FaUsers />,
      year: '2026',
      title: 'Volunteer Project Lead',
      company: 'Coda.CE',
      description: 'Volunteer project leadership at the Coda.CE community.',
    },
    {
      icon: <FaLaptopCode />,
      year: '2026',
      title: 'Developer',
      company: 'Anderson Crush Dev',
      description: 'Ongoing development of my own portfolio and personal brand, Anderson Crush Dev.',
    },
    {
      icon: <FaCertificate />,
      year: 'Sep 2026',
      title: 'FullStackClub Certificate',
      company: 'Full Stack Club',
      description: 'Certificate completed through Full Stack Club.',
    },
    {
      icon: <FaPencilRuler />,
      year: 'Sep 2026 - Present',
      title: 'Web Design',
      company: 'Synapse Lab',
      description: 'Web design and technical support at Synapse Lab, a CNPq/UNIFOR-certified research group in partnership with UFC — prototyping interfaces in Figma and collaborating with a multidisciplinary research team.',
    },
    {
      icon: <FaPencilRuler />,
      year: 'Sep 2026 - Present',
      title: 'Junior UI/UX Designer',
      company: 'Oryon System',
      description: 'Interface design for a vehicle-tracking ERP/CRM — Figma prototyping, design system and dashboards, from research flow to developer handoff.',
    },
  ],
};

export default function Journey() {
  const { t, language } = useLanguage();

  const selectedData = journeyDataMap[language] ?? journeyDataMap['pt'];

  const groupRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const maxOffsetRef = useRef(0);
  const itemWidthRef = useRef(0);

  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  // Linha do tempo com começo e fim fixos (sem loop infinito): o offset fica
  // sempre entre 0 (primeiro item) e maxOffsetRef.current (último item).
  const applyOffset = useCallback((value: number) => {
    const track = trackRef.current;
    if (!track) return;
    const max = maxOffsetRef.current;
    const clamped = Math.min(Math.max(value, 0), max);
    offsetRef.current = clamped;
    track.style.transform = `translateX(-${clamped}px)`;
    setAtStart(clamped <= 0);
    setAtEnd(clamped >= max);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    const group = groupRef.current;
    if (!track || !group) return;

    const measure = () => {
      maxOffsetRef.current = Math.max(0, track.scrollWidth - group.clientWidth);
      itemWidthRef.current = track.scrollWidth / selectedData.length;
      applyOffset(offsetRef.current);
    };
    measure();
    window.addEventListener('resize', measure);

    // Listener nativo (não-passivo): só assim o preventDefault realmente
    // bloqueia o scroll vertical da página enquanto o mouse está sobre a linha do tempo.
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      applyOffset(offsetRef.current + e.deltaY + e.deltaX);
    };
    group.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('resize', measure);
      group.removeEventListener('wheel', handleWheel);
    };
  }, [language, selectedData.length, applyOffset]);

  const stepBy = (direction: 1 | -1) => {
    applyOffset(offsetRef.current + direction * (itemWidthRef.current || 564));
  };

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
            <div className="relative">
              <button
                type="button"
                onClick={() => stepBy(-1)}
                disabled={atStart}
                aria-label="Anterior"
                className="absolute left-4 bottom-4 z-30 flex items-center justify-center w-11 h-11 rounded-full bg-black border-2 border-[#22C55E] text-[#22C55E] shadow-[0_0_15px_rgba(34,197,94,0.3)] transition-opacity disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#22C55E] hover:text-black"
              >
                <FiChevronLeft size={20} />
              </button>
              <button
                type="button"
                onClick={() => stepBy(1)}
                disabled={atEnd}
                aria-label="Próximo"
                className="absolute right-4 bottom-4 z-30 flex items-center justify-center w-11 h-11 rounded-full bg-black border-2 border-[#22C55E] text-[#22C55E] shadow-[0_0_15px_rgba(34,197,94,0.3)] transition-opacity disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[#22C55E] hover:text-black"
              >
                <FiChevronRight size={20} />
              </button>

              <div ref={groupRef} className="relative w-full overflow-hidden py-20">
                <div ref={trackRef} className="relative inline-flex will-change-transform transition-transform duration-300 ease-out">
                  <div className="absolute top-1/2 left-0 h-[2px] w-full bg-gray-800 -translate-y-1/2 z-0" />
                  <div className="absolute top-1/2 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-[#22C55E] to-transparent -translate-y-1/2 z-0 opacity-50 blur-sm" />

                  {selectedData.map((item, index) => (
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
            </div>
          </RevealOnScroll>
        </div>
      </ParticlesBackground>
    </section>
  );
}
