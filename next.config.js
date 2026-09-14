/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
      unoptimized: true
    },
    // Para repositório user.github.io (domínio raiz), basePath deve ser ""
    // Se fosse um sub-repositório seria: basePath: "/nome-do-repo"
    basePath: "",
    trailingSlash: true
  };
  
  module.exports = nextConfig;