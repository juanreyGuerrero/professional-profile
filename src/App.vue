<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Logo from './components/Logo.vue'
import MusicFlowImage from './components/MusicFlowImage.vue'
import CGTImage from './components/CGTImage.vue'
import DeeXyImage from './components/DeeXyImage.vue'

const currentSection = ref('about')
const isMenuOpen = ref(false)
const isScrolled = ref(false)
const lastScrollY = ref(0)
const isNavVisible = ref(true)

onMounted(() => {
  // Animación de entrada
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in')
      }
    })
  })
  
  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el)
  })
  
  // Efecto de foco con cursor
  const handleMouseMove = (e: MouseEvent) => {
    const x = e.clientX
    const y = e.clientY
    document.documentElement.style.setProperty('--mouse-x', `${x}px`)
    document.documentElement.style.setProperty('--mouse-y', `${y}px`)
  }
  
  // Detectar scroll para el nav
  const handleScroll = () => {
    const currentScrollY = window.scrollY
    
    // Detectar si se hizo scroll
    isScrolled.value = currentScrollY > 50
    
    // Detectar dirección del scroll
    if (currentScrollY > lastScrollY.value && currentScrollY > 100) {
      // Scroll hacia abajo - ocultar nav
      isNavVisible.value = false
    } else if (currentScrollY < lastScrollY.value) {
      // Scroll hacia arriba - mostrar nav
      isNavVisible.value = true
    }
    
    lastScrollY.value = currentScrollY
  }
  
  document.addEventListener('mousemove', handleMouseMove)
  document.addEventListener('scroll', handleScroll)
  
  // Cleanup
  return () => {
    document.removeEventListener('mousemove', handleMouseMove)
    document.removeEventListener('scroll', handleScroll)
  }
})

const scrollToSection = (section: string) => {
  currentSection.value = section
  isMenuOpen.value = false
  const element = document.getElementById(section)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}


</script>

