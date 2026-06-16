/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Allow remote meme images. Tighten/replace these with your own sources.
    remotePatterns: [
      { protocol: "https", hostname: "**" },
    ],
  },
};

export default nextConfig;
