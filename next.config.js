/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    API: process.env.API,
  }, 
}

module.exports = nextConfig
