import pkg from './package.json'

export default {
  title: pkg.name,
  description: pkg.description,
  files: ['docs/**/*.mdx', 'pages/**/*.js'],
  themeConfig: {
    colors: {
      primary: '#10069f',
    },
  },
}
