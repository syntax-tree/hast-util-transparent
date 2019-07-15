# hast-util-transparent

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]
[![Sponsors][sponsors-badge]][collective]
[![Backers][backers-badge]][collective]
[![Chat][chat-badge]][chat]

[**hast**][hast] utility to check if `node` is a [*transparent*][spec]
[*element*][element].

## Install

[npm][]:

```sh
npm install hast-util-transparent
```

## Usage

```js
var transparent = require('hast-util-transparent')

transparent({
  type: 'element',
  tagName: 'div',
  children: [{type: 'text', value: 'Alpha'}]
}) // => false

transparent({
  type: 'element',
  tagName: 'a',
  properties: {href: '#bravo', title: 'Charlie'},
  children: [{type: 'text', value: 'Delta'}]
}) // => true
```

## API

### `transparent(node)`

Check if the given value is a [*transparent*][spec] [*element*][element].

###### Parameters

*   `node` (`*`) — Value to check, probably [`Element`][element].

###### Returns

`boolean` — whether `node` passes the test.

## Security

`hast-util-transparent` does not change the syntax tree so there are no openings
for [cross-site scripting (XSS)][xss] attacks.

## Contribute

See [`contributing.md` in `syntax-tree/.github`][contributing] for ways to get
started.
See [`support.md`][support] for ways to get help.

This project has a [Code of Conduct][coc].
By interacting with this repository, organisation, or community you agree to
abide by its terms.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definition -->

[build-badge]: https://img.shields.io/travis/syntax-tree/hast-util-transparent.svg

[build]: https://travis-ci.org/syntax-tree/hast-util-transparent

[coverage-badge]: https://img.shields.io/codecov/c/github/syntax-tree/hast-util-transparent.svg

[coverage]: https://codecov.io/github/syntax-tree/hast-util-transparent

[downloads-badge]: https://img.shields.io/npm/dm/hast-util-transparent.svg

[downloads]: https://www.npmjs.com/package/hast-util-transparent

[size-badge]: https://img.shields.io/bundlephobia/minzip/hast-util-transparent.svg

[size]: https://bundlephobia.com/result?p=hast-util-transparent

[sponsors-badge]: https://opencollective.com/unified/sponsors/badge.svg

[backers-badge]: https://opencollective.com/unified/backers/badge.svg

[collective]: https://opencollective.com/unified

[chat-badge]: https://img.shields.io/badge/join%20the%20community-on%20spectrum-7b16ff.svg

[chat]: https://spectrum.chat/unified/syntax-tree

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://wooorm.com

[contributing]: https://github.com/syntax-tree/.github/blob/master/contributing.md

[support]: https://github.com/syntax-tree/.github/blob/master/support.md

[coc]: https://github.com/syntax-tree/.github/blob/master/code-of-conduct.md

[spec]: https://html.spec.whatwg.org/#transparent-content-models

[hast]: https://github.com/syntax-tree/hast

[element]: https://github.com/syntax-tree/hast#element

[xss]: https://en.wikipedia.org/wiki/Cross-site_scripting
