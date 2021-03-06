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
<AutoComplete
  items={[{ value: 'Amsterdam' }, { value: 'Brussels' }]}
  name="city"
  onChange={({ value }) => { ... }}
  placeholder="City"
  size="small"
  type="search"
  value="Amsterdam"
/>
```

## API documentation
### AutoComplete
```jsx
<AutoComplete
  items={[{ value: 'Amsterdam' }, { value: 'Brussels' }]}
  name="city"
  onChange={({ value }) => { ... }}
  placeholder="City"
  size="small"
  type="search"
  value="Amsterdam"
/>
```
| Property           | Description                                                                                                    | Type                     | Default                             | Required |
| ------------------ | -------------------------------------------------------                                                        | ------------------------ | ----------------------------------- | -------- |
| autoComplete       | translates into autocomplete attribute on input element                                                        | boolean                  | 'new-password'                      | No       |
| hasRandomizedName  | randomizes the input's name attribute as a workaround for Chrome's stubborn autofill / autocompletion          | boolean                  | true                                | No       |
| InputComponent     | Input component                                                                                                | React.ReactNode          | &lt;input /&gt;                     | No       |
| isDisabled         | Disabled state                                                                                                 | boolean                  | false                               | No       |
| isLoading          | Loading  state                                                                                                 | boolean                  | false                               | No       |
| items              | Dropdown items                                                                                                 | Array<ListItemInterface> | undefined                           | No       |
| itemsToString      | List item toString method                                                                                      | Function                 | item => (item && item.value) || '', | No       |
| Loader             | Loading state component                                                                                        | React.ReactNode          | &lt;span&gt;Loading&lt;/span&gt;    | No       |
| onChange           | onChange event handler                                                                                         | Function                 | undefined                           | No       |
| placeholder        | input element placeholder text                                                                                 | String                   | ''                                  | No       |
| prefixCss          | Prefix for css classNames                                                                                      | String                   | 'auto-complete'                     | No       |
| size               | 'small' | 'default' | 'large'                                                                                  | String                   | 'default'                           | No       |
| styles             | imported css module (if passed, prefixed classNames will be disabled), see [styles property](#styles-property) | Object                   | null                                | No       |
| type               | input element type: 'email' | 'text' | 'search'                                                                | String                   | 'text'                              | No       |
| value              | input element value                                                                                            | String                   | ''                                  | No       |

### Classnames (when not using the styles property - css module)
```css
.itp-autocomplete { ... } // container
.itp-autocomplete--isLoading { ... } // container loading state
.itp-autocomplete--isOpen { ... } // container dropdown-opened state
.itp-autocomplete__input { ... } // text input container
.itp-autocomplete__list { ... } // dropdown list
.itp-autocomplete__listItem { ... } // dropdown list item
.itp-autocomplete__listItem--isHighlighted { ... } // dropdown list item highlighted state
.itp-autocomplete__listItem--isSelected { ... } // dropdown list item selected state
.itp-autocomplete__loader { ... } // loader element (mounted when isLoading property is true)
```

### Styles property (when using the styles property - css module)
| Property      | Description                                  | Type   | Default | Required |
| ------------- | -------------------------------------------- | ------ | ------- | -------- |
| autoComplete  | Autocomplete container                       | string | -       | No       |
| input         | Text input container                         | string | -       | No       |
| isHighlighted | Dropdown list item highlighted state         | string | -       | No       |
| isLoading     | Autocomplete container loading state         | string | -       | No       |
| isOpen        | Autocomplete container dropdown-opened state | string | -       | No       |
| isSelected    | Dropdown list item selected state            | string | -       | No       |
| list          | Dropdown list                                | string | -       | Yes      |
| listItem      | Dropdown list item                           | string | -       | Yes      |
| loader        | Loader component                             | string | -       | No       |


The css module should look like this:

```css
.autoComplete { ... }
.input { ... }
.isHighlighted { ... }
.isLoading { ... }
.isOpen { ... }
.isSelected { ... }
.list { ... }
.listItem { ... }
.loader { ... }
```

### DisableBrowserAutoComplete
Disables html form input autocomplete and autofill for every child on Chrome and Firefox. Based on https://gist.github.com/niksumeiko/360164708c3b326bd1c8

```javascript
import { DisableBrowserAutoComplete } from '@inthepocket/itp-rcc-autocomplete';
```

usage:

```jsx
<DisableBrowserAutoComplete>
  <AutoComplete />
  <input />
</DisableBrowserAutoComplete>
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