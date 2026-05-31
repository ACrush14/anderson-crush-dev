// src/data/blogData.ts
// =============================================================
// FONTE ÚNICA DE DADOS DO BLOG
// Para adicionar um post: copie o bloco de objeto abaixo,
// cole no final do array e preencha os campos.
// O `slug` vira a URL: /blog/o-filme-antes-de-blade-runner
// =============================================================

export interface BlogPost {
  slug: string;       // URL amigável, ex: 'meu-primeiro-post'
  title: string;      // Título exibido no card e na página
  author: string;     // Sempre 'Anderson Crush'
  date: string;       // Ex: '31 de Maio de 2026'
  description: string; // Resumo curto exibido no card (1-2 frases)
  image: string;      // Caminho da imagem em /public, ex: '/blog/blade-runner.jpg'
  content: string;    // HTML do corpo do post (use <p> e <br/> conforme padrão)
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'o-filme-antes-de-blade-runner',
    title: 'O filme antes de Blade Runner',
    author: 'Anderson Crush',
    date: '31 de Maio de 2026',
    description: 'Uma breve descrição sobre o artigo para aparecer no card do blog.',
    image: '/blog/blade-runner.jpg',
    content: `
      <p>Aqui entrará o primeiro parágrafo do seu texto estruturado.</p>
      <br/>
      <p>Aqui o segundo, e assim por diante, mantendo a organização que você exige.</p>
    `,
  },
];
