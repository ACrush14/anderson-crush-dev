// src/data/blogData.ts
// Inline images: <figure class="blog-image"><img src="..." alt="..." /><figcaption>...</figcaption></figure>
// YouTube embed: <div class="blog-video"><iframe src="https://www.youtube.com/embed/VIDEO_ID" allowfullscreen></iframe></div>

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
    image: 'https://projetobatente.com.br/wp-content/uploads/2018/07/arquitetura-chinesa-destaque.jpg',
    content: `
      <p>Olá, caros leitores! Meu nome é Anderson Crush e sou estudante de Arquitetura. Produzi um material em vídeo sobre Arquitetura chinesa fazendo um paralelo com o pouco que aprendi na faculdade até o momento, e gostaria de compartilhar com vocês.</p>
      <br/>
      <p>O start pra produção desse conteúdo foi a minha participação para seminário em dupla na faculdade sobre arquitetura chinesa. Com o trabalho concluído e apresentado, fiquei inquieto pois sabia que o que fiz dificilmente seria lembrado por mim mesmo daqui algum tempo se aquela pesquisa não ganhasse um significado maior. E no meio de tantas ideias buscando uma solução, me lembrei de um jogo chamado Sonic Unleashed, onde existem cidades fictícias baseadas em várias cidades reais, inclusive na China. A partir disso me instigou o desejo de ver a comparação dos elementos que aparecem ao nível do jogo com os elementos que abordei e estudei em minha pesquisa de Faculdade. Como isso não seria uma produção tão simples, a nível de organização decidi dividir em quatro pequenas partes e abordar sobre elas em vídeo.</p>
      <br/>
      <p>A primeira parte explica melhor o que eu defino e acredito ser arquitetura, somei com referências de frases de profissionais e termos-chaves sobre o assunto, explicando o motivo de arquitetura ser um pouco mais do que algumas pessoas imaginam. Na segunda parte falo dos elementos mais comuns da arquitetura chinesa, das cores, características, tipos de arquitetura, comparações com a religião, e muito mais — essa parte foi mais fácil já que era o produto do seminário que citei no início.</p>
      <figure class="blog-image">
        <img src="https://projetobatente.com.br/wp-content/uploads/2018/07/arquitetura-chinesa-arcos.png" alt="Arcos da arquitetura chinesa" />
      </figure>
      <p>Já na terceira parte, falo de alguns notáveis projetos que possuem elementos chineses e fiz o paralelo entre Projeto "versus" Realidade da China. Nesse capítulo abordo principalmente o quão perto a arquitetura está do desenho Avatar: A Lenda de Aang.</p>
      <figure class="blog-image">
        <img src="https://projetobatente.com.br/wp-content/uploads/2018/07/arquitetura-chinesa-soldados.png" alt="Arquitetura chinesa — soldados de terracota" />
      </figure>
      <p>No último capítulo componho um paralelo constante entre imagens do nível Chun-nan (o nível da China de Sonic Unleashed) e arquitetura chinesa, demonstrando se construções, cores e elementos estão corretos e quais não estão. Sem dúvida foi o capítulo mais trabalhoso.</p>
      <figure class="blog-image">
        <img src="https://projetobatente.com.br/wp-content/uploads/2018/07/arquitetura-chinesa-nivelchun.png" alt="Nível Chun-nan — Sonic Unleashed comparado à arquitetura chinesa" />
      </figure>
      <p>Para os que estão interessados no processo: de início fiz o script e logo após decidi gravar minha voz, por último comecei o trabalho em um editor de vídeo (pela primeira vez) e adicionei os áudios e as imagens buscando sempre algo bem intuitivo. O vídeo está apenas em inglês infelizmente, mas pretendo fazer uma edição em português.</p>
      <br/>
      <p>No geral, a produção do vídeo foi algo que me deixou muito satisfeito e com o desejo de produzir outros. Para quando e qual a frequência ainda não sei, mas já penso em outros assuntos como filosofia e arquitetura pós-moderna. Assim que o segundo vídeo sair, nos veremos aqui com certeza. Por agora agradeço o espaço e espero ler o feedback de vocês nos comentários. Até mais.</p>
    `,
  },
  {
    slug: 'problema-da-arquitetura-individualista',
    title: 'O Problema da Arquitetura Individualista',
    author: 'Anderson Crush',
    date: '31 de Maio de 2026',
    description: 'Um projeto polêmico de 45 andares em Fortaleza acendeu o debate sobre identidade urbana, o silenciamento da crítica e o egoísmo que empobrece a arquitetura.',
    image: 'https://projetobatente.com.br/wp-content/uploads/2019/01/hissa-destaque.jpg',
    content: `
      <p>Em Dezembro de 2018, na cidade de Fortaleza, muitos professores e estudantes se preocuparam com a forma arquitetônica que tomará nossa cidade. Tendo em vista um estilo muito coronelista, onde as pessoas que detém o capital escolhem onde estarão novas construções, uma nova fase está ocorrendo. Claro que não somos a única cidade onde acontece uma mudança dessas. A Torre Eiffel, a arquitetura do ferro e Adolf Loos, e o Barroco receberam críticas em todos os lugares que se transformaram em grandes comemorações arquitetônicas, com tombamentos e incentivo ao turismo. Porém, Fortaleza possui um lado interessante. Suas praias se parecem muito com praias turísticas do mundo todo, com altos prédios aproveitando a vista para o mar. Uma foto da beira mar de Fortaleza é confundida com cidades como Dubai ou Santa Mônica — e isso é algo que arquitetos cearenses detestam.</p>
      <br/>
      <p>Tudo isso me leva a um projeto de 45 andares, no qual boa parte dos nossos arquitetos criticaram pela grande perda de identidade paisagística de nossas praias de cultura cearense para uma plástica mais… Internacional. Nossos prédios de 25 andares e 600m² de pavimento total são os maiores que possuímos, mas 45 andares é um prédio que fere até o Plano Diretor e a Lei de Uso e Ocupação do Solo. Mas quem iria estar por trás disso? O renomado e clássico escritório, Nasser Hissa.</p>
      <br/>
      <p>O escritório de arquitetura identidade de Fortaleza conseguiu colocar estudantes e arquitetos contra eles. Diversas reclamações foram feitas ao ponto de desativarem os comentários sobre a sua postagem do prédio de 45 andares. Isso, compilado às atuais brigas de censura que estamos passando, além de pegar muito mal para o escritório, me remete a uma questão: provavelmente as obras de grande polêmica no passado foram criticadas, mas depois muito elogiadas. Mesmo com isso, existia censura por parte do arquiteto? Poderiam reprimir uma carta aberta criticando a arquitetura de ferro e da Torre Eiffel?</p>
      <br/>
      <p>Não se deve censurar críticas. Óbvio que se pode não gostar das mesmas, ignorá-las, mas apagar comentários feitos aos seus projetos significa que é um projeto só seu, feito apenas para você, sem se importar com as pessoas que lhe assistem, nas pessoas que a utilizarão e viverão no entorno. Deve-se observar que os universitários de hoje serão os profissionais de amanhã.</p>
      <br/>
      <p>No fim das contas foram permitidas apenas observações a favor do projeto, onde de 150 comentários, ficaram apenas 5 elogiando o "belo" prédio de 45 andares. Não é difícil perceber o egoísmo em tal escritório.</p>
    `,
  },
  {
    slug: 'o-filme-antes-de-blade-runner',
    title: 'O Filme Antes de Blade Runner',
    author: 'Anderson Crush',
    date: '31 de Maio de 2026',
    description: 'Metrópolis (1927) de Fritz Lang antecede Blade Runner em cinquenta anos e inventou os conceitos de ficção científica que o cinema continua copiando até hoje.',
    image: 'https://projetobatente.com.br/wp-content/uploads/2019/02/2.png',
    content: `
      <p>Recentemente, tive um trabalho de faculdade no qual o tema era a escolha do aluno. Achei incríveis os temas sugeridos aos meus colegas, mas decidi ir fundo em um campo pouco conhecido, mas muito tangenciado: as artes visuais.</p>
      <br/>
      <p>Quando digo "artes visuais" estou me referindo ao cinema, aos jogos eletrônicos, às séries, aos desenhos animados. É claro que isso pode ser um trabalho mais específico ao estudante de design gráfico, mas esse debate é para outra hora.</p>
      <br/>
      <p>Na minha pesquisa, eu queria descobrir como seria o futuro da arquitetura, e toda vez que eu perguntava, muitos diziam para pesquisar sobre Blade Runner. E realmente, tudo que veio depois de Blade Runner é claramente inspirado ou copiado de lá. Conceitos como "Robôs" ou "Replicantes", "Androides" e cidades aéreas. Alguns exemplos de inspirações por Blade Runner apresentados na pesquisa foram o desenho animado "Samurai Jack" e a Cidade das Nuvens, no Planeta Bespin no filme "Star Wars V: O Império Contra-Ataca".</p>
      <br/>
      <p>Mas Blade Runner é o auge da popularidade, e não as origens de tais conceitos. Um filme consegue superar Blade Runner por pelo menos 50 anos em seus diversos conceitos de ficção científica, robôs e a divisão social entre os ricos de cima e os pobres de baixo. O nome desse filme se chama "Metrópolis" de Fritz Lang.</p>
      <br/>
      <p>Metrópolis é um filme de 1927, desenvolvido pelo alemão Fritz Lang, inspirado diretamente pelo crescimento e futuros projetos de Arranha-céus. Os projetos "Plano Cidade" de Le Corbusier; A Torre Einstein e o livro "Amerika" de Erich Mendelsohn e a "Figura Abstrata" de Oskar Schlemmer influenciaram o filme de tal forma que certos elementos são usados até hoje.</p>
      <figure class="blog-image">
        <img src="https://projetobatente.com.br/wp-content/uploads/2019/02/Figura-02-Abstrakte-Figur-de-Oskar-Schlemmer.jpg" alt="Abstrakte Figur — Oskar Schlemmer" />
        <figcaption>Abstrakte Figur — Oskar Schlemmer</figcaption>
      </figure>
      <p>O filme se passa em um futuro, com a grande Metrópolis comandada por um Senhor. A grande cidade é mantida graças aos trabalhadores que ficam embaixo, numa espécie de Submundo, onde ninguém pode conversar e muito menos descansar de seu trabalho. É um conceito em que as pessoas da cidade dominam as máquinas, e as máquinas dominam as pessoas do Submundo.</p>
      <br/>
      <p>O filho do Senhor descobre um dia que o Submundo existe, e fica apavorado com o que aconteceu. Ele pergunta a seu Pai, o Senhor de Metrópolis: onde estão as mãos que ergueram essa cidade? E o Pai nada responde.</p>
      <br/>
      <p>Além desse enredo entre o Pai e o filho, algumas histórias paralelas acontecem, sendo a mais importante um cientista que tenta reviver a mulher morta do Senhor de Metrópolis no corpo de um robô. E esse robô se parece muito com o C-3PO, um androide do universo "Star Wars".</p>
      <figure class="blog-image">
        <img src="https://projetobatente.com.br/wp-content/uploads/2019/02/1.png" alt="O robô de Metrópolis — ancestral do C-3PO" />
        <figcaption>O robô de Metrópolis — ancestral direto do C-3PO</figcaption>
      </figure>
      <p>Quando o filme foi lançado, recebeu diversas críticas, principalmente negativas. Seu retorno foi menos de 2% do orçamento, e o filme original não existe mais. Porém, graças a um pequeno museu na Argentina, o filme pôde ser reconstruído através de trechos do museu e de outros trechos encontrados arquivados em outros países.</p>
      <br/>
      <p>Hoje, 95% do filme está completo, e ele está disponível no YouTube em diversas versões. Uma versão em português com 118 minutos (1927) e em inglês com 148 minutos (2010) existem, além de análises e de Making-Of do filme.</p>
    `,
  },
  {
    slug: 'documentario-a-estetica-tecnologica-na-arquitetura',
    title: 'Documentário: A Estética Tecnológica na Arquitetura',
    author: 'Anderson Crush',
    date: '31 de Maio de 2026',
    description: 'Em vez de slides, um minidocumentário: como Fuller, Prouve, Frei Otto, Renzo Piano e Francis Keré resolveram problemas complexos com soluções mínimas.',
    image: 'https://projetobatente.com.br/wp-content/uploads/2019/04/documentario-a-estetica-tecnologica-na-arquitetura-dymaxion-house.jpg',
    content: `
      <p>Em um dos trabalhos da cadeira de Teoria e História da Arquitetura e do Urbanismo, eu decidi me desafiar. Em vez de produzir uma apresentação em slides como normalmente se pede, considerei fazer um vídeo, um minidocumentário.</p>
      <br/>
      <p>Nesse trabalho, foi cobrado falar sobre a Estética Tecnológica na Arquitetura, no qual puxamos os arquitetos Buckminster Fuller, Jean Prouve, Frei Otto, Richard Rodger, Renzo Piano e Francis Keré. Cada um desses arquitetos foi muito importante desde os primeiros projetos das casas e do carro Dymaxion de Buckminster Fuller até os tempos atuais da arquitetura de Gando projetada por Francis Keré.</p>
      <br/>
      <p>Na introdução do documentário, é especificado o começo dos tempos modernos, que pode ser resumida como "em algum momento, a 100 anos atrás, o tempo e o espaço diminuíram e todos enlouqueceram". Nessa época, transportes ficaram mais baratos e nos levavam muito mais longe, como nós tratamos a arte mudou. Praças públicas viraram sinônimos de regimes brutais. As Guerras se intensificaram mas a economia ficou bem mais forte. Nessa época, o Modernismo arquitetônico começa a ter força, e com isso, a estética tecnológica começou a se formar.</p>
      <br/>
      <p>Buckminster Fuller foi o primeiro arquiteto famoso nesse contexto, com os termos em 4D e a Dymaxion, que significa Dynamic, Maximum e Tension. Nesse caso, o uso máximo da tensão dinâmica com o menor uso de energia. Seus dois mais famosos projetos são o Dymaxion Car e o Dymaxion House pelos anos 40 e 50 nos Estados Unidos. Ele também desenvolveu o famoso Domo Geodésico — são diversos triângulos metálicos conectados para formar um domo, muito parecido com o formato químico do C60.</p>
      <br/>
      <p>Jean Prouve já começou como um simples forjador complementando o design com a praticidade das construções. Ele desenvolveu móveis famosos e casas que são construídas em menos de uma semana, que não fizeram muito sucesso.</p>
      <br/>
      <p>No Frei Otto, falamos da construção do estádio de Munique usado nas olimpíadas em 1972, no qual sua telha tem uma estética moderna simulando uma grande teia de aranha.</p>
      <br/>
      <p>Um dos meus projetos favoritos analisados é o Richard Rodgers e o Renzo Piano: o Georges Pompidou, um projeto no qual metade do terreno foi usado como a estrutura toda nua, com cabos, canos e pilares expostos. A outra metade do terreno é totalmente vazia, fazendo uma grande praça pública ao lado de um prédio de uso público.</p>
      <br/>
      <p>Por último, o Francis Keré, que veio de Gando, teve um grande investimento para aprender arquitetura na Europa, no qual ele incentivou em sua terra natal o processo participativo. Nisso, a comunidade local usa os materiais locais para suas construções. Todos trabalham para ter construções para a comunidade local. Keré desenvolveu matérias confortáveis apenas com tratamentos dos materiais ali alocados.</p>
      <br/>
      <p>Todos esses grandes arquitetos e seus projetos nos dão algo novo a aprender e ver. Todos são gênios, resolvem grandes problemas com soluções mínimas, pensando no conforto e na estética deles. E aí, qual projeto te inspirou?</p>
      <br/>
      <div class="blog-video">
        <iframe src="https://www.youtube.com/embed/FMJOfMHBNi0" title="Documentário: A Estética Tecnológica na Arquitetura" allowfullscreen></iframe>
      </div>
    `,
  },
  {
    slug: 'como-lidar-com-sentimentos-negativos-na-arquitetura',
    title: 'Como Lidar com Sentimentos Negativos na Arquitetura',
    author: 'Anderson Crush',
    date: '31 de Maio de 2026',
    description: 'Inveja, insegurança e raiva fazem parte da jornada em arquitetura. Um guia honesto sobre autoconhecimento e autocontrole para quem está no meio do curso.',
    image: 'https://projetobatente.com.br/wp-content/uploads/2019/06/Destaque.jpg',
    content: `
      <p>Em nossa jornada acadêmica, sempre nos deparamos com pessoas que fazem projetos que nos fazem questionar o motivo de estarmos na arquitetura. Dá aquele sentimento de insegurança no que estamos fazendo, se o próximo sempre pode superar a gente. Dá até aquela inveja do qual vemos o trabalho do outro, tão bem feito e criativo, e olhamos para o nosso como se fosse algo tão ruim… Aquele sentimento competitivo no qual sempre nos questiona do que nós fazemos. Lembra aquela famosa frase: "a grama do vizinho sempre é mais verde".</p>
      <br/>
      <p>Bem, boas e más notícias: esse sentimento faz muita parte de nós, seres humanos. É uma grande característica nossa, e assim como aprendemos a conviver com coisas da vida que nos incomodam, a inveja e o pensamento negativo também fazem parte disso.</p>
      <br/>
      <p>A primeira coisa que devemos sempre lembrar é que cada um entra na arquitetura em um tempo diferente, e pra isso basta olhar as pessoas ao seu redor. Cada um tem uma história pessoal diferente, com diferentes formas de lidar com os sentimentos. Todos têm olhos diferentes, e devemos sempre ver nossas qualidades em nosso trabalho.</p>
      <br/>
      <p>Lembre-se de seus projetos que você fez com a turma. Provavelmente todos pegamos a mesma área de estudo, mas sempre saímos com projetos muito diferentes, e isso sempre sai com metodologias criativas diferentes, que complementam parte da nossa história. Então lembre-se sempre que cada um tem sempre um jeito diferente de associar seus projetos, e você deve usar o melhor do que tem em você para produzir eles.</p>
      <br/>
      <p>Devemos pensar a razão de estarmos na Arquitetura, e também onde queremos chegar com ela. E para isso, devemos olhar para nós mesmos onde devemos chegar, evitando olhar o outro com a inveja.</p>
      <br/>
      <p>Conversar com quem você sente inveja é uma solução, para esquecer esse sentimento do que ele é melhor, e começar a pensar o PORQUÊ dessa pessoa ser melhor. Será que é porque ela faz coisas apresentáveis? Ele dá soluções que parecem mais criativas? Tem mais facilidade em mexer com Arquitetura? O tempo de trabalho e arquitetura dessas outras pessoas podem ter começado muito antes. Sempre valorize o poder da palavra, para conhecer como outros fazem os seus projetos. Quem sabe você também não aprende uma coisa nova?</p>
      <br/>
      <p>Agora, vamos supor que os sentimentos ruins estão lhe dominando. Você não consegue pensar em nada positivo, a inveja lhe dominou e você precisa liberar a sua raiva de alguma forma, e para isso eu digo: libere! Todos temos sentimentos angustiantes e de raiva, e vale a pena o autoconhecimento para liberar esses sentimentos sem magoar as pessoas!</p>
      <br/>
      <p>Então tenha um hobby relaxante, como tocar violão ou ver filmes do gênero que você gosta. Ou tenha um hobby mais explosivo, como correr muito ou lutar alguma arte marcial. Um colega me contou que, quando nada funciona para ele, ele começa a gravar um vídeo falando dos sentimentos de raiva, a explicação dele estar sentindo assim, e quando ele acaba, ele apaga, pois até lá a raiva passou. Um outro colega, mais extremo, gosta de comprar coisas como marca-textos e jogar contra a parede até ele se sentir melhor, e é incrível como ele se sente, parece que a raiva nunca parou sobre ele.</p>
      <br/>
      <p>Então, saiba que seu sentimento não é exclusivo, mas o mais importante é possuir um autoconhecimento sobre esse sentimento e, a partir disso, saber como lidar e tirar esse sentimento. Cada um tem seu tempo na arquitetura, e não se deve desmotivar isso.</p>
    `,
  },
  {
    slug: 'o-estoril',
    title: 'O Estoril',
    author: 'Anderson Crush',
    date: '31 de Maio de 2026',
    description: 'De casa de veraneio a cassino de soldados americanos, de refúgio de intelectuais na ditadura a sede da Secretaria de Turismo — a história do Estoril e o que ela revela sobre Fortaleza.',
    image: 'https://projetobatente.com.br/wp-content/uploads/2019/08/Estoril-Queiroz-Netto-destaque.jpg',
    content: `
      <p>O Estoril de Fortaleza vai fazer 100 anos desde o início da sua construção, e é um belo prédio situado na Praia de Iracema contando um pouco de seu famoso legado. Mas todo grande desapego também se vê um grande fim. Esse texto vai informar o porquê de eu querer estudar o Estoril, assim como dissertar sobre o que ele é, além de algumas opiniões sobre o mesmo.</p>
      <br/>
      <h2>Motivo de Estudo</h2>
      <br/>
      <p>Desde o começo da faculdade, um prédio que eu sempre ouvia falar entre os professores como um grande marco da boêmia de Fortaleza era o Estoril, e eu fiquei fascinado em saber sobre o que aquela construção realmente era. Em um dos meus trabalhos, tive a oportunidade de conhecer a edificação, onde hoje é a atual SECULTFOR (Secretaria de Turismo de Fortaleza). Para um lugar tão conhecido e lembrado, o local estava em um curso de decadência, com poucas pessoas andando pela rua dos Tabajaras em uma tarde comum. E eu sempre fiquei intrigado em saber dessa situação no qual o Estoril se impôs.</p>
      <br/>
      <p>Assim, decidi fazer um artigo científico, afim de conseguir algo a mais no currículo, e depois de falar com diversos professores, vi que o interessante é olhar dentro de si e ver o que você realmente quer explorar. Decidi, dessa forma, falar sobre o Estoril. Artigos como esse são uma batalha para serem concluídos, e é um milagre já possuírem textos assim. Então, aqui vai um texto dos 3 meses de preparo e pesquisa feita por mim e pela Victória Lima.</p>
      <br/>
      <h2>Resumo estendido</h2>
      <br/>
      <p>Um pernambucano chamado José Magalhães Porto realizou um sonho: uma casa localizada na antiga Praia do Peixe no ano de 1920, dando o nome em homenagem a sua mulher Dona Moreninha.</p>
      <br/>
      <p>Com a construção dessa moradia na Praia do Peixe, investimentos imobiliários começam aos poucos a ser voltados para a região, agora com o nome Praia de Iracema. Já em 1930, a família de Magalhães não morava mais por lá, e se tornou um restaurante.</p>
      <br/>
      <p>Na época da segunda guerra mundial, existia uma base americana em Fortaleza, e os americanos tomaram conta do Estoril em 1944, tornando-se um famoso cassino na época, restrito apenas aos soldados e às belas moças ricas chamadas de "coca-cola". Esse local de grande apreciação boêmica se tornou um ponto totalmente sem cultura, onde os americanos faziam o que bem entendiam naquele lugar.</p>
      <br/>
      <p>Em 1948, os americanos deixam o lugar e a boêmia volta de novo a assumir o Estoril, onde se tornou um ponto entre intelectuais, músicos, poetas, artistas, escritores, pessoas de esquerda. Pouco ficaram os registros da época entre 1950 e 1980, mas as suas memórias ainda estão nas cabeças das pessoas que aproveitaram o Estoril na sua grande época.</p>
      <br/>
      <p>O avanço das construções na Praia de Iracema fez com que o lugar mudasse completamente. E mesmo com o Estoril aguentando um "refúgio" de intelectuais na época da ditadura, a região e sua estrutura receberam uma queda.</p>
      <br/>
      <p>Hoje, o Estoril está de pé, sendo a sede atual da Secretaria Municipal de Turismo, mas o seu destino ainda é impreciso. Muitos dos que trabalham lá insistem que a secretaria está lá até algum outro uso. Mas até quando?</p>
    `,
  },
  {
    slug: 'arquitetura-tem-realmente-tanto-calculo-quanto-falam',
    title: 'Arquitetura tem realmente tanto cálculo quanto falam?',
    author: 'Anderson Crush',
    date: '31 de Maio de 2026',
    description: 'A crença popular de que arquitetura é repleta de cálculos não resiste a uma análise honesta dos currículos reais. O que o curso exige de matemática — e o que ele exige de você.',
    image: 'https://projetobatente.com.br/wp-content/uploads/2020/01/01-Imagem-Capa-1.jpg',
    content: `
      <p>No período de férias, muitas pessoas acabam se encontrando com familiares para comemorar as festividades, e nisso me veio uma frase muito interessante sobre o que as pessoas pré-julgam em arquitetura. Não deveria ser muito difícil, afinal é uma das profissões mais valorizadas, com algumas condições de salário um tanto privilegiadas, e ainda temos um peso nas nossas ações, pois temos grande parcela nos planejamentos de cidades. Mesmo assim, muita gente não entende o que realmente é a faculdade de arquitetura.</p>
      <br/>
      <p>O que eu mais ouvi constantemente foi, "Mas arquitetura tem muito cálculo!". Toda vez que eu ouço falar nessa frase, eu me pergunto se eu realmente estou aprendendo coisas como integral, estatística ou qualquer outro grande assunto desse ramo.</p>
      <br/>
      <p>Das faculdades que pesquisei sobre arquitetura e urbanismo do Ceará, apenas 1 das 5 tinha, de forma consistente, uma cadeira de cálculo até o 6° semestre. Não é o cálculo que é importante, são medições. Óbvio que mexemos com soma e área, mas essencialmente não chega a ir muito além disso. Se realmente fosse um grande setor de cálculo, o nome não deveria estar mais ligado a engenharia? Existe sim uma vertente de politécnico na arquitetura, mas é uma vertente muito específica. Mas para não dizer que não tem cálculo, as faculdades oferecem cadeiras optativas como "Cálculo para arquitetura e Urbanismo" e "Estatística para urbanismo".</p>
      <figure class="blog-image">
        <img src="https://projetobatente.com.br/wp-content/uploads/2020/01/02-Maquete-de-Casa.jpg" alt="Maquete eletrônica de casa" />
        <figcaption>Maquete Eletrônica.</figcaption>
      </figure>
      <p>Se comparar a grade curricular da UFC de 1981 e da de 2012.2, é muito fácil ver de onde vem esse grande mito dos cálculos na arquitetura de hoje em dia. Para os de 1981, você tinha apenas cadeiras referentes a cálculos, medidas, comunicação e expressão, técnicas de materiais e por aí vai. "Introdução a Arquitetura e Urbanismo" era apenas no 3° período, e o "Projeto Arquitetônico I" era apenas no 4° período. Apenas a partir do 6° Período se parava de ter cadeiras com cálculos (exceto optativas). Certamente dá para entender de onde vem tais pensamentos sobre "arquitetura tem muito cálculo".</p>
      <br/>
      <p>Se comparar essas duas grades, arquitetura é uma faculdade muito mais aplicada a humanas e pensamentos sociológicos do que a matemática pura. Apenas usamos matemática para fazer alguns cálculos e fórmulas básicas, não é nada que uma boa pedagogia sobre o assunto não possa ensinar. Coisas como Fórmula de Blondel (cálculo da escada), cálculo de rampas em %, cálculo de área feitos por computador ou formas geométricas básicas, medidas em centímetros, metros, quilômetros… Isso faz parte da grade curricular de arquitetura hoje.</p>
      <figure class="blog-image">
        <img src="https://projetobatente.com.br/wp-content/uploads/2020/01/03-C%C3%A1culo-de-Escada.png" alt="Fórmula de Blondel para cálculo de escada" />
        <figcaption>Fórmula de Blondel</figcaption>
      </figure>
      <p>Hoje existe apenas uma cadeira de cálculo constantemente usada em diversas universidades, que é "cálculo estrutural". Ele é o cálculo da dimensão de elementos para sustentar elementos construtivos. Algumas faculdades têm entre uma e duas cadeiras sobre esse assunto, alguns até três. Entretanto ele é específico para Arquitetura, o curso na área de construção que é conhecido por não ter cálculo. Da experiência que possuo, tivemos pré-dimensionamento, análise estrutural e a produção de uma viga, além de projetar usando um tipo específico de material estrutural. Certamente eu usei mais cálculo de rampa, escada e coberta do que eu usei nesses materiais, isso porque são coisas básicas.</p>
      <br/>
      <p>A docência de arquitetura pós 2010 virou algo muito mais de medidas e humanas do que cálculo. Só possui cadeiras essenciais de cálculo que vão ao ramo de construção, e são vistos de formas muito superficiais. Fora isso, a arquitetura no Ceará tem foco muito mais sociológico do que numérico, e a tendência é ter cada vez menos cálculo. Ainda assim, arquitetura usa tão pouco de cálculo que não consideraria algo marcante na grade de hoje em dia.</p>
    `,
  },
  {
    slug: 'gta-san-andreas-na-visao-de-um-estudante-de-arquitetura',
    title: 'GTA San Andreas na visão de um estudante de arquitetura',
    author: 'Anderson Crush',
    date: '31 de Maio de 2026',
    description: 'Durante a pandemia, revisitar GTA San Andreas com olhos de arquitetura revelou como Los Angeles, São Francisco e Las Vegas de 1992 foram recriadas digitalmente.',
    image: 'https://projetobatente.com.br/wp-content/uploads/2020/06/01-Imagem-Capa.jpg',
    content: `
      <p>Numa situação de pandemia que pegou absolutamente todos de surpresa, tive uma conversa interessante com alguns amigos nas nossas chamadas online, e decidimos fazer algo diferente do costume: cada um de nós ia assistir ao outro terminar um jogo completo, e o meu encontro de jogo foi com um game popular chamado Grand Theft Auto: San Andreas (GTA:SA).</p>
      <figure class="blog-image">
        <img src="https://projetobatente.com.br/wp-content/uploads/2020/06/02-Las-Venturas.png" alt="Las Venturas — GTA San Andreas" />
        <figcaption>Las Venturas — inspirada em Las Vegas.</figcaption>
      </figure>
      <p>Grand Theft Auto é uma franquia da antiga conhecida DMA Design, hoje conhecida como Rockstar North, fundada em 1987 na Escócia por estudantes de computação. O GTA III, de 2001, foi o primeiro grande jogo de mundo aberto interativo em 3D, uma cidade inspirada em Nova York do ano 2000. Arquitetos raramente reconheceram esse feito.</p>
      <figure class="blog-image">
        <img src="https://projetobatente.com.br/wp-content/uploads/2020/06/03-Carl-Johnson.jpg" alt="Carl Johnson — protagonista de GTA San Andreas" />
        <figcaption>Carl Johnson — protagonista de GTA: San Andreas.</figcaption>
      </figure>
      <p>Em específico, eu gostaria de falar sobre o GTA: SA, onde se passa num conjunto de três cidades diretamente inspiradas de Los Angeles, São Francisco e Las Vegas em 1992. No decorrer da história, você é um criminoso que sai por aí explorando a cidade e fazendo favores para outras pessoas. A narrativa começa com brutalidade policial — estabelecendo o comentário social do jogo sobre racismo sistêmico dentro das forças da lei.</p>
      <figure class="blog-image">
        <img src="https://projetobatente.com.br/wp-content/uploads/2020/06/04-San-Fierro.png" alt="San Fierro — GTA San Andreas" />
        <figcaption>San Fierro — inspirada em São Francisco.</figcaption>
      </figure>
      <p>Grand Theft Auto: San Andreas se trata de um personagem simples e carismático, que não tem medo de sujar suas mãos para conseguir cumprir seu objetivo. GTA é um grande exemplo de um mundo ao estilo Hollywood que você pode explorar e conhecer novos elementos dentro da cidade, com uma modelagem muito bem feita, cidades extremamente bem planejadas e densas. A indústria do entretenimento reconhece esse feito. A academia, ainda não.</p>
    `,
  },
  {
    slug: 'minha-trajetoria-pessoal-por-dentro-da-arquitetura',
    title: 'Minha trajetória pessoal por dentro da arquitetura',
    author: 'Anderson Crush',
    date: '31 de Maio de 2026',
    description: 'Do grupo de estudos de jogos que durou menos de um mês ao TCC recomeçado do zero — uma trajetória honesta e irregular por dentro do curso mais interdisciplinar do ensino superior.',
    image: 'https://projetobatente.com.br/wp-content/uploads/2021/05/Capa-Percurso-Crush.jpg',
    content: `
      <p>Enquanto estava verificando as postagens do Projeto Batente, vi o artigo do Ricardo Muratori sobre "Arquitetura: será que eu levo jeito pra esse negócio?" e isso me fez pensar da minha grande trajetória de arquitetura. Decidi então deixar de escrever sobre algo que eu já estava pensando há algum tempo sobre a instigação que esse artigo me deu.</p>
      <br/>
      <p>O artigo essencialmente fala do ponto de vista do Muratori sobre a pergunta do que é ser arquiteto e o que é arquitetura. Pergunta essa que nem nós arquitetos temos tanta certeza da resposta. Então ele dá três exemplos: o primeiro é sobre uma pessoa que gosta de tecnologia, é organizada e produtiva; e o segundo é sobre alguém que é da área de humanas e valoriza museus e relações sociais. Nesses dois primeiros exemplos, ele sugere não fazer arquitetura. Porém, quando ele descreve o terceiro exemplo como uma pessoa que gosta de muitas coisas, um grande purê de ecletismo musical e conseguir apreciar diversas artes sem se limitar, então é um forte sinal de que você deveria fazer arquitetura.</p>
      <br/>
      <p>Quando eu li essa matéria me senti extremamente identificado, pois era conversar sobre arquitetura de uma forma que não é conversada comumente, extrapolando os seus limites, e pensando na paixão de um projeto palpável, não interessando seu tamanho e vertente. O simples fato dessa grande mescla de ideias fazerem sentido para você é o suficiente para procurar fazer arquitetura.</p>
      <br/>
      <p>Lembro quando comecei a cursar arquitetura e estava numa grande vontade de criar um grupo de estudo de jogos, tentando juntar arquitetura, sistemas de informação e design para um projeto de jogo eletrônico. A burocracia foi um tanto difícil e exigiu muito de minha determinação para conseguir tirar o grupo do papel e fazer reuniões. E quando as reuniões chegaram, a falta de um orientador com experiência prévia simplesmente complicou tudo, e em menos de um mês o grupo já tinha se desfeito. E mesmo assim, eu sei que dei um grande passo à minha carreira em ter feito algo que acreditava e ter errado. Tentar e errar é algo não só extremamente comum na vida, mas arrisco a dizer que errar dentro da arquitetura é respirar o que a arquitetura tem de melhor.</p>
      <br/>
      <p>Nos semestres seguintes, lembro que tive diversas singularidades por dentro da academia. Algumas eram comuns, como participar do programa de monitoria e participar dentro do escritório modelo da faculdade. Outras vertentes eram mais malucas, como participar de um programa de mentoria para o exterior, ler livros técnicos sobre arte, começar a criticar diversos filmes e, pela primeira vez, implementar referências das minhas paixões de jogos dentro da arquitetura.</p>
      <br/>
      <p>Cada projeto foi importante para o meu aprendizado. Cada hora no estágio foi importante para ver o valor do meu trabalho. Cada nova tentativa de fazer algo inovador e falhar miseravelmente era um aprendizado novo, um questionamento se valia a pena persistir e aprender mais ou passar para uma outra maluquice, e com isso consegui seguir até o começo do meu TCC, onde estou estagnado.</p>
      <br/>
      <p>Meu TCC começou sendo um desastre. Tive falhas de comunicação com meu orientador em questão, e tive a sorte de ser acolhido de última hora por um professor que me ensinou novos olhares dentro da arquitetura. Meu atual orientador passou horas comigo para analisar um bom tema e tentar seguir em frente com ele. Fiquei muito feliz, e o tema (que é um projeto urbanístico para o Assentamento Precário Moura Brasil) foi se desenvolvendo… até que eu vi que não queria escrever sobre aquilo. Eu queria escrever sobre as minhas paixões, os meus planos, os meus estudos para desenvolver uma proposta, e me senti mal em não conseguir desenvolver algo para uma comunidade. Mas aí veio uma frase que aprendi: "No TCC, você deve escrever sobre algo que você acredita, no que você tem fé e o que você quer divulgar" — e depois de muito pensar, decidi recomeçar sobre algo que acredito.</p>
      <br/>
      <p>E sobre o que eu acredito? Bem, eu tive diversos projetos com referências a jogos eletrônicos, e sempre dei muito valor a times interdisciplinares, então verei como fazer algo nos próximos meses em relação à escrita do meu TCC.</p>
    `,
  },
];
