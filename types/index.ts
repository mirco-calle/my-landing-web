// Types for Blog System
export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  readTime: string;
  publishDate: string;
  author: string;
  image: string;
  featured: boolean;
  tags: string[];
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
  };
}

export interface BlogCategory {
  id: number;
  name: string;
  slug: string;
  count: number;
  icon: string;
}

// Types for Case Studies
export interface CaseStudy {
  id: number;
  title: string;
  slug: string;
  client: string;
  industry: string;
  challenge: string;
  solution: string;
  results: {
    timeSaved: string;
    costReduction: string;
    salesIncrease: string;
    customerSatisfaction: string;
  };
  metrics: Array<{
    label: string;
    value: string;
    icon: string;
  }>;
  technologies: string[];
  testimonial: {
    quote: string;
    author: string;
    position: string;
    avatar: string;
  };
  image: string;
  featured: boolean;
}

// Types for Lead Magnets
export interface LeadMagnet {
  id: number;
  title: string;
  description: string;
  type: "checklist" | "guide" | "template";
  thumbnail: string;
  downloadUrl: string;
  benefits: string[];
  ctaText: string;
  featured: boolean;
}

// Types for Digital Products
export interface DigitalProduct {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  originalPrice?: number;
  thumbnail: string;
  hotmartUrl: string;
  category: string;
  badge?: "Bestseller" | "Nuevo" | "Oferta" | "Lanzamiento";
  features: string[];
  whatYouGet?: string[];
  idealFor?: string[];
  results?: {
    timeSaved: string;
    roi: string;
    setup: string;
  };
}

// Types for Recommended Tools
export interface RecommendedTool {
  id: number;
  name: string;
  description: string;
  category: "Hosting" | "Automatización" | "IA" | "Desarrollo";
  logo: string;
  affiliateUrl?: string;
  pricing: string;
  features: string[];
  myReview: string;
  officialUrl: string;
  commission?: string;
}

// Types for Consultation Form
export interface ConsultationFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  challenge: string;
  preferredDate?: string;
}
