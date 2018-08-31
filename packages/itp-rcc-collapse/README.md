## ITP Basic React Collapse / Accordion 🎁

### Why use this over your own implementation?

- Enforced isolation and reusability
- Tests included
- Browser support included (supports ie8 and up)
- Accessibility included
- Shared well-thought-out implementation over projects: this implementation should cover your use case and all future versions of your use case
- Styled examples: if the design can't be built using this component we need to either rethink this implementation or change the design
- Lazy render support included
- Customizable animation included

### API

Extends [rc-collapse](https://github.com/react-component/collapse/blob/master/README.md#api) with stripped styling.

### Develop locally

`npm start`
Go to localhost:3001 and see your changes appearing automatically

### Develop in the ITP Component Storybook

==> Any changes you make here will be automatically reflected inside the design-docs

- Do `npm link` in this repo, this will create a symlink in the global folder on your computer.
- Run `npm run watch`in this repo. Babel will watch for file changes in your src directory and copy changes towards the dist folder.
- Do `npm link <YOUR_PACKAGE_NAME>` inside the itp-react-common-components library.
