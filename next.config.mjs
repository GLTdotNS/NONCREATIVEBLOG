/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        // This allows images from the Sanity CDN
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "", // Leave empty for default ports
        pathname: "/**", // Allow access to all paths
      },
      {
        // This allows images from the placeholder service
        protocol: "https",
        hostname: "via.placeholder.com",
        port: "", // Leave empty for default ports
        pathname: "/**", // Allow access to all paths
      },
    ],
  },
};

export default nextConfig;
