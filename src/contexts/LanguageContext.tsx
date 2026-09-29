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
    heroRole1: 'Desenvolvedor Full-Stack',
    heroRole2: 'Full-Stack Engineer',
    heroRole3: 'Líder de Projetos',
    heroRole4: 'Apaixonado por Tecnologia',
    heroRole5: 'Sempre Aprendendo',
    heroTagline: 'Construo sistemas full-stack de ponta a ponta — com IA aplicada, dados reais e integrações de produção.',
    heroAvailability: 'Aberto a oportunidades Full-Stack / IA',
    heroCtaProjects: 'Ver Projetos',
    heroCtaResume: 'Baixar CV',
    heroCtaContact: 'Contato Direto',
    heroProof1: 'Projetos em produção',
    heroProof2: 'IA aplicada (Gemini)',
    heroProof3: 'Full-stack de ponta a ponta',

    aboutTitle: 'Sobre Mim',
    coreStackTitle: 'Core Stack',
    secondaryStackTitle: 'Também uso',
    aboutText1: 'Desenvolvedor Full-Stack, focado em transformar problemas complexos em soluções computacionais automatizadas. Combino Design, Experiência, Infraestrutura, Arquitetura de Software e Desenvolvimento para entregar soluções escaláveis de alto impacto.',
    aboutText2: 'Atuo na interseção entre o Back-end, o Front-end e o UI/UX, criando sistemas que garantem inteligência e performance. Com uma visão técnica de ponta — do planejamento até a entrega da execução — meu objetivo é lhe entregar o complexo e gerar valor tangível através de tecnologia bem estruturada.',
    aboutText3: 'Sou nerd, estudioso e comprometido: chego cedo, saio tarde, e sempre dou meu melhor.',
    techSkills: 'Habilidades Técnicas',
    downloadCv: 'Download CV',
    coverLetter: 'Carta de Apresentação',

    journeyTitle: 'Minha Jornada',
    projectsTitle: 'Meus Projetos',
    projectsSubtitle: 'Os projetos mais densos do meu portfólio, com estudo de caso e métricas reais de engenharia.',
    projectsCaseStudyLink: 'Ler estudo de caso',
    projectsAcademicShow: 'Ver projetos acadêmicos',
    projectsAcademicHide: 'Ocultar projetos acadêmicos',
    eventsTitle: 'Momentos da Carreira',
    blogTitle: 'Blog',
    blogTabTech: 'Tech & Produto',
    blogTabArchitecture: 'Arquitetura & Cultura Pop (Legado)',
    blogEmptyTab: 'Nenhum artigo nesta categoria ainda.',
    contactTitle: 'Entre em Contato',

    contactSubtitle: 'Aberto a oportunidades como Desenvolvedor Full-Stack com foco em IA — CLT, PJ ou freelance. Envie uma proposta de contratação ou preencha o formulário abaixo.',
    contactQuickLinksTitle: 'Contato direto para recrutadores',
    contactQuickCv: 'Baixar CV',
    contactQuickLinkedin: 'LinkedIn',
    contactQuickWhatsapp: 'WhatsApp',
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
    heroRole1: 'Full-Stack Developer',
    heroRole2: 'Full-Stack Engineer',
    heroRole3: 'Project Lead',
    heroRole4: 'Passionate About Technology',
    heroRole5: 'Always Learning',
    heroTagline: 'I build end-to-end full-stack systems — with applied AI, real data, and production-grade integrations.',
    heroAvailability: 'Open to Full-Stack / AI opportunities',
    heroCtaProjects: 'View Projects',
    heroCtaResume: 'Download CV',
    heroCtaContact: 'Direct Contact',
    heroProof1: 'Projects in production',
    heroProof2: 'Applied AI (Gemini)',
    heroProof3: 'End-to-end full-stack',

    aboutTitle: 'About Me',
    coreStackTitle: 'Core Stack',
    secondaryStackTitle: 'Also using',
    aboutText1: 'Full-Stack Developer focused on turning complex problems into automated computational solutions. I combine Design, User Experience, Infrastructure, Software Architecture and Development to deliver scalable, high-impact solutions.',
    aboutText2: 'I work at the intersection of Back-end, Front-end and UI/UX, building systems that deliver intelligence and performance. With a sharp technical vision — from planning through execution — my goal is to hand you the complex made simple, and generate tangible value through well-structured technology.',
    aboutText3: "I'm a nerd, studious and committed: I show up early, stay late, and always give my best.",
    techSkills: 'Technical Skills',
    downloadCv: 'Download CV',
    coverLetter: 'Cover Letter',

    journeyTitle: 'My Journey',
    projectsTitle: 'My Projects',
    projectsSubtitle: 'The densest projects in my portfolio, with case studies and real engineering metrics.',
    projectsCaseStudyLink: 'Read case study',
    projectsAcademicShow: 'View academic projects',
    projectsAcademicHide: 'Hide academic projects',
    eventsTitle: 'Career Moments',
    blogTitle: 'Blog',
    blogTabTech: 'Tech & Product',
    blogTabArchitecture: 'Architecture & Pop Culture (Legacy)',
    blogEmptyTab: 'No articles in this category yet.',
    contactTitle: 'Get in Touch',

    contactSubtitle: 'Open to opportunities as a Full-Stack Developer focused on AI — full-time, contract, or freelance. Send a hiring proposal or fill out the form below.',
    contactQuickLinksTitle: 'Direct contact for recruiters',
    contactQuickCv: 'Download CV',
    contactQuickLinkedin: 'LinkedIn',
    contactQuickWhatsapp: 'WhatsApp',
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
