const menuButton = document.querySelector(".menu-toggle");
const menuLinks = document.querySelectorAll(".main-nav a");
const backToTopButton = document.querySelector(".back-to-top");
const analysisModal = document.querySelector(".analysis-modal");
const analysisOpenButtons = document.querySelectorAll("[data-analysis-open]");
const analysisCloseButtons = document.querySelectorAll("[data-analysis-close]");
const directForms = document.querySelectorAll("[data-direct-form]");
const blogModal = document.querySelector(".blog-modal");
const blogCloseButtons = document.querySelectorAll("[data-blog-close]");
const blogTrack = document.querySelector(".blog-grid");
const blogPrevButton = document.querySelector("[data-blog-prev]");
const blogNextButton = document.querySelector("[data-blog-next]");
const clientCarousel = document.querySelector(".client-carousel__viewport");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const BLOG_POSTS = [
  {
    "slug": "o-que-e-trafego-pago",
    "tag": "Tráfego Pago",
    "title": "O que é tráfego pago? Guia simples para empresas que querem vender mais",
    "date": "Junho de 2026",
    "time": "7 min de leitura",
    "description": "Entenda o que é tráfego pago, como funciona, quais canais usar e quando investir em anúncios online para gerar leads e vendas.",
    "sections": [
      {
        "type": "paragraph",
        "text": "Tráfego pago é a compra estratégica de visitas por meio de anúncios em plataformas como Google Ads, Instagram, Facebook, YouTube e outros canais. A empresa paga para aparecer para públicos específicos e gerar ações como cliques, mensagens, leads, ligações ou vendas."
      },
      {
        "type": "paragraph",
        "text": "Muita empresa começa no digital publicando conteúdo, mas sente falta de previsibilidade. O tráfego pago entra justamente para acelerar a aquisição de clientes, testar ofertas e medir o que realmente gera resultado. A diferença entre anunciar e apenas gastar dinheiro está na estratégia: público, mensagem, criativo, página, orçamento e otimização."
      },
      {
        "type": "heading",
        "text": "Como o tráfego pago funciona"
      },
      {
        "type": "paragraph",
        "text": "As plataformas de anúncio exibem sua oferta para pessoas com maior chance de executar uma ação definida: clicar, chamar no WhatsApp, preencher formulário ou comprar. O algoritmo usa sinais de comportamento, segmentação, palavras-chave, criativos e histórico de conversão para encontrar usuários mais propensos a responder ao anúncio."
      },
      {
        "type": "heading",
        "text": "Principais canais de tráfego pago"
      },
      {
        "type": "list",
        "items": [
          "Google Ads: ideal para capturar pessoas que já estão pesquisando por uma solução, produto ou serviço.",
          "Meta Ads: excelente para criar demanda no Instagram e Facebook com criativos, vídeos e ofertas.",
          "YouTube Ads: útil para reconhecimento, consideração e remarketing em vídeo.",
          "LinkedIn Ads: indicado para B2B quando o público precisa ser filtrado por cargo, empresa ou segmento."
        ]
      },
      {
        "type": "heading",
        "text": "Tráfego pago não é só impulsionar post"
      },
      {
        "type": "paragraph",
        "text": "Impulsionar um post pode gerar alcance, mas uma operação profissional de tráfego trabalha objetivos, públicos, eventos de conversão, testes A/B, remarketing, criativos, landing pages e análise de dados. É isso que permite sair do achismo e melhorar custo por lead, taxa de conversão e retorno."
      },
      {
        "type": "heading",
        "text": "Quando vale a pena começar"
      },
      {
        "type": "paragraph",
        "text": "Vale a pena começar quando a empresa tem oferta clara, margem para aquisição de clientes, atendimento rápido e uma página ou WhatsApp preparado para converter. Sem esses pontos, o anúncio até pode gerar cliques, mas a venda tende a travar depois do clique."
      }
    ]
  },
  {
    "slug": "quanto-investir-em-trafego-pago",
    "tag": "Investimento",
    "title": "Quanto investir em tráfego pago por mês? Como definir verba sem queimar dinheiro",
    "date": "Junho de 2026",
    "time": "8 min de leitura",
    "description": "Veja como calcular quanto investir em tráfego pago, como dividir verba entre Google Ads e Meta Ads e quais erros evitar no início.",
    "sections": [
      {
        "type": "paragraph",
        "text": "O valor ideal para investir em tráfego pago depende do ticket, margem, meta de leads ou vendas, concorrência e capacidade de atendimento. Em vez de escolher uma verba aleatória, a empresa deve calcular quanto pode pagar para adquirir um cliente e quanto precisa investir para gerar volume mínimo de dados."
      },
      {
        "type": "paragraph",
        "text": "Uma das perguntas mais comuns antes de anunciar é: “quanto preciso investir?”. A resposta ruim é jogar um número genérico. A resposta certa é montar a verba a partir da meta comercial. O anúncio precisa caber na conta do negócio, não apenas no saldo disponível para marketing."
      },
      {
        "type": "heading",
        "text": "Comece pelo objetivo comercial"
      },
      {
        "type": "paragraph",
        "text": "Antes de definir orçamento, defina a meta: leads qualificados, vendas, mensagens no WhatsApp, agendamentos ou visitas ao site. Cada objetivo exige volume de dados diferente. Uma campanha para gerar mensagens pode precisar de menos estrutura do que uma campanha para venda direta com funil completo."
      },
      {
        "type": "heading",
        "text": "Calcule quanto um cliente vale"
      },
      {
        "type": "paragraph",
        "text": "Olhe para ticket médio, margem e recorrência. Se um cliente novo gera alto valor ao longo do tempo, a empresa pode aceitar um custo de aquisição maior. Se a margem é baixa, a campanha precisa ser mais precisa e talvez começar com ofertas de maior intenção."
      },
      {
        "type": "heading",
        "text": "Evite verba pequena demais espalhada em muitos testes"
      },
      {
        "type": "paragraph",
        "text": "Um erro comum é dividir pouco orçamento entre várias campanhas, públicos e criativos. Isso impede o algoritmo de aprender. Com orçamento inicial, é melhor focar em uma oferta principal, poucos públicos e testes controlados."
      },
      {
        "type": "heading",
        "text": "Como dividir entre Google Ads e Meta Ads"
      },
      {
        "type": "list",
        "items": [
          "Google Ads: priorize quando existe busca ativa por seu serviço ou produto.",
          "Meta Ads: priorize quando a venda depende de despertar desejo, educar o público ou testar criativos.",
          "Remarketing: reserve parte da verba para impactar quem já visitou o site, clicou ou interagiu."
        ]
      },
      {
        "type": "heading",
        "text": "O papel da UMNI no planejamento de verba"
      }
    ]
  },
  {
    "slug": "como-anunciar-no-google-ads",
    "tag": "Google Ads",
    "title": "Como anunciar no Google Ads: passo a passo estratégico para empresas",
    "date": "Junho de 2026",
    "time": "9 min de leitura",
    "description": "Aprenda como anunciar no Google Ads com estratégia: palavras-chave, campanhas, orçamento, landing page, conversões e otimização.",
    "sections": [
      {
        "type": "paragraph",
        "text": "Para anunciar no Google Ads, escolha um objetivo, defina as palavras-chave certas, crie anúncios alinhados à intenção de busca, configure conversões, direcione o tráfego para uma página preparada e otimize com base em dados de custo, leads e vendas."
      },
      {
        "type": "paragraph",
        "text": "O Google Ads é forte porque aparece no momento em que alguém está pesquisando por uma solução. Mas isso também aumenta a responsabilidade: se a palavra-chave, o anúncio ou a página estiverem desalinhados, o clique vira custo. Uma campanha eficiente começa antes de apertar “publicar”."
      },
      {
        "type": "heading",
        "text": "Defina a intenção da campanha"
      },
      {
        "type": "paragraph",
        "text": "Nem toda busca tem o mesmo valor. Pessoas procurando “o que é” estão em aprendizado; pessoas procurando “agência de tráfego pago em Curitiba” estão mais próximas da contratação. Separar intenção informacional, comercial e transacional ajuda a controlar verba e expectativa."
      },
      {
        "type": "heading",
        "text": "Escolha palavras-chave com critério"
      },
      {
        "type": "paragraph",
        "text": "A lista de palavras-chave deve combinar termos principais, variações e termos negativos. Palavras negativas evitam cliques irrelevantes. Para serviços, vale priorizar buscas que indicam necessidade real, localização, orçamento ou comparação de fornecedores."
      },
      {
        "type": "heading",
        "text": "Crie anúncios que respondam à busca"
      },
      {
        "type": "paragraph",
        "text": "O anúncio precisa repetir a promessa buscada pelo usuário e apresentar uma próxima ação clara. Bons títulos destacam benefício, serviço, localização ou diferencial. Boas descrições explicam por que clicar e o que a pessoa vai encontrar na página."
      },
      {
        "type": "heading",
        "text": "Não jogue tráfego para qualquer página"
      },
      {
        "type": "paragraph",
        "text": "A landing page precisa continuar a conversa iniciada no anúncio. Ela deve ter título claro, prova, benefícios, perguntas frequentes, CTA visível e carregamento rápido no celular. Sem página boa, até campanha bem configurada perde eficiência."
      }
    ]
  },
  {
    "slug": "como-anunciar-no-instagram-e-facebook",
    "tag": "Meta Ads",
    "title": "Como anunciar no Instagram e Facebook com Meta Ads sem depender de impulsionamento",
    "date": "Junho de 2026",
    "time": "9 min de leitura",
    "description": "Entenda como anunciar no Instagram e Facebook usando Meta Ads com estratégia, criativos, públicos, objetivos, pixel e funil de conversão.",
    "sections": [
      {
        "type": "paragraph",
        "text": "Para anunciar no Instagram e Facebook com eficiência, use o Gerenciador de Anúncios da Meta, escolha objetivo correto, crie públicos, instale eventos, teste criativos diferentes e acompanhe métricas de conversão — não apenas curtidas e alcance."
      },
      {
        "type": "paragraph",
        "text": "Muita gente confunde Meta Ads com o botão “impulsionar”. O impulsionamento pode até ajudar em alcance, mas uma campanha profissional permite controlar objetivo, público, posicionamento, criativos, eventos e orçamento. Essa diferença muda totalmente a qualidade do resultado."
      },
      {
        "type": "heading",
        "text": "Escolha o objetivo certo"
      },
      {
        "type": "paragraph",
        "text": "O objetivo da campanha orienta o algoritmo. Se a meta é mensagem no WhatsApp, escolha objetivo compatível. Se a meta é lead, use formulário ou página. Se a meta é venda, configure evento de conversão. Objetivo errado gera otimização errada."
      },
      {
        "type": "heading",
        "text": "Criativo é o motor da campanha"
      },
      {
        "type": "paragraph",
        "text": "No Meta Ads, o criativo define atenção, desejo e clique. Vídeos curtos, provas, antes e depois, demonstrações, bastidores e ofertas claras tendem a gerar mais aprendizado. Testar apenas público, sem testar criativo, limita o resultado."
      },
      {
        "type": "heading",
        "text": "Segmentação não resolve oferta fraca"
      },
      {
        "type": "paragraph",
        "text": "Hoje, os algoritmos conseguem encontrar públicos melhores quando recebem bons sinais. Por isso, segmentação importa, mas não substitui oferta, ângulo de comunicação e página. Uma campanha vencedora combina boa mensagem com boa entrega."
      },
      {
        "type": "heading",
        "text": "Use remarketing com inteligência"
      },
      {
        "type": "paragraph",
        "text": "Quem visitou o site, interagiu com o Instagram ou clicou no anúncio já demonstrou interesse. O remarketing serve para reforçar prova, tirar objeções e convidar para uma ação mais direta, como chamar no WhatsApp ou solicitar orçamento."
      }
    ]
  },
  {
    "slug": "roas-cac-e-cpl-no-trafego-pago",
    "tag": "Métricas",
    "title": "ROAS, CAC e CPL: como medir se o tráfego pago está dando resultado",
    "date": "Junho de 2026",
    "time": "8 min de leitura",
    "description": "Entenda ROAS, CAC, CPL, taxa de conversão e outras métricas essenciais para saber se anúncios estão gerando resultado real.",
    "sections": [
      {
        "type": "paragraph",
        "text": "As principais métricas do tráfego pago são CPL, CAC, ROAS, taxa de conversão e qualidade do lead. Clique barato não significa campanha boa. O que importa é saber quanto custa gerar uma oportunidade, quanto custa conquistar cliente e quanto retorna em receita."
      },
      {
        "type": "paragraph",
        "text": "Uma campanha pode ter muitos cliques e ainda assim ser ruim. Também pode ter clique caro e gerar ótimo retorno. Por isso, avaliar tráfego pago apenas por curtida, visualização ou CPC é perigoso. O que define performance é a relação entre investimento, oportunidade, venda e margem."
      },
      {
        "type": "heading",
        "text": "O que é CPL"
      },
      {
        "type": "paragraph",
        "text": "CPL é o custo por lead. Ele mostra quanto você paga, em média, para gerar um contato. É uma métrica importante, mas não deve ser analisada sozinha. Lead barato que não compra pode sair caro."
      },
      {
        "type": "heading",
        "text": "O que é CAC"
      },
      {
        "type": "paragraph",
        "text": "CAC é o custo de aquisição de cliente. Ele considera quanto foi investido para conquistar uma venda. Para calcular corretamente, compare investimento em mídia e operação comercial com o número de clientes conquistados."
      },
      {
        "type": "heading",
        "text": "O que é ROAS"
      },
      {
        "type": "paragraph",
        "text": "ROAS é o retorno sobre o investimento em anúncios. Ele compara receita gerada com verba investida em mídia. É uma métrica forte para e-commerce e vendas rastreáveis, mas em serviços com ciclo comercial longo pode precisar ser analisada junto ao CRM."
      },
      {
        "type": "heading",
        "text": "Taxa de conversão mostra gargalos"
      },
      {
        "type": "paragraph",
        "text": "A taxa de conversão revela onde o funil trava. Se tem clique e não tem lead, o problema pode estar na página ou oferta. Se tem lead e não tem venda, pode estar no atendimento, qualificação ou proposta comercial."
      }
    ]
  },
  {
    "slug": "erros-que-fazem-voce-perder-dinheiro-com-anuncios",
    "tag": "Otimização",
    "title": "7 erros que fazem você perder dinheiro com anúncios online",
    "date": "Junho de 2026",
    "time": "8 min de leitura",
    "description": "Conheça os principais erros em anúncios online: verba mal distribuída, criativos fracos, página ruim, ausência de conversões e falta de otimização.",
    "sections": [
      {
        "type": "paragraph",
        "text": "Os erros que mais fazem empresas perderem dinheiro com anúncios são: anunciar sem objetivo, não configurar conversões, usar criativos fracos, mandar tráfego para página ruim, não negativar palavras-chave, trocar tudo rápido demais e não medir venda real."
      },
      {
        "type": "paragraph",
        "text": "Anunciar não é difícil. Difícil é transformar anúncio em resultado previsível. A maior parte do desperdício acontece por falhas simples que poderiam ser corrigidas antes da campanha ir ao ar. Veja os erros que a UMNI mais identifica em diagnósticos de tráfego pago."
      },
      {
        "type": "heading",
        "text": "1. Anunciar sem objetivo claro"
      },
      {
        "type": "paragraph",
        "text": "Campanha sem objetivo vira disputa por métricas soltas. Antes de investir, defina o resultado esperado: lead, mensagem, venda, ligação, agendamento ou visita qualificada."
      },
      {
        "type": "heading",
        "text": "2. Não configurar conversões"
      },
      {
        "type": "paragraph",
        "text": "Sem evento de conversão, a plataforma não aprende com o sinal correto. Isso atrapalha otimização e torna a análise imprecisa."
      },
      {
        "type": "heading",
        "text": "3. Usar criativos genéricos"
      },
      {
        "type": "paragraph",
        "text": "Criativos sem promessa, prova ou diferenciação não seguram atenção. No Meta Ads, isso é ainda mais grave, porque o criativo é o principal fator de entrada no funil."
      },
      {
        "type": "heading",
        "text": "4. Mandar tráfego para página ruim"
      },
      {
        "type": "paragraph",
        "text": "Uma página lenta, confusa ou sem CTA desperdiça cliques. A campanha pode até atrair pessoas certas, mas a conversão acontece depois do clique."
      }
    ]
  },
  {
    "slug": "trafego-pago-vale-a-pena",
    "tag": "Tráfego Pago",
    "title": "Tráfego pago vale a pena? O que avaliar antes de investir",
    "date": "Maio de 2026",
    "time": "6 min de leitura",
    "description": "Tráfego pago vale a pena? Entenda quando faz sentido investir em Meta Ads e Google Ads, o que avaliar antes de começar e como evitar desperdício de verba.",
    "sections": [
      {
        "type": "paragraph",
        "text": "Tráfego pago vale a pena quando a empresa tem uma oferta clara, capacidade de atender os leads rapidamente, margem que comporta o custo de aquisição e disposição para testar nas primeiras semanas. Bem estruturado, traz visitas qualificadas em horas e oferece previsibilidade. Vira desperdício quando a verba é espalhada em várias campanhas sem dados ou sem uma oferta definida."
      },
      {
        "type": "paragraph",
        "text": "Essa é uma das primeiras dúvidas de quem pensa em anunciar online: o tráfego pago realmente traz retorno ou é só mais um custo? A resposta honesta é que depende — e entender esse \"depende\" é o que separa quem escala vendas de quem queima dinheiro."
      },
      {
        "type": "heading",
        "text": "O que é tráfego pago, de verdade"
      },
      {
        "type": "paragraph",
        "text": "Tráfego pago é todo visitante que chega até o seu site, perfil ou página por meio de anúncios que você paga, em plataformas como Google Ads e Meta Ads (Instagram e Facebook). Diferente do tráfego orgânico, que depende de SEO e conteúdo e leva meses para amadurecer, o tráfego pago pode trazer visitas qualificadas em questão de horas."
      },
      {
        "type": "paragraph",
        "text": "A grande vantagem é a previsibilidade: você controla quanto investe, para quem aparece e qual ação quer gerar. A grande armadilha é achar que basta \"impulsionar\" um post e esperar vendas."
      },
      {
        "type": "heading",
        "text": "Quando o tráfego pago vale a pena"
      },
      {
        "type": "paragraph",
        "text": "O investimento tende a compensar quando a sua operação tem alguns fundamentos no lugar:"
      },
      {
        "type": "list",
        "items": [
          "Oferta clara: um produto ou serviço que resolve um problema real, com proposta de valor bem definida.",
          "Capacidade de atendimento: alguém para responder os leads rápido (idealmente no WhatsApp).",
          "Margem que suporta o custo de aquisição: o ticket precisa comportar o investimento em anúncio mais a operação.",
          "Disposição para testar: as primeiras semanas são de aprendizado do algoritmo e ajuste de criativos."
        ]
      },
      {
        "type": "heading",
        "text": "O que avaliar antes de começar"
      },
      {
        "type": "paragraph",
        "text": "Antes de definir verba, vale olhar para três números: quanto vale um cliente para você, quanto você pode pagar para conquistar esse cliente e por quanto tempo consegue sustentar o investimento até a campanha amadurecer. Campanhas bem estruturadas costumam gerar os primeiros sinais em poucos dias, mas a fase de otimização — quando o algoritmo aprende quais públicos e criativos convertem — leva algumas semanas."
      }
    ]
  },
  {
    "slug": "meta-ads-ou-google-ads",
    "tag": "Estratégia",
    "title": "Meta Ads ou Google Ads: qual escolher para a sua empresa?",
    "date": "Maio de 2026",
    "time": "7 min de leitura",
    "description": "Meta Ads ou Google Ads? Entenda a diferença entre criar e capturar demanda e descubra qual plataforma de tráfego pago faz mais sentido para o seu negócio.",
    "sections": [
      {
        "type": "paragraph",
        "text": "Meta Ads ou Google Ads? Use Google Ads para capturar quem já procura ativamente sua solução (demanda existente) e Meta Ads para criar demanda e gerar desejo em quem ainda não buscava o produto. Negócios de demanda estabelecida e ticket alto costumam começar pelo Google; produtos visuais, de impulso ou descoberta performam melhor no Meta. Na maioria dos casos, a estratégia mais eficiente combina as duas plataformas."
      },
      {
        "type": "paragraph",
        "text": "Essa pergunta não tem uma resposta única — mas tem uma lógica clara por trás. A escolha entre Meta Ads e Google Ads depende, antes de tudo, de uma diferença fundamental: uma plataforma captura demanda que já existe e a outra cria demanda nova."
      },
      {
        "type": "heading",
        "text": "Google Ads: capturar quem já está procurando"
      },
      {
        "type": "paragraph",
        "text": "No Google Ads, especialmente na Rede de Pesquisa, você aparece para pessoas que já estão buscando ativamente uma solução. Quem digita \"advogado trabalhista em Curitiba\" tem intenção clara. Por isso o Google é forte para serviços e produtos com demanda existente: você entra na frente do cliente no momento em que ele decide comprar."
      },
      {
        "type": "heading",
        "text": "Meta Ads: criar desejo e descoberta"
      },
      {
        "type": "paragraph",
        "text": "Já o Meta Ads (Instagram e Facebook) trabalha com interrupção qualificada. A pessoa não estava procurando o seu produto, mas o anúncio certo, com o criativo certo, desperta interesse. É ideal para gerar demanda, apresentar marcas, lançar produtos e construir desejo — sobretudo quando o criativo é forte o suficiente para parar o scroll."
      },
      {
        "type": "heading",
        "text": "Como decidir onde investir"
      },
      {
        "type": "list",
        "items": [
          "Demanda já existe e é buscada? Google Ads tende a converter mais rápido.",
          "Produto novo ou de desejo/impulso? Meta Ads ajuda a criar essa demanda.",
          "Ticket alto e decisão racional? O Google costuma capturar melhor a intenção.",
          "Forte apelo visual? O Meta brilha com vídeos e criativos chamativos."
        ]
      },
      {
        "type": "heading",
        "text": "A resposta honesta: muitas vezes, os dois"
      },
      {
        "type": "paragraph",
        "text": "Na prática, as estratégias mais sólidas combinam as duas plataformas. O Meta cria demanda e alimenta o topo do funil; o Google captura quem já decidiu e ainda permite remarketing para quem visitou e não converteu. Os dados de uma plataforma informam a outra — e o resultado total costuma ser maior do que a soma das partes."
      }
    ]
  },
  {
    "slug": "criativos-que-vendem",
    "tag": "Criativos",
    "title": "Criativos que vendem: por que eles definem o resultado da campanha",
    "date": "Maio de 2026",
    "time": "5 min de leitura",
    "description": "Os criativos respondem por boa parte da performance dos anúncios. Veja por que o criativo define o resultado da campanha e como construir peças que vendem.",
    "sections": [
      {
        "type": "paragraph",
        "text": "Hoje, na maioria dos casos, é o criativo que define se um anúncio vai performar — mais do que a segmentação ou o orçamento. Um criativo que vende tem quatro elementos: gancho forte nos primeiros segundos, clareza da mensagem, prova e confiança (depoimentos, UGC) e chamada para ação . Como criativos se desgastam, testar variações com frequência é o que mantém a campanha saudável."
      },
      {
        "type": "paragraph",
        "text": "Muita gente acredita que o segredo de uma boa campanha está na segmentação ou no orçamento. Eles importam — mas hoje, na maioria dos casos, é o criativo que define se um anúncio vai performar ou não. Ele é, literalmente, o primeiro vendedor da sua campanha."
      },
      {
        "type": "heading",
        "text": "O criativo é o que para o scroll"
      },
      {
        "type": "paragraph",
        "text": "Antes de qualquer público ou lance, o usuário precisa parar de rolar a tela. Esse primeiro segundo é decidido pelo criativo: o gancho, a imagem, a promessa. Se o criativo não captura atenção, nenhuma otimização de campanha salva o resultado. Por isso a produção e o teste de criativos viraram o centro da estratégia de performance."
      },
      {
        "type": "heading",
        "text": "Os elementos de um criativo que converte"
      },
      {
        "type": "list",
        "items": [
          "Gancho forte: os primeiros segundos precisam prender — uma pergunta, um problema, um resultado.",
          "Clareza: a mensagem central precisa ser entendida mesmo sem som e em poucos segundos.",
          "Prova e confiança: depoimentos, demonstrações e conteúdo UGC geram credibilidade.",
          "Chamada para ação: deixar claro o próximo passo que o público deve dar."
        ]
      },
      {
        "type": "heading",
        "text": "Por que UGC funciona tão bem"
      },
      {
        "type": "paragraph",
        "text": "Conteúdos com aparência natural — como se fossem feitos por um cliente real — geram mais confiança do que peças muito produzidas. O público está cansado de \"propaganda\" e responde melhor a recomendações que parecem autênticas. Por isso o UGC se tornou um dos formatos mais eficientes para gerar desejo e reduzir o custo por resultado."
      },
      {
        "type": "heading",
        "text": "Teste sempre, apaixone-se por nenhum"
      },
      {
        "type": "paragraph",
        "text": "Nenhum criativo é eterno. Eles se desgastam, o público se acostuma e a performance cai. A disciplina de produzir variações, testar ângulos diferentes e renovar as peças com frequência é o que mantém uma campanha saudável ao longo do tempo."
      }
    ]
  }
];

