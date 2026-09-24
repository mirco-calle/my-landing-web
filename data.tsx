import {
  BookText,
  HomeIcon,
  Linkedin,
  Rocket,
  ContactRound,
  Building2,
  Layers,
  Calculator,
  Code2,
  Bot,
  Compass,
} from "lucide-react";

export const socialNetworks = [
  {
    id: 1,
    name: "LinkedIn",
    logo: <Linkedin size={26} strokeWidth={1.5} />,
    src: "https://www.linkedin.com/in/mirco-calle",
  },
];

export const itemsNavbar = [
  {
    id: 1,
    title: "Inicio",
    icon: <HomeIcon size={24} color="#fff" strokeWidth={1.5} />,
    link: "/",
  },
  {
    id: 2,
    title: "Proyectos",
    icon: <BookText size={24} color="#fff" strokeWidth={1.5} />,
    link: "/portfolio",
  },
  {
    id: 3,
    title: "Servicios",
    icon: <Rocket size={24} color="#fff" strokeWidth={1.5} />,
    link: "/services",
  },
  {
    id: 4,
    title: "Contacto",
    icon: <ContactRound size={24} color="#fff" strokeWidth={1.5} />,
    link: "/contact",
  },
];

export const dataAboutPage = [
  {
    id: 1,
    title: "Ingeniería Civil & Fundamentos Técnicos",
    subtitle: "Diseño, Estructuras y Construcción",
    description:
      "Formación en ingeniería civil con base en comportamiento estructural, normativas técnicas, análisis de cargas y procesos constructivos en obra.",
    date: "Base de Ingeniería",
  },
  {
    id: 2,
    title: "Desarrollo de Software & Creación de SaaS",
    subtitle: "Arquitectura Full Stack & Sistemas Multi-Tenant",
    description:
      "Desarrollo de aplicaciones web y de escritorio escalables con React, Django, PostgreSQL y arquitecturas multi-tenant, creando soluciones funcionales en producción.",
    date: "Desarrollo de Software",
  },
  {
    id: 3,
    title: "Construction Technology, BIM & Automatización",
    subtitle: "Revit, Robot Structural Analysis, Software & IA",
    description:
      "Especialización en la convergencia: aplicación de software a medida, metodología BIM (Revit), análisis estructural (Robot) y herramientas de IA para transformar los procesos de la construcción.",
    date: "Presente & Enfoque Actual",
  },
];

export const dataCounter = [
  {
    id: 0,
    endCounter: 1,
    suffix: "º",
    text: "Ingeniería Civil & Software",
    lineRight: true,
    lineRightMobile: true,
  },
  {
    id: 1,
    endCounter: 3,
    suffix: "+",
    text: "SaaS Desarrollados",
    lineRight: true,
    lineRightMobile: false,
  },
  {
    id: 2,
    endCounter: 100,
    suffix: "%",
    text: "Enfoque en Construcción",
    lineRight: true,
    lineRightMobile: true,
  },
  {
    id: 3,
    endCounter: 2,
    suffix: "",
    text: "Disciplinas: Revit & Robot",
    lineRight: false,
    lineRightMobile: false,
  },
];

export const serviceData = [
  {
    icon: <Layers size={36} />,
    title: "Modelado BIM & Revit",
    description:
      "Modelado tridimensional arquitectónico y estructural en Autodesk Revit, generación de documentación técnica coordinada, familias paramétricas y extracción organizada de vistas para proyectos.",
    category: "BIM",
  },
  {
    icon: <Building2 size={36} />,
    title: "Soporte en Cálculo Estructural",
    description:
      "Modelado analítico preliminar, predimensionamiento de elementos estructurales y asistencia en comprobaciones analíticas mediante Autodesk Robot Structural Analysis bajo normativas técnicas.",
    category: "Estructuras",
  },
  {
    icon: <Calculator size={36} />,
    title: "Presupuestos y Cómputos Métricos",
    description:
      "Extracción sistemática de cantidades (Quantity Takeoff), estructuración de análisis de precios unitarios (APUs) y presupuestos de obra precisos potenciados con la plataforma HPress.",
    category: "Estimating",
  },
  {
    icon: <Code2 size={36} />,
    title: "Software a Medida para Construcción",
    description:
      "Desarrollo de aplicaciones web y plataformas SaaS especializadas para empresas constructoras, consultoras y profesionales del sector AEC que necesitan digitalizar sus operaciones.",
    category: "Software",
  },
  {
    icon: <Bot size={36} />,
    title: "IA & Automatización para AEC",
    description:
      "Automatización de flujos de trabajo repetitivos entre herramientas técnicas, procesamiento inteligente de datos de obra y asistentes para optimizar la toma de decisiones.",
    category: "Automatización",
  },
];

