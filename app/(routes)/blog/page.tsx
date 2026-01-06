import { BlogHero } from "@/components/blog/blog-hero";
import { BlogCard } from "@/components/blog/blog-card";
import { BlogSidebar } from "@/components/blog/blog-sidebar";
import TransitionPage from "@/components/TransitionPage";
import { CircleImage } from "@/components/circle-image";
import { dataBlogPosts } from "@/data";

export default function BlogPage() {
  const featuredPosts = dataBlogPosts.filter((p) => p.featured);
  const regularPosts = dataBlogPosts.filter((p) => !p.featured);

  return (
    <>
      <TransitionPage />
      <CircleImage />

      <BlogHero />

      <div className="container max-w-7xl mx-auto px-6 pb-20">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Featured Posts */}
            {featuredPosts.length > 0 && (
              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <span className="text-gradient">⭐</span> Artículos Destacados
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {featuredPosts.map((post) => (
                    <BlogCard key={post.id} post={post} />
                  ))}
                </div>
              </section>
            )}

            {/* All Posts */}
            {regularPosts.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold mb-6">Todos los Artículos</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {regularPosts.map((post) => (
                    <BlogCard key={post.id} post={post} />
                  ))}
                </div>
              </section>
            )}

            {/* Empty State */}
            {dataBlogPosts.length === 0 && (
              <div className="card p-12 text-center">
                <p className="text-xl text-slate-400">
                  Próximamente publicaremos artículos sobre automatización e IA
                </p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <BlogSidebar />
        </div>
      </div>
    </>
  );
}
