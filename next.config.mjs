import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: 'custom',
    loaderFile: './supabase-image-loader.js',
  },
  optimizeFonts: false,
}

export default withNextIntl(nextConfig);