# create-itp-react-app
Generates an ITP-ready React App.

Uses [create-react-app](https://github.com/facebook/create-react-app/) under the hood. Adds some [extra features](#features) and [example files](#example-files) within our common directory structure.

Typescript is enabled by default.

## Getting started

```
$ npx @inthepocket/create-itp-react-app <your-project-name>
$ cd <your-project-name>
$ npm start
```

## Features
* [create-react-app](https://github.com/facebook/create-react-app) (react-scripts)
* [react](https://github.com/facebook/react)
* [react-dom](https://reactjs.org/docs/react-dom.html)
* [redux](https://github.com/reduxjs/redux)
* [redux-saga](https://github.com/redux-saga/)
* [react-redux](https://github.com/reduxjs/react-redux)
* [redux-react-hook](https://github.com/facebookincubator/redux-react-hook)
* [typesafe-actions](https://github.com/piotrwitek/typesafe-actions)
* [react-test-renderer](https://reactjs.org/docs/test-renderer.html)
* [redux-saga-test-plan](https://github.com/jfairbank/redux-saga-test-plan)
* [typescript](https://github.com/Microsoft/TypeScript)
* [tslint](https://palantir.github.io/tslint/) <sup>1</sup>
* [normalizr](https://github.com/paularmstrong/normalizr)
* [css modules](https://github.com/css-modules/css-modules) (comes with react-scripts)
* [stylelint](https://github.com/stylelint/stylelint)
* [react-app-rewired](https://github.com/timarney/react-app-rewired) <sup>2</sup>
* [react-app-rewire-postcss](https://github.com/csstools/react-app-rewire-postcss) <sup>2</sup>
* [postcss-preset-env](https://preset-env.cssdb.org/) <sup>2</sup>
* [@inthepocket/itp-react-scripts](https://github.com/inthepocket/itp-react-scripts)
* [@inthepocket/hubble-mirror](https://github.com/inthepocket/hubble-mirror)
* [@inthepocket/design-docs](https://github.com/inthepocket/itp-react-components/tree/develop/packages/design-docs)
* [@inthepocket/common-components](https://github.com/inthepocket/itp-react-components)
* [@inthepocket/itp-css](https://bitbucket.org/inthepocket/itp-css/)

<sup>1</sup> should be replaced by eslint in the near future, [as pointed out by @thibmaek](https://github.com/inthepocket/itp-react-components/pull/41#issuecomment-468187783)

<sup>2</sup> postcss & postcss-preset-env now come with react-scripts ([stage 3 configured](https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/config/webpack.config.js)). Unfortunately we still need to rewire, because we'll need stage 1 & the [custom-media-queries](https://cssdb.org/#custom-media-queries) feature.

## Generated project structure

```
├── design-docs
└── src
    ├── __mockdata__
    ├── app
    │   └── screens
    ├── common (import from generated-project-name/common)
    │   ├── assets
        |   ├── fnt
        |   ├── img
    │   ├── components
    │   │   ├── atoms
    │   │   ├── molecules
    │   │   └── organisms
    │   └── primitives
    └── core (import from generated-project-name/core)
        ├── actions
        ├── reducers
        ├── sagas
        ├── schemas
        ├── selectors
        └── services
```

### Local packages

- generated-project-name/common
- generated-project-name/core
- generated-project-name/mock

## Example files

The generated project comes with some example files that demonstrate:

 * state management with [redux](https://github.com/reduxjs/redux), [redux-saga](https://github.com/redux-saga/redux-saga), [typesafe-actions](https://github.com/piotrwitek/typesafe-actions), [normalizr](https://github.com/paularmstrong/normalizr) & [redux-react-hook](https://github.com/facebookincubator/redux-react-hook)
 * testing with [jest](https://github.com/facebook/jest), [react-test-renderer](https://reactjs.org/docs/test-renderer.html), [redux-saga-test-plan](https://github.com/jfairbank/redux-saga-test-plan) and using mock data

## Development (running the generator locally)

- run the prepublishOnly script before running the generator (to generate the design-docs template folder)
- run `node index.js <MY_PROJECT_NAME>`
- a generated project is created in the folder <MY_PROJECT_NAME>

## Known issues

### Error: ENFILE: file table overflow

Stack trace

```
$ (node:56347) UnhandledPromiseRejectionWarning: Error: ENFILE: file table overflow, open '<LOCAL_PATH>/node_modules/jest-matchers/build/spyMatchers.js'
$ (node:56347) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise whichwas not handled with .catch(). (rejection id: 1)
$ (node:56347) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
```

Workaround

```
$ echo kern.maxfiles=65536 | sudo tee -a /etc/sysctl.conf
$ echo kern.maxfilesperproc=65536 | sudo tee -a /etc/sysctl.conf
$ sudo sysctl -w kern.maxfiles=65536
$ sudo sysctl -w kern.maxfilesperproc=65536
$ ulimit -n 65536
```

Jira ref: DESSSYS-26
