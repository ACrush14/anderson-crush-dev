'use client';

import ParticlesBackground from './ParticlesBackground';
import RevealOnScroll from './RevealOnScroll';
import { useLanguage } from '@/contexts/LanguageContext';

const blogPostsMap = {
  pt: [
    {
      title: 'Começando com Next.js: Do Zero ao Deploy',
      description: 'Um guia completo para quem está começando com Next.js, desde a configuração inicial até o deploy na Vercel.',
      link: '#',
      date: '20 de Março, 2025',
    },
    {
      title: 'TypeScript na Prática: Por que usar em seus projetos',
      description: 'Entenda os benefícios do TypeScript e como ele pode melhorar a qualidade e manutenibilidade do seu código.',
      link: '#',
      date: '10 de Abril, 2025',
    },
    {
      title: 'TailwindCSS: Estilização rápida e eficiente',
      description: 'Aprenda como o TailwindCSS pode acelerar seu desenvolvimento front-end sem abrir mão da flexibilidade.',
      link: '#',
      date: '05 de Maio, 2025',
    },
  ],
  en: [
    {
      title: 'Getting Started with Next.js: From Zero to Deploy',
      description: 'A complete guide for beginners with Next.js, from initial setup to deployment on Vercel.',
      link: '#',
      date: 'March 20, 2025',
    },
    {
      title: 'TypeScript in Practice: Why use it in your projects',
      description: 'Understand the benefits of TypeScript and how it can improve the quality and maintainability of your code.',
      link: '#',
      date: 'April 10, 2025',
    },
    {
      title: 'TailwindCSS: Fast and efficient styling',
      description: 'Learn how TailwindCSS can speed up your front-end development without sacrificing flexibility.',
      link: '#',
      date: 'May 5, 2025',
    },
  ],
};

export default function Blog() {
  const { t, language } = useLanguage();
  const blogPosts = blogPostsMap[language] ?? blogPostsMap['pt'];

  return (
    <section id="blog">
      <ParticlesBackground id="particles-blog">
        <div className="container mx-auto px-6 py-24">
          <RevealOnScroll>
            <h2 className="text-4xl font-bold text-center mb-12 font-heading text-[#22C55E]">
              {t.blogTitle}
            </h2>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {blogPosts.map((post, index) => (
              <RevealOnScroll key={index} delay={index * 0.1}>
                <a
                  href={post.link}
                  className="block bg-[#111111] overflow-hidden flex flex-col border border-gray-800 hover:border-[#22C55E]/60 transition-all duration-300 h-full hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(34,197,94,0.1)]"
                >
                  <div className="h-[3px] bg-[#22C55E]" />
                  <div className="p-6 flex flex-col flex-grow">
                    <p className="text-sm text-gray-500 mb-3 font-mono">{post.date}</p>
                    <h3 className="text-xl font-bold mb-3 font-heading text-white hover:text-[#22C55E] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-400 flex-grow text-sm leading-relaxed">{post.description}</p>
                    <span className="text-[#22C55E] font-bold mt-4 inline-block font-mono text-sm hover:underline">
                      {t.readMore}
                    </span>
                  </div>
                </a>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </ParticlesBackground>
    </section>
  );
}
