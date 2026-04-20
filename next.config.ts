import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve AVIF first (best compression), fall back to WebP, then original
    formats: ["image/avif", "image/webp"],
    // Only generate these widths — avoids creating 20+ size variants
    deviceSizes: [640, 828, 1080, 1200, 1920],
    imageSizes: [64, 128, 256, 384],
  },
};

export default nextConfig;
