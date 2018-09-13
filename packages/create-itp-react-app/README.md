## Generated project structure
* docs
* src
  * app
    * screens
  * common (import from generated-project-name/common)
    * assets
    * components
      * atoms
      * molecules
      * organisms
    * primitives
  * core (import from generated-project-name/core)
    * actions
    * lib
    * reducers
    * sagas

### Local packages
* generated-project-name/common
* generated-project-name/core

## docz
* Added docz as a sub package because CRA uses webpack3, docz needs webpack4
* Due to a docz bug, it is currently not possible to import external (as in outside the docz folder) components:
  https://github.com/pedronauck/docz/issues/225

## Roadmap
* design system (in progress)
* example files (in progress)
* itp common components (in progress)
* itp-react-scripts (in progress)
* remove example files script
* css modules (react-app-rewired / react-scripts v2)
