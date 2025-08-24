// Sistema de internacionalización simple
export interface Language {
  code: string
  name: string
  flag: string
  nativeName: string
}

export interface Translations {
  [key: string]: string
}

// Idiomas soportados
export const languages: Language[] = [
  {
    code: 'es',
    name: 'Spanish',
    flag: '🇪🇸',
    nativeName: 'Español'
  },
  {
    code: 'en',
    name: 'English',
    flag: '🇺🇸',
    nativeName: 'English'
  },
  {
    code: 'pt',
    name: 'Portuguese',
    flag: '🇧🇷',
    nativeName: 'Português'
  },
  {
    code: 'fr',
    name: 'French',
    flag: '🇫🇷',
    nativeName: 'Français'
  },
  {
    code: 'de',
    name: 'German',
    flag: '🇩🇪',
    nativeName: 'Deutsch'
  },
  {
    code: 'it',
    name: 'Italian',
    flag: '🇮🇹',
    nativeName: 'Italiano'
  }
]

// Traducciones
export const translations: Record<string, Translations> = {
  es: {
    // Header
    'nav.about': 'Sobre Mí',
    'nav.portfolio': 'Portafolio',
    'nav.skills': 'Habilidades',
    'nav.contact': 'Contacto',
    
    // Hero Section
    'hero.title': 'Juan R Guerrero',
    'hero.subtitle': 'Desarrollador Profesional',
    'hero.description': 'Creando experiencias digitales excepcionales con código limpio y diseño intuitivo',
    'hero.contact': 'Contáctame',
    'hero.portfolio': 'Ver Portafolio',
    
    // About Section
    'about.title': 'Sobre Mí',
    'about.description1': 'Soy un desarrollador apasionado por crear soluciones tecnológicas innovadoras que transforman ideas en realidades digitales. Con años de experiencia en desarrollo web y aplicaciones móviles, me especializo en crear experiencias de usuario excepcionales.',
    'about.description2': 'Mi enfoque combina creatividad técnica con un profundo entendimiento de las necesidades del usuario, resultando en productos que no solo funcionan perfectamente, sino que también deleitan a quienes los utilizan.',
    'about.years': 'Años de Experiencia',
    'about.projects': 'Proyectos Completados',
    'about.satisfaction': 'Satisfacción del Cliente',
    
    // Portfolio Section
    'portfolio.title': 'Portafolio',
    'portfolio.subtitle': 'Proyectos Destacados',
    'portfolio.description': 'Una selección de mis mejores trabajos que demuestran mi experiencia y creatividad en el desarrollo de software.',
    'portfolio.project1.title': 'MusicFlow',
    'portfolio.project1.tech': 'Flutter, Dart, Firebase',
    'portfolio.project1.description': 'Aplicación móvil de música moderna con reproducción en streaming, listas personalizadas y interfaz intuitiva.',
    'portfolio.project2.title': 'CGT DO SRL',
    'portfolio.project2.tech': 'Vue.js, SQL, Docker',
    'portfolio.project2.description': 'Empresa de paneles solares, cámaras de seguridad y desarrollo web en República Dominicana.',
    'portfolio.project3.title': 'deeXy Virtual Assistant',
    'portfolio.project3.tech': 'Flutter, API ChatGPT, IA Generativa',
    'portfolio.project3.description': 'Asistente virtual inteligente que puede generar texto, videos e imágenes. Tu asistente personal para cualquier área laboral.',
    'portfolio.viewProject': 'Ver Proyecto',
    'portfolio.viewCode': 'Ver Código',
    
    // Skills Section
    'skills.title': 'Habilidades',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.tools': 'Herramientas',
    
    // Contact Section
    'contact.title': 'Contacto',
    'contact.email': 'juan@ejemplo.com',
    'contact.phone': '+57 300 123 4567',
    'contact.location': 'Bogotá, Colombia',
    
    // Footer
    'footer.copyright': 'Todos los derechos reservados.'
  },
  
  en: {
    // Header
    'nav.about': 'About',
    'nav.portfolio': 'Portfolio',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Juan R Guerrero',
    'hero.subtitle': 'Professional Developer',
    'hero.description': 'Creating exceptional digital experiences with clean code and intuitive design',
    'hero.contact': 'Contact Me',
    'hero.portfolio': 'View Portfolio',
    
    // About Section
    'about.title': 'About Me',
    'about.description1': 'I am a passionate developer who creates innovative technological solutions that transform ideas into digital realities. With years of experience in web and mobile development, I specialize in creating exceptional user experiences.',
    'about.description2': 'My approach combines technical creativity with a deep understanding of user needs, resulting in products that not only work perfectly but also delight those who use them.',
    'about.years': 'Years of Experience',
    'about.projects': 'Completed Projects',
    'about.satisfaction': 'Client Satisfaction',
    
    // Portfolio Section
    'portfolio.title': 'Portfolio',
    'portfolio.subtitle': 'Featured Projects',
    'portfolio.description': 'A selection of my best work that demonstrates my experience and creativity in software development.',
    'portfolio.project1.title': 'MusicFlow',
    'portfolio.project1.tech': 'Flutter, Dart, Firebase',
    'portfolio.project1.description': 'Modern music mobile application with streaming playback, custom playlists and intuitive interface.',
    'portfolio.project2.title': 'CGT DO SRL',
    'portfolio.project2.tech': 'Vue.js, SQL, Docker',
    'portfolio.project2.description': 'Solar panels, security cameras and web development company in Dominican Republic.',
    'portfolio.project3.title': 'deeXy Virtual Assistant',
    'portfolio.project3.tech': 'Flutter, ChatGPT API, Generative AI',
    'portfolio.project3.description': 'Intelligent virtual assistant that can generate text, videos and images. Your personal assistant for any work area.',
    'portfolio.viewProject': 'View Project',
    'portfolio.viewCode': 'View Code',
    
    // Skills Section
    'skills.title': 'Skills',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.tools': 'Tools',
    
    // Contact Section
    'contact.title': 'Contact',
    'contact.email': 'juan@ejemplo.com',
    'contact.phone': '+57 300 123 4567',
    'contact.location': 'Bogotá, Colombia',
    
    // Footer
    'footer.copyright': 'All rights reserved.'
  },
  
  pt: {
    // Header
    'nav.about': 'Sobre',
    'nav.portfolio': 'Portfólio',
    'nav.skills': 'Habilidades',
    'nav.contact': 'Contato',
    
    // Hero Section
    'hero.title': 'Juan R Guerrero',
    'hero.subtitle': 'Desenvolvedor Profissional',
    'hero.description': 'Criando experiências digitais excepcionais com código limpo e design intuitivo',
    'hero.contact': 'Entre em Contato',
    'hero.portfolio': 'Ver Portfólio',
    
    // About Section
    'about.title': 'Sobre Mim',
    'about.description1': 'Sou um desenvolvedor apaixonado por criar soluções tecnológicas inovadoras que transformam ideias em realidades digitais. Com anos de experiência em desenvolvimento web e mobile, me especializo em criar experiências de usuário excepcionais.',
    'about.description2': 'Minha abordagem combina criatividade técnica com um profundo entendimento das necessidades do usuário, resultando em produtos que não apenas funcionam perfeitamente, mas também encantam quem os utiliza.',
    'about.years': 'Anos de Experiência',
    'about.projects': 'Projetos Concluídos',
    'about.satisfaction': 'Satisfação do Cliente',
    
    // Portfolio Section
    'portfolio.title': 'Portfólio',
    'portfolio.subtitle': 'Projetos Destacados',
    'portfolio.description': 'Uma seleção dos meus melhores trabalhos que demonstram minha experiência e criatividade no desenvolvimento de software.',
    'portfolio.project1.title': 'MusicFlow',
    'portfolio.project1.tech': 'Flutter, Dart, Firebase',
    'portfolio.project1.description': 'Aplicação móvel de música moderna com reprodução em streaming, listas personalizadas e interface intuitiva.',
    'portfolio.project2.title': 'CGT DO SRL',
    'portfolio.project2.tech': 'Vue.js, SQL, Docker',
    'portfolio.project2.description': 'Empresa de painéis solares, câmeras de segurança e desenvolvimento web na República Dominicana.',
    'portfolio.project3.title': 'deeXy Virtual Assistant',
    'portfolio.project3.tech': 'Flutter, API ChatGPT, IA Generativa',
    'portfolio.project3.description': 'Assistente virtual inteligente que pode gerar texto, vídeos e imagens. Seu assistente pessoal para qualquer área de trabalho.',
    'portfolio.viewProject': 'Ver Projeto',
    'portfolio.viewCode': 'Ver Código',
    
    // Skills Section
    'skills.title': 'Habilidades',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.tools': 'Ferramentas',
    
    // Contact Section
    'contact.title': 'Contato',
    'contact.email': 'juan@ejemplo.com',
    'contact.phone': '+57 300 123 4567',
    'contact.location': 'Bogotá, Colombia',
    
    // Footer
    'footer.copyright': 'Todos os direitos reservados.'
  },

  fr: {
    // Header
    'nav.about': 'À Propos',
    'nav.portfolio': 'Portfolio',
    'nav.skills': 'Compétences',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Juan R Guerrero',
    'hero.subtitle': 'Développeur Professionnel',
    'hero.description': 'Créer des expériences numériques exceptionnelles avec un code propre et un design intuitif',
    'hero.contact': 'Contactez-moi',
    'hero.portfolio': 'Voir le Portfolio',
    
    // About Section
    'about.title': 'À Propos de Moi',
    'about.description1': 'Je suis un développeur passionné qui crée des solutions technologiques innovantes qui transforment les idées en réalités numériques. Avec des années d\'expérience dans le développement web et mobile, je me spécialise dans la création d\'expériences utilisateur exceptionnelles.',
    'about.description2': 'Mon approche combine la créativité technique avec une compréhension approfondie des besoins des utilisateurs, résultant en des produits qui non seulement fonctionnent parfaitement, mais enchantent aussi ceux qui les utilisent.',
    'about.years': 'Années d\'Expérience',
    'about.projects': 'Projets Terminés',
    'about.satisfaction': 'Satisfaction Client',
    
    // Portfolio Section
    'portfolio.title': 'Portfolio',
    'portfolio.subtitle': 'Projets Mis en Avant',
    'portfolio.description': 'Une sélection de mes meilleurs travaux qui démontrent mon expérience et ma créativité dans le développement de logiciels.',
    'portfolio.project1.title': 'MusicFlow',
    'portfolio.project1.tech': 'Flutter, Dart, Firebase',
    'portfolio.project1.description': 'Application mobile de musique moderne avec lecture en streaming, listes personnalisées et interface intuitive.',
         'portfolio.project2.title': 'CGT DO SRL',
    'portfolio.project3.title': 'deeXy Assistant Virtuel',
    'portfolio.project3.tech': 'Flutter, API ChatGPT, IA Générative',
    'portfolio.project3.description': 'Assistant virtuel intelligent qui peut générer du texte, des vidéos et des images. Votre assistant personnel pour n\'importe quel domaine de travail.',
    'portfolio.viewProject': 'Voir le Projet',
    'portfolio.viewCode': 'Voir le Code',
    
    // Skills Section
    'skills.title': 'Compétences',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.tools': 'Outils',
    
    // Contact Section
    'contact.title': 'Contact',
    'contact.email': 'juan@ejemplo.com',
    'contact.phone': '+57 300 123 4567',
    'contact.location': 'Bogotá, Colombie',
    
    // Footer
    'footer.copyright': 'Tous droits réservés.'
  },
  
  de: {
    // Header
    'nav.about': 'Über Mich',
    'nav.portfolio': 'Portfolio',
    'nav.skills': 'Fähigkeiten',
    'nav.contact': 'Kontakt',
    
    // Hero Section
    'hero.title': 'Juan R Guerrero',
    'hero.subtitle': 'Professioneller Entwickler',
    'hero.description': 'Außergewöhnliche digitale Erfahrungen mit sauberem Code und intuitivem Design schaffen',
    'hero.contact': 'Kontaktiere Mich',
    'hero.portfolio': 'Portfolio Anzeigen',
    
    // About Section
    'about.title': 'Über Mich',
    'about.description1': 'Ich bin ein leidenschaftlicher Entwickler, der innovative technologische Lösungen schafft, die Ideen in digitale Realitäten verwandeln. Mit jahrelanger Erfahrung in Web- und Mobile-Entwicklung spezialisiere ich mich auf die Schaffung außergewöhnlicher Benutzererfahrungen.',
    'about.description2': 'Mein Ansatz kombiniert technische Kreativität mit einem tiefen Verständnis der Benutzerbedürfnisse, was zu Produkten führt, die nicht nur perfekt funktionieren, sondern auch diejenigen begeistern, die sie verwenden.',
    'about.years': 'Jahre Erfahrung',
    'about.projects': 'Abgeschlossene Projekte',
    'about.satisfaction': 'Kundenzufriedenheit',
    
    // Portfolio Section
    'portfolio.title': 'Portfolio',
    'portfolio.subtitle': 'Ausgewählte Projekte',
    'portfolio.description': 'Eine Auswahl meiner besten Arbeiten, die meine Erfahrung und Kreativität in der Softwareentwicklung demonstrieren.',
    'portfolio.project1.title': 'MusicFlow',
    'portfolio.project1.tech': 'Flutter, Dart, Firebase',
    'portfolio.project1.description': 'Moderne Musik-Mobile-Anwendung mit Streaming-Wiedergabe, benutzerdefinierten Wiedergabelisten und intuitiver Benutzeroberfläche.',
         'portfolio.project2.title': 'CGT DO SRL',
    'portfolio.project3.title': 'deeXy Virtual Assistant',
    'portfolio.project3.tech': 'Flutter, ChatGPT API, Generative KI',
    'portfolio.project3.description': 'Intelligenter virtueller Assistent, der Text, Videos und Bilder generieren kann. Ihr persönlicher Assistent für jeden Arbeitsbereich.',
    'portfolio.viewProject': 'Projekt Anzeigen',
    'portfolio.viewCode': 'Code Anzeigen',
    
    // Skills Section
    'skills.title': 'Fähigkeiten',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.tools': 'Werkzeuge',
    
    // Contact Section
    'contact.title': 'Kontakt',
    'contact.email': 'juan@ejemplo.com',
    'contact.phone': '+57 300 123 4567',
    'contact.location': 'Bogotá, Kolumbien',
    
    // Footer
    'footer.copyright': 'Alle Rechte vorbehalten.'
  },
  
  it: {
    // Header
    'nav.about': 'Chi Sono',
    'nav.portfolio': 'Portfolio',
    'nav.skills': 'Competenze',
    'nav.contact': 'Contatto',
    
    // Hero Section
    'hero.title': 'Juan R Guerrero',
    'hero.subtitle': 'Sviluppatore Professionale',
    'hero.description': 'Creare esperienze digitali eccezionali con codice pulito e design intuitivo',
    'hero.contact': 'Contattami',
    'hero.portfolio': 'Vedi Portfolio',
    
    // About Section
    'about.title': 'Chi Sono',
    'about.description1': 'Sono uno sviluppatore appassionato che crea soluzioni tecnologiche innovative che trasformano le idee in realtà digitali. Con anni di esperienza nello sviluppo web e mobile, mi specializzo nella creazione di esperienze utente eccezionali.',
    'about.description2': 'Il mio approccio combina creatività tecnica con una profonda comprensione delle esigenze dell\'utente, risultando in prodotti che non solo funzionano perfettamente, ma deliziano anche chi li utilizza.',
    'about.years': 'Anni di Esperienza',
    'about.projects': 'Progetti Completati',
    'about.satisfaction': 'Soddisfazione del Cliente',
    
    // Portfolio Section
    'portfolio.title': 'Portfolio',
    'portfolio.subtitle': 'Progetti in Evidenza',
    'portfolio.description': 'Una selezione dei miei migliori lavori che dimostrano la mia esperienza e creatività nello sviluppo software.',
    'portfolio.project1.title': 'MusicFlow',
    'portfolio.project1.tech': 'Flutter, Dart, Firebase',
    'portfolio.project1.description': 'Applicazione mobile di musica moderna con riproduzione in streaming, playlist personalizzate e interfaccia intuitiva.',
         'portfolio.project2.title': 'CGT DO SRL',
    'portfolio.project3.title': 'deeXy Virtual Assistant',
    'portfolio.project3.tech': 'Flutter, API ChatGPT, IA Generativa',
    'portfolio.project3.description': 'Assistente virtuale intelligente che può generare testo, video e immagini. Il tuo assistente personale per qualsiasi area lavorativa.',
    'portfolio.viewProject': 'Vedi Progetto',
    'portfolio.viewCode': 'Vedi Codice',
    
    // Skills Section
    'skills.title': 'Competenze',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.tools': 'Strumenti',
    
    // Contact Section
    'contact.title': 'Contatto',
    'contact.email': 'juan@ejemplo.com',
    'contact.phone': '+57 300 123 4567',
    'contact.location': 'Bogotá, Colombia',
    
    // Footer
    'footer.copyright': 'Tutti i diritti riservati.'
  }
}

// Función para detectar el idioma del navegador
export function detectLanguage(): string {
  // Obtener idioma del navegador
  const browserLang = navigator.language.split('-')[0]
  
  // Verificar si el idioma está soportado
  if (translations[browserLang]) {
    return browserLang
  }
  
  // Si no está soportado, usar español como fallback
  return 'es'
}

// Función para obtener traducción
export function t(key: string, lang: string = 'es'): string {
  const langTranslations = translations[lang] || translations['es']
  return langTranslations[key] || key
}

// Función para cambiar idioma
export function changeLanguage(lang: string): void {
  if (translations[lang]) {
    localStorage.setItem('preferred-language', lang)
    window.location.reload()
  }
}
