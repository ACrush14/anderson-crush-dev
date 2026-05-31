'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { FaTimes } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

export default function ContactModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState('');
  const [contactPreference, setContactPreference] = useState('Via WhatsApp');


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('Enviando...');
    const form = event.currentTarget;
    const formData = new FormData(form);
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          source: 'Modal de Contato',
          name: formData.get('name'),
          email: formData.get('email'),
          phone: formData.get('phone'),
          city: formData.get('city'),
          activity: formData.get('activity'),
          contact_preference: contactPreference,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setStatus('Mensagem enviada! Entrarei em contato em breve.');
      form.reset();
      setTimeout(() => setIsOpen(false), 3000);
    } catch {
      setStatus('Erro ao enviar. Verifique sua conexão e tente novamente.');
    }
  };

  const inputClass = "mt-1 block w-full border border-gray-700 bg-black py-2 px-3 text-gray-200 focus:outline-none focus:border-[#22C55E] transition-colors";

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 25 }}
            className="bg-[#111111] border border-gray-800 w-full max-w-4xl relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-0 left-0 w-full h-[2px] bg-[#22C55E]" />
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-400 transition-colors z-10"
              aria-label="Fechar"
            >
              <FaTimes size={24} />
            </button>

            <div className="grid md:grid-cols-2">
              <div className="p-8 md:p-10 flex flex-col justify-center bg-black border-r border-gray-800">
                <h2 className="text-3xl font-bold text-white mb-3 font-heading">Ficou com alguma dúvida?</h2>
                <p className="text-gray-400 mb-6">Preencha as informações ao lado que em breve entrarei em contato com você.</p>
                <div className="relative w-48 h-48 overflow-hidden self-center border-2 border-[#22C55E]/40">
                  <Image src="/profile.png" alt="Anderson Crush" fill className="object-cover" />
                </div>
              </div>

              <div className="p-8 md:p-10">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-mono text-[#22C55E] uppercase tracking-wider">Nome</label>
                      <input type="text" name="name" placeholder="Nome completo" required className={inputClass} />
                    </div>
                    <div>
                      <label className="text-sm font-mono text-[#22C55E] uppercase tracking-wider">Celular</label>
                      <input type="tel" name="phone" placeholder="(DDD) 00000-0000" required className={inputClass} />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-mono text-[#22C55E] uppercase tracking-wider">E-mail</label>
                    <input type="email" name="email" placeholder="seu@email.com" required className={inputClass} />
                  </div>
                  <div>
                    <label className="text-sm font-mono text-[#22C55E] uppercase tracking-wider">Cidade</label>
                    <input type="text" name="city" placeholder="Ex: Fortaleza" required className={inputClass} />
                  </div>
                  <div>
                    <label className="text-sm font-mono text-[#22C55E] uppercase tracking-wider">Interesse</label>
                    <input type="text" name="activity" placeholder="Ex: desenvolvimento de site" required className={inputClass} />
                  </div>
                  <div>
                    <label className="text-sm font-mono text-[#22C55E] uppercase tracking-wider mb-2 block">Forma de contato</label>
                    <div className="flex gap-2">
                      {['Via WhatsApp', 'Via Ligação'].map((pref) => (
                        <button
                          key={pref}
                          type="button"
                          onClick={() => setContactPreference(pref)}
                          className={`flex-1 py-2 px-4 border text-sm transition-colors font-mono ${
                            contactPreference === pref
                              ? 'bg-[#22C55E]/10 border-[#22C55E] text-[#22C55E]'
                              : 'bg-black border-gray-700 text-gray-500 hover:border-gray-500'
                          }`}
                        >
                          {pref}
                        </button>
                      ))}
                    </div>
                  </div>
                  <button type="submit" className="w-full bg-[#22C55E] text-black font-bold py-3 px-4 hover:bg-green-400 transition-colors duration-300 font-mono uppercase tracking-wider">
                    Entrar em Contato
                  </button>
                  {status && <p className="mt-2 text-center text-sm text-gray-400 font-mono">{status}</p>}
                </form>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