function closeMenu() {
  document.body.classList.remove("menu-open");
  menuButton?.setAttribute("aria-expanded", "false");
}

menuButton?.addEventListener("click", () => {
  const isOpen = document.body.classList.toggle("menu-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

menuLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
  if (event.key === "Escape") closeAnalysisModal();
  if (event.key === "Escape") closeBlogModal();
});

function openAnalysisModal() {
  analysisModal?.classList.add("is-open");
  analysisModal?.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  analysisModal?.querySelector(".analysis-form input, .analysis-form select, .analysis-form textarea")?.focus();
}

function closeAnalysisModal() {
  analysisModal?.classList.remove("is-open");
  analysisModal?.setAttribute("aria-hidden", "true");
  if (!blogModal?.classList.contains("is-open")) {
    document.body.classList.remove("modal-open");
  }
}

analysisOpenButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    openAnalysisModal();
  });
});

analysisCloseButtons.forEach((button) => {
  button.addEventListener("click", closeAnalysisModal);
});

directForms.forEach((form) => {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const submitButton = form.querySelector("button");
    const submitLabel = form.querySelector(".button-label");
    const status = form.querySelector(".form-status");
    const defaultLabel = submitLabel?.textContent || "Enviar";
    const fallbackSubmit = () => {
      if (status) {
        status.textContent = "Redirecionando para concluir o envio...";
        status.classList.add("is-success");
      }
      submitButton?.removeAttribute("disabled");
      if (submitLabel) submitLabel.textContent = defaultLabel;
      HTMLFormElement.prototype.submit.call(form);
    };

    submitButton?.setAttribute("disabled", "true");
    if (submitLabel) submitLabel.textContent = "Enviando...";
    if (status) {
      status.textContent = "";
      status.classList.remove("is-error", "is-success");
    }

    try {
      const response = await fetch(form.dataset.ajaxAction || form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" }
      });

      if (!response.ok) throw new Error("Falha no envio");

      form.reset();
      if (submitLabel) submitLabel.textContent = "Enviado";
      if (status) {
        status.textContent = "Recebemos seus dados. Em breve a UMNI entra em contato.";
        status.classList.add("is-success");
      }

      if (form.classList.contains("analysis-form")) {
        setTimeout(closeAnalysisModal, 1800);
      }
    } catch (error) {
      fallbackSubmit();
      return;
    } finally {
      setTimeout(() => {
        submitButton?.removeAttribute("disabled");
        if (submitLabel && submitLabel.textContent !== defaultLabel) {
          submitLabel.textContent = defaultLabel;
        }
      }, 2600);
    }
  });
});