export interface PortfolioProject {
  id: number;
  title: string;
  subtitle?: string;
  category: "saas" | "bim" | "web";
  categoryLabel: string;
  image: string;
  urlGithub: string;
  urlDemo: string;
  description: string;
  tags: string[];
  featured?: boolean;
  inProgress?: boolean;
  highlights?: string[];
}

export const dataPortfolio: PortfolioProject[] = [
  {
    id: 1,
    title: "HPress — SaaS de Presupuestos y Gestión de Obra",
    subtitle: "Construction Estimating & Project Management Platform",
    category: "saas",
    categoryLabel: "Construction Tech SaaS",
    image: "/image-4.png",
    urlGithub: "https://github.com/mirco-calle",
    urlDemo: "https://hpress.netlify.app/",
    description:
      "Plataforma SaaS multi-tenant diseñada para ingenieros civiles y empresas constructoras. Permite el cálculo ágil y riguroso de presupuestos de obra, gestión de análisis de precios unitarios (APUs) y catálogo centralizado de insumos y recursos.",
    tags: [
      "Construcción",
      "Presupuestos de Obra",
      "SaaS Multi-Tenant",
      "React",
      "Django",
      "PostgreSQL",
    ],
    featured: true,
    highlights: [
      "Diseñado por y para ingenieros civiles",
      "Cálculo automatizado de costos directos e indirectos",
      "Catálogo maestro de insumos y rendimientos",
    ],
  },
  {
    id: 2,
    title: "Modelado Estructural & Documentación BIM",
    subtitle: "Caso de Estudio Práctico (Revit + Robot Structural Analysis)",
    category: "bim",
    categoryLabel: "Ingeniería & BIM",
    image: "/work-1.jpeg",
    urlGithub: "#!",
    urlDemo: "#!",
    description:
      "Proyecto en fase de documentación técnica integral: modelado geométrico en Autodesk Revit, vinculación con Autodesk Robot Structural Analysis para análisis de esfuerzos y generación de planos de armado y cómputos métricos.",
    tags: [
      "Autodesk Revit",
      "Robot Structural Analysis",
      "Modelado BIM",
      "Cálculo Estructural",
      "Cómputos Métricos",
    ],
    featured: true,
    inProgress: true,
    highlights: [
      "Modelado analítico y estructural coordinado",
      "Extracción paramétrica de tablas de cuantías de materiales",
      "Documentación y planos de despiece constructivo",
    ],
  },
  {
    id: 3,
    title: "LoveArt Desktop — AR Studio & Management",
    subtitle: "Software de Escritorio para Realidad Aumentada & 3D",
    category: "saas",
    categoryLabel: "Software & 3D",
    image: "/image-3.png",
    urlGithub: "https://github.com/mirco-calle/loveARt-web",
    urlDemo: "https://loveartweb.netlify.app/",
    description:
      "Aplicación de escritorio avanzada para la gestión y despliegue de experiencias interactivas con Realidad Aumentada. Permite enlazar fotografías físicas con animaciones audiovisuales y modelos 3D en tiempo real.",
    tags: [
      "Realidad Aumentada",
      "Desktop Software",
      "Gestión de Assets 3D",
      "Interactividad",
    ],
    highlights: [
      "Gestión de activos tridimensionales",
      "Integración de visores interactivos",
    ],
  },
  {
    id: 4,
    title: "DigiCard — Plataforma SaaS Multi-Tenant",
    subtitle: "Arquitectura Multi-Inquilino & Gestión Digital",
    category: "saas",
    categoryLabel: "SaaS Platform",
    image: "/image-2.png",
    urlGithub: "https://github.com/mirco-calle/digital_menu_for_restaurants",
    urlDemo: "https://digicardbo.netlify.app/",
    description:
      "Plataforma SaaS multi-tenant que demuestra solvencia en arquitectura de software: aislamiento seguro de bases de datos por cliente, paneles administrativos independientes y alta disponibilidad.",
    tags: ["SaaS Multi-Tenant", "Full Stack", "APIs REST", "Bases de Datos"],
    highlights: [
      "Aislamiento de inquilinos (Multi-tenancy)",
      "Panel de control y reportería en tiempo real",
    ],
  },
  {
    id: 5,
    title: "Plataforma Web Digital & UI Moderna",
    subtitle: "Desarrollo Web Frontend Responsivo",
    category: "web",
    categoryLabel: "Web Development",
    image: "/image-1.jpg",
    urlGithub: "https://github.com/mirco-calle/RestaurantPageByMirco.git",
    urlDemo: "https://pizza-page-by-mircodev.netlify.app/",
    description:
      "Desarrollo web enfocado en alto rendimiento, interfaz fluida y experiencia de usuario optimizada para dispositivos móviles y escritorio.",
    tags: ["Next.js / React", "Tailwind CSS", "Diseño Responsivo"],
  },
];

