/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [
    '@devlabs/tailwindcss',
    '@devlabs/tsconfig',
    '@devlabs/ui',
    '@devlabs/utils',
    'eslint-config-devlabs',
  ],
  images: {
    domains: ['res.cloudinary.com'],
  },
};

export default nextConfig;
