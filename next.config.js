/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    API: process.env.API,
    LOCATION_TOKEN: process.env.LOCATION_TOKEN,
  }, 
}

module.exports = nextConfig