// ==================== BLOG DATA ====================

export const dataBlogPosts = [
  // MES 1
  {
    id: 1,
    title: "Cómo Automatizar tu Negocio con IA sin Programar",
    slug: "automatizar-negocio-ia-sin-programar",
    excerpt:
      "Descubre las 5 automatizaciones que todo negocio debería implementar hoy mismo para ahorrar tiempo y aumentar ventas.",
    content: "/blog-content/automatizar-negocio-ia.md",
    category: "Automatización",
    readTime: "8 min",
    publishDate: "2025-02-01",
    author: "Mirco Calle",
    image: "/blog/automatizacion-ia.jpg",
    featured: true,
    tags: ["IA", "Automatización", "n8n", "Productividad"],
    seo: {
      metaTitle: "Cómo Automatizar tu Negocio con IA sin Programar | Guía 2025",
      metaDescription:
        "Aprende a automatizar procesos de tu negocio usando IA sin necesidad de programar. Incluye ejemplos prácticos y herramientas gratuitas.",
      keywords: ["automatización", "IA", "negocios", "n8n", "sin código"],
    },
  },
  {
    id: 2,
    title: "5 Procesos que Toda Empresa Debería Automatizar",
    slug: "5-procesos-automatizar-empresa",
    excerpt:
      "Identifica los procesos manuales que están frenando el crecimiento de tu negocio y aprende cómo automatizarlos paso a paso.",
    content: "/blog-content/5-procesos-automatizar.md",
    category: "Procesos",
    readTime: "10 min",
    publishDate: "2025-02-15",
    author: "Mirco Calle",
    image: "/blog/procesos-automatizar.jpg",
    featured: true,
    tags: ["Automatización", "Procesos", "Eficiencia", "ROI"],
    seo: {
      metaTitle: "5 Procesos que Toda Empresa Debería Automatizar en 2025",
      metaDescription:
        "Descubre los 5 procesos empresariales más importantes para automatizar y cómo hacerlo de forma efectiva.",
      keywords: [
        "procesos",
        "automatización empresarial",
        "eficiencia",
        "productividad",
      ],
    },
  },
  // MES 2
  {
    id: 3,
    title: "Caso de Éxito: Cómo Ahorré 20 Horas/Semana con n8n",
    slug: "caso-exito-n8n-20-horas",
    excerpt:
      "Historia real de cómo implementé automatizaciones con n8n para un restaurante y reduje su carga operativa en un 60%. Incluye workflows descargables.",
    content: "/blog-content/caso-exito-n8n.md",
    category: "Casos de Éxito",
    readTime: "12 min",
    publishDate: "2025-03-01",
    author: "Mirco Calle",
    image: "/blog/caso-exito-n8n.jpg",
    featured: true,
    tags: ["n8n", "Caso de Éxito", "Restaurantes", "ROI"],
    seo: {
      metaTitle:
        "Caso de Éxito: 20 Horas Ahorradas con n8n | Automatización Real",
      metaDescription:
        "Caso de éxito real de automatización con n8n en un restaurante. Resultados, proceso y workflows descargables.",
      keywords: [
        "n8n",
        "caso de éxito",
        "automatización restaurante",
        "ahorro tiempo",
      ],
    },
  },
];

