'use client';

import RevealOnScroll from './RevealOnScroll';
import { useLanguage } from '@/contexts/LanguageContext';
import { FaDownload, FaCog, FaGraduationCap, FaUniversity, FaLaptopCode } from 'react-icons/fa';
import {
  SiPython, SiJavascript, SiReact, SiNodedotjs, SiExpress, SiTypescript,
  SiNextdotjs, SiHtml5, SiCss, SiTailwindcss, SiGit, SiGithub,
  SiPostgresql, SiMysql, SiGodotengine, SiUnity, SiDocker, SiGooglegemini,
} from 'react-icons/si';
import { FaTasks } from 'react-icons/fa';
import ParticlesBackground from './ParticlesBackground';

// Core stack (full-stack + IA aplicada) em destaque; o resto entra como apoio compacto.
const coreStack = ['Next.js', 'TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Google Gemini API'];

const secondaryStack = [
  'JavaScript', 'Express.js', 'Python', 'TailwindCSS', 'REST APIs', 'Docker',
  'Git', 'GitHub', 'MySQL', 'HTML', 'CSS', 'Godot', 'Unity',
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
  'Google Gemini API': SiGooglegemini,
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
                  <p className="mb-6 text-lg text-gray-300 leading-relaxed font-sans text-center">{t.aboutText2}</p>
                  <p className="mb-6 text-lg text-gray-300 leading-relaxed font-sans text-center">{t.aboutText3}</p>
                  <p className="text-lg text-gray-300 leading-relaxed font-sans text-center">{t.aboutText4}</p>
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

                {/* Core Stack — grid compacto e refinado, destaque máximo */}
                <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#22C55E]/70 mb-4">
                  {t.coreStackTitle}
                </p>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 max-w-3xl w-full mb-10">
                  {coreStack.map((skill) => {
                    const IconComponent = skillIcons[skill] || FaCog;
                    return (
                      <div
                        key={skill}
                        className="group flex flex-col items-center justify-center gap-2 py-5 px-2 bg-[#111111] border border-gray-800 hover:border-[#22C55E]/70 hover:shadow-[0_0_20px_rgba(34,197,94,0.12)] transition-all cursor-default hover:-translate-y-1"
                      >
                        <IconComponent className="text-gray-400 text-xl group-hover:text-[#22C55E] transition-colors" />
                        <span className="text-gray-300 text-[10px] font-mono text-center leading-tight group-hover:text-white transition-colors">{skill}</span>
                      </div>
                    );
                  })}
                </div>

                {/* Ferramentas de apoio — compactas, peso visual menor */}
                <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-gray-600 mb-4">
                  {t.secondaryStackTitle}
                </p>
                <div className="flex flex-wrap justify-center gap-2 max-w-3xl">
                  {secondaryStack.map((skill) => {
                    const IconComponent = skillIcons[skill] || FaCog;
                    return (
                      <div key={skill} className="group flex items-center gap-1.5 px-3 py-1.5 bg-black border border-gray-900 hover:border-gray-700 transition-all cursor-default">
                        <IconComponent className="text-gray-600 text-xs group-hover:text-gray-400 transition-colors shrink-0" />
                        <span className="text-gray-600 text-[10px] font-mono group-hover:text-gray-300 transition-colors">{skill}</span>
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
