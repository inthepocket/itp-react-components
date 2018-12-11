# ITP Card component
## Usage
```
$ npm install @inthepocket/itp-rcc-card
```

Import (Typescript)
```javascript
import { default as Card } from '@inthepocket/itp-rcc-card';
```

Import (ES)
```javascript
import Card from '@inthepocket/itp-rcc-card/dist/Card';
```

JSX
```jsx
<Card size="default">
  <Card.Header>
    <h1>Card Header</h1>
  </Card.Header>
  <Card.Body>
    <h2>Card Body title</h2>
    <p>Card Body content</p>
  </Card.Body>
  <Card.Footer>
    <p>Card footer</p>
  </Card.Footer>
</Card>
```

Card.Header & Card.Footer are optional.

## API documentation
### Card
```jsx
<Card size="default"></Card>
```
| Property           | Description                                                                                                    | Type     | Default   | Required |
| ------------------ | -------------------------------------------------------------------------------------------------------------- | -------- | --------- | -------- |
| href               | Link url                                                                                                       | string   | -         | No       |
| prefixCss          | Prefix for css classNames                                                                                      | string   | 'card'    | No       |
| size               | default, small or large                                                                                        | string   | 'default' | Yes      |
| styles             | imported css module (if passed, prefixed classNames will be disabled), see [styles property](#styles-property) | object   | null      | No       |
| onClick            |                                                                                                                | Function | -         | No       |
| target             | Link target                                                                                                    | string   | -         | No       |

#### Styles property
| Property           | Description                                           | Type   | Default | Required |
| ------------------ | ----------------------------------------------------- | ------ | ------- | -------- |
| card            |                                                          | string | -       | Yes      |
| header          |                                                          | string | -       | No       |
| headerSizeSmall |                                                          | string | -       | No       |
| headerSizeLarge |                                                          | string | -       | No       |
| body            |                                                          | string | -       | Yes      |
| bodySizeSmall   |                                                          | string | -       | No       |
| bodySizeLarge   |                                                          | string | -       | No       |
| footer          |                                                          | string | -       | No       |
| footerSizeSmall |                                                          | string | -       | No       |
| footerSizeLarge |                                                          | string | -       | No       |
| link            |                                                          | string | -       | No       |

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
```

### Body
```jsx
<Card size="default">
  <Card.Body>
    ...
  </Card.Body>
</Card>
```

### Header
```jsx
<Card size="default">
  <Card.Header>
    ...
  </Card.Header>
</Card>
```

### Footer
```jsx
<Card size="default">
  <Card.Footer>
    ...
  </Card.Footer>
</Card>
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