import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.sanity.io', 'lh3.googleusercontent.com', 'images.unsplash.com'], // example: allow Sanity images
  },
};

export default nextConfig;