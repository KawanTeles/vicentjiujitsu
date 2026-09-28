// Dados Oficiais e Editáveis da Vicente Júnior BJJ Arapiraca
// Baseados nas informações oficiais do Instagram @vicentejuniorbjjarapiraca

export const ACADEMY_CONFIG = {
  name: "Vicente Júnior BJJ",
  unitName: "Núcleo Arapiraca",
  fullName: "Vicente Júnior BJJ – Núcleo Arapiraca",
  lineage: "Linhagem Mestre Ricardo De La Riva",
  city: "Arapiraca - AL",
  addressShort: "Arapiraca, Alagoas",
  addressFull: "Arapiraca - AL, Brasil",
  instagramHandle: "@vicentejuniorbjjarapiraca",
  instagramUrl: "https://www.instagram.com/vicentejuniorbjjarapiraca/",
  // WhatsApp configurável para conversão
  whatsappNumber: "5582999999999", // Facilmente editável
  whatsappDisplay: "(82) 99999-9999",
  defaultWhatsappMessage: "Olá! Gostaria de agendar uma aula experimental gratuita na Vicente Júnior BJJ Arapiraca.",
};

export const HIGHLIGHTS = [
  {
    icon: "ShieldCheck",
    title: "Linhagem De La Riva",
    description: "Tradição e refinamento técnico mundial"
  },
  {
    icon: "Award",
    title: "11x Campeão Estadual",
    description: "Títulos na Liga Alagoana com e sem kimono"
  },
  {
    icon: "Users",
    title: "Ambiente Familiar",
    description: "Tatame seguro para crianças, jovens e adultos"
  },
  {
    icon: "Zap",
    title: "Evolução Contínua",
    description: "Metodologia comprovada do iniciante ao avançado"
  }
];

export const BENEFITS = [
  {
    icon: "Shield",
    title: "DISCIPLINA",
    description: "Desenvolvimento de autocontrole, foco mental e resiliência que transformam sua conduta dentro e fora do tatame."
  },
  {
    icon: "Activity",
    title: "CONDICIONAMENTO",
    description: "Melhora drástica do vigor físico, resistência cardiovascular, força funcional, flexibilidade e queima calórica."
  },
  {
    icon: "UserCheck",
    title: "AUTODEFESA",
    description: "Aprenda a técnica pura de alavancas para neutralizar oponentes maiores e mais fortes com inteligência e calma."
  },
  {
    icon: "Zap",
    title: "CONFIANÇA",
    description: "Superação de desafios reais a cada treino que eliminam a insegurança e constroem uma postura firme perante a vida."
  },
  {
    icon: "Users",
    title: "COMUNIDADE",
    description: "Um time unido por respeito e lealdade. Aqui você encontra parceiros de treino que vibram com cada vitória sua."
  },
  {
    icon: "TrendingUp",
    title: "EVOLUÇÃO",
    description: "Sistema pedagógico claro com graduação técnica de faixas para garantir seu aprendizado seguro e sem atalhos."
  }
];

