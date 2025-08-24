<template>
  <div class="cgt-image">
    <!-- Background gradient -->
    <div class="bg-gradient"></div>
    
    <!-- Abstract elements representing solar panels, security, and tech -->
    <div class="abstract-elements">
      <!-- Solar panel representation -->
      <div class="solar-panel panel-1"></div>
      <div class="solar-panel panel-2"></div>
      <div class="solar-panel panel-3"></div>
      
      <!-- Security camera representation -->
      <div class="camera camera-1"></div>
      <div class="camera camera-2"></div>
      
      <!-- Tech elements -->
      <div class="tech-circle tech-1"></div>
      <div class="tech-circle tech-2"></div>
      <div class="tech-circle tech-3"></div>
    </div>
    
    <!-- Central content -->
    <div class="content">
      <!-- Main icon representing the company -->
      <div class="company-icon">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <!-- Combined icon: sun + shield + code -->
          <defs>
            <linearGradient id="sunGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#FCD34D"/>
              <stop offset="100%" style="stop-color:#F59E0B"/>
            </linearGradient>
            <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#10B981"/>
              <stop offset="100%" style="stop-color:#059669"/>
            </linearGradient>
          </defs>
          <circle cx="12" cy="12" r="8" fill="url(#sunGradient)" opacity="0.9"/>
          <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="url(#shieldGradient)"/>
          <path d="M8 14L10 16L16 10" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      
      <!-- Title and company info -->
      <div class="text-content">
        <h1 class="project-title">CGT DO SRL</h1>
        <p class="company-services">PANELES SOLARES • CÁMARAS • DESARROLLO WEB</p>
        <p class="company-location">REPÚBLICA DOMINICANA</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// No props needed for this component
</script>

<style scoped>
.cgt-image {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.bg-gradient {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #10B981 0%, #059669 25%, #047857 50%, #065F46 75%, #064E3B 100%);
  z-index: 1;
}

.abstract-elements {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
}

/* Solar panels representation */
.solar-panel {
  position: absolute;
  background: linear-gradient(45deg, #FCD34D, #F59E0B);
  border-radius: 4px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.panel-1 {
  width: 60px;
  height: 40px;
  top: 15%;
  left: 10%;
  transform: rotate(-15deg);
}

.panel-2 {
  width: 50px;
  height: 35px;
  top: 25%;
  right: 15%;
  transform: rotate(20deg);
}

.panel-3 {
  width: 45px;
  height: 30px;
  top: 70%;
  left: 20%;
  transform: rotate(10deg);
}

/* Security cameras representation */
.camera {
  position: absolute;
  background: #374151;
  border-radius: 50%;
  border: 2px solid #6B7280;
}

.camera::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 8px;
  height: 8px;
  background: #10B981;
  border-radius: 50%;
}

.camera-1 {
  width: 20px;
  height: 20px;
  top: 60%;
  right: 25%;
}

.camera-2 {
  width: 16px;
  height: 16px;
  top: 35%;
  left: 70%;
}

/* Tech circles */
.tech-circle {
  position: absolute;
  background: rgba(16, 185, 129, 0.3);
  border: 1px solid rgba(16, 185, 129, 0.6);
  border-radius: 50%;
}

.tech-1 {
  width: 12px;
  height: 12px;
  top: 20%;
  right: 30%;
}

.tech-2 {
  width: 8px;
  height: 8px;
  top: 75%;
  right: 10%;
}

.tech-3 {
  width: 6px;
  height: 6px;
  top: 45%;
  left: 60%;
}

.content {
  position: relative;
  z-index: 3;
  display: flex;
  align-items: center;
  gap: 20px;
}

.company-icon {
  width: 80px;
  height: 80px;
}

.company-icon svg {
  width: 100%;
  height: 100%;
}

.text-content {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.project-title {
  font-family: 'Inter', sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  margin: 0;
  line-height: 1;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.company-services {
  font-family: 'Inter', sans-serif;
  font-size: 0.8rem;
  font-weight: 600;
  color: #FCD34D;
  margin: 0;
  line-height: 1;
  letter-spacing: 0.5px;
}

.company-location {
  font-family: 'Inter', sans-serif;
  font-size: 0.7rem;
  font-weight: 500;
  color: #A7F3D0;
  margin: 0;
  line-height: 1;
  opacity: 0.9;
}

/* Responsive adjustments */
@media (max-width: 640px) {
  .content {
    flex-direction: column;
    gap: 15px;
    text-align: center;
  }
  
  .project-title {
    font-size: 2rem;
  }
  
  .company-icon {
    width: 60px;
    height: 60px;
  }
  
  .company-services {
    font-size: 0.7rem;
  }
}
</style>
