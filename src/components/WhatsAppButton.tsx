'use client';

import { useState } from 'react';
import { FaWhatsapp, FaTimes, FaPaperPlane } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

// TODO: Substitua pelo seu número com código do país e DDD (ex: 5585999999999)
const WHATSAPP_NUMBER = '5585982060172';

const predefinedMessages = [
  'Olá! Gostaria de um orçamento para desenvolvimento de software.',
  'Tenho interesse em discutir uma oportunidade profissional.',
  'Preciso de ajuda com um projeto web.',
  'Gostaria de saber mais sobre seus serviços.',
];

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [customMessage, setCustomMessage] = useState('');

  const handleSendMessage = (message: string) => {
    if (!message.trim()) return;
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setCustomMessage('');
    setIsOpen(false);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-28 right-6 z-50 w-[340px] md:w-[380px] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-gray-200"
          >
            <div className="bg-white p-4 flex items-center justify-between border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <FaWhatsapp className="text-green-500 text-2xl" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 text-sm">Anderson Crush</h3>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs text-green-600 font-medium">Online agora</span>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-gray-600 transition-colors p-2">
                <FaTimes size={18} />
              </button>
            </div>

            <div className="bg-[#f0f2f5] p-4 h-[320px] overflow-y-auto flex flex-col gap-3">
              <span className="text-xs font-bold text-gray-500 mb-1 uppercase tracking-wider">Como posso ajudar?</span>
              {predefinedMessages.map((msg, index) => (
                <button
                  key={index}
                  onClick={() => handleSendMessage(msg)}
                  className="bg-white p-3 rounded-xl rounded-tl-sm shadow-sm text-sm text-gray-700 hover:bg-green-50 text-left transition-colors border border-gray-100 hover:border-green-200"
                >
                  {msg}
                </button>
              ))}
            </div>

            <div className="p-3 bg-white border-t border-gray-200 flex items-center gap-2">
              <input
                type="text"
                placeholder="Digite sua mensagem..."
                value={customMessage}
                onChange={(e) => setCustomMessage(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter') handleSendMessage(customMessage); }}
                className="flex-1 bg-gray-100 text-gray-800 text-sm rounded-full px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <button
                onClick={() => handleSendMessage(customMessage)}
                disabled={!customMessage.trim()}
                className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center shrink-0 hover:bg-green-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <FaPaperPlane className="ml-[-2px]" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group fixed bottom-8 right-6 md:right-8 z-50 flex items-center justify-center w-16 h-16 bg-green-500 rounded-full shadow-[0_4px_14px_0_rgba(34,197,94,0.39)] hover:bg-green-600 hover:shadow-[0_6px_20px_rgba(34,197,94,0.23)] transition-all duration-300 hover:scale-110 focus:outline-none"
        aria-label="Fale pelo WhatsApp"
      >
        {isOpen ? <FaTimes className="text-white text-3xl" /> : <FaWhatsapp className="text-white text-4xl" />}
        {!isOpen && (
          <div className="absolute bottom-1/2 mb-[-10px] right-full mr-4 px-4 py-2 bg-gray-800 text-white text-sm rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap hidden md:block">
            Olá, precisa de ajuda?
            <div className="absolute right-[-5px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-gray-800" />
          </div>
        )}
      </button>
    </>
  );
}
