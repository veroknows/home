import type { NextConfig } from "next";
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
  manifest: '/site.webmanifest',
});

const nextConfig = withPWA({
  output: 'export',
  /* config options here */
});

export default nextConfig;