<template>
  <div id="app" class="min-h-screen bg-transparent">
    <!-- Header/Navigation -->
    <header 
      :class="[
        'fixed left-0 right-0 z-50 transition-all duration-500 spotlight-effect',
        isScrolled 
          ? 'bg-black/20 backdrop-blur-md border-b border-white/20 shadow-lg' 
          : 'bg-transparent',
        isNavVisible ? 'top-0' : '-top-20'
      ]"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex-shrink-0">
            <Logo />
          </div>
          
          <!-- Desktop Navigation -->
          <nav class="hidden md:flex space-x-8">
            <button 
              v-for="item in ['about', 'portfolio', 'skills', 'contact']" 
              :key="item"
              @click="scrollToSection(item)"
              :class="{ 'text-white': currentSection === item, 'text-gray-300': currentSection !== item }"
              class="nav-item"
            >
              {{ item === 'about' ? 'Sobre Mí' : item === 'portfolio' ? 'Portafolio' : item === 'skills' ? 'Habilidades' : 'Contacto' }}
            </button>
          </nav>
          

          
          <!-- Mobile menu button -->
          <button @click="toggleMenu" class="md:hidden flex flex-col space-y-1 p-2">
            <span class="w-6 h-0.5 bg-white transition-all duration-300" :class="{ 'rotate-45 translate-y-1.5': isMenuOpen }"></span>
            <span class="w-6 h-0.5 bg-white transition-all duration-300" :class="{ 'opacity-0': isMenuOpen }"></span>
            <span class="w-6 h-0.5 bg-white transition-all duration-300" :class="{ '-rotate-45 -translate-y-1.5': isMenuOpen }"></span>
          </button>
        </div>
        
        <!-- Mobile Navigation -->
        <div v-show="isMenuOpen" class="md:hidden border-t border-white/20 py-4">
          <div class="flex flex-col space-y-4">
            <button 
              v-for="item in ['about', 'portfolio', 'skills', 'contact']" 
              :key="item"
              @click="scrollToSection(item)"
              :class="{ 'text-white': currentSection === item, 'text-gray-300': currentSection !== item }"
              class="text-left px-4 py-2 text-lg font-medium hover:text-white transition-colors duration-300"
            >
              {{ item === 'about' ? 'Sobre Mí' : item === 'portfolio' ? 'Portafolio' : item === 'skills' ? 'Habilidades' : 'Contacto' }}
            </button>
            

          </div>
        </div>
      </div>
    </header>

    <!-- Hero Section -->
    <section id="hero" class="min-h-screen flex items-center pt-4 bg-transparent relative overflow-hidden spotlight-effect">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="animate-on-scroll">
            <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4 sm:mb-6">
              <span class="title-line block">Juan Guerrero</span>
              <span class="title-line block text-gradient">Desarrollador Profesional</span>
            </h1>
            <p class="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 leading-relaxed px-4 sm:px-0">
              Creando experiencias digitales excepcionales con código limpio y diseño intuitivo
            </p>
            <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <button @click="scrollToSection('contact')" class="btn-primary text-sm sm:text-base py-3 px-6 sm:px-8">
                Contáctame
              </button>
              <button @click="scrollToSection('portfolio')" class="btn-secondary text-sm sm:text-base py-3 px-6 sm:px-8">
                Ver Portafolio
              </button>
            </div>
          </div>
          
          <div class="relative h-96 lg:h-[500px] animate-on-scroll">
            <div class="geometric-shape w-32 h-32 top-10 left-10"></div>
            <div class="geometric-shape w-20 h-20 top-1/2 right-20"></div>
            <div class="geometric-shape w-16 h-16 bottom-20 left-1/3"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-16 sm:py-20 lg:py-24 bg-transparent spotlight-effect">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-4xl md:text-5xl font-bold text-center sm:text-left mb-16">
          <span class="text-gradient">Sobre Mí</span>
        </h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          <div class="md:col-span-2 animate-on-scroll text-center md:text-left">
            <p class="text-base sm:text-lg text-white mb-4 sm:mb-6 leading-relaxed">
              Mi nombre es Juan, soy un joven dominicano apasionado por la computación desde niño. Desde muy temprano descubrí mi curiosidad por la tecnología y cómo esta puede transformar la vida de las personas. Esa pasión me ha impulsado a aprender de manera constante y a desarrollar mis habilidades en programación, diseño web y creación de aplicaciones.
            </p>
            <p class="text-base sm:text-lg text-white mb-4 sm:mb-6 leading-relaxed">
              Soy un desarrollador comprometido con la innovación, enfocado en crear soluciones tecnológicas que convierten ideas en realidades digitales. Con experiencia en desarrollo web y aplicaciones móviles, me especializo en ofrecer experiencias de usuario excepcionales, cuidando tanto el rendimiento como la usabilidad.
            </p>
            <p class="text-base sm:text-lg text-white leading-relaxed">
              Mi enfoque combina la creatividad técnica con un profundo entendimiento de las necesidades del usuario, lo que me permite construir productos que no solo funcionan a la perfección, sino que también generan satisfacción y valor en quienes los utilizan. Mi visión es seguir creciendo como profesional, aportando soluciones que marquen la diferencia y contribuyan al avance de la industria tecnológica.
            </p>
          </div>
          
          <div class="animate-on-scroll">
            <div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-1 gap-4 sm:gap-6">
              <div class="stat-card">
                <span class="stat-number">2</span>
                <span class="stat-label text-white">Años de Experiencia</span>
              </div>
              <div class="stat-card">
                <span class="stat-number">13+</span>
                <span class="stat-label text-white">Proyectos Completados</span>
              </div>
              <div class="stat-card">
                <span class="stat-number">100%</span>
                <span class="stat-label text-white">Satisfacción del Cliente</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Portfolio Section -->
    <section id="portfolio" class="py-16 sm:py-20 lg:py-24 bg-transparent spotlight-effect">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="section-title text-center">Portafolio</h2>
        <p class="text-lg sm:text-xl text-white text-center mb-12 sm:mb-16 max-w-3xl mx-auto px-4">
          Una selección de mis mejores trabajos que demuestran mi experiencia y creatividad en el desarrollo de software.
        </p>
        
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <!-- Project 1 -->
          <div class="animate-on-scroll">
            <div class="card overflow-hidden">
              <div class="h-48 flex items-center justify-center">
                <MusicFlowImage />
              </div>
              <div class="p-6">
                <h3 class="text-xl font-bold text-white mb-2">MusicFlow</h3>
                <p class="text-sm text-green-400 font-medium mb-3">Flutter, Dart, Firebase</p>
                <p class="text-white mb-4">Aplicación móvil de música moderna con reproducción en streaming, listas personalizadas y interfaz intuitiva.</p>
                <div class="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <a 
                    href="https://1drv.ms/p/c/0bff7bc00afc723f/EaoKbQKsRZ5AuSf1nlxfhgoBkU9SZ_T6UKoZUl9QTPQfjg?e=4C3u62&nav=eyJzSWQiOjM0MiwiY0lkIjoyNDk4MDMxNDY0fQ" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    class="btn-primary text-xs sm:text-sm py-2 px-3 sm:px-4 inline-flex items-center justify-center"
                  >
                    Ver Proyecto
                  </a>
                  <a 
                    href="https://github.com/juanreyGuerrero/musicflow" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    class="btn-secondary text-xs sm:text-sm py-2 px-3 sm:px-4 inline-flex items-center justify-center"
                  >
                    Ver Código
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Project 2 -->
          <div class="animate-on-scroll">
            <div class="card overflow-hidden">
              <div class="h-48 flex items-center justify-center">
                <CGTImage />
              </div>
              <div class="p-6">
                <h3 class="text-xl font-bold text-white mb-2">CGT DO SRL</h3>
                <p class="text-sm text-green-400 font-medium mb-3">Vue.js, SQL, Docker</p>
                <p class="text-white mb-4">Empresa de paneles solares, cámaras de seguridad y desarrollo web en República Dominicana.</p>
                <div class="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <a 
                    href="https://www.cgt.do/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    class="btn-primary text-xs sm:text-sm py-2 px-3 sm:px-4 inline-flex items-center justify-center"
                  >
                    Ver Proyecto
                  </a>
                  <button class="btn-secondary text-xs sm:text-sm py-2 px-3 sm:px-4">Ver Código</button>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Project 3 -->
          <div class="animate-on-scroll">
            <div class="card overflow-hidden">
              <div class="h-48 flex items-center justify-center">
                <DeeXyImage />
              </div>
              <div class="p-6">
                <h3 class="text-xl font-bold text-white mb-2">deeXy Virtual Assistant</h3>
                <p class="text-sm text-green-400 font-medium mb-3">Flutter, ChatGPT API</p>
                <p class="text-white mb-4">Asistente virtual inteligente que puede generar texto, videos e imágenes. Tu asistente en cualquier área laboral.</p>
                <div class="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <a 
                    href="https://github.com/juanreyGuerrero/chat-flutter" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    class="btn-primary text-xs sm:text-sm py-2 px-3 sm:px-4 inline-flex items-center justify-center"
                  >
                    Ver Proyecto
                  </a>
                  <a 
                    href="https://github.com/juanreyGuerrero/chat-flutter" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    class="btn-secondary text-xs sm:text-sm py-2 px-3 sm:px-4 inline-flex items-center justify-center"
                  >
                    Ver Código
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="py-16 sm:py-20 lg:py-24 bg-transparent spotlight-effect">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="section-title text-center">Habilidades</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div class="animate-on-scroll">
            <div class="card p-8">
              <h3 class="text-2xl font-bold text-white mb-6 text-center">Frontend</h3>
              <div class="flex flex-wrap gap-3 justify-center">
                <span class="skill-tag">Flutter</span>
                <span class="skill-tag">Tailwind CSS</span>
                <span class="skill-tag">Vue.js</span>
                <span class="skill-tag">React</span>
                <span class="skill-tag">TypeScript</span>
              </div>
            </div>
          </div>
          
          <div class="animate-on-scroll">
            <div class="card p-8">
              <h3 class="text-2xl font-bold text-white mb-6 text-center">Backend</h3>
              <div class="flex flex-wrap gap-3 justify-center">
                <span class="skill-tag">Node.js</span>
                <span class="skill-tag">Python</span>
                <span class="skill-tag">Express</span>
                <span class="skill-tag">Django</span>
                <span class="skill-tag">REST APIs</span>
              </div>
            </div>
          </div>
          
          <div class="animate-on-scroll">
            <div class="card p-8">
              <h3 class="text-2xl font-bold text-white mb-6 text-center">Herramientas</h3>
              <div class="flex flex-wrap gap-3 justify-center">
                <span class="skill-tag">Git</span>
                <span class="skill-tag">Docker</span>
                <span class="skill-tag">AWS</span>
                <span class="skill-tag">Figma</span>
                <span class="skill-tag">Jira</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-16 sm:py-20 lg:py-24 bg-transparent spotlight-effect">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="section-title text-center">Contacto</h2>
        <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <!-- Contact Information -->
          <div class="animate-on-scroll">
            <div class="space-y-8">
              <!-- Email -->
              <div class="contact-card group">
                <div class="contact-icon-wrapper">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div class="contact-content">
                  <h3 class="contact-label">Email</h3>
                  <a 
                    href="mailto:juanreyguerrero51@gmail.com" 
                    class="contact-value group-hover:text-indigo-300 transition-all duration-300"
                  >
                    juanreyguerrero51@gmail.com
                  </a>
                </div>
              </div>
              
              <!-- Phone -->
              <div class="contact-card group">
                <div class="contact-icon-wrapper">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <div class="contact-content">
                  <h3 class="contact-label">Teléfono</h3>
                  <a 
                    href="tel:809-778-8792" 
                    class="contact-value group-hover:text-indigo-300 transition-all duration-300"
                  >
                    809-778-8792
                  </a>
                </div>
              </div>
              
              <!-- Location -->
              <div class="contact-card group">
                <div class="contact-icon-wrapper">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div class="contact-content">
                  <h3 class="contact-label">Ubicación</h3>
                  <span class="contact-value">Santo Domingo, República Dominicana</span>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Social Links -->
          <div class="animate-on-scroll">
            <div class="space-y-6">
              <h3 class="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 text-center lg:text-left">Redes Profesionales</h3>
              
              <a href="https://www.linkedin.com/in/juan-rey-guerrero-117b0a115/" target="_blank" rel="noopener noreferrer" class="social-link group">
                <div class="social-icon">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.047-1.852-3.047-1.853 0-2.136 1.445-2.136 2.939v5.677H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <span>LinkedIn</span>
              </a>
              
              <a href="https://github.com/juanreyGuerrero" target="_blank" rel="noopener noreferrer" class="social-link group">
                <div class="social-icon">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-transparent text-white py-8 sm:py-12 spotlight-effect">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p class="text-sm sm:text-base text-gray-400">&copy; 2024 Juan Guerrero. Todos los derechos reservados.</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
