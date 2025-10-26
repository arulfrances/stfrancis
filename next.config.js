/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Images won't be optimized, needed for static export
  },
  trailingSlash: true,  // optional: adds trailing slash to URLs for static hosting
};

module.exports = nextConfig;
