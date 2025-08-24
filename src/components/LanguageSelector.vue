<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { languages, detectLanguage, changeLanguage } from '../i18n'

const currentLanguage = ref('es')
const isOpen = ref(false)

onMounted(() => {
  // Detectar idioma preferido del usuario
  const savedLang = localStorage.getItem('preferred-language')
  if (savedLang) {
    currentLanguage.value = savedLang
  } else {
    currentLanguage.value = detectLanguage()
  }
})

const selectLanguage = (langCode: string) => {
  currentLanguage.value = langCode
  changeLanguage(langCode)
}

const getCurrentLanguage = () => {
  return languages.find(lang => lang.code === currentLanguage.value) || languages[0]
}
</script>

<template>
  <div class="relative">
    <!-- Botón del selector de idioma -->
    <button
      @click="isOpen = !isOpen"
      class="flex items-center space-x-2 px-3 py-2 rounded-lg bg-white border border-gray-200 hover:border-green-500 transition-colors duration-300"
    >
      <span class="text-lg">{{ getCurrentLanguage().flag }}</span>
      <span class="text-sm font-medium text-gray-700">{{ getCurrentLanguage().code.toUpperCase() }}</span>
      <svg
        class="w-4 h-4 text-gray-500 transition-transform duration-300"
        :class="{ 'rotate-180': isOpen }"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>

    <!-- Dropdown de idiomas -->
    <div
      v-show="isOpen"
      class="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
    >
      <div class="py-2">
        <button
          v-for="language in languages"
          :key="language.code"
          @click="selectLanguage(language.code)"
          class="w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-gray-50 transition-colors duration-200"
          :class="{ 'bg-green-50 text-green-700': currentLanguage === language.code }"
        >
          <span class="text-lg">{{ language.flag }}</span>
          <div class="flex flex-col">
            <span class="text-sm font-medium">{{ language.nativeName }}</span>
            <span class="text-xs text-gray-500">{{ language.name }}</span>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Estilos específicos del componente */
</style>
