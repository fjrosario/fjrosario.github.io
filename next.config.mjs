import { PHASE_DEVELOPMENT_SERVER } from "next/constants.js";

// This file is used to configure the Next.js build process.
const nextConfig = (phase) => {
  const isDevServer = phase === PHASE_DEVELOPMENT_SERVER;

  return {
    reactStrictMode: true,
    output: isDevServer ? undefined : "export",
  };
};

export default nextConfig;
