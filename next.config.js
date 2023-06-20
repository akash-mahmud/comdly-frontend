/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['randomuser.me', 'assets3.thrillist.com' , 'globalgrasshopper.com','hips.hearstapps.com'],
    
  },
};

module.exports = nextConfig;
