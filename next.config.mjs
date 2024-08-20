/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/inicio',
          destination: '/',
        },
        {
          source: '/acerca',
          destination: '/about',
        },
        {
            source: '/noticias',
            destination: '/noticias',
        }
      ];

    },
  };

  

export default nextConfig;
