// src/data/blogData.ts
// =============================================================
// FONTE ÚNICA DE DADOS DO BLOG
// Para adicionar um post: copie um bloco de objeto, cole no
// final do array e preencha os campos.
// O `slug` vira a URL: /blog/o-filme-antes-de-blade-runner
// =============================================================

export interface BlogPost {
  slug: string;
  title: string;
  author: string;
  date: string;
  description: string;
  image: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'arquitetura-chinesa-em-video',
    title: 'Arquitetura Chinesa em Vídeo',
    author: 'Anderson Crush',
    date: '31 de Maio de 2026',
    description: 'Um projeto audiovisual sobre arquitetura oriental, com comparações entre pesquisa acadêmica e referências inesperadas da cultura pop — incluindo o jogo Sonic Unleashed.',
    image: '/blog/arquitetura-chinesa.jpg',
    content: `
      <p>Apresento aqui um material em vídeo sobre arquitetura chinesa, desenvolvido a partir da minha pesquisa acadêmica e de um seminário na faculdade. O projeto nasceu da curiosidade de investigar como elementos da cultura construtiva oriental aparecem — muitas vezes sem que percebamos — em referências do cotidiano.</p>
      <br/>
      <p>A inspiração inicial veio de um lugar inusitado: o jogo Sonic Unleashed, que constrói cidades fictícias baseadas em locais reais do mundo, incluindo a China. Isso me motivou a realizar comparações sistemáticas entre os elementos do jogo e o que encontrei na pesquisa acadêmica — uma forma de tornar o conteúdo mais acessível e visualmente interessante.</p>
      <br/>
      <p>O projeto foi estruturado em quatro partes. A primeira apresenta o conceito de arquitetura com referências profissionais. A segunda aborda os elementos mais comuns da arquitetura chinesa: cores, características formais, tipologias e suas relações com a religião e a filosofia oriental.</p>
      <br/>
      <p>Na terceira parte, apresento projetos notáveis que incorporam elementos da arquitetura chinesa, estabelecendo paralelos entre ficção e realidade — incluindo referências ao desenho Avatar: A Lenda de Aang, que reproduz com surpreendente fidelidade elementos arquitetônicos da China.</p>
      <br/>
      <p>O capítulo final compara diretamente imagens do nível Chun-nan de Sonic Unleashed com construções chinesas reais, verificando a precisão das cores, formas e elementos construtivos. A proximidade é notável e revela o cuidado dos designers do jogo com a pesquisa histórica.</p>
      <br/>
      <p>O processo de produção envolveu roteiro, gravação de narração e edição de vídeo. O material foi desenvolvido inteiramente em inglês, com planos para uma versão em português. É um projeto do qual tenho muito orgulho, e que abriu meu interesse por criar conteúdo na interseção entre arquitetura, filosofia e cultura pop.</p>
    `,
  },
  {
    slug: 'problema-da-arquitetura-individualista',
    title: 'O Problema da Arquitetura Individualista',
    author: 'Anderson Crush',
    date: '31 de Maio de 2026',
    description: 'Um projeto polêmico de 45 andares em Fortaleza acendeu o debate sobre identidade urbana, o silenciamento da crítica e o egoísmo que empobrece a arquitetura.',
    image: '/blog/arquitetura-individualista.jpg',
    content: `
      <p>Em dezembro de 2018, na cidade de Fortaleza, professores e estudantes se viram diante de uma discussão urgente sobre o futuro arquitetônico da cidade. Em um contexto marcado por um modelo coronelista de desenvolvimento urbano — no qual quem detém o capital define onde e como as novas construções acontecem —, uma nova fase estava se desenhando no horizonte.</p>
      <br/>
      <p>Não é privilégio de Fortaleza. A Torre Eiffel, a arquitetura do ferro, Adolf Loos e o Barroco foram duramente criticados em seus tempos, e hoje são celebrações arquitetônicas tombadas e incentivadas pelo turismo. A história da arquitetura é, em grande parte, uma história de rejeição seguida de reconhecimento tardio.</p>
      <br/>
      <p>Mas Fortaleza tem uma particularidade. Suas praias se assemelham a orlas turísticas do mundo inteiro, com torres aproveitando a vista para o mar. Uma foto da Beira Mar fortalezense pode ser facilmente confundida com Dubai ou Santa Mônica — algo que arquitetos cearenses veem com preocupação crescente.</p>
      <br/>
      <p>O estopim do debate foi um projeto de 45 andares que gerou reação imediata da classe arquitetônica. O argumento central: o prédio não apenas desfigura a identidade paisagística das praias como fere o Plano Diretor e a Lei de Uso e Ocupação do Solo. O escritório responsável pelo projeto foi o Nasser Hissa.</p>
      <br/>
      <p>A resposta do escritório ao debate público foi silenciar os comentários na postagem do projeto. Das mais de 150 manifestações originais, apenas 5 eram elogios — o resto, críticas. A seletividade na moderação expôs algo mais profundo do que uma simples divergência estética.</p>
      <br/>
      <p>Apagar comentários é construir um projeto apenas para si, sem se importar com quem o assiste. É uma postura que contradiz a natureza da arquitetura, que por definição é uma arte pública — ela existe no espaço que todos compartilham, e ninguém tem o direito de subtraí-la do debate coletivo.</p>
      <br/>
      <p>Os universitários de hoje serão os profissionais de amanhã. Censurar a crítica deles não é proteger um projeto: é roubar-lhes o direito de participar da construção da cidade em que vão trabalhar. E é exatamente esse egoísmo que empobrece a arquitetura — não a ousadia de um projeto polêmico, mas a recusa em dialogar sobre ele.</p>
    `,
  },
  {
    slug: 'o-filme-antes-de-blade-runner',
    title: 'O Filme Antes de Blade Runner',
    author: 'Anderson Crush',
    date: '31 de Maio de 2026',
    description: 'Metrópolis (1927) de Fritz Lang antecede Blade Runner em cinquenta anos e inventou os conceitos de ficção científica que o cinema continua copiando até hoje.',
    image: '/blog/metropolis.jpg',
    content: `
      <p>Há algum tempo, tive um trabalho de faculdade cujo tema era livre. Achei incríveis as escolhas dos meus colegas, mas decidi ir fundo em um campo pouco explorado na arquitetura, ainda que constantemente tangenciado: as artes visuais — cinema, jogos eletrônicos, séries, animações.</p>
      <br/>
      <p>Na minha pesquisa, queria entender como o futuro da arquitetura é imaginado. E toda vez que perguntava, a resposta era a mesma: pesquise Blade Runner. De fato, tudo que veio depois de Blade Runner é claramente inspirado ou copiado de lá — os replicantes, os androides, as cidades verticais e aéreas. Até Samurai Jack e a Cidade das Nuvens de Bespin, em Star Wars V, são tributários diretos desse universo.</p>
      <br/>
      <p>Mas Blade Runner é o pico de popularidade, não a origem. Existe um filme que antecede Blade Runner em pelo menos cinquenta anos e que contém, de forma ainda mais densa, os conceitos de ficção científica que vieram a dominar o imaginário do século XX: robôs, replicantes, a divisão social absoluta entre os que vivem em cima e os que sustentam tudo por baixo. Esse filme se chama Metrópolis, de Fritz Lang.</p>
      <br/>
      <h2>A origem de um imaginário</h2>
      <br/>
      <p>Metrópolis é de 1927. Fritz Lang o desenvolveu a partir de uma imersão direta no crescimento urbano de sua época e nos projetos que estavam redesenhando o futuro das cidades. O Plano Cidade de Le Corbusier, a Torre Einstein e o livro Amerika de Erich Mendelsohn, e a Figura Abstrata de Oskar Schlemmer influenciaram o filme de forma tão intensa que seus elementos são reconhecíveis até hoje.</p>
      <br/>
      <p>A história se passa em uma megalópole do futuro, comandada por um Senhor. A cidade funciona porque os trabalhadores vivem em um Submundo — um subsolo onde não se descansa, não se conversa, apenas se trabalha. É uma geometria de poder brutal: as pessoas da cidade dominam as máquinas, e as máquinas dominam os trabalhadores do Submundo.</p>
      <br/>
      <p>O filho do Senhor, ao descobrir o Submundo, fica horrorizado. Ele pergunta ao pai: onde estão as mãos que ergueram essa cidade? O pai não responde. Essa cena, com menos de dois minutos, resume uma questão que a arquitetura ainda não respondeu direito.</p>
      <br/>
      <p>Paralelamente ao enredo principal, um cientista tenta reviver a mulher morta do Senhor dentro de um corpo robótico. Esse robô é visivelmente o ancestral direto do C-3PO de Star Wars — uma conexão visual que poucos espectadores de hoje percebem, mas que está ali, registrada décadas antes.</p>
      <br/>
      <h2>O filme que quase desapareceu</h2>
      <br/>
      <p>Quando foi lançado, Metrópolis recebeu críticas predominantemente negativas. O retorno de bilheteria foi de menos de 2% do orçamento. E o filme original, em sua versão completa, deixou de existir.</p>
      <br/>
      <p>Foi um pequeno museu na Argentina que tornou possível sua reconstrução, ao guardar trechos que ninguém mais tinha. Combinado com fragmentos encontrados em arquivos de outros países, o filme foi sendo reconstituído ao longo do tempo. Hoje, 95% da metragem original está recuperada.</p>
      <br/>
      <p>Ele está disponível no YouTube em diversas versões — uma em português com 118 minutos (corte de 1927) e uma em inglês com 148 minutos (restauração de 2010), além de análises e materiais de making-of. Para quem estuda arquitetura, ficção científica ou simplesmente quer entender de onde veio o visual do futuro que o cinema nos vendeu por décadas, Metrópolis não é opcional. É ponto de partida.</p>
    `,
  },
];
