'use client';

import Image from 'next/image';
import ParticlesBackground from './ParticlesBackground';
import RevealOnScroll from './RevealOnScroll';

const eventImages = [
  { src: '/instagram-tech-talk.jpg', alt: 'Anderson Crush - Tech Talk' },
  { src: '/instagram-nasa.jpg', alt: 'Anderson Crush - NASA Space Apps Challenge' },
  { src: '/instagram-carousel.jpg', alt: 'Anderson Crush - Projeto Arduino' },
];

const allImages = [...eventImages, ...eventImages, ...eventImages, ...eventImages];

export default function EventsGallery() {
  return (
    <section id="events">
      <ParticlesBackground id="particles-events">
        <div className="py-20">
          <div className="container mx-auto">
            <RevealOnScroll>
              <h2 className="text-4xl font-bold text-center mb-16 font-heading text-[#22C55E]">
                Momentos da Carreira
              </h2>
            </RevealOnScroll>
            <RevealOnScroll delay={0.2}>
              <div className="group w-full overflow-hidden">
                <div className="inline-flex animate-marquee group-hover:[animation-play-state:paused]">
                  {allImages.map((image, index) => (
                    <div key={index} className="relative w-72 h-80 mx-4 flex-shrink-0 border border-[#22C55E]/20 overflow-hidden hover:border-[#22C55E]/60 transition-colors">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </ParticlesBackground>
    </section>
  );
}
