# ITP AutoComplete component
Built on [downshift](https://github.com/paypal/downshift).
For now, this is a controlled component only. You'll have to pass the input value and handle the changes and manage the autocomplete items.

## Usage
```
$ npm install @inthepocket/itp-rcc-autocomplete
```

Import (Typescript)
```javascript
import { default as AutoComplete } from '@inthepocket/itp-rcc-autocomplete';
```

Import (ES)
```javascript
import AutoComplete from '@inthepocket/itp-rcc-autocomplete';
```

JSX
```jsx
<AutoComplete></AutoComplete>
```

## API documentation
### AutoComplete
```jsx
<AutoComplete></AutoComplete>
```
| Property           | Description                                           | Type   | Default | Required |
| ------------------ | ----------------------------------------------------- | ------ | ------- | -------- |


#### Styles property
| Property           | Description                                           | Type   | Default | Required |
| ------------------ | ----------------------------------------------------- | ------ | ------- | -------- |

The css module should look like this:

```css

```

## Development
### Installation
```
$ npm install
```

### Test
```
$ npm run test
```

### Build
Compiles the TypeScript source to ES5.

```
$ npm run build
```