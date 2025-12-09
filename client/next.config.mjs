/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // allow GitHub avatar URLs
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
    ],
    // or you can use: domains: ["avatars.githubusercontent.com"],
  },
};

export default nextConfig;
