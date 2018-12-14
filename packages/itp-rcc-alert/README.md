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
</Card>
```

## API documentation
### Alert
```jsx
<Alert>
  <p>Alert content</p>
</Card>
```
| Property           | Description                                                                                                    | Type     | Default   | Required |
| ------------------ | -------------------------------------------------------------------------------------------------------------- | -------- | --------- | -------- |
| href               | Link url                                                                                                       | string   | -         | No       |
| prefixCss          | Prefix for css classNames                                                                                      | string   | 'card'    | No       |
| size               | default, small or large                                                                                        | string   | 'default' | No       |
| styles             | imported css module (if passed, prefixed classNames will be disabled), see [styles property](#styles-property) | object   | null      | No       |
| type               | primary, secondary or tertiary                                                                                 | string   | 'primary' | No       |
| onClick            |                                                                                                                | Function | -         | No       |
| target             | Link target                                                                                                    | string   | -         | No       |

#### Styles property
| Property           | Description                                           | Type   | Default | Required |
| ------------------ | ----------------------------------------------------- | ------ | ------- | -------- |
| body            |                                                          | string | -       | Yes      |
| bodySizeLarge   |                                                          | string | -       | No       |
| bodySizeSmall   |                                                          | string | -       | No       |
| card            |                                                          | string | -       | Yes      |
| footer          |                                                          | string | -       | No       |
| footerSizeLarge |                                                          | string | -       | No       |
| footerSizeSmall |                                                          | string | -       | No       |
| header          |                                                          | string | -       | No       |
| headerSizeLarge |                                                          | string | -       | No       |
| headerSizeSmall |                                                          | string | -       | No       |
| link            |                                                          | string | -       | No       |
| typePrimary     |                                                          | string | -       | No       |
| typeSecondary   |                                                          | string | -       | No       |
| typeTertiary    |                                                          | string | -       | No       |

The css module should look like this:

```css
.card             { ... }
.header           { ... }
.headerSizeSmall  { ... }
.headerSizeLarge  { ... }
.body             { ... }
.bodySizeSmall    { ... }
.bodySizeLarge    { ... }
.footer           { ... }
.footerSizeSmall  { ... }
.footerSizeLarge  { ... }
.link             { ... }
.typePrimary      { ... }
.typeSecondary    { ... }
.typeTertiary     { ... }
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