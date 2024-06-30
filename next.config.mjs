import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: 'custom',
    loaderFile: './supabase-image-loader.js',
  },
  transpilePackages: ['lucide-react']
}

export default withNextIntl(nextConfig);