export const dataBlogCategories = [
  {
    id: 1,
    name: "Automatización",
    slug: "automatizacion",
    count: 8,
    icon: "⚙️",
  },
  { id: 2, name: "IA", slug: "ia", count: 5, icon: "🤖" },
  { id: 3, name: "Casos de Éxito", slug: "casos-exito", count: 4, icon: "🏆" },
  { id: 4, name: "Tutoriales", slug: "tutoriales", count: 6, icon: "📚" },
  { id: 5, name: "Estrategia", slug: "estrategia", count: 3, icon: "🎯" },
];

// ==================== CASE STUDIES DATA ====================

export const dataCaseStudies = [
  {
    id: 1,
    title: "Automatización Completa para Restaurante",
    slug: "automatizacion-restaurante-don-luigi",
    client: "Pizzería Don Luigi",
    industry: "Restaurantes",
    challenge:
      "Gestión manual de pedidos, inventario desorganizado, atención al cliente limitada a horario comercial",
    solution:
      "Sistema de automatización con n8n integrando WhatsApp, Google Sheets, y notificaciones automáticas",
    results: {
      timeSaved: "20 horas/semana",
      costReduction: "40%",
      salesIncrease: "25%",
      customerSatisfaction: "95%",
    },
    metrics: [
      { label: "Tiempo ahorrado", value: "20h/semana", icon: "⏱️" },
      { label: "Reducción de costos", value: "40%", icon: "💰" },
      { label: "Aumento en ventas", value: "25%", icon: "📈" },
      { label: "Satisfacción cliente", value: "95%", icon: "⭐" },
    ],
    technologies: ["n8n", "WhatsApp API", "Google Sheets", "Telegram"],
    testimonial: {
      quote:
        "Mirco transformó completamente nuestra operación. Ahora podemos atender pedidos 24/7 sin contratar más personal.",
      author: "Luigi Rossi",
      position: "Dueño, Pizzería Don Luigi",
      avatar: "/testimonials/luigi.jpg",
    },
    image: "/case-studies/restaurante-automatizacion.jpg",
    featured: true,
  },
];

// ==================== LEAD MAGNETS DATA ====================

export const dataLeadMagnets = [
  {
    id: 1,
    title: "Checklist: ¿Tu negocio necesita automatización?",
    description:
      "Descarga gratis esta checklist de 15 puntos para identificar qué procesos de tu negocio puedes automatizar hoy mismo y empezar a ahorrar tiempo y dinero.",
    type: "checklist" as const,
    thumbnail: "/lead-magnets/checklist-automatizacion-thumb.jpg",
    downloadUrl: "/downloads/checklist-automatizacion.pdf",
    benefits: [
      "Identifica procesos automatizables en 5 minutos",
      "Prioriza según impacto y facilidad",
      "Incluye ejemplos por industria",
      "Plantilla de ROI incluida",
    ],
    ctaText: "Descargar Checklist Gratis",
    featured: true,
  },
];

// ==================== DIGITAL PRODUCTS DATA ====================

export const dataDigitalProducts = [
  {
    id: 1,
    title: "Template: Sistema de Automatización para Restaurantes",
    slug: "template-automatizacion-restaurantes",
    description:
      "Sistema completo de automatización con n8n para gestión de pedidos por WhatsApp, control de inventario y marketing automatizado. Listo para usar en 1 hora.",
    price: 50,
    originalPrice: 99,
    thumbnail: "/products/template-restaurante.jpg",
    hotmartUrl: "", // 🔜 Agregar cuando crees el producto en Hotmart
    category: "Templates",
    badge: "Lanzamiento" as const,
    features: [
      "✅ Flujos de n8n pre-configurados (5 workflows)",
      "✅ Integración con WhatsApp Business API",
      "✅ Sistema de gestión de pedidos automático",
      "✅ Control de inventario con alertas",
      "✅ Marketing automático (cumpleaños, promociones)",
      "✅ Dashboard de métricas en Google Sheets",
      "✅ Video tutorial de instalación (30min)",
      "✅ 30 días de soporte por email",
      "✅ Actualizaciones gratuitas por 6 meses",
    ],
    whatYouGet: [
      "Archivo .json con workflows de n8n",
      "Plantilla de Google Sheets",
      "Guía de instalación PDF (20 páginas)",
      "Video tutorial paso a paso",
      "Acceso a comunidad privada (Telegram)",
    ],
    idealFor: [
      "Restaurantes y pizzerías",
      "Cafeterías y panaderías",
      "Servicios de delivery",
      "Negocios de comida rápida",
    ],
    results: {
      timeSaved: "15-20 horas/semana",
      roi: "Recuperas inversión en 1 semana",
      setup: "1-2 horas de configuración",
    },
  },
];

