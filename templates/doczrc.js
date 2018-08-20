import pkg from './package.json';

export default {
  title: pkg.name,
  description: pkg.description,
  files: [
    'ds/**/*.mdx',
    'ds/pages/**/*.js'
  ],
  themeConfig: {
    colors: {
      primary: '#10069f',
    },
  },
};
