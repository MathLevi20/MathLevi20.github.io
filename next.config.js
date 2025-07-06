/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      unoptimized: true
    },
    basePath: "https://mathlevi20.github.io/", // ex: "/Portifolio-Matheus-Levi" (se não for user.github.io)
    trailingSlash: true
  };
  
  module.exports = nextConfig;
  