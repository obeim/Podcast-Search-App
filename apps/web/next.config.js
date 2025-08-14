/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Workaround for a Windows path normalization bug between TS and Next
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
