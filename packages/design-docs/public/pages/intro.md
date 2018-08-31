# Project Components

## Add theming

```color
value: '#10069f'
name: 'Main'
span: 4
```

```color
value: '#e1f3f9'
name: 'Secondary'
span: 2
```

```color-palette
colors:
  - {name: "shade1", value: "#376187"}
  - {name: "shade2", value: "#23527C"}
  - {name: "shade3", value: "#204B71"}
```

## With catalog, you can use inline React Components

```react
<div>Example site</div>
```

## With catalog, you can use inline React Components and show the source by default

```react
showSource: true
state: {clicked: 0}
---
<button onClick={() => setState({clicked: state.clicked + 1})}>
  Clicked {state.clicked} times
</button>
```

## Add hints

```hint
Make sure to use `text-rendering: optimizeLegibility;`on fonts over 36px, as well as `-webkit-font-smoothing: antialiased;` and `-moz-osx-font-smoothing: grayscale;` on dark backgrounds.
```

## Add inline html

```html
showSource: true
---
<div class="button">
    Hello world
</div>
```

## Add inline images

```image
light: true
span: 1
src: "/favicon.ico"
```