function scrollBlogCarousel(direction) {
  if (!blogTrack) return;

  const distance = Math.max(280, blogTrack.clientWidth * 0.82);
  blogTrack.scrollBy({ left: distance * direction, behavior: "smooth" });
}

blogPrevButton?.addEventListener("click", () => scrollBlogCarousel(-1));
blogNextButton?.addEventListener("click", () => scrollBlogCarousel(1));

let blogIsDragging = false;
let blogDragStartX = 0;
let blogDragScrollLeft = 0;
let blogSuppressClick = false;

function startBlogDrag(event) {
  if (!blogTrack) return;
  if (event.pointerType === "mouse" && event.button !== 0) return;

  blogIsDragging = true;
  blogDragStartX = event.clientX;
  blogDragScrollLeft = blogTrack.scrollLeft;
  blogTrack.classList.add("is-dragging");
}

function moveBlogDrag(event) {
  if (!blogTrack || !blogIsDragging) return;

  const distance = event.clientX - blogDragStartX;
  if (Math.abs(distance) > 6) {
    blogSuppressClick = true;
    event.preventDefault();
  }

  blogTrack.scrollLeft = blogDragScrollLeft - distance;
}

function endBlogDrag(event) {
  if (!blogTrack || !blogIsDragging) return;

  blogIsDragging = false;
  blogTrack.classList.remove("is-dragging");

  if (blogSuppressClick) {
    setTimeout(() => {
      blogSuppressClick = false;
    }, 120);
  }
}

