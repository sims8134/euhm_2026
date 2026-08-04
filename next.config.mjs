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
      {
        source: "/articles/sport-maison",
        destination: "/articles/confinement-faire-du-sport-a-la-maison",
        permanent: true,
      },
    ];
  },
};
export default nextConfig;