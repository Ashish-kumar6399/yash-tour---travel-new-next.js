/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.indiancarrental.com",
      },
    ],
  },
};

export default nextConfig; // ✅ Use "export default" instead of "module.exports"