/* Solo estilos específicos que no se pueden lograr con Tailwind */
.timeline-item {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease;
}

.timeline-item.animate-in {
  opacity: 1;
  transform: translateY(0);
}

/* Animación del título */
.title-line {
  display: block;
  opacity: 0;
  transform: translateY(30px);
  animation: slideUp 0.8s ease forwards;
}

.title-line:nth-child(2) { animation-delay: 0.2s; }
.title-line:nth-child(3) { animation-delay: 0.4s; }

@keyframes slideUp {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive timeline */
@media (max-width: 768px) {
  .timeline-item {
    margin-left: 0 !important;
    margin-right: 0 !important;
    text-align: left !important;
  }
}

/* Responsive improvements */
@media (max-width: 640px) {
  .section-title {
    font-size: 2rem;
    line-height: 2.5rem;
  }
  
  .card {
    padding: 1.5rem;
  }
  
  .stat-card {
    padding: 1.5rem;
  }
  
  .contact-card {
    padding: 1rem;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 1.75rem;
    line-height: 2.25rem;
  }
  
  .card {
    padding: 1rem;
  }
  
  .stat-card {
    padding: 1rem;
  }
  
  .contact-card {
    padding: 0.75rem;
  }
  
  .btn-primary,
  .btn-secondary {
    font-size: 0.875rem;
    padding: 0.5rem 1rem;
  }
}
</style>
