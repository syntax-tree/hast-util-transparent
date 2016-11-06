'use strict';

/* Dependencies. */
var test = require('tape');
var transparent = require('./index.js');

/* Tests. */
test('transparent', function (t) {
  t.equal(
    transparent(),
    false,
    'should return `false` without node'
  );

  t.equal(
    transparent(null),
    false,
    'should return `false` with `null`'
  );

  t.equal(
    transparent({type: 'text'}),
    false,
    'should return `false` when without `element`'
  );

  t.equal(
    transparent({type: 'element'}),
    false,
    'should return `false` when with invalid `element`'
  );

  t.equal(
    transparent({
      type: 'element',
      tagName: 'div',
      children: [{type: 'text', value: 'Alpha'}]
    }),
    false,
    'should return `false` when without not transparent'
  );

  t.equal(
    transparent({
      type: 'element',
      tagName: 'a',
      properties: {href: '#bravo', title: 'Charlie'},
      children: [{type: 'text', value: 'Delta'}]
    }),
    true,
    'should return `true` when with transparent'
  );

  t.end();
});
