*This repository is a mirror of the [component](http://component.io) module [ask11/dom4](http://github.com/ask11/dom4). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/ask11-dom4`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*
# Dom4

  In order to avoid verbose and weird code like `el.parentNode.removeChild(el)`, or
  `parent.insertBefore(el, parent.firstChild)`,
  [Dom Level 4](https://dvcs.w3.org/hg/domcore/raw-file/tip/Overview.html#interface-element)
  proposes 6 nice methods:

  - prepend/append
  - before/after
  - replace/remove

But, they are not implemented in all browsers, and [shim](https://github.com/WebReflection/dom4) is not a choose.
This library eliminates most of the needs for dom manipulations, has no dependencies and containts only 38 CLOC.

  Inspired by:

  - [dom level 4 proposal](https://github.com/WebReflection/dom4)
  - http://youmightnotneedjquery.com/
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

```
$ npm install -g component component-testem
$ component install --dev
$ component testem
```

## Licence

  MIT, [Aleksey Kulikov](http://ask11.mit-license.org/).
