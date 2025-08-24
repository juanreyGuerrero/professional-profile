# 🚀 Juan R Guerrero - Perfil Profesional

Un perfil profesional moderno, minimalista y multilingüe construido con Vue.js, Tailwind CSS y TypeScript.

## ✨ Características

- **🎨 Diseño Moderno**: Interfaz elegante y minimalista con animaciones suaves
- **🌍 Multilingüe**: Soporte para 6 idiomas (Español, Inglés, Portugués, Francés, Alemán, Italiano)
- **📱 Responsive**: Diseño adaptativo para todos los dispositivos
- **⚡ Performance**: Construido con Vue 3 Composition API y Vite
- **🎯 SEO Optimizado**: Meta tags y estructura semántica
- **🔍 Detección Automática**: Detecta el idioma del navegador del visitante

## 🛠️ Tecnologías Utilizadas

- **Frontend**: Vue.js 3 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animaciones**: CSS Transitions + Intersection Observer
- **Internacionalización**: Sistema personalizado i18n
- **Deployment**: GitHub Pages (recomendado)

## 📱 Secciones del Perfil

### 🏠 Hero Section
- Presentación personal impactante
- Botones de llamada a la acción
- Animaciones de entrada

### 👨‍💻 Sobre Mí
- Descripción profesional
- Estadísticas destacadas
- Experiencia y enfoque

### 🎵 Portafolio
- **MusicFlow**: Aplicación Flutter de música
- **CGT DO SRL**: Empresa de paneles solares, cámaras de seguridad y desarrollo web
- **Dashboard Analítico**: Panel Vue.js + D3.js

### 🎯 Habilidades
- Frontend (Vue.js, React, TypeScript)
- Backend (Node.js, Python, Express)
- Herramientas (Git, Docker, AWS, Figma)

### 📞 Contacto
- Información de contacto
- Ubicación y disponibilidad

## 🚀 Instalación y Desarrollo

### Prerrequisitos
- Node.js 16+ 
- npm o yarn

### Pasos de instalación

1. **Clona el repositorio**
```bash
git clone https://github.com/juanreyGuerrero/professional-profile.git
cd professional-profile
```

2. **Instala las dependencias**
```bash
npm install
```

3. **Ejecuta en modo desarrollo**
```bash
npm run dev
```

4. **Construye para producción**
```bash
npm run build
```

5. **Vista previa de la build**
```bash
npm run preview
```

## 🌐 Configuración de Idiomas

El sistema soporta 6 idiomas con detección automática:

- 🇪🇸 **Español** (idioma por defecto)
- 🇺🇸 **Inglés**
- 🇧🇷 **Portugués**
- 🇫🇷 **Francés**
- 🇩🇪 **Alemán**
- 🇮🇹 **Italiano**

### Personalización de Traducciones

Edita `src/i18n/index.ts` para modificar o agregar idiomas:

```typescript
export const translations: Record<string, Translations> = {
  es: {
    'hero.title': 'Juan R Guerrero',
    'hero.subtitle': 'Desarrollador Profesional',
    // ... más traducciones
  },
  en: {
    'hero.title': 'Juan R Guerrero',
    'hero.subtitle': 'Professional Developer',
    // ... más traducciones
  }
}
```

## 🎨 Personalización

### Colores y Temas
Modifica `tailwind.config.cjs` para personalizar:
- Paleta de colores
- Tipografías
- Animaciones personalizadas

### Componentes
- **MusicFlowImage**: Imagen personalizada del proyecto MusicFlow
- **LanguageSelector**: Selector de idiomas
- **App.vue**: Componente principal con todas las secciones

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes Vue
│   ├── LanguageSelector.vue
│   └── MusicFlowImage.vue
├── i18n/               # Sistema de internacionalización
│   └── index.ts
├── App.vue             # Componente principal
├── main.ts             # Punto de entrada
└── style.css           # Estilos globales y Tailwind

public/                 # Archivos estáticos
tailwind.config.cjs     # Configuración de Tailwind
postcss.config.cjs      # Configuración de PostCSS
```

## 🚀 Deployment

### GitHub Pages
1. Construye el proyecto: `npm run build`
2. Sube la carpeta `dist/` a la rama `gh-pages`
3. Configura GitHub Pages en la configuración del repositorio

### Netlify/Vercel
1. Conecta tu repositorio
2. Configura el comando de build: `npm run build`
3. Directorio de salida: `dist`

## 🔗 Enlaces Destacados

- **MusicFlow**: [Ver Proyecto](https://1drv.ms/p/c/0bff7bc00afc723f/EaoKbQKsRZ5AuSf1nlxfhgoBkU9SZ_T6UKoZUl9QTPQfjg?e=4C3u62&nav=eyJzSWQiOjM0MiwiY0lkIjoyNDk4MDMxNDY0fQ)
- **Código MusicFlow**: [GitHub](https://github.com/juanreyGuerrero/musicflow)

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🤝 Contribuciones

Las contribuciones son bienvenidas! Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📞 Contacto

- **Email**: juan@ejemplo.com
- **Teléfono**: +57 300 123 4567
- **Ubicación**: Bogotá, Colombia
- **GitHub**: [@juanreyGuerrero](https://github.com/juanreyGuerrero)

---

**Desarrollado con ❤️ usando Vue.js, Tailwind CSS y TypeScript**
