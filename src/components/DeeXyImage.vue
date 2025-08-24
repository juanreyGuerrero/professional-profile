<template>
  <div class="deexy-image">
    <!-- Background gradient -->
    <div class="bg-gradient"></div>
    
    <!-- Abstract AI elements -->
    <div class="abstract-elements">
      <!-- Neural network nodes -->
      <div class="neural-node node-1"></div>
      <div class="neural-node node-2"></div>
      <div class="neural-node node-3"></div>
      <div class="neural-node node-4"></div>
      <div class="neural-node node-5"></div>
      
      <!-- Connection lines -->
      <div class="connection-line line-1"></div>
      <div class="connection-line line-2"></div>
      <div class="connection-line line-3"></div>
      
      <!-- AI particles -->
      <div class="ai-particle particle-1"></div>
      <div class="ai-particle particle-2"></div>
      <div class="ai-particle particle-3"></div>
      <div class="ai-particle particle-4"></div>
    </div>
    
    <!-- Central content -->
    <div class="content">
      <!-- AI brain icon -->
      <div class="ai-icon">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <!-- Brain + AI elements -->
          <defs>
            <linearGradient id="brainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#3B82F6"/>
              <stop offset="100%" style="stop-color:#1E40AF"/>
            </linearGradient>
            <linearGradient id="aiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style="stop-color:#8B5CF6"/>
              <stop offset="100%" style="stop-color:#7C3AED"/>
            </linearGradient>
          </defs>
          <!-- Brain representation -->
          <path d="M12 2C8.5 2 6 4.5 6 8c0 2.5 1.5 4.5 3 6l1.5 1.5L12 18l1.5-2.5L15 14c1.5-1.5 3-3.5 3-6 0-3.5-2.5-6-6-6z" fill="url(#brainGradient)"/>
          <!-- AI circuit elements -->
          <circle cx="8" cy="6" r="1" fill="url(#aiGradient)"/>
          <circle cx="16" cy="6" r="1" fill="url(#aiGradient)"/>
          <circle cx="12" cy="12" r="1" fill="url(#aiGradient)"/>
        </svg>
      </div>
      
      <!-- Title and description -->
      <div class="text-content">
        <h1 class="project-title">deeXy</h1>
        <p class="ai-type">VIRTUAL ASSISTANT</p>
        <p class="ai-capabilities">TEXTO • VIDEOS • IMÁGENES</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// No props needed for this component
</script>

<style scoped>
.deexy-image {
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
  background: linear-gradient(135deg, #1E40AF 0%, #3B82F6 25%, #60A5FA 50%, #93C5FD 75%, #DBEAFE 100%);
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

/* Neural network nodes */
.neural-node {
  position: absolute;
  background: rgba(139, 92, 246, 0.8);
  border: 2px solid rgba(139, 92, 246, 0.6);
  border-radius: 50%;
  box-shadow: 0 0 20px rgba(139, 92, 246, 0.4);
}

.node-1 {
  width: 16px;
  height: 16px;
  top: 20%;
  left: 15%;
  animation: pulse 2s infinite;
}

.node-2 {
  width: 12px;
  height: 12px;
  top: 30%;
  right: 20%;
  animation: pulse 2s infinite 0.5s;
}

.node-3 {
  width: 14px;
  height: 14px;
  top: 70%;
  left: 25%;
  animation: pulse 2s infinite 1s;
}

.node-4 {
  width: 10px;
  height: 10px;
  top: 60%;
  right: 15%;
  animation: pulse 2s infinite 1.5s;
}

.node-5 {
  width: 18px;
  height: 18px;
  top: 45%;
  left: 70%;
  animation: pulse 2s infinite 0.7s;
}

/* Connection lines */
.connection-line {
  position: absolute;
  background: linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.6), transparent);
  height: 1px;
  animation: flow 3s infinite;
}

.line-1 {
  width: 40px;
  top: 25%;
  left: 20%;
  transform: rotate(45deg);
}

.line-2 {
  width: 35px;
  top: 55%;
  right: 25%;
  transform: rotate(-30deg);
}

.line-3 {
  width: 50px;
  top: 75%;
  left: 30%;
  transform: rotate(15deg);
}

/* AI particles */
.ai-particle {
  position: absolute;
  background: rgba(59, 130, 246, 0.7);
  border-radius: 50%;
  animation: float 4s infinite ease-in-out;
}

.particle-1 {
  width: 6px;
  height: 6px;
  top: 15%;
  right: 30%;
  animation-delay: 0s;
}

.particle-2 {
  width: 8px;
  height: 8px;
  top: 80%;
  left: 60%;
  animation-delay: 1s;
}

.particle-3 {
  width: 4px;
  height: 4px;
  top: 40%;
  right: 40%;
  animation-delay: 2s;
}

.particle-4 {
  width: 10px;
  height: 10px;
  top: 65%;
  left: 40%;
  animation-delay: 3s;
}

.content {
  position: relative;
  z-index: 3;
  display: flex;
  align-items: center;
  gap: 20px;
}

.ai-icon {
  width: 80px;
  height: 80px;
}

.ai-icon svg {
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

.ai-type {
  font-family: 'Inter', sans-serif;
  font-size: 0.8rem;
  font-weight: 600;
  color: #FCD34D;
  margin: 0;
  line-height: 1;
  letter-spacing: 0.5px;
}

.ai-capabilities {
  font-family: 'Inter', sans-serif;
  font-size: 0.7rem;
  font-weight: 500;
  color: #A7F3D0;
  margin: 0;
  line-height: 1;
  opacity: 0.9;
}

/* Animations */
@keyframes pulse {
  0%, 100% { opacity: 0.6; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.1); }
}

@keyframes flow {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.8; }
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
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
  
  .ai-icon {
    width: 60px;
    height: 60px;
  }
  
  .ai-type {
    font-size: 0.7rem;
  }
}
</style>
