/** @type {import('next').NextConfig} */
const nextConfig = {
  // El sitio ahora es una sola página: las rutas antiguas llevan a su sección.
  async redirects() {
    return [
      { source: '/AboutUs', destination: '/#nosotros', permanent: true },
      { source: '/Services', destination: '/#servicios', permanent: true },
      { source: '/Contact', destination: '/#contacto', permanent: true },
    ];
  },
};

module.exports = nextConfig;
