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
    heroRole1: 'Engenheiro Full-Stack',
    heroRole2: 'Full-Stack com foco em IA',
    heroRole3: 'Integrações com Google Gemini',
    heroRole4: 'Sistemas Multi-tenant',
    heroRole5: 'Pagamentos & APIs Reais',
    heroTagline: 'Construo sistemas full-stack de ponta a ponta — com IA aplicada, dados reais e integrações de produção.',
    heroAvailability: 'Aberto a oportunidades Full-Stack / IA',
    heroCtaProjects: 'Ver Projetos',
    heroCtaResume: 'Baixar CV',
    heroCtaContact: 'Contato Direto',

    aboutTitle: 'Sobre Mim',
    aboutText1: 'Sou desenvolvedor Full-Stack com foco em IA aplicada, cursando Ciência da Computação na UNIFOR. Construo sistemas de ponta a ponta — banco de dados real, autenticação real, integrações de IA (Google Gemini) e pagamentos em produção — não apenas protótipos de sala de aula.',
    aboutText2: 'Meu projeto mais completo, o CondoManage, reúne isolamento multi-tenant, reservas por linguagem natural via IA e PIX real via Mercado Pago. Busco constantemente aprofundar boas práticas de engenharia para entregar software que resolve problemas reais, não só que funciona na demo.',
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
    heroRole1: 'Full-Stack Engineer',
    heroRole2: 'Full-Stack, AI-focused',
    heroRole3: 'Google Gemini Integrations',
    heroRole4: 'Multi-tenant Systems',
    heroRole5: 'Real Payments & APIs',
    heroTagline: 'I build end-to-end full-stack systems — with applied AI, real data, and production-grade integrations.',
    heroAvailability: 'Open to Full-Stack / AI opportunities',
    heroCtaProjects: 'View Projects',
    heroCtaResume: 'Download CV',
    heroCtaContact: 'Direct Contact',

    aboutTitle: 'About Me',
    aboutText1: "I'm a Full-Stack developer focused on applied AI, studying Computer Science at UNIFOR. I build end-to-end systems — real databases, real authentication, AI integrations (Google Gemini), and production payments — not just classroom prototypes.",
    aboutText2: 'My most complete project, CondoManage, combines multi-tenant data isolation, natural-language AI booking, and real PIX payments via Mercado Pago. I constantly deepen engineering best practices to ship software that solves real problems, not just software that works in the demo.',
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
