import {
  BookText,
  CodeSquare,
  HomeIcon,
  Linkedin,
  Twitter,
  Rss,
  Twitch,
  Youtube,
  Crop,
  Pencil,
  Computer,
  Book,
  Rocket,
  ContactRound,
  Facebook,
  ShoppingCart,
} from "lucide-react";

export const socialNetworks = [
  {
    id: 1,
    logo: <Youtube size={30} strokeWidth={1} />,
    src: "#!",
  },
  {
    id: 2,
    logo: <Linkedin size={30} strokeWidth={1} />,
    src: "#!",
  },
  {
    id: 3,
    logo: <Facebook size={30} strokeWidth={1} />,
    src: "#!",
  },

  {
    id: 5,
    logo: <Twitch size={30} strokeWidth={1} />,
    src: "#!",
  },
];

export const itemsNavbar = [
  {
    id: 1,
    title: "Inicio",
    icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
    link: "/",
  },
  {
    id: 2,
    title: "Servicios",
    icon: <Rocket size={25} color="#fff" strokeWidth={1} />,
    link: "/services",
  },
  {
    id: 3,
    title: "Casos de Éxito",
    icon: <BookText size={25} color="#fff" strokeWidth={1} />,
    link: "/portfolio",
  },
  {
    id: 4,
    title: "Blog",
    icon: <Book size={25} color="#fff" strokeWidth={1} />,
    link: "/blog",
  },
  {
    id: 5,
    title: "Productos",
    icon: <ShoppingCart size={25} color="#fff" strokeWidth={1} />,
    link: "/productos",
  },
  {
    id: 6,
    title: "Herramientas",
    icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
    link: "/herramientas",
  },
  {
    id: 7,
    title: "Contacto",
    icon: <ContactRound size={25} color="#fff" strokeWidth={1} />,
    link: "/contact",
  },
];

export const dataAboutPage = [
  {
    id: 1,
    title: "Arquitecto de Soluciones Inteligentes",
    subtitle: "Automatización & IA para Negocios",
    description:
      "Especializado en diseñar e implementar sistemas inteligentes que automatizan decisiones de negocio, optimizan procesos y generan resultados medibles. +80 negocios transformados con IA.",
    date: "2020 - Presente",
  },
  {
    id: 2,
    title: "Consultor en Transformación Digital",
    subtitle: "Estrategia & Implementación",
    description:
      "Ayudo a empresas a identificar oportunidades de automatización y a implementar soluciones de IA que reducen costos operativos hasta 60% y aumentan ventas significativamente.",
    date: "2019 - Presente",
  },
];

export const dataCounter = [
  {
    id: 0,
    endCounter: 5,
    text: "Años automatizando negocios",
    lineRight: true,
    lineRightMobile: true,
  },
  {
    id: 1,
    endCounter: 80,
    text: "Negocios transformados",
    lineRight: true,
    lineRightMobile: false,
  },
  {
    id: 2,
    endCounter: 200,
    text: "Procesos automatizados",
    lineRight: true,
    lineRightMobile: true,
  },
  {
    id: 3,
    endCounter: 10,
    text: "Industrias impactadas",
    lineRight: false,
    lineRightMobile: false,
  },
];

export const serviceData = [
  {
    icon: <Computer />,
    title: "Automatización de Procesos",
    description:
      "Transformo procesos manuales en sistemas inteligentes que funcionan 24/7, reduciendo costos operativos hasta 60% y eliminando errores humanos.",
  },
  {
    icon: <Rocket />,
    title: "Sistemas de IA para Ventas",
    description:
      "Implemento inteligencia artificial que ayuda a tu negocio a vender más: chatbots, recomendaciones personalizadas y análisis predictivo de clientes.",
  },
  {
    icon: <Crop />,
    title: "Optimización de Operaciones",
    description:
      "Diseño soluciones que optimizan inventarios, gestionan recursos y automatizan decisiones operativas con IA, liberando tiempo para lo estratégico.",
  },
  {
    icon: <Book />,
    title: "Análisis Predictivo & BI",
    description:
      "Decisiones basadas en datos, no en intuición. Dashboards inteligentes que predicen tendencias y revelan oportunidades ocultas en tu negocio.",
  },
  {
    icon: <Pencil />,
    title: "Chatbots & Asistentes IA",
    description:
      "Atención al cliente automatizada que nunca duerme. Respuestas instantáneas, calificación de leads y soporte 24/7 que convierte más.",
  },
];

