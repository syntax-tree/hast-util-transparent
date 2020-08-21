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

## Use

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

## Related

*   [`hast-util-is-element`](https://github.com/syntax-tree/hast-util-is-element)
    — check if a node is a (certain) element
*   [`hast-util-has-property`](https://github.com/syntax-tree/hast-util-has-property)
    — check if a node has a property
*   [`hast-util-whitespace`](https://github.com/syntax-tree/hast-util-whitespace)
    — check if a node is inter-element whitespace
*   [`hast-util-heading`](https://github.com/syntax-tree/hast-util-heading)
    — check if a node is a heading element
*   [`hast-util-labelable`](https://github.com/syntax-tree/hast-util-labelable)
    — check whether a node is labelable
*   [`hast-util-phrasing`](https://github.com/syntax-tree/hast-util-phrasing)
    — check if a node is phrasing content
*   [`hast-util-embedded`](https://github.com/syntax-tree/hast-util-embedded)
    — check if a node is an embedded element
*   [`hast-util-sectioning`](https://github.com/syntax-tree/hast-util-sectioning)
    — check if a node is a sectioning element
*   [`hast-util-interactive`](https://github.com/syntax-tree/hast-util-interactive)
    — check if a node is interactive
*   [`hast-util-script-supporting`](https://github.com/syntax-tree/hast-util-script-supporting)
    — check if a node is a script-supporting element
*   [`hast-util-is-body-ok-link`](https://github.com/rehypejs/rehype-minify/tree/HEAD/packages/hast-util-is-body-ok-link)
    — check if a node is “Body OK” link element
*   [`hast-util-is-conditional-comment`](https://github.com/rehypejs/rehype-minify/tree/HEAD/packages/hast-util-is-conditional-comment)
    — check if a node is a conditional comment
*   [`hast-util-is-css-link`](https://github.com/rehypejs/rehype-minify/tree/HEAD/packages/hast-util-is-css-link)
    — check if a node is a CSS link element
*   [`hast-util-is-css-style`](https://github.com/rehypejs/rehype-minify/tree/HEAD/packages/hast-util-is-css-style)
    — check if a node is a CSS style element
*   [`hast-util-is-javascript`](https://github.com/rehypejs/rehype-minify/tree/HEAD/packages/hast-util-is-javascript)
    — check if a node is a JavaScript script element

## Contribute

See [`contributing.md` in `syntax-tree/.github`][contributing] for ways to get
started.
See [`support.md`][support] for ways to get help.

This project has a [code of conduct][coc].
By interacting with this repository, organization, or community you agree to
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

[chat-badge]: https://img.shields.io/badge/chat-discussions-success.svg

[chat]: https://github.com/syntax-tree/unist/discussions

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://wooorm.com

[contributing]: https://github.com/syntax-tree/.github/blob/HEAD/contributing.md

[support]: https://github.com/syntax-tree/.github/blob/HEAD/support.md

[coc]: https://github.com/syntax-tree/.github/blob/HEAD/code-of-conduct.md

[spec]: https://html.spec.whatwg.org/#transparent-content-models

[hast]: https://github.com/syntax-tree/hast

[element]: https://github.com/syntax-tree/hast#element

[xss]: https://en.wikipedia.org/wiki/Cross-site_scripting