export const MODALITIES = [
  {
    id: "adulto",
    title: "Jiu-Jitsu Adulto (Gi)",
    subtitle: "Fundamentos & Avançado",
    description: "Aprenda o Jiu-Jitsu tradicional de quimono. Do aluno que nunca praticou artes marciais até o praticante avançado em busca de refino técnico.",
    target: "Homens e mulheres a partir de 15 anos",
    image: "/images/instagram_25.jpg",
    tag: "Turmas Manhã, Tarde e Noite",
    bullets: [
      "Metodologia De La Riva passo a passo",
      "Defesa pessoal aplicada e Jiu-Jitsu esportivo",
      "Turmas divididas por nível de aprendizado",
      "Aulas estruturadas com foco em técnica e saúde"
    ],
    whatsappMsg: "Olá! Gostaria de agendar uma aula experimental de Jiu-Jitsu Adulto com Kimono na Vicente Júnior Arapiraca."
  },
  {
    id: "infantil",
    title: "Jiu-Jitsu Kids & Juvenil",
    subtitle: "Formação de Caráter & Disciplina",
    description: "Ambiente lúdico e seguro para crianças e adolescentes desenvolverem respeito, disciplina, foco escolar, postura antibullying e coordenação motora.",
    target: "Crianças e jovens de 4 a 14 anos",
    image: "/images/instagram_47.jpg",
    tag: "Kids & Teens",
    bullets: [
      "Combate ao sedentarismo e desenvolvimento motor",
      "Defesa pessoal inteligente e prevenção contra bullying",
      "Valores de hierarquia, respeito aos pais e companheiros",
      "Professores pacientes e capacitados pedagogicamente"
    ],
    whatsappMsg: "Olá! Gostaria de informações sobre o Jiu-Jitsu Infantil (Kids) para agendar uma aula para meu(minha) filho(a)."
  },
  {
    id: "nogi",
    title: "Jiu-Jitsu No-Gi (Sem Kimono)",
    subtitle: "Dinamismo & Wrestling Adaptado",
    description: "Treinos com rash guard e bermuda, focando em pegadas anatômicas, quedas dinâmicas, controle posicional veloz e finalizações modernas.",
    target: "Praticantes iniciantes e avançados",
    image: "/images/instagram_1.jpg",
    tag: "Gi & No-Gi",
    bullets: [
      "Controle de alavancas sem a pegada do pano",
      "Quedas e transições rápidas de wrestling para BJJ",
      "Excelente para condicionamento físico explosivo",
      "Aperfeiçoamento para competições internacionais"
    ],
    whatsappMsg: "Olá! Gostaria de saber mais sobre as turmas de Jiu-Jitsu No-Gi (sem kimono) na Vicente Júnior Arapiraca."
  },
  {
    id: "competicao",
    title: "Treino de Competição",
    subtitle: "Alta Performance & Campeonatos",
    description: "Preparação física, psicológica e estratégica para atletas que representam a Vicente Júnior BJJ na Liga Alagoana, campeonatos nacionais e internacionais.",
    target: "Atletas graduados e competidores em formação",
    image: "/images/instagram_12.jpg",
    tag: "11x Campeão Liga Alagoana",
    bullets: [
      "Simulações de luta sob regras oficiais IBJJF e CBJJ",
      "Gestão de tempo, pontuação e estratégias de tatame",
      "Suporte de equipe e histórico de pódios constantes",
      "Acompanhamento técnico com o Prof. Jadson Leite"
    ],
    whatsappMsg: "Olá! Sou atleta/competidor e quero saber mais sobre o treino de competição da equipe."
  },
  {
    id: "feminino",
    title: "Jiu-Jitsu Feminino & Defesa Pessoal",
    subtitle: "Empoderamento & Saúde",
    description: "Um espaço acolhedor e encorajador para mulheres treinarem Jiu-Jitsu com segurança, aprendendo autodefesa real enquanto tonificam o corpo e aliviam o estresse.",
    target: "Mulheres de todas as idades",
    image: "/images/instagram_30.jpg",
    tag: "Mulheres no Tatame",
    bullets: [
      "Técnicas reais de escape contra situações de agressão",
      "Melhora do tônus muscular, postura e fôlego",
      "Turma amigável, respeitosa e sem intimidação",
      "Acompanhamento no ritmo de cada aluna"
    ],
    whatsappMsg: "Olá! Gostaria de saber mais sobre o treino de Jiu-Jitsu e defesa pessoal feminina em Arapiraca."
  }
];

export const PROFESSORS = [
  {
    name: "Mestre Vicente Júnior",
    role: "Líder e Fundador Internacional",
    rank: "Faixa-Preta 4º Grau (Linhagem Ricardo De La Riva)",
    bio: "Atleta multicampeão mundial e pan-americano da IBJJF. Formado sob a guarda de Ricardo De La Riva, lidera a equipe Vicente Jr. Team com unidades no Brasil e nos Estados Unidos, visitando periodicamente o núcleo Arapiraca para aulões e graduações.",
    image: "/images/instagram_16.jpg",
    tag: "Líder Fundador"
  },
  {
    name: "Prof. Jadson Leite",
    role: "Professor Titular & Competidor",
    rank: "Faixa-Preta • 11x Campeão da Liga Alagoana",
    bio: "Referência no Jiu-Jitsu alagoano e um dos principais nomes da equipe no estado. Conquistou 11 vezes o título da Liga Alagoana de Jiu-Jitsu com atuações de destaque com e sem kimono (Gi & No-Gi).",
    image: "/images/instagram_1.jpg",
    tag: "11x Campeão Alagoano"
  },
  {
    name: "Prof. Tarciso Manzano",
    role: "Responsável pelo Núcleo Arapiraca",
    rank: "Faixa-Preta Vicente Jr. Team",
    bio: "Lidera com compromisso e dedicação a formação técnica e ética dos praticantes em Arapiraca, mantendo a tradição e o alto padrão de ensino da equipe.",
    image: "/images/instagram_24.jpg",
    tag: "Núcleo Arapiraca"
  },
  {
    name: "Prof. Eduardo Pereira",
    role: "Professor e Instrutor do Tatame",
    rank: "Faixa-Preta Vicente Jr. Team",
    bio: "Dedicado ao ensino técnico dos fundamentos, defesa pessoal e suporte ao desenvolvimento dos novos alunos e atletas da equipe.",
    image: "/images/instagram_30.jpg",
    tag: "Instrutor Oficial"
  },
  {
    name: "Prof. Iranildo do Carmo",
    role: "Professor e Instrutor do Tatame",
    rank: "Faixa-Preta Vicente Jr. Team",
    bio: "Instrutor ativo nos treinos regulares do núcleo, focando na disciplina, evolução física e refinamento dos golpes e posições.",
    image: "/images/instagram_25.jpg",
    tag: "Instrutor Oficial"
  }
];

