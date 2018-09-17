/* eslint-disable global-require */
import React from 'react';
import ReactDOM from 'react-dom';
import { Catalog, pageLoader } from 'catalog';

const markdownLoader = page => pageLoader(() => import(`./${page}.md`));

ReactDOM.render(
  <Catalog
    title="Design Docs"
    pages={[
      {
        path: '/',
        styles: ['/index.css'],
        title: 'Welcome',
        content: pageLoader('pages/intro.md'),
      },
      {
        path: '/docs',
        title: 'Documentation',
        content: pageLoader('pages/docs.md'),
      },
      {
        title: 'Components',
        path: '/components',
        pages: [
          {
            title: 'Button',
            styles: ['/index.css'],
            content: markdownLoader('itp-rcc-button'),
            path: '/components/itp-rcc-button/base',
            imports: { Button: require('./components/itp-rcc-button/index.js') },
          },
          {
            title: 'Collapse',
            styles: ['/index.css'],
            content: require('./components/itp-rcc-collapse/index.js'),
            path: '/components/itp-rcc-collapse/base',
            imports: { Collapse: require('@inthepocket/itp-rcc-collapse') },
          },
        ],
      },
    ]}
  />,
  document.getElementById('root'),
);
