const rewirePostCss = require('react-app-rewire-postcss');

module.exports = {
  webpack: (config, env) => rewirePostCss(config, {
    plugins: loader => [ // eslint-disable-line no-unused-vars
      require('postcss-preset-env')({
        stage: 1,
      }), // eslint-disable-line global-require
    ],
  }),
};
