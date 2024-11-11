import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['tailwindui.com'],
    dangerouslyAllowSVG: true, // Enable SVG images
    contentSecurityPolicy: "default-src 'self'; img-src *; media-src 'none'; script-src 'none'; sandbox;", // Optional for added security
  },
};

export default nextConfig;
