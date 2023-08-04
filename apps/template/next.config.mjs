/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [
    '@devlabs/tailwindcss',
    '@devlabs/tsconfig',
    '@devlabs/ui',
    '@devlabs/utils',
    'eslint-config-devlabs',
  ],
};

export default nextConfig;
