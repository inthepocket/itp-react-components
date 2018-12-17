# ITP Alert component
## Usage
```
$ npm install @inthepocket/itp-rcc-alert
```

Import (Typescript)
```javascript
import { default as Alert } from '@inthepocket/itp-rcc-alert';
```

Import (ES)
```javascript
import Alert from '@inthepocket/itp-rcc-alert';
```

JSX
```jsx
<Alert>
  <p>Alert content</p>
</Alert>
```

## API documentation
### Alert
```jsx
<Alert>
  <p>Alert content</p>
</Alert>
```
| Property               | Description                                                                                                    | Type                 | Default                                 | Required |
| ---------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------- | --------------------------------------- | -------- |
| dismissButtonAriaLabel | ARIA label text for dismiss button (requires hasDismissButton to be true)                                      | string               | 'Dismiss'                               | No       |
| dismissIcon            | Icon for dismiss button (requires hasDismissButton to be true)                                                 | string / ReactNode   | <span aria-hidden="true">&times;</span> | No       |
| hasDismissButton       | Show dismiss button                                                                                            | Boolean              | false                                   | No       |
| onDismiss              | Dismiss button click handler (requires hasDismissButton to be true)                                            | Function             | nulla                                   | No       |
| prefixCss              | Prefix for css classNames                                                                                      | string               | 'alert'                                 | No       |
| styles                 | imported css module (if passed, prefixed classNames will be disabled), see [styles property](#styles-property) | object               | null                                    | No       |
| type                   | 'default', 'success', 'danger', 'warning' or 'info'                                                            | string               | 'primary'                               | No       |

#### Styles property
| Property      | Description                                           | Type   | Default | Required |
| --------------| ----------------------------------------------------- | ------ | ------- | -------- |
| alert         |                                                       | string | -       | Yes      |
| button        |                                                       | string | -       | No       |
| dismissButton |                                                       | string | -       | No       |
| typeDanger    |                                                       | string | -       | No       |
| typeDefault   |                                                       | string | -       | No       |
| typeInfo      |                                                       | string | -       | No       |
| typeSuccess   |                                                       | string | -       | No       |
| typeWarning   |                                                       | string | -       | No       |

The css module should look like this:

```css
.alert          { ... }
.button         { ... }
.dismissButton  { ... }
.typeDanger     { ... }
.typeDefault    { ... }
.typeInfo       { ... }
.typeSuccess    { ... }
.typeWarning    { ... }
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