import Link from "next/link";
import Image from "next/image";

const categories = [
  {
    title: "Plantillas y Recursos Digitales",
    slug: "plantillas",
    subcategories: [
      { name: "Plantillas Figma", slug: "figma-templates" },
      { name: "Componentes React", slug: "react-components" },
      { name: "Kit UI Startups", slug: "startup-ui-kit" },
    ],
    image: "/store/templates.jpg",
  },
  {
    title: "Materiales 3D",
    slug: "3d",
    subcategories: [
      { name: "Modelos 3D", slug: "3d-models" },
      { name: "Texturas", slug: "textures" },
      { name: "Presets", slug: "presets" },
    ],
    image: "/store/3d.jpg",
  },
  {
    title: "Ebooks y Guías",
    slug: "ebooks",
    subcategories: [
      { name: "Guías UI/UX", slug: "ui-ux-guides" },
      { name: "Manual React/Next.js", slug: "react-nextjs-manual" },
    ],
    image: "/store/ebooks.jpg",
  },
];

const StoreCategories = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {categories.map((category) => (
        <div
          key={category.slug}
          className="bg-gray-900/50 rounded-xl overflow-hidden hover:shadow-xl 
                   hover:shadow-secondary/20 transition-all duration-300"
        >
          <div className="relative h-48">
            <Image
              src={category.image}
              alt={category.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="p-6">
            <h2 className="text-xl font-bold mb-4">{category.title}</h2>
            <ul className="space-y-2">
              {category.subcategories.map((sub) => (
                <li key={sub.slug}>
                  <Link
                    href={`/tienda/${category.slug}/${sub.slug}`}
                    className="text-gray-300 hover:text-secondary transition-colors"
                  >
                    {sub.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export { StoreCategories };
