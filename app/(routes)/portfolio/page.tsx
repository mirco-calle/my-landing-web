import { AvatarPortfolio } from "@/components/avatar-portfolio";
import { CircleImage } from "@/components/circle-image";
import { PortfolioBox } from "@/components/portfolio-box";
import TransitionPage from "@/components/TransitionPage";
import { dataPortfolio } from "@/data";

const PortfolioPage = () => {
  return (
    <>
      <TransitionPage />
      <AvatarPortfolio />
      <CircleImage />

      {/* Hero Section - Consistent with other pages */}
      <section className="relative z-10 min-h-screen flex items-center pt-40 pb-20 md:py-32">
        <div className="container max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Mis ultimos{" "}
              <span className="text-gradient">trabajos realizados</span>
            </h1>
            <div className="w-20 h-1 bg-gradient-accent mx-auto"></div>
          </div>

          {/* Portfolio Grid */}
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {dataPortfolio.map((data) => (
              <PortfolioBox key={data.id} data={data} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioPage;
