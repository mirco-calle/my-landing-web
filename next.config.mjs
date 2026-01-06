/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Habilitar compresión
  compress: true,
  // Optimizar producción con SWC
  swcMinify: true,
};

export default nextConfig;
