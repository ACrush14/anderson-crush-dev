'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, FreeMode } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper';
import { FiChevronLeft, FiChevronRight, FiArrowRight } from 'react-icons/fi';
import ParticlesBackground from './ParticlesBackground';
import RevealOnScroll from './RevealOnScroll';
import { useLanguage } from '@/contexts/LanguageContext';
import { blogPosts } from '@/data/blogData';
import 'swiper/css';

export default function Blog() {
  const { t } = useLanguage();
  const swiperRef = useRef<SwiperType | null>(null);

  // Mais recentes primeiro
  const posts = [...blogPosts].reverse();

  return (
    <section id="blog" className="relative overflow-hidden">
      <ParticlesBackground id="particles-blog">
        <div className="py-24">

          {/* Cabeçalho com navegação */}
          <RevealOnScroll>
            <div className="container mx-auto px-6 flex items-end justify-between mb-10">
              <div>
                <p className="text-[#22C55E] font-mono text-xs uppercase tracking-[0.25em] mb-2">
                  // artigos
                </p>
                <h2 className="text-4xl md:text-5xl font-bold font-heading text-white">
                  {t.blogTitle}
                </h2>
              </div>

              {/* Setas de navegação — desktop */}
              <div className="hidden md:flex items-center gap-2">
                <button
                  onClick={() => swiperRef.current?.slidePrev()}
                  aria-label="Anterior"
                  className="group w-11 h-11 flex items-center justify-center border border-gray-800 text-gray-500 hover:border-[#22C55E] hover:text-[#22C55E] transition-all duration-200"
                >
                  <FiChevronLeft size={20} className="group-hover:-translate-x-0.5 transition-transform" />
                </button>
                <button
                  onClick={() => swiperRef.current?.slideNext()}
                  aria-label="Próximo"
                  className="group w-11 h-11 flex items-center justify-center border border-gray-800 text-gray-500 hover:border-[#22C55E] hover:text-[#22C55E] transition-all duration-200"
                >
                  <FiChevronRight size={20} className="group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          </RevealOnScroll>

          {/* Carrossel — sangra até a borda direita da tela */}
          <RevealOnScroll delay={0.1}>
            <div className="pl-6 md:pl-[max(1.5rem,calc((100vw-1280px)/2+1.5rem))]">
              <Swiper
                modules={[A11y, FreeMode]}
                onBeforeInit={(swiper) => { swiperRef.current = swiper; }}
                spaceBetween={20}
                slidesPerView={1.15}
                freeMode={{ enabled: true, momentumRatio: 0.6, momentumVelocityRatio: 0.8 }}
                grabCursor
                breakpoints={{
                  480:  { slidesPerView: 1.6,  spaceBetween: 20 },
                  768:  { slidesPerView: 2.3,  spaceBetween: 24 },
                  1024: { slidesPerView: 3.1,  spaceBetween: 24 },
                  1280: { slidesPerView: 3.4,  spaceBetween: 28 },
                }}
                className="!overflow-visible"
              >
                {posts.map((post) => (
                  <SwiperSlide key={post.slug} className="!h-auto">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="group flex flex-col h-full bg-[#111111] border border-gray-800 hover:border-[#22C55E]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(34,197,94,0.12)] overflow-hidden"
                    >
                      {/* Imagem de capa */}
                      <div className="relative w-full h-48 overflow-hidden shrink-0">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          sizes="(max-width: 768px) 85vw, (max-width: 1024px) 45vw, 30vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        {/* Overlay sutil no hover */}
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                      </div>

                      {/* Linha verde no topo do conteúdo */}
                      <div className="h-[2px] w-0 bg-[#22C55E] group-hover:w-full transition-all duration-500 ease-out" />

                      {/* Conteúdo */}
                      <div className="p-5 flex flex-col flex-grow">
                        <p className="text-[10px] text-gray-600 mb-3 font-mono uppercase tracking-[0.2em]">
                          {post.date}
                        </p>
                        <h3 className="text-base font-bold font-heading text-white group-hover:text-[#22C55E] transition-colors duration-200 leading-snug mb-3 line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-gray-500 text-sm leading-relaxed flex-grow line-clamp-3">
                          {post.description}
                        </p>

                        {/* CTA */}
                        <div className="mt-4 flex items-center gap-1.5 text-[#22C55E] text-xs font-mono opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all duration-200">
                          <span>{t.readMore}</span>
                          <FiArrowRight size={12} />
                        </div>
                      </div>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </RevealOnScroll>

          {/* Setas mobile — centralizadas abaixo */}
          <div className="md:hidden flex justify-center gap-3 mt-8">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              aria-label="Anterior"
              className="w-11 h-11 flex items-center justify-center border border-gray-800 text-gray-500 hover:border-[#22C55E] hover:text-[#22C55E] transition-all"
            >
              <FiChevronLeft size={20} />
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              aria-label="Próximo"
              className="w-11 h-11 flex items-center justify-center border border-gray-800 text-gray-500 hover:border-[#22C55E] hover:text-[#22C55E] transition-all"
            >
              <FiChevronRight size={20} />
            </button>
          </div>

        </div>
      </ParticlesBackground>
    </section>
  );
}