blogTrack?.addEventListener("pointerdown", startBlogDrag);
blogTrack?.addEventListener("pointermove", moveBlogDrag);
blogTrack?.addEventListener("pointerup", endBlogDrag);
blogTrack?.addEventListener("pointercancel", endBlogDrag);

let clientIsDragging = false;
let clientDragStartX = 0;
let clientDragScrollLeft = 0;

function startClientDrag(event) {
  if (!clientCarousel) return;
  if (event.pointerType === "mouse" && event.button !== 0) return;

  clientIsDragging = true;
  clientDragStartX = event.clientX;
  clientDragScrollLeft = clientCarousel.scrollLeft;
  clientCarousel.classList.add("is-dragging");
}

function moveClientDrag(event) {
  if (!clientCarousel || !clientIsDragging) return;

  const distance = event.clientX - clientDragStartX;
  if (Math.abs(distance) > 6) event.preventDefault();
  clientCarousel.scrollLeft = clientDragScrollLeft - distance;
}

function endClientDrag() {
  if (!clientCarousel || !clientIsDragging) return;

  clientIsDragging = false;
  clientCarousel.classList.remove("is-dragging");
}

clientCarousel?.addEventListener("pointerdown", startClientDrag);
clientCarousel?.addEventListener("pointermove", moveClientDrag);
clientCarousel?.addEventListener("pointerup", endClientDrag);
clientCarousel?.addEventListener("pointercancel", endClientDrag);
clientCarousel?.addEventListener("dragstart", (event) => event.preventDefault());
let clientCarouselVisible = false;
if (clientCarousel && "IntersectionObserver" in window) {
  const clientCarouselObserver = new IntersectionObserver(([entry]) => {
    clientCarouselVisible = entry.isIntersecting;
  }, { rootMargin: "120px" });
  clientCarouselObserver.observe(clientCarousel);
} else {
  clientCarouselVisible = Boolean(clientCarousel);
}

