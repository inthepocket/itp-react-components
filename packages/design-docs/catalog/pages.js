import { pageLoader } from 'catalog';

// Create a convenient loader for markdown files
const markdownLoader = page => pageLoader(() => import(`./pages/${page}.md`));

export default [
  {
    path: '/',
    styles: ['/index.css'],
    title: 'Welcome',
    content: markdownLoader('intro'),
  },
  {
    title: 'Components',
    path: '/components',
    pages: [
      {
        title: 'Button',
        styles: ['/components/itp-rcc-button/index.css'],
        content: markdownLoader('itp-rcc-button'),
        path: '/components/itp-rcc-button/base',
        imports: { Button: require('./components/itp-rcc-button/index.js') },
      },
      {
        title: 'Collapse',
        content: require('./components/itp-rcc-collapse/index.js'),
        path: '/components/itp-rcc-collapse/base',
      },
    ],
  },
];
