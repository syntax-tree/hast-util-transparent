# hast-util-transparent [![Build Status][build-badge]][build-page] [![Coverage Status][coverage-badge]][coverage-page]

Check if a [node][] is a [**transparent**][spec] [element][].

## Installation

[npm][]:

```bash
npm install hast-util-transparent
```

## Usage

Dependencies:

```javascript
var transparent = require('hast-util-transparent');

transparent({
  type: 'element',
  tagName: 'div',
  children: [{type: 'text', value: 'Alpha'}]
}); //=> false

transparent({
  type: 'element',
  tagName: 'a',
  properties: {href: '#bravo', title: 'Charlie'},
  children: [{type: 'text', value: 'Delta'}]
}); //=> true
```

## API

### `transparent(node)`

Check if the given value is a [**transparent**][spec] [element][].

###### Parameters

`node` (`*`) — Value to check.

###### Returns

`boolean` — whether `node` passes the test.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definition -->

[build-badge]: https://img.shields.io/travis/syntax-tree/hast-util-transparent.svg

[build-page]: https://travis-ci.org/syntax-tree/hast-util-transparent

[coverage-badge]: https://img.shields.io/codecov/c/github/syntax-tree/hast-util-transparent.svg

[coverage-page]: https://codecov.io/github/syntax-tree/hast-util-transparent?branch=master

[npm]: https://docs.npmjs.com/cli/install

[license]: LICENSE

[author]: http://wooorm.com

[node]: https://github.com/syntax-tree/hast#node

[element]: https://github.com/syntax-tree/hast#element

[spec]: https://html.spec.whatwg.org/#transparent-content-models
