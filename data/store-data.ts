export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  category: string;
  subcategory: string;
  features?: string[];
}

export const products: Product[] = [
  // Plantillas y Recursos Digitales
  {
    id: "figma-1",
    title: "Kit UI Dashboard Pro",
    description: "Kit completo de interfaz de usuario para dashboards modernos",
    price: 0,
    image: "/store/products/dashboard-ui.jpg",
    category: "plantillas",
    subcategory: "figma-templates",
    //features: ["100+ componentes", "Sistema de diseño", "Auto-layout"],
  },
  {
    id: "react-1",
    title: "Componentes React Premium",
    description:
      "Colección de componentes React reutilizables y personalizables",
    price: 39.99,
    image: "/store/products/react-components.jpg",
    category: "plantillas",
    subcategory: "react-components",
    features: ["TypeScript", "Tailwind CSS", "Documentación"],
  },
  // Materiales 3D
  {
    id: "3d-1",
    title: "Pack Muebles Modernos",
    description: "Colección de modelos 3D de muebles contemporáneos",
    price: 79.99,
    image: "/store/products/furniture-3d.jpg",
    category: "3d",
    subcategory: "3d-models",
    features: ["Formato .blend", "Texturas 4K", "Low-poly"],
  },
  // Ebooks y Guías
  {
    id: "guide-1",
    title: "Guía Completa UI/UX",
    description:
      "Manual detallado sobre diseño de interfaces y experiencia de usuario",
    price: 29.99,
    image: "/store/products/uiux-guide.jpg",
    category: "ebooks",
    subcategory: "ui-ux-guides",
    features: [
      "PDF interactivo",
      "Ejercicios prácticos",
      "Recursos descargables",
    ],
  },
];
