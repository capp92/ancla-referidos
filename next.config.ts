import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",   // genera HTML estático en /out — compatible con GitHub Pages
  trailingSlash: true, // necesario para rutas en GitHub Pages
  images: {
    unoptimized: true, // GitHub Pages no tiene servidor de imágenes
  },
};

export default nextConfig;
