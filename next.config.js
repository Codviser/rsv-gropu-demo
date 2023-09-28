/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      formats: ['image/avif', 'image/webp'], 
        domains: ['cdn.sanity.io'],
        imageSizes: [320, 640, 960, 1280], // Specify the sizes you want to generate
      },
      // output: 'export'
}

module.exports = nextConfig
