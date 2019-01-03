### Unstyled

```react
---
<AutoComplete
  items={[
    { value: 'Amsterdam' },
    { value: 'Bangkok' },
    { value: 'Brussels' },
    { value: 'London' },
    { value: 'New York' },
    { value: 'Paris' },
  ]}
/>
```

### Default

```react
---
<AutoComplete
  items={[
    { value: 'Amsterdam' },
    { value: 'Bangkok' },
    { value: 'Brussels' },
    { value: 'London' },
    { value: 'New York' },
    { value: 'Paris' },
  ]}
  prefixCss='itp-autocomplete'
/>
```

### Loading state
E.g. when using the autocomplete as typehead

```react
---
<AutoComplete
  isLoading={true}
  items={[
    { value: 'Amsterdam' },
    { value: 'Bangkok' },
    { value: 'Brussels' },
    { value: 'London' },
    { value: 'New York' },
    { value: 'Paris' },
  ]}
  prefixCss='itp-autocomplete'
/>
```