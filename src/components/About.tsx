'use client';

import RevealOnScroll from './RevealOnScroll';
import { useLanguage } from '@/contexts/LanguageContext';
import { FaDownload, FaCog, FaGraduationCap, FaUniversity, FaLaptopCode } from 'react-icons/fa';
import {
  SiPython, SiJavascript, SiReact, SiNodedotjs, SiExpress, SiTypescript,
  SiNextdotjs, SiHtml5, SiCss, SiTailwindcss, SiGit, SiGithub,
  SiPostgresql, SiMysql, SiGodotengine, SiUnity, SiDocker,
} from 'react-icons/si';
import { FaTasks } from 'react-icons/fa';
import ParticlesBackground from './ParticlesBackground';

const skills = [
  'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Express.js',
  'Python', 'HTML', 'CSS', 'TailwindCSS', 'Git', 'GitHub',
  'PostgreSQL', 'MySQL', 'Godot', 'Unity', 'Docker', 'REST APIs',
  'Agile', 'Método Kanban', 'Método Scrum',
];

const skillIcons: Record<string, React.ElementType> = {
  'JavaScript': SiJavascript,
  'TypeScript': SiTypescript,
  'React': SiReact,
  'Next.js': SiNextdotjs,
  'Node.js': SiNodedotjs,
  'Express.js': SiExpress,
  'Python': SiPython,
  'HTML': SiHtml5,
  'CSS': SiCss,
  'TailwindCSS': SiTailwindcss,
  'Git': SiGit,
  'GitHub': SiGithub,
  'PostgreSQL': SiPostgresql,
  'MySQL': SiMysql,
  'Godot': SiGodotengine,
  'Unity': SiUnity,
  'Docker': SiDocker,
  'REST APIs': FaCog,
  'Agile': FaTasks,
  'Método Kanban': FaTasks,
  'Método Scrum': FaTasks,
};

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative overflow-hidden">
      <ParticlesBackground id="particles-about" className="min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-6 py-24 relative z-10 flex flex-col items-center">
          <div className="max-w-5xl w-full flex flex-col items-center text-center">

            <RevealOnScroll>
              <h2 className="text-4xl md:text-5xl font-bold text-white font-heading mb-12 tracking-tight">
                {t.aboutTitle} <span className="text-[#22C55E]">.</span>
              </h2>
            </RevealOnScroll>

            {/* Bio Card */}
            <RevealOnScroll delay={0.1}>
              <div className="w-full bg-[#111111]/90 p-8 md:p-12 border border-gray-800 backdrop-blur-md shadow-xl mb-10 relative overflow-hidden flex flex-col items-center">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-[#22C55E] shadow-[0_0_15px_rgba(34,197,94,0.4)]" />
                <div className="max-w-3xl pt-4">
                  <p className="mb-6 text-lg text-gray-300 leading-relaxed font-sans text-center">{t.aboutText1}</p>
                  <p className="text-lg text-gray-300 leading-relaxed font-sans text-center">{t.aboutText2}</p>
                </div>
              </div>
            </RevealOnScroll>

            {/* Formação */}
            <RevealOnScroll delay={0.2}>
              <div className="w-full flex flex-col md:flex-row gap-6 mb-10 justify-center">
                <div className="flex-1 bg-[#111111] p-8 border border-gray-800 hover:border-[#22C55E] transition-colors flex flex-col items-center justify-center text-center group relative overflow-hidden">
                  <FaLaptopCode className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-9xl text-white/5 pointer-events-none" />
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="bg-[#22C55E] p-4 text-black shadow-lg mb-4">
                      <FaGraduationCap size={32} />
                    </div>
                    <span className="text-[#22C55E] font-mono text-xs uppercase tracking-[0.2em] mb-3 border-b border-[#22C55E]/20 pb-1">
                      Graduação
                    </span>
                    <h3 className="text-white font-bold text-xl md:text-2xl font-heading mb-4 leading-tight">
                      Ciência da Computação
                    </h3>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-auto text-gray-400 text-sm font-mono">
                      <span className="flex items-center gap-2 bg-black px-4 py-2 border border-gray-700">
                        <FaUniversity className="text-[#22C55E]" /> UNIFOR
                      </span>
                      <span className="flex items-center gap-2 bg-green-500/10 text-green-400 px-4 py-2 border border-green-500/20">
                        <span className="w-2 h-2 bg-green-500 animate-pulse" /> Em Curso
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            {/* Tech Stack */}
            <RevealOnScroll delay={0.3}>
              <div className="w-full flex flex-col items-center mb-12">
                <h3 className="text-sm font-mono mb-8 text-gray-400 inline-flex items-center gap-2 uppercase tracking-widest px-6 py-2 border border-gray-800 bg-black">
                  <FaCog className="text-[#22C55E] animate-spin-slow" /> Tech Stack &amp; Tools
                </h3>
                <div className="flex flex-wrap justify-center gap-2 max-w-5xl">
                  {skills.map((skill) => {
                    const IconComponent = skillIcons[skill] || FaCog;
                    return (
                      <div key={skill} className="group flex items-center gap-2 px-4 py-2 bg-[#111111] border border-gray-800 hover:border-[#22C55E]/60 hover:bg-[#111111] transition-all cursor-default hover:-translate-y-1">
                        <IconComponent className="text-gray-500 text-sm group-hover:text-[#22C55E] transition-colors shrink-0" />
                        <span className="text-gray-400 text-xs font-mono group-hover:text-white transition-colors">{skill}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </RevealOnScroll>

            {/* Botão CV */}
            <RevealOnScroll delay={0.4}>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full">
                <a
                  href="/Curriculo_Anderson_Crush.pdf"
                  download
                  className="w-full sm:w-auto min-w-[240px] flex items-center justify-center gap-3 bg-[#22C55E] text-black font-mono font-bold py-4 px-8 hover:bg-green-400 transition-all hover:scale-[1.02] shadow-[0_0_20px_rgba(34,197,94,0.3)] text-center"
                >
                  <FaDownload />
                  {t.downloadCv}
                </a>
              </div>
            </RevealOnScroll>

          </div>
        </div>
      </ParticlesBackground>
    </section>
  );
}
