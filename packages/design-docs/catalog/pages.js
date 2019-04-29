import { pageLoader } from 'catalog';
import Alert from './components/itp-rcc-alert';
import AutoComplete from './components/itp-rcc-autocomplete';
import Button from './components/itp-rcc-button';
import Card from './components/itp-rcc-card';
import Collapse from './components/itp-rcc-collapse';
import Slider from './components/itp-rcc-slider';
import root from '../root.json';

const filterAndMapThemeColor = name =>
  Object.entries(root)
    .filter(([key]) => key.indexOf(name) !== -1)
    .map(([key, value]) => ({ name: key, value }));
const primaryColor = filterAndMapThemeColor('Primary');
const secondaryColor = filterAndMapThemeColor('Secondary');
const tertiaryColor = filterAndMapThemeColor('Tertiary');

// Create a convenient loader for markdown files
const markdownLoader = page => pageLoader(() => import(`./pages/${page}.md`));

export default [
  {
    path: '/',
    styles: ['/index.css'],
    title: 'Welcome',
    content: markdownLoader('intro'),
    imports: {
      primaryColor,
      secondaryColor,
      tertiaryColor,
    },
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
        title: 'Alert',
        content: markdownLoader('itp-rcc-alert'),
        path: '/components/itp-rcc-alert/base',
        imports: { Alert },
      },
      {
        title: 'AutoComplete',
        content: markdownLoader('itp-rcc-autocomplete'),
        path: '/components/itp-rcc-autocomplete/base',
        imports: { AutoComplete },
      },
      {
        title: 'Card',
        content: markdownLoader('itp-rcc-card'),
        path: '/components/itp-rcc-card/base',
        imports: { Card },
      },
      {
        title: 'Collapse',
        content: Collapse,
        path: '/components/itp-rcc-collapse/base',
      },
      {
        title: 'Slider',
        content: markdownLoader('itp-rcc-slider'),
        path: '/components/itp-rcc-slider/base',
        imports: { Slider },
      },
    ],
  },
];
