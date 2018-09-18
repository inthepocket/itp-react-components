import { pageLoader } from 'catalog';
import Button from './components/itp-rcc-button';
import Collapse from './components/itp-rcc-collapse';

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
        imports: { Button },
      },
      {
        title: 'Collapse',
        content: Collapse,
        path: '/components/itp-rcc-collapse/base',
      },
    ],
  },
];
