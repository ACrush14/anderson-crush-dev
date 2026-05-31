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
  {
    slug: 'documentario-a-estetica-tecnologica-na-arquitetura',
    title: 'Documentário: A Estética Tecnológica na Arquitetura',
    author: 'Anderson Crush',
    date: '31 de Maio de 2026',
    description: 'Em vez de slides, um minidocumentário: como Fuller, Prouve, Frei Otto, Renzo Piano e Francis Keré resolveram problemas complexos com soluções mínimas — e o que isso significa para a arquitetura hoje.',
    image: '/blog/estetica-tecnologica.jpg',
    content: `
      <p>Em um dos trabalhos da cadeira de Teoria e História da Arquitetura e do Urbanismo, decidi me desafiar. Enquanto a maioria dos colegas optava por apresentações em slides, escolhi produzir um minidocumentário. O tema era a estética tecnológica na arquitetura — um movimento que, ao longo do século XX, transformou radicalmente a forma como pensamos estrutura, forma e função.</p>
      <br/>
      <p>A introdução do documentário parte de uma constatação simples: em algum momento, cerca de cem anos atrás, o tempo e o espaço encolheram. O transporte ficou mais barato, mais rápido e mais acessível. Guerras se intensificaram. Economias se fortaleceram. E foi nesse contexto de aceleração e ruptura que o modernismo arquitetônico floresceu — e com ele, a estética tecnológica.</p>
      <br/>
      <h2>Os arquitetos do movimento</h2>
      <br/>
      <p>Buckminster Fuller foi um dos pioneiros. Seus conceitos de "4D" e "Dymaxion" — uma combinação de Dynamic, Maximum e Tension — resultaram em projetos radicais como o Dymaxion Car e o Dymaxion House, nos anos 1940 e 50. Mas foi a Cúpula Geodésica que o imortalizou: uma estrutura de triângulos metálicos interconectados que lembra a molécula C60 e resolve o problema de cobrir grandes vãos com o mínimo de material.</p>
      <br/>
      <p>Jean Prouve começou como ferreiro e transformou esse ponto de partida em uma filosofia construtiva. Ele mesclou design e construção prática, desenvolvendo móveis e casas que podiam ser montadas em menos de uma semana. A popularidade não veio imediatamente, mas a lógica era irrefutável: construir rápido, construir bem, construir para as pessoas.</p>
      <br/>
      <p>Frei Otto projetou o Estádio Olímpico de Munique para os Jogos de 1972 — uma cobertura que parece uma teia de aranha suspensa no ar, radicalmente diferente de tudo que existia até então. Era estrutura como poesia.</p>
      <br/>
      <p>Richard Rogers e Renzo Piano, no Centro Georges Pompidou, levaram a estética tecnológica ao extremo: toda a estrutura, as tubulações, os cabos e os pilares expostos para fora, deixando o interior completamente livre. Do outro lado do edifício, uma praça pública aberta. O Pompidou é simultaneamente uma máquina, um museu e uma declaração política sobre o espaço urbano.</p>
      <br/>
      <p>Francis Keré fechou o documentário com uma perspectiva diferente. Formado na Europa, ele voltou à sua cidade natal em Gando, no Burkina Faso, e aplicou processos participativos com materiais locais e mão de obra comunitária. A estética tecnológica aqui não é sobre expor estruturas metálicas — é sobre usar o que existe para construir o que faz sentido para quem vai usar.</p>
      <br/>
      <p>O que une todos esses arquitetos é uma mesma obsessão: resolver problemas complexos com soluções mínimas, priorizando conforto e estética sem desperdiçar recursos. É um legado que a arquitetura contemporânea ainda está aprendendo a honrar.</p>
    `,
  },
  {
    slug: 'como-lidar-com-sentimentos-negativos-na-arquitetura',
    title: 'Como Lidar com Sentimentos Negativos na Arquitetura',
    author: 'Anderson Crush',
    date: '31 de Maio de 2026',
    description: 'Inveja, insegurança e raiva fazem parte da jornada em arquitetura. Um guia honesto sobre autoconhecimento e autocontrole para quem está no meio do curso e sente que o trabalho do outro é sempre melhor.',
    image: '/blog/sentimentos-negativos.jpg',
    content: `
      <p>Em nossa jornada acadêmica, sempre nos deparamos com pessoas que fazem projetos que nos fazem questionar o motivo de estarmos na arquitetura. Bate aquele sentimento de insegurança, a dúvida sobre o que estamos fazendo, se o próximo sempre pode nos superar. A grama do vizinho sempre é mais verde — e na faculdade de arquitetura, essa frase ganha uma dimensão quase física, porque o trabalho do outro está literalmente exposto na parede ao lado do seu.</p>
      <br/>
      <p>Boas e más notícias: esse sentimento é profundamente humano. Aprender a conviver com a inveja e o pensamento negativo é tão necessário quanto aprender a desenhar — e assim como o desenho, é uma habilidade que se treina.</p>
      <br/>
      <p>A primeira coisa a lembrar é que cada um entra na arquitetura em um momento diferente. Cada pessoa carrega uma história distinta, com formas diferentes de processar o mundo e os projetos. Nenhum olhar é igual. E é exatamente essa diferença que faz com que turmas que recebem o mesmo briefing produzam projetos completamente diferentes — todos válidos, todos reveladores de quem os fez.</p>
      <br/>
      <p>Lembre-se dos seus projetos coletivos. Mesmo partindo do mesmo terreno e do mesmo programa, cada um chegou a um resultado único. Isso não é fraqueza — é metodologia. É a sua forma particular de associar referências, sentimentos e intenções. Use o melhor do que você tem, em vez de desperdiçar energia tentando ser o que o outro é.</p>
      <br/>
      <p>Pense por que você está na arquitetura e onde quer chegar com ela. Esse exercício de olhar para dentro, em vez de comparar com o de fora, é o que distingue quem cresce de quem estagna.</p>
      <br/>
      <p>Se a inveja persistir, converta-a em pergunta: por que aquela pessoa faz projetos melhores? Ela apresenta de forma mais clara? As soluções dela parecem mais criativas? Tem mais tempo de prática? O caminho dela pode ter começado antes — e isso não é uma sentença, é um dado. Converse com ela. Pergunte como ela trabalha. A palavra tem um poder enorme, e muita gente aprende mais em uma conversa franca do que em meses de tentativa e erro solitários.</p>
      <br/>
      <p>Agora, se os sentimentos negativos tomarem conta e nada funcionar — libere. Todos temos raiva. Todos temos momentos de angústia real. A questão não é nunca sentir, mas saber para onde canalizar.</p>
      <br/>
      <p>Tenha um hobby relaxante: tocar um instrumento, ver filmes, cozinhar. Ou um hobby mais explosivo: correr, lutar, malhar. Um colega me contou que, quando nada funciona, ele grava um vídeo falando de tudo que está sentindo — a raiva, a frustração, a explicação de por que está assim. Quando termina, ele apaga. Até lá, a raiva já passou. Outro colega compra marca-textos e joga contra a parede até se sentir melhor. Cada um tem o seu método.</p>
      <br/>
      <p>O mais importante: seu sentimento não é exclusivo, e não te define. O que te define é o que você faz depois que ele passa. Cada um tem seu tempo na arquitetura — e esse tempo é seu.</p>
    `,
  },
  {
    slug: 'o-estoril',
    title: 'O Estoril',
    author: 'Anderson Crush',
    date: '31 de Maio de 2026',
    description: 'De casa de veraneio a cassino de soldados americanos, de refúgio de intelectuais na ditadura a sede da Secretaria de Turismo — a história do Estoril e o que ela revela sobre Fortaleza e seus esquecimentos.',
    image: '/blog/estoril.jpg',
    content: `
      <p>Desde o início da faculdade, ouvi professores mencionando o Estoril como um grande marco da boêmia de Fortaleza. Durante um trabalho acadêmico, fui até lá pela primeira vez. Encontrei o edifício em curso de decadência, com poucas pessoas andando pela Rua dos Tabajaras. Aquele contraste — entre a grandeza que os professores descreviam e o silêncio que eu encontrei — motivou três meses de pesquisa, desenvolvida junto com Victoria Lima.</p>
      <br/>
      <h2>As origens: 1920</h2>
      <br/>
      <p>Em 1920, um pernambucano chamado José Magalhães Porto construiu uma casa na antiga Praia do Peixe e a nomeou em homenagem à sua esposa, Dona Moreninha. Esse investimento isolado foi suficiente para iniciar um processo de transformação urbana na região, que seria posteriormente rebatizada como Praia de Iracema.</p>
      <br/>
      <p>Em 1930, a família se mudou e o local foi convertido em restaurante. O Estoril começava sua vida pública.</p>
      <br/>
      <h2>A Segunda Guerra e os americanos</h2>
      <br/>
      <p>Em 1944, durante a Segunda Guerra Mundial, uma base americana instalada em Fortaleza ocupou o Estoril. O espaço foi transformado em cassino exclusivo para soldados — e para as chamadas "coca-colas", como eram conhecidas as jovens da alta sociedade que frequentavam o local. Era um Fortaleza paralelo, fechado, cosmopolita por imposição da guerra.</p>
      <br/>
      <h2>A boêmia e a ditadura</h2>
      <br/>
      <p>Em 1948, os americanos foram embora e a boêmia voltou. O Estoril se tornou ponto de encontro de intelectuais, músicos, poetas, artistas, escritores e pessoas de esquerda. Num período em que a ditadura tornava o espaço público hostil, o Estoril funcionou como um refúgio — um lugar onde as ideias circulavam mesmo quando a rua não permitia.</p>
      <br/>
      <h2>O presente impreciso</h2>
      <br/>
      <p>A expansão construtiva na Praia de Iracema alterou completamente a região ao redor. A orla verticalizada foi avançando, e o Estoril foi perdendo o contexto que lhe dava sentido. Hoje, funciona como sede da Secretaria Municipal de Turismo — uma ironia que não escapa a quem conhece sua história.</p>
      <br/>
      <p>Seu destino ainda é impreciso. O que resta é a pergunta que motiva qualquer estudo de patrimônio: o que uma cidade decide lembrar, e o que ela escolhe esquecer? O Estoril é, por enquanto, uma resposta incômoda para as duas perguntas.</p>
    `,
  },
  {
    slug: 'arquitetura-tem-realmente-tanto-calculo-quanto-falam',
    title: 'Arquitetura tem realmente tanto cálculo quanto falam?',
    author: 'Anderson Crush',
    date: '31 de Maio de 2026',
    description: 'A crença popular de que arquitetura é repleta de cálculos não resiste a uma análise honesta dos currículos reais. O que o curso exige de matemática — e o que ele exige de você.',
    image: '/blog/calculo-arquitetura.jpg',
    content: `
      <p>Em reuniões de família, a conversa sempre chega num ponto previsível. Quando alguém descobre que você estuda arquitetura, vem a frase: "Arquitetura tem muito cálculo." Dito com uma mistura de admiração e alerta, como se o curso fosse uma armadilha matemática disfarçada de prancheta e perspectiva.</p>
      <br/>
      <p>Essa percepção é quase universal — e quase completamente equivocada.</p>
      <br/>
      <p>Ao observar os currículos de cinco universidades cearenses, apenas uma oferece disciplinas consistentes de cálculo até o sexto semestre. As demais concentram o conteúdo matemático em medições práticas: somas, cálculos de área, percentuais de rampa. Operações que qualquer pessoa com ensino médio completo reconhece. Se cálculo fosse o núcleo do curso, arquitetura estaria muito mais próxima da engenharia — e os currículos mostram que os caminhos divergiram faz tempo.</p>
      <br/>
      <h2>O que a história dos currículos revela</h2>
      <br/>
      <p>Comparando o currículo da UFC de 1981 com o de 2012, a diferença é clara. O currículo antigo priorizava disciplinas de cálculo e medidas; o projeto arquitetônico em si só começava no quarto período. O currículo contemporâneo inverteu essa lógica — o projeto entra cedo, e as ferramentas técnicas vêm como suporte, não como pré-requisito.</p>
      <br/>
      <p>A arquitetura contemporânea privilegia abordagens humanitárias e sociológicas. A Fórmula de Blondel para dimensionamento de escadas, os cálculos de inclinação de rampas, a geometria aplicada ao desenho técnico — tudo isso integra o currículo, mas são conteúdos acessíveis com boa pedagogia, não obstáculos que exigem formação em cálculo diferencial.</p>
      <br/>
      <h2>O que realmente permanece</h2>
      <br/>
      <p>A exceção real é o cálculo estrutural. Essa disciplina específica, presente de forma consistente nos currículos atuais, aborda o dimensionamento de elementos construtivos — vigas, pilares, lajes — com apoio de ferramentas computacionais que facilitam a compreensão dos processos. É necessário, é técnico, e exige atenção. Mas é uma disciplina, não o curso inteiro.</p>
      <br/>
      <p>O que a faculdade de arquitetura realmente exige não é aptidão matemática acima da média. É capacidade de observar, de sintetizar referências de campos completamente diferentes, de defender uma ideia sob pressão e de recomeçar quando ela não funciona. Para isso, nenhuma calculadora ajuda.</p>
    `,
  },
  {
    slug: 'gta-san-andreas-na-visao-de-um-estudante-de-arquitetura',
    title: 'GTA San Andreas na visão de um estudante de arquitetura',
    author: 'Anderson Crush',
    date: '31 de Maio de 2026',
    description: 'Durante a pandemia, revisitar GTA San Andreas com olhos de arquitetura revelou como Los Angeles, São Francisco e Las Vegas de 1992 foram recriadas digitalmente — e o que cidades virtuais ensinam sobre o espaço urbano real.',
    image: '/blog/gta-san-andreas.jpg',
    content: `
      <p>Numa situação de pandemia que pegou absolutamente todos de surpresa, tive uma conversa interessante com amigos nas nossas chamadas online. Decidimos fazer algo diferente: cada um assistiria ao outro terminar um jogo do início ao fim. O meu foi Grand Theft Auto: San Andreas.</p>
      <br/>
      <p>Grand Theft Auto é uma franquia da antiga DMA Design — hoje conhecida como Rockstar North —, fundada em 1987 na Escócia por estudantes de computação. O que começou como um experimento de design de jogos abertos se tornou uma das franquias mais influentes da história do entretenimento.</p>
      <br/>
      <h2>O espaço urbano como personagem</h2>
      <br/>
      <p>GTA San Andreas se passa em um conjunto de três cidades diretamente inspiradas em Los Angeles, São Francisco e Las Vegas de 1992. Não são cópias — são interpretações. A Rockstar recriou a lógica urbana dessas cidades: a escala das avenidas, a relação entre bairros ricos e periferias, a presença do mar e das montanhas como elementos estruturantes do território.</p>
      <br/>
      <p>Para um estudante de arquitetura, jogar GTA San Andreas com atenção é uma aula de leitura urbana. A cidade não é um cenário passivo — ela tem hierarquias, tem zonas de transição, tem centros e periferias com lógicas próprias. O jogador aprende a se orientar não por mapas, mas por marcos visuais: torres, praças, a linha do horizonte. Exatamente como nos orientamos em cidades reais.</p>
      <br/>
      <p>O protagonista é um personagem simples e carismático, que não tem medo de sujar as mãos para cumprir seus objetivos. Mas o que me interessava não era a narrativa — era o território em que ela acontecia. Cada missão é um pretexto para atravessar a cidade de uma forma diferente, perceber como os bairros se relacionam, como o tecido urbano muda à medida que você se afasta do centro.</p>
      <br/>
      <p>GTA é um grande exemplo de um mundo ao estilo Hollywood que você pode explorar ativamente, descobrindo novos elementos a cada deslocamento. É ficção, mas a ficção foi construída sobre pesquisa urbana real — e essa sobreposição é exatamente o tipo de relação entre cultura pop e arquitetura que me interessa estudar.</p>
    `,
  },
  {
    slug: 'minha-trajetoria-pessoal-por-dentro-da-arquitetura',
    title: 'Minha trajetória pessoal por dentro da arquitetura',
    author: 'Anderson Crush',
    date: '31 de Maio de 2026',
    description: 'Do grupo de estudos de jogos que durou menos de um mês ao TCC recomeçado do zero — uma trajetória honesta e irregular por dentro do curso mais interdisciplinar do ensino superior.',
    image: '/blog/trajetoria-arquitetura.jpg',
    content: `
      <p>Enquanto verificava as postagens do Projeto Batente, li o artigo do Ricardo Muratori sobre "Arquitetura: será que eu levo jeito pra esse negócio?" e isso me fez pensar na minha própria trajetória. Decidi escrever sobre algo que estava guardando há algum tempo.</p>
      <br/>
      <p>O artigo do Muratori fala sobre o que é ser arquiteto a partir de três perfis. O primeiro: pessoa organizada, tecnológica, produtiva — ele sugere não fazer arquitetura. O segundo: pessoa de humanas, que valoriza museus e relações sociais — também sugere não fazer. O terceiro: alguém que gosta de muitas coisas ao mesmo tempo, um purê de ecletismo, capaz de apreciar artes completamente diferentes sem se limitar a nenhuma — aí sim, arquitetura.</p>
      <br/>
      <p>Quando li, me senti identificado de uma forma que raramente acontece. Era uma conversa sobre arquitetura fora dos seus limites convencionais — sobre a paixão pelo projeto em si, independente de tamanho ou vertente.</p>
      <br/>
      <h2>O começo e os erros</h2>
      <br/>
      <p>Quando comecei o curso, quis criar um grupo de estudos de jogos eletrônicos, juntando arquitetura, sistemas de informação e design para desenvolver um projeto de jogo. A burocracia foi pesada. Levou muito da minha determinação tirar o grupo do papel. Quando as reuniões finalmente aconteceram, a ausência de um orientador com experiência específica complicou tudo — e em menos de um mês o grupo já havia se desfeito.</p>
      <br/>
      <p>Mesmo assim, sei que foi um passo importante. Tentar e errar dentro da arquitetura não é fracasso — é respirar o que a arquitetura tem de melhor. O erro é parte do método.</p>
      <br/>
      <h2>A trajetória irregular</h2>
      <br/>
      <p>Nos semestres seguintes, acumulei experiências em todas as direções. Monitoria, escritório modelo da faculdade, programa de mentoria para o exterior, leitura de livros técnicos de arte, análise de filmes, e — pela primeira vez — implementação de referências de jogos eletrônicos dentro de projetos arquitetônicos.</p>
      <br/>
      <p>Cada projeto foi um aprendizado. Cada hora no estágio me ensinou o valor do meu trabalho. Cada tentativa de inovar e falhar miseravelmente colocou a mesma pergunta: vale a pena persistir ou partir para outra maluquice? E a resposta, sempre, foi seguir.</p>
      <br/>
      <h2>O TCC recomeçado</h2>
      <br/>
      <p>Meu TCC começou como um desastre. Falhas de comunicação com o orientador inicial me deixaram sem chão. Tive a sorte de ser acolhido de última hora por um professor que me ensinou novos olhares dentro da arquitetura. Juntos, desenvolvemos um tema — um projeto urbanístico para o Assentamento Precário Moura Brasil. O trabalho avançou. E então percebi que não era sobre aquilo que eu queria escrever.</p>
      <br/>
      <p>Senti que não conseguiria dar o que a comunidade merecia. Então, uma frase que aprendi caiu no momento certo: "No TCC, você deve escrever sobre algo que você acredita, no que você tem fé e o que você quer divulgar." Recomeçar foi a decisão mais honesta que tomei no curso.</p>
      <br/>
      <p>O novo tema gira em torno das minhas paixões reais — jogos eletrônicos, times interdisciplinares, a relação entre cultura digital e espaço construído. Ainda estou construindo. Mas desta vez, estou construindo sobre o que acredito.</p>
    `,
  },
];
