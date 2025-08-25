<template>
  <div class="logo-container">
    <svg 
      class="logo-svg" 
      viewBox="0 0 80 60" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <!-- Fondo circular con gradiente -->
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#6366f1;stop-opacity:1" />
          <stop offset="50%" style="stop-color:#8b5cf6;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#a855f7;stop-opacity:1" />
        </linearGradient>
        
        <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#ffffff;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#e0e7ff;stop-opacity:1" />
        </linearGradient>
        
        <!-- Sombra interna -->
        <filter id="innerShadow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="2"/>
          <feOffset dx="0" dy="2" result="offsetblur"/>
          <feFlood flood-color="#000000" flood-opacity="0.3"/>
          <feComposite in2="offsetblur" operator="in"/>
          <feMerge>
            <feMergeNode/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      <!-- Círculo de fondo -->
      <circle 
        cx="40" 
        cy="30" 
        r="28" 
        fill="url(#logoGradient)"
        filter="url(#innerShadow)"
        class="logo-background"
      />
      
      <!-- Letra J - más grande y clara -->
      <path 
        d="M22 12 L22 38 Q22 46 30 46 L34 46 Q42 46 42 38 L42 32 Q42 26 38 26 L38 38 Q38 42 34 42 L30 42 Q26 42 26 38 L26 12 Z" 
        fill="url(#textGradient)"
        class="logo-letter"
      />
      
      <!-- Letra G - más grande y clara -->
      <path 
        d="M48 12 L48 38 Q48 46 40 46 L36 46 Q28 46 28 38 L28 12 L32 12 L32 38 Q32 42 36 42 L40 42 Q44 42 44 38 L44 12 Z" 
        fill="url(#textGradient)"
        class="logo-letter"
      />
      
      <!-- Punto entre las letras - más visible -->
      <circle 
        cx="35" 
        cy="25" 
        r="2" 
        fill="url(#textGradient)"
        class="logo-dot"
      />
    </svg>
    
         <!-- Texto del logo -->
     <div class="logo-text">
       <span class="logo-name">Juan Guerrero</span>
       <span class="logo-title">Mobile and Web Developer</span>
     </div>
  </div>
</template>

<script setup lang="ts">
// No props needed for this logo component
</script>

<style scoped>
.logo-container {
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.logo-container:hover {
  transform: scale(1.05);
}

.logo-svg {
  width: 45px;
  height: 45px;
  filter: drop-shadow(0 4px 8px rgba(99, 102, 241, 0.3));
}

.logo-background {
  transition: all 0.3s ease;
}

.logo-letter {
  transition: all 0.3s ease;
}

.logo-dot {
  transition: all 0.3s ease;
}

.logo-container:hover .logo-background {
  filter: url(#innerShadow) brightness(1.1);
}

.logo-container:hover .logo-letter {
  filter: brightness(1.2);
}

.logo-container:hover .logo-dot {
  filter: brightness(1.3);
  transform: scale(1.2);
}

.logo-text {
  display: none;
  flex-direction: column;
  line-height: 1;
}

.logo-name {
  font-size: 14px;
  font-weight: 700;
  color: white;
  letter-spacing: 0.5px;
}

.logo-title {
  font-size: 10px;
  font-weight: 400;
  color: #e0e7ff;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  margin-top: 2px;
}

/* Mostrar texto en pantallas medianas y grandes */
@media (min-width: 768px) {
  .logo-text {
    display: flex;
  }
  
  .logo-svg {
    width: 55px;
    height: 55px;
  }
}

/* Animación de entrada */
@keyframes logoEntrance {
  0% {
    opacity: 0;
    transform: scale(0.8) rotate(-10deg);
  }
  100% {
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
}

.logo-container {
  animation: logoEntrance 0.6s ease-out;
}

/* Efecto de brillo en hover */
.logo-container::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(45deg, #6366f1, #8b5cf6, #a855f7, #6366f1);
  border-radius: 50%;
  z-index: -1;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.logo-container:hover::before {
  opacity: 0.3;
}
</style>
