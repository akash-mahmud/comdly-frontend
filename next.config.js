/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public'
})
const nextConfig =withPWA({
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  compiler: {
    styledComponents: true,
 
  },
  images: {
    remotePatterns: [
      {
        hostname: "**",
      },
    
    ],
  },
}) 

module.exports = nextConfig;
