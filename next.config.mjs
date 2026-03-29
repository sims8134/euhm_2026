/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [],
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.euhm.fr" }],
        destination: "https://euhm.fr/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
