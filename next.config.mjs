import i18NextConfig from "./next-i18next.config.js"

export default {
  i18n:i18NextConfig.i18n,
  future: { webpack5: true },
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  webpack: (config) => {
    // Unset client-side javascript that only works server-side
    config.resolve.fallback = { fs: false, module: false };

    return config;
  },
};
