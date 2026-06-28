document.addEventListener('DOMContentLoaded', () => {
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarCollapse = document.querySelector('.navbar-collapse');

  if (navbarToggler && navbarCollapse) {
    navbarToggler.addEventListener('click', () => {
      navbarCollapse.classList.toggle('show');
    });
  }

  const year = new Date().getFullYear();
  const footerText = document.querySelector('.footer p');
  if (footerText) {
    footerText.textContent += ` © ${year}`;
  }

  const languageToggle = document.getElementById('languageDropdownButton');
  const languageOptions = document.querySelectorAll('.language-option');
  const translations = {
    pt: {
      label: 'BR',
      iconUrl: 'https://img.icons8.com/fluency/24/brazil.png',
      navRecursos: 'Recursos',
      navFaq: 'FAQ',
      heroGreeting: 'Olá, João! 👋',
      heroTitle: 'Entenda. <span class="hero-highlight hero-highlight-regularize">Regularize.</span> <span class="hero-highlight hero-highlight-preserve">Preserve.</span>',
      heroSubtitle: 'Entenda a legislação do CAR de forma simples e receba orientações práticas para regularizar sua propriedade com segurança.',
      heroBtnDiagnostico: 'Fazer diagnóstico',
      heroBtnVideo: 'Assistir vídeo',
      sobreLabel: 'Sobre',
      sobreTitle: 'O que é o CAR para Todos, nossa missão e objetivo.',
      aboutCard1Title: 'O que é o CAR para Todos',
      aboutCard1Text: 'Uma plataforma clara e amigável que traduz a legislação do Cadastro Ambiental Rural em orientações práticas para produtores e instituições.',
      aboutCard2Title: 'Missão',
      aboutCard2Text: 'Facilitar o acesso à informação e oferecer suporte confiável para que a regularização ambiental seja mais simples e transparente.',
      aboutCard3Title: 'Objetivo',
      aboutCard3Text: 'Guiar cada propriedade com orientações objetivas para garantir a regularização do CAR com segurança e tranquilidade.',
      servicosLabel: 'O que você deseja fazer hoje?',
      servicosTitle: 'Acesse as principais funcionalidades com rapidez.',
      service1Title: 'Entender meu CAR',
      service1Text: 'Veja o que o cadastro significa para sua propriedade.',
      service2Title: 'Entendendo as leis',
      service2Text: 'Saiba o que o Código Florestal exige, em linguagem simples.',
      service3Title: 'Conversar com Analista Ambiental',
      service3Text: 'Tire dúvidas com um assistente inteligente a qualquer momento.',
      service4Title: 'Minha situação',
      service4Text: 'Veja o status do seu cadastro e pontos de atenção.',
      service5Title: 'Apoio local',
      service5Text: 'Encontre assistência perto da sua propriedade.',
      service6Title: 'Academia CAR',
      service6Text: 'Aprenda com cursos e trilhas sobre legislação e práticas.',
      service7Title: 'Benefícios',
      service7Text: 'Entenda como a regularização abre portas para apoios.',
      service8Title: 'Perguntas frequentes',
      service8Text: 'Respostas rápidas para os principais temas do CAR.',
      footerTitle: 'CAR para Todos',
      footerText: 'Uma plataforma moderna para traduzir a legislação do CAR em linguagem simples, apoiar produtores rurais e fortalecer a compreensão ambiental e institucional.',
      footerBtnTop: 'Voltar ao topo',
      footerBtnContact: 'Fale conosco',
    },
    no: {
      label: 'NO',
      iconUrl: 'https://img.icons8.com/?size=100&id=JSgvmncLWozY&format=png&color=000000',
      navRecursos: 'Ressurser',
      navFaq: 'FAQ',
      heroGreeting: 'Hei, João! 👋',
      heroTitle: 'Forstå. <span class="hero-highlight hero-highlight-regularize">Reguler.</span> <span class="hero-highlight hero-highlight-preserve">Bevar.</span>',
      heroSubtitle: 'Forstå CAR-lovgivningen enkelt og få praktiske råd for å regulere eiendommen din trygt.',
      heroBtnDiagnostico: 'Gjør diagnose',
      heroBtnVideo: 'Se video',
      sobreLabel: 'Om',
      sobreTitle: 'Hva er CAR para Todos, vår misjon og mål.',
      aboutCard1Title: 'Hva er CAR para Todos',
      aboutCard1Text: 'En klar og brukervennlig plattform som oversetter regelverket for landbruksregistreringen til praktiske råd for produsenter og organisasjoner.',
      aboutCard2Title: 'Misjon',
      aboutCard2Text: 'Gjør informasjon lett tilgjengelig og tilby pålitelig støtte for at miljøreguleringen skal være enklere og mer gjennomsiktig.',
      aboutCard3Title: 'Mål',
      aboutCard3Text: 'Veilede hver eiendom med konkrete råd for å sikre CAR-registreringen på en trygg og enkel måte.',
      servicosLabel: 'Hva vil du gjøre i dag?',
      servicosTitle: 'Få rask tilgang til hovedfunksjonene.',
      service1Title: 'Forstå CAR-en min',
      service1Text: 'Se hva registreringen betyr for eiendommen din.',
      service2Title: 'Forstå regelverket',
      service2Text: 'Se hva skogloven krever, i enkelt språk.',
      service3Title: 'Snakk med miljøanalytiker',
      service3Text: 'Få svar på spørsmål med en intelligent assistent når som helst.',
      service4Title: 'Min situasjon',
      service4Text: 'Se statusen på registreringen din og viktige punkter.',
      service5Title: 'Lokal støtte',
      service5Text: 'Finn hjelp nær eiendommen din.',
      service6Title: 'CAR-akademiet',
      service6Text: 'Lær med kurs og veiledninger om regelverk og praksis.',
      service7Title: 'Fordeler',
      service7Text: 'Forstå hvordan regulering åpner dører for støtte.',
      service8Title: 'Ofte stilte spørsmål',
      service8Text: 'Raske svar på de viktigste CAR-temaene.',
      footerTitle: 'CAR para Todos',
      footerText: 'En moderne plattform for å oversette CAR-regelverket til enkelt språk, støtte bønder og styrke miljøforståelse.',
      footerBtnTop: 'Tilbake til toppen',
      footerBtnContact: 'Kontakt oss',
    },
    en: {
      label: 'EN',
      iconUrl: 'https://img.icons8.com/?size=100&id=aRiu1GGi6Aoe&format=png&color=000000',
      navRecursos: 'Resources',
      navFaq: 'FAQ',
      heroGreeting: 'Hello, João! 👋',
      heroTitle: 'Understand. <span class="hero-highlight hero-highlight-regularize">Regularize.</span> <span class="hero-highlight hero-highlight-preserve">Preserve.</span>',
      heroSubtitle: 'Understand CAR legislation simply and receive practical guidance to regularize your property safely.',
      heroBtnDiagnostico: 'Do diagnosis',
      heroBtnVideo: 'Watch video',
      sobreLabel: 'About',
      sobreTitle: 'What CAR para Todos is, our mission and objective.',
      aboutCard1Title: 'What CAR para Todos is',
      aboutCard1Text: 'A clear and welcoming platform that translates CAR regulations into practical guidance for producers and institutions.',
      aboutCard2Title: 'Mission',
      aboutCard2Text: 'Make information accessible and provide reliable support so environmental regularization is simpler and more transparent.',
      aboutCard3Title: 'Goal',
      aboutCard3Text: 'Guide each property with objective advice to ensure CAR registration safely and confidently.',
      servicosLabel: 'What do you want to do today?',
      servicosTitle: 'Access the main features quickly.',
      service1Title: 'Understand my CAR',
      service1Text: 'See what registration means for your property.',
      service2Title: 'Understanding the rules',
      service2Text: 'Learn what the Forest Code requires in plain language.',
      service3Title: 'Talk to an environmental analyst',
      service3Text: 'Get answers with an intelligent assistant anytime.',
      service4Title: 'My situation',
      service4Text: 'View your registration status and key focus points.',
      service5Title: 'Local support',
      service5Text: 'Find assistance near your property.',
      service6Title: 'CAR Academy',
      service6Text: 'Learn with courses and paths about regulation and best practices.',
      service7Title: 'Benefits',
      service7Text: 'Understand how regularization opens doors for support.',
      service8Title: 'Frequently asked questions',
      service8Text: 'Quick answers to the main CAR topics.',
      footerTitle: 'CAR para Todos',
      footerText: 'A modern platform to translate CAR legislation into simple language, support rural producers, and strengthen environmental understanding.',
      footerBtnTop: 'Back to top',
      footerBtnContact: 'Contact us',
    },
  };

  const setLanguage = (lang) => {
    const map = translations[lang];
    if (!map) return;

    Object.entries(map).forEach(([key, value]) => {
      const el = document.getElementById(key);
      if (el) el.innerHTML = value;
    });

    if (languageToggle) {
      languageToggle.innerHTML = `<img src="${map.iconUrl || 'https://img.icons8.com/color/20/brazil.png'}" alt="flag" class="language-flag-icon"/> ${map.label || 'BR'}`;
    }

    languageOptions.forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
  };

  languageOptions.forEach((button) => {
    button.addEventListener('click', () => setLanguage(button.dataset.lang));
  });

  setLanguage('pt');
});
