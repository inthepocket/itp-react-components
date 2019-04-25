# ITP Slider component
A simple slider component based on [react-compound-slider](https://github.com/sghall/react-compound-slider/).

## Usage
```
$ npm install @inthepocket/itp-rcc-slider
```

Import
```javascript
import Slider from '@inthepocket/itp-rcc-slider';
```

JSX
```jsx
<Slider values={[3]} />
```

## API documentation
### Slider
```jsx
<Slider
  values={[3]}
  domain={[0, 10]}
  step={1}
  onChange={values => console.log(values)}
  right={false}
/>
```

| Property                       | Description                                                                                                      | Type          | Default   | Required |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------- | ------------- | --------- | -------- |
| ...slider props                | See [react-compound-slider slider docs](https://sghall.github.io/react-compound-slider/#/component-api/slider)   | -             | -         | -        |
| left                           | Boolean value to control whether the left most track is included in the tracks array. <sup>1</sup>               | boolean       | true      | -        |
| right                          | Boolean value to control whether the right most track is included in the tracks array. <sup>1</sup>              | boolean       | true      | -        |
| prefixCss                      | Prefix for css classNames                                                                                        | string        | 'slider'  | No       |
| styles                         | imported css module (if passed, prefixed classNames will be disabled), see [styles property](#styles-property)   | Object        | null      | No       |

<sup>1</sup> See [react-compound-slider Tracks docs](https://sghall.github.io/react-compound-slider/#/component-api/tracks)

#### Styles property
| Property           | Description | Type   | Default | Required |
| ------------------ | ----------- | ------ | ------- | -------- |
| Slider             | -           | string | -       | Yes      |
| Rail               | -           | string | -       | Yes      |
| Track              | -           | string | -       | Yes      |
| Handle             | -           | string | -       | Yes      |
| isHandleActive     | -           | string | -       | No       |

The css module should look like this:

```css
.Slider {}
.Rail {}
.Track {}
.Handle {}
.isHandleActive {}
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