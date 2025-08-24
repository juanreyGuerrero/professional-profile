<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import LanguageSelector from './components/LanguageSelector.vue'
import MusicFlowImage from './components/MusicFlowImage.vue'
import CGTImage from './components/CGTImage.vue'
import DeeXyImage from './components/DeeXyImage.vue'
import { t, detectLanguage } from './i18n'

const currentSection = ref('about')
const isMenuOpen = ref(false)
const currentLanguage = ref('es')

onMounted(() => {
  // Detectar idioma preferido del usuario
  const savedLang = localStorage.getItem('preferred-language')
  if (savedLang) {
    currentLanguage.value = savedLang
  } else {
    currentLanguage.value = detectLanguage()
  }

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

// Función para obtener traducciones
const getText = (key: string) => t(key, currentLanguage.value)
</script>

<template>
  <div id="app" class="min-h-screen bg-white">
    <!-- Header/Navigation -->
    <header class="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200 z-50 transition-all duration-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex-shrink-0">
            <div class="text-2xl font-bold text-green-500">JRG</div>
          </div>
          
          <!-- Desktop Navigation -->
          <nav class="hidden md:flex space-x-8">
            <button 
              v-for="item in ['about', 'portfolio', 'skills', 'contact']" 
              :key="item"
              @click="scrollToSection(item)"
              :class="{ 'text-green-500': currentSection === item, 'text-gray-600': currentSection !== item }"
              class="nav-item"
            >
              {{ getText(`nav.${item}`) }}
            </button>
          </nav>
          
          <!-- Language Selector -->
          <div class="hidden md:block">
            <LanguageSelector />
          </div>
          
          <!-- Mobile menu button -->
          <button @click="toggleMenu" class="md:hidden flex flex-col space-y-1 p-2">
            <span class="w-6 h-0.5 bg-gray-600 transition-all duration-300" :class="{ 'rotate-45 translate-y-1.5': isMenuOpen }"></span>
            <span class="w-6 h-0.5 bg-gray-600 transition-all duration-300" :class="{ 'opacity-0': isMenuOpen }"></span>
            <span class="w-6 h-0.5 bg-gray-600 transition-all duration-300" :class="{ '-rotate-45 -translate-y-1.5': isMenuOpen }"></span>
          </button>
        </div>
        
        <!-- Mobile Navigation -->
        <div v-show="isMenuOpen" class="md:hidden border-t border-gray-200 py-4">
          <div class="flex flex-col space-y-4">
            <button 
              v-for="item in ['about', 'portfolio', 'skills', 'contact']" 
              :key="item"
              @click="scrollToSection(item)"
              :class="{ 'text-green-500': currentSection === item, 'text-gray-600': currentSection !== item }"
              class="text-left px-4 py-2 text-lg font-medium hover:text-green-500 transition-colors duration-300"
            >
              {{ getText(`nav.${item}`) }}
            </button>
            
            <!-- Mobile Language Selector -->
            <div class="px-4 py-2">
              <LanguageSelector />
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Hero Section -->
    <section id="hero" class="min-h-screen flex items-center pt-16 bg-gradient-to-br from-gray-50 to-green-50 relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="animate-on-scroll">
            <h1 class="text-5xl md:text-7xl font-bold text-gray-900 leading-tight mb-6">
              <span class="title-line block">{{ getText('hero.title') }}</span>
              <span class="title-line block">{{ getText('hero.subtitle') }}</span>
              <span class="title-line block text-gradient">{{ getText('hero.subtitle') }}</span>
            </h1>
            <p class="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              {{ getText('hero.description') }}
            </p>
            <div class="flex flex-col sm:flex-row gap-4">
              <button @click="scrollToSection('contact')" class="btn-primary">
                {{ getText('hero.contact') }}
              </button>
              <button @click="scrollToSection('portfolio')" class="btn-secondary">
                {{ getText('hero.portfolio') }}
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
    <section id="about" class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="section-title">{{ getText('about.title') }}</h2>
        <div class="grid lg:grid-cols-3 gap-12">
          <div class="lg:col-span-2 animate-on-scroll">
            <p class="text-lg text-gray-600 mb-6 leading-relaxed">
              {{ getText('about.description1') }}
            </p>
            <p class="text-lg text-gray-600 leading-relaxed">
              {{ getText('about.description2') }}
            </p>
          </div>
          
          <div class="animate-on-scroll">
            <div class="space-y-6">
              <div class="stat-card">
                <span class="stat-number">5+</span>
                <span class="stat-label">{{ getText('about.years') }}</span>
              </div>
              <div class="stat-card">
                <span class="stat-number">50+</span>
                <span class="stat-label">{{ getText('about.projects') }}</span>
              </div>
              <div class="stat-card">
                <span class="stat-number">100%</span>
                <span class="stat-label">{{ getText('about.satisfaction') }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Portfolio Section -->
    <section id="portfolio" class="py-24 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="section-title">{{ getText('portfolio.title') }}</h2>
        <p class="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          {{ getText('portfolio.description') }}
        </p>
        
        <div class="grid lg:grid-cols-3 gap-8">
          <!-- Project 1 -->
          <div class="animate-on-scroll">
            <div class="card overflow-hidden">
              <div class="h-48 flex items-center justify-center">
                <MusicFlowImage />
              </div>
              <div class="p-6">
                <h3 class="text-xl font-bold text-gray-900 mb-2">{{ getText('portfolio.project1.title') }}</h3>
                <p class="text-sm text-green-600 font-medium mb-3">{{ getText('portfolio.project1.tech') }}</p>
                <p class="text-gray-600 mb-4">{{ getText('portfolio.project1.description') }}</p>
                <div class="flex gap-3">
                  <a 
                    href="https://1drv.ms/p/c/0bff7bc00afc723f/EaoKbQKsRZ5AuSf1nlxfhgoBkU9SZ_T6UKoZUl9QTPQfjg?e=4C3u62&nav=eyJzSWQiOjM0MiwiY0lkIjoyNDk4MDMxNDY0fQ" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    class="btn-primary text-sm py-2 px-4 inline-flex items-center justify-center"
                  >
                    {{ getText('portfolio.viewProject') }}
                  </a>
                  <a 
                    href="https://github.com/juanreyGuerrero/musicflow" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    class="btn-secondary text-sm py-2 px-4 inline-flex items-center justify-center"
                  >
                    {{ getText('portfolio.viewCode') }}
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
                <h3 class="text-xl font-bold text-gray-900 mb-2">{{ getText('portfolio.project2.title') }}</h3>
                <p class="text-sm text-green-600 font-medium mb-3">{{ getText('portfolio.project2.tech') }}</p>
                <p class="text-gray-600 mb-4">{{ getText('portfolio.project2.description') }}</p>
                <div class="flex gap-3">
                  <a 
                    href="https://www.cgt.do/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    class="btn-primary text-sm py-2 px-4 inline-flex items-center justify-center"
                  >
                    {{ getText('portfolio.viewProject') }}
                  </a>
                  <button class="btn-secondary text-sm py-2 px-4">{{ getText('portfolio.viewCode') }}</button>
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
                <h3 class="text-xl font-bold text-gray-900 mb-2">{{ getText('portfolio.project3.title') }}</h3>
                <p class="text-sm text-green-600 font-medium mb-3">{{ getText('portfolio.project3.tech') }}</p>
                <p class="text-gray-600 mb-4">{{ getText('portfolio.project3.description') }}</p>
                <div class="flex gap-3">
                  <button class="btn-primary text-sm py-2 px-4">{{ getText('portfolio.viewProject') }}</button>
                  <button class="btn-secondary text-sm py-2 px-4">{{ getText('portfolio.viewCode') }}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="section-title">{{ getText('skills.title') }}</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="animate-on-scroll">
            <div class="card p-8">
              <h3 class="text-2xl font-bold text-gray-900 mb-6 text-center">{{ getText('skills.frontend') }}</h3>
              <div class="flex flex-wrap gap-3 justify-center">
                <span class="skill-tag">Vue.js</span>
                <span class="skill-tag">React</span>
                <span class="skill-tag">TypeScript</span>
                <span class="skill-tag">CSS3</span>
                <span class="skill-tag">HTML5</span>
              </div>
            </div>
          </div>
          
          <div class="animate-on-scroll">
            <div class="card p-8">
              <h3 class="text-2xl font-bold text-gray-900 mb-6 text-center">{{ getText('skills.backend') }}</h3>
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
              <h3 class="text-2xl font-bold text-gray-900 mb-6 text-center">{{ getText('skills.tools') }}</h3>
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
    <section id="contact" class="py-24 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="section-title">{{ getText('contact.title') }}</h2>
        <div class="grid lg:grid-cols-2 gap-12 items-center">
          <div class="animate-on-scroll">
            <div class="space-y-6">
              <div class="contact-item">
                <span class="contact-icon">📧</span>
                <span class="text-lg">{{ getText('contact.email') }}</span>
              </div>
              <div class="contact-item">
                <span class="contact-icon">📱</span>
                <span class="text-lg">{{ getText('contact.phone') }}</span>
              </div>
              <div class="contact-item">
                <span class="contact-icon">📍</span>
                <span class="text-lg">{{ getText('contact.location') }}</span>
              </div>
            </div>
          </div>
          
          <div class="animate-on-scroll">
            <div class="space-y-4">
              <a href="#" class="social-link block">LinkedIn</a>
              <a href="#" class="social-link block">GitHub</a>
              <a href="#" class="social-link block">Twitter</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p class="text-gray-400">&copy; 2024 Juan R Guerrero. {{ getText('footer.copyright') }}</p>
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
</style>
