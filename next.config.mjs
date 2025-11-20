import createNextIntlPlugin from 'next-intl/plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true
  },
  images: {
    domains: ['example.com']
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL
  }
};

const withNextIntl = createNextIntlPlugin({
  messagesDirectory: './i18n/request.ts', // مسیر فایل پیام‌ها
});

export default withNextIntl(nextConfig);
