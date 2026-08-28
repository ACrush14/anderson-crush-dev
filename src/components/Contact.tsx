'use client';

import { useState } from 'react';
import { FaPaperPlane, FaDownload, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import ParticlesBackground from './ParticlesBackground';
import RevealOnScroll from './RevealOnScroll';
import { useLanguage } from '@/contexts/LanguageContext';
import emailjs from '@emailjs/browser';

const LINKEDIN_URL = 'https://www.linkedin.com/in/andersondelimacomputacao/';
const WHATSAPP_URL = 'https://wa.me/5585982060172?text=' + encodeURIComponent('Olá! Tenho interesse em discutir uma oportunidade profissional.');

export default function Contact() {
  const [status, setStatus] = useState('');
  const { t } = useLanguage();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus(t.msgSending);
    const form = event.currentTarget;
    const formData = new FormData(form);
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: formData.get('name'),
          email: formData.get('email'),
          message: formData.get('message'),
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setStatus(t.msgSuccess);
      form.reset();
    } catch {
      setStatus(t.msgError);
    }
  };

  const inputClass = "w-full px-4 py-3 bg-black border border-gray-700 text-gray-100 focus:outline-none focus:border-[#22C55E] transition-colors";

  return (
    <section id="contact">
      <ParticlesBackground id="particles-contact">
        <div className="container mx-auto px-6 py-24">
          <RevealOnScroll>
            <h2 className="text-4xl font-bold text-center mb-4 font-heading text-[#22C55E]">
              {t.contactTitle}
            </h2>
            <p className="text-center mb-8 max-w-2xl mx-auto text-gray-400">
              {t.contactSubtitle}
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.15}>
            <div className="max-w-xl mx-auto mb-12">
              <p className="text-center text-[10px] uppercase tracking-[0.25em] text-gray-600 font-mono mb-4">
                {t.contactQuickLinksTitle}
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <a
                  href="/Curriculo_Anderson_Crush.pdf"
                  download
                  className="inline-flex items-center gap-2 border border-gray-700 text-gray-200 font-mono text-sm py-2.5 px-5 hover:border-[#22C55E] hover:text-[#22C55E] transition-all"
                >
                  <FaDownload size={14} /> {t.contactQuickCv}
                </a>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-gray-700 text-gray-200 font-mono text-sm py-2.5 px-5 hover:border-[#22C55E] hover:text-[#22C55E] transition-all"
                >
                  <FaLinkedin size={14} /> {t.contactQuickLinkedin}
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-gray-700 text-gray-200 font-mono text-sm py-2.5 px-5 hover:border-[#22C55E] hover:text-[#22C55E] transition-all"
                >
                  <FaWhatsapp size={14} /> {t.contactQuickWhatsapp}
                </a>
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-[#111111] p-8 border border-gray-800">
              <div className="mb-6">
                <label htmlFor="name" className="block text-[#22C55E] font-semibold mb-2 font-mono text-sm uppercase tracking-wider">{t.labelName}</label>
                <input type="text" id="name" name="name" required className={inputClass} />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-[#22C55E] font-semibold mb-2 font-mono text-sm uppercase tracking-wider">{t.labelEmail}</label>
                <input type="email" id="email" name="email" required className={inputClass} />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-[#22C55E] font-semibold mb-2 font-mono text-sm uppercase tracking-wider">{t.labelMessage}</label>
                <textarea id="message" name="message" required rows={5} className={inputClass} />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="inline-flex items-center gap-3 bg-[#22C55E] text-black font-bold py-3 px-8 shadow-lg hover:bg-green-400 transition-all duration-300 hover:scale-105"
                >
                  {t.btnSend} <FaPaperPlane />
                </button>
                {status && <p className="mt-4 text-center text-gray-300 font-mono text-sm">{status}</p>}
              </div>
            </form>
          </RevealOnScroll>
        </div>
      </ParticlesBackground>
    </section>
  );
}
