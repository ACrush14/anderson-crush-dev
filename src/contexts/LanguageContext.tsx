'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

const translations = {
  pt: {
    about: 'Sobre mim',
    skills: 'Habilidades',
    journey: 'Jornada',
    projects: 'Projetos',
    blog: 'Blog',
    contact: 'Contato',

    heroGreeting: 'Olá, eu sou',
    heroRole1: 'Desenvolvedor Full Stack',
    heroRole2: 'Desenvolvedor Web',
    heroRole3: 'Estudante de Computação',
    heroRole4: 'Apaixonado por Tecnologia',
    heroRole5: 'Sempre Aprendendo',

    aboutTitle: 'Sobre Mim',
    aboutText1: 'Sou estudante de Ciência da Computação na UNIFOR, apaixonado por desenvolvimento de software e pela criação de soluções que fazem a diferença. Minha jornada começou com curiosidade e se transformou em uma carreira em construção, focada em tecnologia e inovação.',
    aboutText2: 'Tenho experiência prática com tecnologias modernas do ecossistema web, desde o front-end até o back-end. Busco constantemente aprender novas ferramentas e boas práticas para entregar projetos de qualidade.',
    techSkills: 'Habilidades Técnicas',
    downloadCv: 'Download CV',
    coverLetter: 'Carta de Apresentação',

    journeyTitle: 'Minha Jornada',
    projectsTitle: 'Meus Projetos',
    eventsTitle: 'Momentos da Carreira',
    blogTitle: 'Blog',
    contactTitle: 'Entre em Contato',

    contactSubtitle: 'Tem uma proposta, uma dúvida ou apenas quer trocar uma ideia? Ficarei feliz em ouvir de você. Preencha o formulário abaixo.',
    labelName: 'Nome',
    labelEmail: 'Email',
    labelMessage: 'Mensagem',
    btnSend: 'Enviar Mensagem',
    msgSending: 'Enviando...',
    msgSuccess: 'Mensagem enviada com sucesso!',
    msgError: 'Erro ao enviar. Tente novamente.',

    readMore: 'Ler mais →',
    backToTop: 'Voltar ao Topo',
    rights: 'Todos os direitos reservados.',
  },
  en: {
    about: 'About me',
    skills: 'Skills',
    journey: 'Journey',
    projects: 'Projects',
    blog: 'Blog',
    contact: 'Contact',

    heroGreeting: 'Hi, I am',
    heroRole1: 'Full Stack Developer',
    heroRole2: 'Web Developer',
    heroRole3: 'Computer Science Student',
    heroRole4: 'Tech Enthusiast',
    heroRole5: 'Lifelong Learner',

    aboutTitle: 'About Me',
    aboutText1: 'I am a Computer Science student at UNIFOR, passionate about software development and creating solutions that make a difference. My journey started with curiosity and turned into a career in progress, focused on technology and innovation.',
    aboutText2: 'I have hands-on experience with modern web technologies, from front-end to back-end. I constantly seek to learn new tools and best practices to deliver quality projects.',
    techSkills: 'Technical Skills',
    downloadCv: 'Download CV',
    coverLetter: 'Cover Letter',

    journeyTitle: 'My Journey',
    projectsTitle: 'My Projects',
    eventsTitle: 'Career Moments',
    blogTitle: 'Blog',
    contactTitle: 'Get in Touch',

    contactSubtitle: 'Have a proposal, a question, or just want to chat? I would be happy to hear from you. Fill out the form below.',
    labelName: 'Name',
    labelEmail: 'Email',
    labelMessage: 'Message',
    btnSend: 'Send Message',
    msgSending: 'Sending...',
    msgSuccess: 'Message sent successfully!',
    msgError: 'Error sending. Try again.',

    readMore: 'Read more →',
    backToTop: 'Back to Top',
    rights: 'All rights reserved.',
  },
};

type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations['pt'];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('pt');

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
}
