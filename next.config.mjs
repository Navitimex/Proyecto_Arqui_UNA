/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Prototipo académico: refuerza el noindex del layout en todas las respuestas, incluidas las
  // imágenes, la imagen Open Graph y la API, que no llevan <meta name="robots">
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
};

export default nextConfig;
