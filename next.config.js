/** @type {import('next').NextConfig} */
const nextConfig = {
  // Gera HTML/CSS/JS 100% estático na pasta "out" (npm run build).
  // Necessário porque o servidor de hospedagem não roda Node.js.
  output: 'export',
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    // Sem servidor Node não há como usar o otimizador de imagens do Next,
    // por isso as imagens são servidas via <picture> (ver components/SmartImage.jsx).
    unoptimized: true,
  },
};

module.exports = nextConfig;
