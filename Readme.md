
# Dom4

  In order to avoid verbose and weird code like `el.parentNode.removeChild(el)`,
  `parent.insertBefore(el, parent.firstChild)`, or `el.insertAdjacentHTML('beforebegin', string)`,
  [Dom Level 4](https://dvcs.w3.org/hg/domcore/raw-file/tip/Overview.html#interface-element)
  proposes 6 nice methods:

  - prepend/append
  - before/after
  - replace/remove

But, they are not implemented in all browsers, and [shim](https://github.com/WebReflection/dom4) is not a choose.
This library eliminates most of the needs for dom manipulations. Has no dependencies and only 38 CLOC.

  Inspired by:

  - [you might not need jquery](http://youmightnotneedjquery.com/)
  - [dom level 4 proposal](https://github.com/WebReflection/dom4)
  - [component/dom](https://github.com/component/dom)

## Installation

```
$ component install ask11/dom4
```

## Example

```js
var remove = require('dom4').remove;
var el = document.querySelector('#app');

remove(el);
```

## API

  Names explain yourself.

### .prepend(el, node)
### .append(el, node)
### .before(el, node)
### .after(el, node)
### .replace(el, node)
### .remove(el)

## Development

  With [component(1)](github.com/component/component)
  and [component-testem](github.com/gingkoapp/component-testem):

```
$ npm install -g component component-testem
$ component install --dev
$ component testem
```

## Licence

  MIT, [Aleksey Kulikov](http://ask11.mit-license.org/).