function animateClientCarousel() {
  if (clientCarousel && clientCarouselVisible && !prefersReducedMotion && !clientIsDragging && !document.hidden) {
    const loopPoint = clientCarousel.scrollWidth / 2;
    clientCarousel.scrollLeft += 0.45;

    if (loopPoint > 0 && clientCarousel.scrollLeft >= loopPoint) {
      clientCarousel.scrollLeft -= loopPoint;
    }
  }

  window.requestAnimationFrame(animateClientCarousel);
}

window.requestAnimationFrame(animateClientCarousel);

function renderBlogPost(post) {
  if (!blogModal || !post) return;

  const tag = blogModal.querySelector(".blog-modal__tag");
  const title = blogModal.querySelector("#blog-modal-title");
  const meta = blogModal.querySelector(".blog-modal__meta");
  const content = blogModal.querySelector(".blog-modal__content");

  if (tag) tag.textContent = post.tag;
  if (title) title.textContent = post.title;
  if (meta) meta.textContent = `${post.date} · ${post.time}`;
  if (!content) return;

  content.textContent = "";

  post.sections.forEach((section) => {
    if (section.type === "heading") {
      const heading = document.createElement("h3");
      heading.textContent = section.text;
      content.appendChild(heading);
      return;
    }

    if (section.type === "list") {
      const list = document.createElement("ul");
      section.items.forEach((item) => {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        list.appendChild(listItem);
      });
      content.appendChild(list);
      return;
    }

    const paragraph = document.createElement("p");
    paragraph.textContent = section.text;
    content.appendChild(paragraph);
  });
}

function openBlogModal(slug) {
  const post = BLOG_POSTS.find((item) => item.slug === slug);
  if (!post) return;

  renderBlogPost(post);
  blogModal?.classList.add("is-open");
  blogModal?.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  blogModal?.querySelector(".blog-modal__close")?.focus();
}

function closeBlogModal() {
  blogModal?.classList.remove("is-open");
  blogModal?.setAttribute("aria-hidden", "true");
  if (!analysisModal?.classList.contains("is-open")) {
    document.body.classList.remove("modal-open");
  }
}

blogTrack?.addEventListener("click", (event) => {
  const card = event.target.closest("[data-blog-open]");
  if (!card || !blogTrack.contains(card)) return;

  if (blogSuppressClick) {
    event.preventDefault();
    blogSuppressClick = false;
    return;
  }

  openBlogModal(card.dataset.blogOpen);
});

blogCloseButtons.forEach((button) => {
  button.addEventListener("click", closeBlogModal);
});

function updateBackToTopButton() {
  backToTopButton?.classList.toggle("is-visible", window.scrollY > 520);
}

backToTopButton?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", updateBackToTopButton, { passive: true });
updateBackToTopButton();