// ==================== RECOMMENDED TOOLS DATA ====================

export const dataRecommendedTools = [
  {
    id: 1,
    name: "DigitalOcean",
    description:
      "Hosting cloud confiable y económico para aplicaciones y automatizaciones. Lo uso para alojar todos mis proyectos de n8n.",
    category: "Hosting" as const,
    logo: "/tools/digitalocean-logo.svg",
    affiliateUrl: "", // 🔜 Registrarte en https://www.digitalocean.com/referral-program
    pricing: "Desde $4/mes",
    features: [
      "Servidores en 15+ regiones globales",
      "99.99% uptime garantizado",
      "Escalabilidad automática",
      "Soporte 24/7 en español",
      "$200 de crédito gratis para nuevos usuarios",
    ],
    myReview:
      "Llevo 3 años usando DigitalOcean para todos mis proyectos de automatización. La relación precio-calidad es imbatible y nunca he tenido problemas de caídas.",
    officialUrl: "https://www.digitalocean.com",
    commission: "$25 por referido",
  },
  {
    id: 2,
    name: "n8n Cloud",
    description:
      "Plataforma de automatización visual sin código. Mi herramienta #1 para crear workflows complejos sin programar.",
    category: "Automatización" as const,
    logo: "/tools/n8n-logo.svg",
    affiliateUrl: "", // 🔜 Contactar a n8n para programa de afiliados
    pricing: "Desde $20/mes",
    features: [
      "400+ integraciones nativas",
      "Workflows ilimitados",
      "Ejecuciones automáticas",
      "Sin límite de usuarios",
      "Self-hosted o cloud",
    ],
    myReview:
      "Uso n8n diariamente para todos mis proyectos de automatización. Es más flexible que Zapier y mucho más económico. La curva de aprendizaje vale totalmente la pena.",
    officialUrl: "https://n8n.io",
  },
  {
    id: 3,
    name: "Supabase",
    description:
      "Base de datos PostgreSQL como servicio. Alternativa open-source a Firebase, perfecta para aplicaciones que necesitan una DB robusta.",
    category: "Desarrollo" as const,
    logo: "/tools/supabase-logo.svg",
    affiliateUrl: "", // 🔜 Verificar si Supabase tiene programa de afiliados
    pricing: "Plan gratuito disponible",
    features: [
      "PostgreSQL completo",
      "Autenticación integrada",
      "Storage de archivos",
      "Real-time subscriptions",
      "API auto-generada",
    ],
    myReview:
      "La uso en todos mis proyectos que necesitan base de datos. El plan gratuito es muy generoso y la migración a planes pagos es súper sencilla.",
    officialUrl: "https://supabase.com",
  },
  {
    id: 4,
    name: "Make.com",
    description:
      "Plataforma de automatización visual, excelente para integraciones complejas con múltiples pasos y condiciones.",
    category: "Automatización" as const,
    logo: "/tools/make-logo.svg",
    affiliateUrl: "", // 🔜 Registrarte en https://www.make.com/en/partners/affiliate
    pricing: "Desde $9/mes",
    features: [
      "1000+ apps integradas",
      "Editor visual intuitivo",
      "Escenarios ilimitados",
      "Webhooks incluidos",
      "Ejecuciones programadas",
    ],
    myReview:
      "Cuando n8n no tiene una integración nativa, Make es mi segunda opción. Su editor visual es muy intuitivo y tiene integraciones con casi todo.",
    officialUrl: "https://www.make.com",
    commission: "30% recurrente",
  },
];

