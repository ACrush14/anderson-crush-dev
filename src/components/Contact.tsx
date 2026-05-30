'use client';

import { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import ParticlesBackground from './ParticlesBackground';
import RevealOnScroll from './RevealOnScroll';
import { useLanguage } from '@/contexts/LanguageContext';
import emailjs from '@emailjs/browser';

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
            <p className="text-center mb-12 max-w-2xl mx-auto text-gray-400">
              {t.contactSubtitle}
            </p>
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
