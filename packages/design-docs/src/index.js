/* eslint-disable global-require */
import React from 'react'
import ReactDOM from 'react-dom'
import {Catalog, pageLoader} from 'catalog'

ReactDOM.render(
  <Catalog
    title="Catalog"
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
        content: pageLoader('pages/components.md'),
      },
      {
        title: 'itp-rcc-collapse',
        pages: [
          {
            title: 'Base Example',
            styles: ['/index.css'],
            imports: {Collapse: require('@inthepocket/itp-rcc-collapse')},
            path: '/components/itp-rcc-collapse/base',
            content: pageLoader('pages/itp-rcc-collapse.md'),
          },
          {
            title: 'More complex examples',
            path: '/components/itp-rcc-collapse/more-examples',
            content: require('./components/itp-rcc-collapse/index.js'),
          },
        ],
      },
      {
        title: 'itp-rcc-button',
        pages: [
          {
            title: 'Base Example',
            styles: ['/index.css'],
            content: pageLoader('pages/itp-rcc-button.md'),
            path: '/components/itp-rcc-button/base',
            imports: {Button: require('../../itp-rcc-button/src/index.js')},
          },
        ],
      },
    ]}
  />,
  document.getElementById('root'),
)