export const SCHEDULE_TABS = [
  { id: "todos", label: "Grade Completa" },
  { id: "adulto", label: "Adulto (Gi)" },
  { id: "infantil", label: "Kids & Juvenil" },
  { id: "nogi", label: "No-Gi & Competição" },
];

export const SCHEDULE_DATA = [
  {
    time: "06:30 - 07:30",
    days: "Segunda, Quarta e Sexta",
    category: "adulto",
    type: "Jiu-Jitsu Adulto (Manhã)",
    instructor: "Professores da Equipe",
    level: "Todos os níveis"
  },
  {
    time: "09:00 - 10:00",
    days: "Terça e Quinta",
    category: "infantil",
    type: "Jiu-Jitsu Kids (Manhã)",
    instructor: "Equipe Pedagógica",
    level: "4 a 11 anos"
  },
  {
    time: "12:00 - 13:00",
    days: "Segunda a Sexta",
    category: "adulto",
    type: "Treino do Meio-Dia (Lunch Roll)",
    instructor: "Prof. Jadson Leite",
    level: "Iniciantes e Avançados"
  },
  {
    time: "17:30 - 18:30",
    days: "Segunda a Quinta",
    category: "infantil",
    type: "Jiu-Jitsu Kids & Teens",
    instructor: "Professores Titulares",
    level: "Crianças e Jovens"
  },
  {
    time: "18:45 - 20:00",
    days: "Segunda, Quarta e Sexta",
    category: "adulto",
    type: "Jiu-Jitsu Adulto (Fundamentos & Geral)",
    instructor: "Prof. Jadson Leite / Prof. Eduardo",
    level: "Todos os níveis"
  },
  {
    time: "20:00 - 21:30",
    days: "Segunda a Quinta",
    category: "nogi",
    type: "Jiu-Jitsu No-Gi & Competição",
    instructor: "Prof. Jadson Leite",
    level: "Intermediário e Atletas"
  },
  {
    time: "09:00 - 11:00",
    days: "Sábado",
    category: "adulto",
    type: "Open Mat & Treino da Família",
    instructor: "Equipe Vicente Júnior",
    level: "Aberto para todos os alunos"
  }
];

export const ACHIEVEMENTS = [
  {
    stat: "11x",
    label: "Campeão da Liga Alagoana",
    detail: "Prof. Jadson Leite com e sem kimono (Gi & No-Gi)"
  },
  {
    stat: "4º Grau",
    label: "Faixa-Preta Internacional",
    detail: "Mestre Vicente Júnior sob a chancela de Ricardo De La Riva"
  },
  {
    stat: "100%",
    label: "Metodologia Tradicional",
    detail: "Fundamentos comprovados, defesa pessoal e esporte"
  },
  {
    stat: "+280",
    label: "Vidas Impactadas",
    detail: "Alunos que encontram disciplina, saúde e amizade"
  }
];

export const GALLERY_IMAGES = [
  { src: "/images/instagram_25.jpg", title: "Aulão Histórico em Arapiraca com Mestre Vicente Júnior", category: "Equipe" },
  { src: "/images/instagram_50.jpg", title: "Seminário Anual Vicente Júnior - Tatame Cheio", category: "Seminário" },
  { src: "/images/instagram_1.jpg", title: "Prof. Jadson Leite - 11x Campeão Alagoano", category: "Campeonato" },
  { src: "/images/instagram_17.jpg", title: "Amizade e União no Tatame", category: "Treino" },
  { src: "/images/instagram_30.jpg", title: "Cerimônia de Graduação e Novos Faixas-Pretas", category: "Graduação" },
  { src: "/images/instagram_47.jpg", title: "Treino em Família de Domingo", category: "Família" },
  { src: "/images/instagram_18.jpg", title: "Espaço e Treino na Academia Vicente Jr.", category: "Estrutura" },
  { src: "/images/instagram_12.jpg", title: "Conquistas na Primeira Etapa da Liga Alagoana", category: "Pódio" },
  { src: "/images/instagram_24.jpg", title: "Visita Oficial e Aprendizado Técnico", category: "Mestre" },
];

