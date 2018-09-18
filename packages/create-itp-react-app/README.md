# create-itp-react-app
## Getting started
```
$ npx @inthepocket/create-itp-react-app <your-project-name>
$ cd <your-project-name>
$ npm start
```
## Generated project structure

```
├── design-docs
└── src
    ├── app
    │   └── screens
    ├── common (import from generated-project-name/common)
    │   ├── assets
    │   ├── components
    │   │   ├── atoms
    │   │   ├── molecules
    │   │   └── organisms
    │   └── primitives
    └── core (import from generated-project-name/core)
        ├── actions
        ├── lib
        ├── reducers
        └── sagas
```

### Local packages

- generated-project-name/common
- generated-project-name/core

## Run the generator locally
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

## Roadmap

- design system (in progress)
- example files (in progress)
- itp common components (in progress)
- itp-react-scripts (in progress)
- remove example files script
- css modules (react-app-rewired / react-scripts v2)
