const rewireCssModules = require('react-app-rewire-css-modules-extensionless');
const rewirePostCss = require('react-app-rewire-postcss');

module.exports = {
  webpack: (config, env) => {
    config = rewireCssModules.webpack(config, env, {
      test: /\.module.css$/
    });

    config = rewirePostCss(config, {
      plugins: loader => [
        require('postcss-preset-env')(),
      ],
    });

    return config;
  },
  jest: config => rewireCssModules.jest(config),
};
