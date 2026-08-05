import type { NextConfig } from "next";
import fs from "fs";
import path from "path";

try {
  const pagePath = path.join(process.cwd(), "src", "app", "u", "[id]", "home", "page.tsx");
  if (fs.existsSync(pagePath)) {
    fs.unlinkSync(pagePath);
    console.log("Deleted old page.tsx to favor route.ts");
  }
} catch (e) {}

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