// ==================== CONTACT PAGE DATA ====================

export const dataContactInfo = [
  {
    id: 1,
    icon: "📧",
    label: "Email",
    value: "mirkex.guitar@gmail.com",
    description: "Envíame un correo directo",
    link: "mailto:mirkex.guitar@gmail.com",
  },
  {
    id: 2,
    icon: "📱",
    label: "WhatsApp",
    value: "+591 63136673",
    description: "Chat rápido por WhatsApp",
    link: "https://wa.link/epmdlm",
  },
  {
    id: 3,
    icon: "⏱️",
    label: "Respuesta",
    value: "24 horas",
    description: "Respondo en menos de 1 día",
    link: "#",
  },
  {
    id: 4,
    icon: "📍",
    label: "Ubicación",
    value: "La Paz, Bolivia",
    description: "Disponible para videollamadas",
    link: "#",
  },
];

export const dataContactSocial = [
  {
    id: 1,
    name: "LinkedIn",
    icon: "🔗",
    url: "https://www.linkedin.com/in/mirco-calle",
    description: "Conecta conmigo profesionalmente",
  },
  {
    id: 2,
    name: "YouTube",
    icon: "▶️",
    url: "https://youtube.com/@mircodev",
    description: "Ve mis tutoriales sobre automatización",
  },
  {
    id: 3,
    name: "TikTok",
    icon: "🎵",
    url: "https://tiktok.com/@mircodev",
    description: "Tips diarios sobre automatización",
  },
  {
    id: 4,
    name: "Facebook",
    icon: "f",
    url: "https://facebook.com/mircodev",
    description: "Sígueme en Facebook",
  },
];

export const dataContactFAQ = [
  {
    id: 1,
    question: "¿En qué tipo de proyectos de ingeniería o BIM puedes colaborar?",
    answer:
      "Puedo brindar soporte en modelado BIM y documentación técnica en Autodesk Revit, asistencia en modelado analítico con Autodesk Robot Structural Analysis, cómputos métricos (Quantity Takeoff) y estructuración de presupuestos de obra.",
  },
  {
    id: 2,
    question: "¿Desarrollas software o plataformas personalizadas para el sector construcción?",
    answer:
      "Sí. Diseño y desarrollo aplicaciones web, plataformas SaaS especializadas (como HPress), integraciones entre sistemas y herramientas a medida para contratistas, ingenieros y empresas del sector AEC.",
  },
  {
    id: 3,
    question: "¿Cómo aplicas la IA y la automatización en la construcción?",
    answer:
      "Me enfoco en automatizar tareas repetitivas de cálculo, procesamiento de datos de presupuesto, integración de catálogos y asistentes inteligentes para consulta rápida de especificaciones técnicas y documentación.",
  },
  {
    id: 4,
    question: "¿Cuál es el proceso para iniciar una colaboración o proyecto?",
    answer:
      "Tras recibir tu mensaje por formulario, LinkedIn o WhatsApp, coordinamos una llamada técnica inicial para revisar el alcance, requerimientos, tiempos de entrega y metodología de trabajo más adecuada.",
  },
  {
    id: 5,
    question: "¿Cuál es el tiempo promedio de respuesta?",
    answer:
      "Respondo normalmente en menos de 24 horas laborales. Para consultas inmediatas o de coordinación ágil, puedes contactarme directamente vía WhatsApp o LinkedIn.",
  },
];

export const dataTestimonials = [
  {
    id: 1,
    name: "George Snow",
    description:
      "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
    imageUrl: "/profile1.png",
  },
  {
    id: 2,
    name: "Juan Pérez",
    description:
      "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
    imageUrl: "/profile2.png",
  },
  {
    id: 3,
    name: "María García",
    description:
      "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
    imageUrl: "/profile3.png",
  },
  {
    id: 4,
    name: "Laura Snow",
    description:
      "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
    imageUrl: "/profile4.png",
  },
  {
    id: 5,
    name: "Carlos Sánchez",
    description:
      "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
    imageUrl: "/profile5.png",
  },
  {
    id: 6,
    name: "Antonio Martínez",
    description:
      "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
    imageUrl: "/profile6.png",
  },
];
