import React from 'react';
import ReactDOM from 'react-dom';
import { Catalog } from 'catalog';
import pages from './pages';
import root from '../root.json';
import logo from '../assets/images/logo.svg';

const BRAND_COLOR = root.colorPrimary600 || '#10069c';
const LINK_COLOR = root.colorTertiary600 || '#FF5555';

// Defaults overwritten with CONSTANTS from above
const theme = {
  // Colors
  background: '#F9F9F9',
  textColor: '#333333',
  codeColor: '#00263E',
  linkColor: LINK_COLOR,

  // NavigationBar background color, but also sometimes used as a foreground
    // or border color.
  lightColor: '#D6D6D6',

  // Used in PageHeader
  pageHeadingBackground: BRAND_COLOR,
  pageHeadingTextColor: '#fff',

  // Used in Menu and PageHeader to make sure the top parts have
  // the same height.
  pageHeadingHeight: 200,

  // Used for navigation bar
  navBarBackground: '#F2F2F2',
  navBarTextColor: BRAND_COLOR,

  // Used in ResponsiveTabs (tab text), Download specimen (title text).
  // Typography: headings.
  brandColor: BRAND_COLOR,

  sidebarColor: '#FFFFFF',
  sidebarColorActive: '#D1312E',
  sidebarColorText: BRAND_COLOR,
  sidebarColorTextActive: LINK_COLOR,
  sidebarColorLine: '#EBEBEB',
  sidebarColorHeading: BRAND_COLOR,

  // Used in the html, react, and image specimens.
  bgLight: '#F2F2F2',
  bgDark: '#333333',

  // Keys appear to be PrismJS token types.
  codeStyles: {
    tag: { color: LINK_COLOR },
    punctuation: { color: '#535353' },
    script: { color: '#3F7397' },
    function: { color: LINK_COLOR },
    keyword: { color: '#3F7397' },
    string: { color: '#00263E' },
  },

  // Patterns
  checkerboardPatternLight:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAAAAACoWZBhAAAAF0lEQVQI12P4BAI/QICBFCaYBPNJYQIAkUZftTbC4sIAAAAASUVORK5CYII=',
  checkerboardPatternDark:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAAAAACoWZBhAAAAFklEQVQI12NQBQF2EGAghQkmwXxSmADZJQiZ2ZZ46gAAAABJRU5ErkJggg==',

  // Fonts
  fontFamily: "'Roboto', sans-serif",
  fontHeading: "'Roboto', sans-serif",
  fontMono: "'Roboto Mono', monospace",

  // Base font size in pixels.
  baseFontSize: 16,

  // Modular scale ratio that is used to figure out all the different font sizes
  msRatio: 1.2,
};

ReactDOM.render(
  <Catalog title="ITP React Components" logoSrc={logo} theme={theme} pages={pages} />,
  document.getElementById('catalog'),
);
