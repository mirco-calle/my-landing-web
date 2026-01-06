# 🚀 MircoDev - Portfolio & Landing Page

> **Innovación en desarrollo web y soluciones tecnológicas**

Página web profesional de portafolio personal construida con Next.js 14, TypeScript y TailwindCSS. Diseñada para mostrar servicios, proyectos y experiencia como desarrollador frontend freelance.

---

## 📋 Tabla de Contenidos

- [Características](#-características)
- [Stack Tecnológico](#-stack-tecnológico)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Requisitos Previos](#-requisitos-previos)
- [Instalación](#-instalación)
- [Uso](#-uso)
- [Secciones](#-secciones)
- [Despliegue](#-despliegue)
- [Personalización](#-personalización)

---

## ✨ Características

- ✅ **Diseño Moderno y Responsivo** - Interfaz atractiva adaptada a todos los dispositivos
- ✅ **Animaciones Fluidas** - Transiciones suaves con Framer Motion
- ✅ **Efectos de Partículas** - Fondo interactivo con tsParticles
- ✅ **Optimización SEO** - Metadatos configurados para mejor posicionamiento
- ✅ **TypeScript** - Código tipado para mayor robustez
- ✅ **Componentes Reutilizables** - Arquitectura modular y escalable
- ✅ **Carrusel de Proyectos** - Showcase interactivo con Swiper
- ✅ **Animaciones de Texto** - Efectos de escritura con react-type-animation
- ✅ **Contadores Animados** - Estadísticas dinámicas con react-countup

---

## 🛠️ Stack Tecnológico

### Core

- **[Next.js 14.2.4](https://nextjs.org/)** - Framework React con App Router
- **[React 18](https://react.dev/)** - Biblioteca de UI
- **[TypeScript 5](https://www.typescriptlang.org/)** - Superset tipado de JavaScript

### Estilos

- **[TailwindCSS 3.4.4](https://tailwindcss.com/)** - Framework CSS utility-first
- **[Urbanist Font](https://fonts.google.com/specimen/Urbanist)** - Tipografía de Google Fonts

### Animaciones & Efectos

- **[Framer Motion 11.2.13](https://www.framer.com/motion/)** - Animaciones declarativas
- **[tsParticles 3.5.0](https://particles.js.org/)** - Sistema de partículas interactivas
- **[Swiper 11.1.4](https://swiperjs.com/)** - Carrusel táctil moderno
- **[react-type-animation 3.2.0](https://www.npmjs.com/package/react-type-animation)** - Efectos de escritura
- **[react-countup 6.5.3](https://www.npmjs.com/package/react-countup)** - Contadores animados

### UI & Iconos

- **[Lucide React 0.400.0](https://lucide.dev/)** - Iconos SVG modernos

### Herramientas de Desarrollo

- **ESLint** - Linter de código
- **PostCSS** - Procesador CSS
- **Autoprefixer** - Prefijos CSS automáticos

---

## 📁 Estructura del Proyecto

```
my-landing-web/
├── app/                          # App Router de Next.js
│   ├── (routes)/                 # Rutas agrupadas
│   │   ├── blog/                 # Página de blog
│   │   ├── contacto/             # Página de contacto
│   │   ├── portfolio/            # Galería de proyectos
│   │   ├── services/             # Servicios ofrecidos
│   │   └── tienda/               # Tienda (e-commerce)
│   ├── globals.css               # Estilos globales
│   ├── layout.tsx                # Layout raíz
│   └── page.tsx                  # Página de inicio
├── components/                   # Componentes reutilizables
│   ├── servicesComponent/        # Componentes de servicios
│   ├── store/                    # Estado global
│   ├── avatar.tsx                # Avatar animado
│   ├── cover-particles.tsx       # Fondo de partículas
│   ├── header.tsx                # Encabezado
│   ├── introduction.tsx          # Sección de introducción
│   ├── navbar.tsx                # Barra de navegación
│   ├── portfolio-box.tsx         # Tarjeta de proyecto
│   ├── time-line.tsx             # Línea de tiempo
│   └── ...                       # Otros componentes
├── data/                         # Datos estáticos
├── data.tsx                      # Configuración de datos
├── public/                       # Archivos estáticos
│   ├── image-1.jpg ... image-8.jpg  # Imágenes de proyectos
│   └── profile1.png ... profile6.png # Avatares de testimonios
├── utils/                        # Utilidades
├── next.config.mjs               # Configuración de Next.js
├── tailwind.config.ts            # Configuración de Tailwind
├── tsconfig.json                 # Configuración de TypeScript
└── package.json                  # Dependencias del proyecto
```

---

## 📦 Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** >= 18.x
- **npm** >= 9.x (o **yarn** / **pnpm** / **bun**)
- **Git** (opcional, para clonar el repositorio)

---

## 🚀 Instalación

### 1. Clonar el repositorio (si aplica)

```bash
git clone <url-del-repositorio>
cd my-landing-web
```

### 2. Instalar dependencias

```bash
npm install
# o
yarn install
# o
pnpm install
# o
bun install
```

---

## 💻 Uso

### Modo Desarrollo

Ejecuta el servidor de desarrollo:

```bash
npm run dev
# o
yarn dev
# o
pnpm dev
# o
bun dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

Los cambios se reflejan automáticamente al editar archivos.

### Compilar para Producción

```bash
npm run build
npm run start
```

### Linter

```bash
npm run lint
```

---

## 📄 Secciones

### 🏠 Inicio (`/`)

- Introducción personal con animaciones
- Avatar interactivo
- Fondo de partículas dinámico
- Enlaces a redes sociales

### 💼 Servicios (`/services`)

- Branding
- Diseño Web
- Desarrollo Web
- Copywriting
- SEO
- Contadores de logros (años de experiencia, clientes, proyectos, premios)

### 🎨 Portafolio (`/portfolio`)

- Galería de proyectos con carrusel
- Enlaces a GitHub y demos en vivo
- Imágenes de proyectos destacados

### 🛒 Tienda (`/tienda`)

- Sección de e-commerce (en desarrollo)

### 📝 Blog (`/blog`)

- Artículos y publicaciones (en desarrollo)

### 📧 Contacto (`/contacto`)

- Formulario de contacto (en desarrollo)

---

## 🌐 Despliegue

### Despliegue en Vercel (Recomendado)

La forma más sencilla de desplegar esta aplicación Next.js es usando [Vercel](https://vercel.com):

1. Sube tu código a GitHub/GitLab/Bitbucket
2. Importa el proyecto en [Vercel](https://vercel.com/new)
3. Vercel detectará automáticamente Next.js y configurará el build
4. ¡Despliega!

### Despliegue Manual

```bash
npm run build
npm run start
```

Consulta la [documentación de despliegue de Next.js](https://nextjs.org/docs/deployment) para más opciones.

---

## 🎨 Personalización

### Modificar Datos Personales

Edita el archivo `data.tsx` para actualizar:

- **Redes sociales** (`socialNetworks`)
- **Navegación** (`itemsNavbar`)
- **Experiencia laboral** (`dataAboutPage`)
- **Estadísticas** (`dataCounter`)
- **Servicios** (`serviceData`)
- **Proyectos** (`dataPortfolio`)
- **Testimonios** (`dataTestimonials`)

### Cambiar Estilos

- **Colores y tema**: Edita `tailwind.config.ts`
- **Estilos globales**: Modifica `app/globals.css`
- **Fuente**: Cambia la fuente en `app/layout.tsx`

### Agregar Nuevas Páginas

Crea una nueva carpeta en `app/(routes)/` con un archivo `page.tsx`.

---

## 📝 Metadatos SEO

Los metadatos están configurados en `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "MircoDev",
  description: "Innovación en desarrollo web y soluciones tecnológicas.",
};
```

Personaliza estos valores para mejorar el SEO.

---

## 📄 Licencia

Este proyecto es de uso personal. Todos los derechos reservados.

---

## 👤 Autor

**MircoDev**

- Portfolio: [MircoDev](https://mircodev.com)
- GitHub: [@mirco-calle](https://github.com/mirco-calle)

---

## 🤝 Contribuciones

Este es un proyecto personal, pero las sugerencias son bienvenidas.

---

**Desarrollado con ❤️ por MircoDev**
