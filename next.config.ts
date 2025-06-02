import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com', // Solo el hostname, no el puerto
        pathname: '**/portadas/**',
      },
      {
        protocol: 'https',
        hostname: 'mega.nz',
        pathname: '**/file/**'
      },
    ],
  },
};

export default nextConfig;
