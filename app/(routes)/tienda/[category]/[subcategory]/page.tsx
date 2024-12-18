import { products } from "@/data/store-data";
import Image from "next/image";
import Link from "next/link";

interface PageProps {
  params: {
    category: string;
    subcategory: string;
  };
}

const SubcategoryPage = ({ params }: PageProps) => {
  const filteredProducts = products.filter(
    (product) =>
      product.category === params.category &&
      product.subcategory === params.subcategory
  );

  return (
    <div className="min-h-screen max-w-7xl mx-auto mt-20 px-4 py-12 md:px-8">
      {/* Breadcrumb */}
      <nav className="mb-8">
        <ol className="flex space-x-2 text-gray-400">
          <li>
            <Link href="/tienda" className="hover:text-secondary">
              Tienda
            </Link>
          </li>
          <li>/</li>
          <li className="capitalize">{params.category}</li>
          <li>/</li>
          <li className="text-secondary capitalize">{params.subcategory}</li>
        </ol>
      </nav>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-gray-900/50 rounded-xl overflow-hidden hover:shadow-xl 
                     hover:shadow-secondary/20 transition-all duration-300"
          >
            <div className="relative h-48">
              <Image
                src={product.image}
                alt={product.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">{product.title}</h2>
              <p className="text-gray-300 mb-4">{product.description}</p>

              {/* Features */}
              {product.features && (
                <ul className="space-y-1 mb-4">
                  {product.features.map((feature, index) => (
                    <li key={index} className="text-gray-400 text-sm">
                      • {feature}
                    </li>
                  ))}
                </ul>
              )}

              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-secondary">
                  ${product.price}
                </span>
                <button
                  className="px-4 py-2 bg-secondary/10 text-secondary 
                           rounded-lg hover:bg-secondary/20 transition-colors"
                >
                  Agregar al carrito
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-20">
          <h2 className="text-2xl font-bold mb-4">
            No hay productos disponibles
          </h2>
          <p className="text-gray-400">
            No se encontraron productos en esta categoría.
          </p>
        </div>
      )}
    </div>
  );
};

export default SubcategoryPage;
