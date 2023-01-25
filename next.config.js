/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true
  }
};
module.exports = (_phase, { defaultConfig }) => {
  const plugins = [withStaticImport, withBundleAnalyzer, withCustomWebpack];
  return plugins.reduce((acc, plugin) => plugin(acc), {
    ...defaultConfig,
    ...config
  });
};

module.exports = nextConfig;
