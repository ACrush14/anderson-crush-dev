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
    heroProof1: 'Projetos em produção',
    heroProof2: 'IA aplicada (Gemini)',
    heroProof3: 'Full-stack de ponta a ponta',

    aboutTitle: 'Sobre Mim',
    coreStackTitle: 'Core Stack',
    secondaryStackTitle: 'Também uso',
    aboutText1: 'Sou Engenheiro de Software com foco em desenvolvimento de software e estruturação de aplicações web. Minha técnica é centrada no JavaScript, utilizando Next.js para o desenvolvimento de interfaces e Node.js para a construção e integração de APIs. No back-end e modelagem de dados, utilizo PostgreSQL.',
    aboutText2: 'Atuei com modelagem 3D (ArchViz) no setor imobiliário, onde fui o ponto técnico responsável por otimização de projetos. Participei de iniciativas acadêmicas e de extensão na arquitetura, sempre com foco em inovação. Hoje, aplico esse olhar nos meus projetos em tecnologia e dados.',
    aboutText3: 'No curto prazo, busco oportunidades para ganhar experiência, fazer networking e participar de eventos na área de TI. A médio prazo, quero atuar em um ambiente mais estável, e no longo, pretendo seguir para um concurso público.',
    aboutText4: 'Sou nerd, estudioso e comprometido: chego cedo, saio tarde, e sempre dou meu melhor.',
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
    heroProof1: 'Projects in production',
    heroProof2: 'Applied AI (Gemini)',
    heroProof3: 'End-to-end full-stack',

    aboutTitle: 'About Me',
    coreStackTitle: 'Core Stack',
    secondaryStackTitle: 'Also using',
    aboutText1: "I'm a Software Engineer focused on software development and structuring web applications. My technical foundation is centered on JavaScript, using Next.js to build interfaces and Node.js to build and integrate APIs. On the back-end and data modeling side, I use PostgreSQL.",
    aboutText2: 'I worked with 3D modeling (ArchViz) in the real estate sector, where I was the technical point of contact responsible for project optimization. I took part in academic and extension initiatives in architecture, always with a focus on innovation. Today, I bring that same eye to my projects in technology and data.',
    aboutText3: "In the short term, I'm looking for opportunities to gain experience, network, and take part in IT events. In the medium term, I want to work in a more stable environment, and in the long term, I plan to pursue a public-sector position.",
    aboutText4: "I'm a nerd, studious and committed: I show up early, stay late, and always give my best.",
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
