const rewirePostCss = require('react-app-rewire-postcss');
const postcssCustomMedia = require('postcss-custom-media');
const postcssImport = require('postcss-import');

module.exports = config => {
  const nextConfig = rewirePostCss(config, {
    plugins: () => [
      postcssImport(),
      postcssCustomMedia(),
    ],
  });

  return nextConfig;
};
