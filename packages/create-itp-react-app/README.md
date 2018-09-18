# create-itp-react-app
## Getting started
```
$ npx @inthepocket/create-itp-react-app <your-project-name>
$ cd <your-project-name>
$ npm start
```
## Generated project structure

```
├── docs
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

## Run the generator

- run `node index.js <MY_PROJECT_NAME>`
- a generated project is created in the folder <MY_PROJECT_NAME>

## Roadmap

- design system (in progress)
- example files (in progress)
- itp common components (in progress)
- itp-react-scripts (in progress)
- remove example files script
- css modules (react-app-rewired / react-scripts v2)
