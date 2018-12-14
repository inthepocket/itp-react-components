# ITP Basic React Button 🎁

## Why is this a separate package? I can just define `<button>` inside my project?

- We need a standard implementation to build upon and to share across projects
- Built-in types
- Built-in tests (todo)
- Built-in loading styling
- Built-in fallback on href prop to `<a>` element
- Built-in spacing between icons, text and other children of button
- Built-in A11Y (WAI-ARIA roles and attributes)
- Built-in ButtonGroup

## API

Inspired by [ant-design button](https://github.com/ant-design/ant-design/blob/master/components/button/index.en-US.md#api) with stripped styling, shares the same API.

## Custom API

| Property  | Description                                                                                                    | Type     | Default   |
| --------- | -------------------------------------------------------------------------------------------------------------- | -------- | --------- |
| block     | block state                                                                                                    | Boolean  | false     |
| color     | can be set to `primary` `secondary` `tertiary` or omitted                                                      | string   | -         |
| ghost     | ghost state                                                                                                    | Boolean  | false     |
| htmlType  | 'submit', 'button' or 'reset'                                                                                  | string   | 'button'  |
| loading   | loading state                                                                                                  | Boolean  | false     |
| onClick   | onClick handler                                                                                                | Function | () => {}  |
| prefixCls | prefix css class name                                                                                          | string   | ''        |
| shape     | 'circle' or 'circle-outline'                                                                                   | string   | null      |
| size      | 'default', 'small' or 'large'                                                                                  | string   | null      |
| styles    | imported css module (if passed, prefixed classNames will be disabled), see [styles property](#styles-property) | object   | null      |
| type      | 'default', 'primary', 'ghost', 'dashed' or 'danger'                                                            | string   | 'default' |

### Styles property
| Property           | Description                                              | Type   | Default | Required |
| ------------------ | -------------------------------------------------------- | ------ | ------- | -------- |
| backgroundGhost    |                                                          | string | -       | No       |
| block              |                                                          | string | -       | No       |
| button             |                                                          | string | -       | Yes      |
| colorPrimary       |                                                          | string | -       | No       |
| colorSecondary     |                                                          | string | -       | No       |
| colorTertiary      |                                                          | string | -       | No       |
| loading            |                                                          | string | -       | No       |
| shapeCircle        |                                                          | string | -       | No       |
| shapeCircleOutline |                                                          | string | -       | No       |
| sizeLarge          |                                                          | string | -       | No       |
| sizeSmall          |                                                          | string | -       | No       |
| typeDanger         |                                                          | string | -       | No       |
| typeDashed         |                                                          | string | -       | No       |
| typeGhost          |                                                          | string | -       | No       |
| typePrimary        |                                                          | string | -       | No       |

The css module should look like this:

```css
.backgroundGhost { ... }
.block { ... }
.backgroundGhost { ... }
.block { ... }
.button: { ... },
.colorPrimary { ... }
.colorSecondary { ... }
.colorTertiary { ... }
.loading { ... }
.shapeCircle { ... }
.shapeCircleOutline { ... }
.sizeLarge { ... }
.sizeSmall { ... }
.typeDanger { ... }
.typeDashed { ... }
.typeGhost { ... }
.typePrimary { ... }
```