export const dataPortfolio = [
  {
    id: 1,
    title: "Landing Page para restaurante",
    image: "/image-1.jpg",
    urlGithub: "https://github.com/mirco-calle/RestaurantPageByMirco.git",
    urlDemo: "https://pizza-page-by-mircodev.netlify.app/",
  },
  {
    id: 2,
    title: "Plataforma Automatizada de Cálculo y Gestión de Presupuestos",
    image: "/image-2.jpg",
    urlGithub: "#!",
    urlDemo: "#!",
  },
  {
    id: 3,
    title: "Sistema Inteligente de Carta Digital para Restaurantes",
    image: "/image-3.jpg",
    urlGithub: "#!",
    urlDemo: "#!",
  },
  {
    id: 4,
    title: "Sistema de Automatización de Procesos de Negocio con n8n",
    image: "/image-5.jpg",
    urlGithub: "#!",
    urlDemo: "#!",
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
    question: "¿Cuál es el primer paso después de enviar el formulario?",
    answer:
      "Revisaré tu solicitud en menos de 24 horas. Si me interesa el proyecto, te contactaré vía email o WhatsApp para agendar una llamada inicial de 15 minutos sin costo.",
  },
  {
    id: 2,
    question: "¿Cuánto cuesta una consultoría?",
    answer:
      "La consultoría inicial de 30 minutos es completamente GRATIS. Es una sesión donde analizamos tu negocio, identificamos oportunidades y discutimos posibles soluciones. Sin compromiso.",
  },
  {
    id: 3,
    question: "¿Qué información debo proporcionar en el formulario?",
    answer:
      "Procuro ser flexible. Cuéntame: tu nombre, email, qué necesitas automatizar y un poco sobre tu negocio. Cuanta más información, mejor podré ayudarte, pero lo mínimo es suficiente.",
  },
  {
    id: 4,
    question:
      "¿Trabajan con empresas pequeñas o solo con grandes corporativos?",
    answer:
      "Trabajo con negocios de TODOS los tamaños. Mi especialidad es ayudar a pequeños y medianos empresarios a crecer automatizando sus procesos. Las startups y emprendedores son mi pasión.",
  },
  {
    id: 5,
    question:
      "¿Ofrecen servicios de mantenimiento después de la automatización?",
    answer:
      "Sí. Ofrezco diferentes planes de soporte y mantenimiento según tus necesidades. Discutimos esto en detalle después de que te presente la solución.",
  },
  {
    id: 6,
    question: "¿Cuál es el tiempo de respuesta típico?",
    answer:
      "Respondo a emails y mensajes en menos de 24 horas laborales. Para asuntos urgentes, puedes escribirme por WhatsApp y tendré prioridad.",
  },
  {
    id: 7,
    question:
      "¿Puedo agendar directamente una consultoría sin llenar el formulario?",
    answer:
      "Claro. Puedes escribirme por WhatsApp o enviarme un email diciendo que quieres agendar una consultoría. Prefiero que conozcamos un poco tu caso primero.",
  },
  {
    id: 8,
    question: "¿Cómo es el proceso de trabajo después de la consultoría?",
    answer:
      "Tras la consultoría inicial, te presento una propuesta personalizada con: soluciones recomendadas, timeline, inversión y ROI estimado. Decide si continúas. No hay presión.",
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
