const rewireCssModules = require('react-app-rewire-css-modules-extensionless');
const rewirePostCss = require('react-app-rewire-postcss');

module.exports = {
  webpack: (config, env) => {
    let newConfig = rewireCssModules.webpack(config, env, {
      test: /\.module.css$/
    });

    newConfig = rewirePostCss(newConfig, {
      plugins: loader => [ // eslint-disable-line no-unused-vars
        require('postcss-preset-env')(), // eslint-disable-line global-require
      ],
    });

    return newConfig;
  },
  jest: config => rewireCssModules.jest(config),
};
