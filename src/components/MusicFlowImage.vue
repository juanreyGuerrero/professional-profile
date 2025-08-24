<template>
  <div class="music-flow-image">
    <!-- Background gradient -->
    <div class="bg-gradient"></div>
    
    <!-- Abstract circular elements -->
    <div class="abstract-elements">
      <div class="circle-arc arc-1"></div>
      <div class="circle-arc arc-2"></div>
      <div class="circle-arc arc-3"></div>
      <div class="small-circle circle-1"></div>
      <div class="small-circle circle-2"></div>
      <div class="small-circle circle-3"></div>
    </div>
    
    <!-- Central content -->
    <div class="content">
      <!-- Musical note icon -->
      <div class="note-icon">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 3V16.5C12 18.9853 9.98528 21 7.5 21C5.01472 21 3 18.9853 3 16.5C3 14.0147 5.01472 12 7.5 12C8.32843 12 9.10825 12.2754 9.70833 12.75L12 14.5V3Z" fill="url(#noteGradient)"/>
          <defs>
            <linearGradient id="noteGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style="stop-color:#FF69B4"/>
              <stop offset="100%" style="stop-color:#8B5CF6"/>
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      <!-- Title and creator info -->
      <div class="text-content">
        <h1 class="project-title">MusicFlow</h1>
        <p class="creator-name">BY JUAN REY GUERRERO</p>
        <p class="creator-role">FLUTTER DEVELOPER</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// No props needed for this component
</script>

<style scoped>
.music-flow-image {
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
  background: linear-gradient(135deg, #8B5CF6 0%, #7C3AED 25%, #6D28D9 50%, #5B21B6 75%, #4C1D95 100%);
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

.circle-arc {
  position: absolute;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: transparent;
  border-right-color: transparent;
}

.arc-1 {
  width: 120px;
  height: 120px;
  top: 20%;
  left: 15%;
  transform: rotate(-45deg);
  border-width: 1px;
}

.arc-2 {
  width: 80px;
  height: 80px;
  top: 60%;
  right: 20%;
  transform: rotate(30deg);
  border-width: 1px;
  border-color: rgba(147, 197, 253, 0.4);
}

.arc-3 {
  width: 60px;
  height: 60px;
  top: 30%;
  right: 30%;
  transform: rotate(15deg);
  border-width: 1px;
  border-color: rgba(196, 181, 253, 0.4);
}

.small-circle {
  position: absolute;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
}

.circle-1 {
  width: 8px;
  height: 8px;
  top: 25%;
  left: 25%;
}

.circle-2 {
  width: 6px;
  height: 6px;
  top: 70%;
  right: 25%;
}

.circle-3 {
  width: 4px;
  height: 4px;
  top: 45%;
  left: 70%;
}

.content {
  position: relative;
  z-index: 3;
  display: flex;
  align-items: center;
  gap: 20px;
}

.note-icon {
  width: 80px;
  height: 80px;
}

.note-icon svg {
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
}

.creator-name {
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  color: #93C5FD;
  margin: 0;
  line-height: 1;
}

.creator-role {
  font-family: 'Inter', sans-serif;
  font-size: 0.8rem;
  font-weight: 400;
  color: #A5B4FC;
  margin: 0;
  line-height: 1;
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
  
  .note-icon {
    width: 60px;
    height: 60px;
  }
}
</style>
