import type { NextConfig } from "next";

// GitHub Pages serves this project at /reality-exe/ (not domain root) until
// a custom domain is attached — the workflow sets GITHUB_PAGES=true only for
// that deploy, so local dev and any other host stay at the plain root path.
const isGithubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGithubPages ? "/reality-exe" : undefined;

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
