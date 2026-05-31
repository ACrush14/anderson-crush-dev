'use client';

import Link from 'next/link';
import Image from 'next/image';
import ParticlesBackground from './ParticlesBackground';
import RevealOnScroll from './RevealOnScroll';
import { useLanguage } from '@/contexts/LanguageContext';
import { blogPosts } from '@/data/blogData';

export default function Blog() {
  const { t } = useLanguage();

  // Mostra até 3 posts mais recentes (os últimos do array)
  const recentPosts = [...blogPosts].reverse().slice(0, 3);

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
            {recentPosts.map((post, index) => (
              <RevealOnScroll key={post.slug} delay={index * 0.1}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="block bg-[#111111] overflow-hidden flex flex-col border border-gray-800
                    hover:border-[#22C55E]/60 transition-all duration-300 h-full
                    hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(34,197,94,0.1)]"
                >
                  {/* Imagem de capa */}
                  {post.image && (
                    <div className="relative w-full h-44 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  )}

                  {/* Sem imagem: barra verde no topo */}
                  {!post.image && <div className="h-[3px] bg-[#22C55E]" />}

                  <div className="p-6 flex flex-col flex-grow">
                    <p className="text-xs text-gray-500 mb-3 font-mono uppercase tracking-wider">
                      {post.date}
                    </p>
                    <h3 className="text-xl font-bold mb-3 font-heading text-white
                      hover:text-[#22C55E] transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-gray-400 flex-grow text-sm leading-relaxed">
                      {post.description}
                    </p>
                    <span className="text-[#22C55E] font-bold mt-4 inline-block font-mono text-sm hover:underline">
                      {t.readMore}
                    </span>
                  </div>
                </Link>
              </RevealOnScroll>
            ))}
          </div>

        </div>
      </ParticlesBackground>
    </section>
  );
}
