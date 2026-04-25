import path from "node:path";
import { fileURLToPath } from "node:url";

const configDir = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: configDir
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wisprflow.ai"
      },
      {
        protocol: "https",
        hostname: "claude.ai"
      },
      {
        protocol: "https",
        hostname: "code.visualstudio.com"
      },
      {
        protocol: "https",
        hostname: "brave.com"
      },
      {
        protocol: "https",
        hostname: "www.perplexity.ai"
      },
      {
        protocol: "https",
        hostname: "chatgpt.com"
      },
      {
        protocol: "https",
        hostname: "www.notion.so"
      },
      {
        protocol: "https",
        hostname: "www.heyreach.io"
      },
      {
        protocol: "https",
        hostname: "cdn.prod.website-files.com"
      },
      {
        protocol: "https",
        hostname: "images.ctfassets.net"
      },
      {
        protocol: "https",
        hostname: "downloads.intercomcdn.com"
      },
      {
        protocol: "https",
        hostname: "www.notion.com"
      }
    ]
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff"
          },
          {
            key: "X-Frame-Options",
            value: "DENY"
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin"
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()"
          },
          {
            key: "X-Permitted-Cross-Domain-Policies",
            value: "none"
          },
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin-allow-popups"
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload"
          }
        ]
      }
    ];
  }
};

export default nextConfig;