export const INSTAGRAM_POSTS = [
  {
    id: "post-1",
    image: "/images/instagram_1.jpg",
    caption: "11x Campeão da Liga Alagoana! 4 lutas, 3 finalizações, com e sem kimono 🥇💪 Oss!",
    author: "@vicentejuniorbjjarapiraca",
    likes: "248 curtidas"
  },
  {
    id: "post-2",
    image: "/images/instagram_25.jpg",
    caption: "Vivemos mais um dia que fica marcado na história! A honra de receber nosso professor @vicentebjj e @gabrielsilvabjj em Arapiraca. Jiu-Jitsu pra vida!",
    author: "@vicentejuniorbjjarapiraca",
    likes: "392 curtidas"
  },
  {
    id: "post-3",
    image: "/images/instagram_30.jpg",
    caption: "Dia memorável de reencontrar nosso professor e acompanhar a graduação dos novos faixas-pretas de Arapiraca. Parabéns aos graduados!",
    author: "@vicentejuniorbjjarapiraca",
    likes: "315 curtidas"
  },
  {
    id: "post-4",
    image: "/images/instagram_17.jpg",
    caption: "No Jiu-Jitsu, amizade tem um significado diferente: é quem te incentiva a evoluir, comemora cada conquista e está ao seu lado dentro e fora do tatame.",
    author: "@vicentejuniorbjjarapiraca",
    likes: "189 curtidas"
  },
  {
    id: "post-5",
    image: "/images/instagram_50.jpg",
    caption: "Seminário anual Vicente Júnior ✨ Casa cheia, muita energia boa e técnica apurada. #familia #vicentejrteambrasil",
    author: "@vicentejuniorbjjarapiraca",
    likes: "420 curtidas"
  },
  {
    id: "post-6",
    image: "/images/instagram_47.jpg",
    caption: "Domingo do jeito que a gente ama! Treino, risadas e a evolução da nossa família no tatame. #jiujitsupravida",
    author: "@vicentejuniorbjjarapiraca",
    likes: "210 curtidas"
  }
];

export const TESTIMONIALS = [
  {
    name: "Carlos Eduardo",
    role: "Aluno Adulto • Faixa Azul",
    text: "O Jiu-Jitsu na Vicente Júnior mudou completamente minha disposição física e meu foco no trabalho. O ambiente é muito respeitoso e acolhedor para quem está começando do zero.",
    rating: 5
  },
  {
    name: "Mariana Santos",
    role: "Mãe do Bernardo (8 anos)",
    text: "Coloquei meu filho no Jiu-Jitsu Kids e em poucos meses notei a diferença na concentração, obediência em casa e na segurança dele. Os professores têm uma paciência incrível com as crianças.",
    rating: 5
  },
  {
    name: "Rodrigo Mendonça",
    role: "Atleta Competidor • Faixa Roxa",
    text: "Treinar sob a liderança do Prof. Jadson e com o legado do Mestre Vicente Júnior é um privilégio. A parte técnica e o ritmo de treino para competição aqui em Arapiraca são diferenciados.",
    rating: 5
  }
];

export const FAQS = [
  {
    q: "Preciso ter experiência ou bom condicionamento físico para começar?",
    a: "Não! A grande maioria dos nossos alunos começa do absoluto zero. Nosso método de ensino introduz os movimentos básicos, quedas seguras e posições de controle gradualmente. Seu condicionamento físico e flexibilidade serão construídos de forma natural ao longo dos treinos."
  },
  {
    q: "Qual a idade recomendada para começar a treinar?",
    a: "Temos turmas infantis a partir dos 4 anos de idade, além de turmas para adolescentes, adultos e masters. O Jiu-Jitsu não tem limite de idade — homens e mulheres de todas as faixas etárias treinam conosco com segurança e saúde."
  },
  {
    q: "Preciso ter quimono no primeiro dia de aula?",
    a: "Para a sua primeira aula experimental gratuita, você pode vir com uma roupa esportiva confortável (bermuda sem zíper ou bolso e camiseta justa). Caso decida se matricular, nossa equipe orientará sobre o quimono oficial e regras de vestimenta."
  },
  {
    q: "Como funciona a aula experimental gratuita?",
    a: "Você escolhe o melhor dia e horário na grade, clica no botão do WhatsApp e nossa equipe agenda sua presença. Você será recebido por um professor, conhecerá o espaço, os colegas e fará um treino prático adaptado para você sentir a energia do tatame."
  },
  {
    q: "O ambiente é seguro para evitar lesões?",
    a: "A segurança é a prioridade absoluta em nosso tatame. Todos os treinos são supervisionados por professores graduados, que ensinam a bater no momento certo e a respeitar os parceiros de treino. Não toleramos agressividade desnecessária."
  },
  {
    q: "Como faço para agendar minha aula ou tirar dúvidas?",
    a: "Basta clicar em qualquer botão 'Agendar Aula' do site para falar diretamente conosco pelo WhatsApp. Estaremos prontos para tirar todas as suas dúvidas e reservar o seu lugar no tatame!"
  }
];
