/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Workaround for a Windows path normalization bug between TS and Next
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
        port: "",
        search: "",
      },
    ],
  },
};

export default nextConfig;
