import assert from 'node:assert/strict'
import test from 'node:test'
import {transparent} from './index.js'
import * as mod from './index.js'

test('transparent', () => {
  assert.deepEqual(
    Object.keys(mod).sort(),
    ['transparent'],
    'should expose the public api'
  )

  // @ts-expect-error: check how a missing `node` is handled.
  assert.equal(transparent(), false, 'should return `false` without node')

  assert.equal(transparent(null), false, 'should return `false` with `null`')

  assert.equal(
    transparent({type: 'text'}),
    false,
    'should return `false` when without `element`'
  )

  assert.equal(
    transparent({type: 'element'}),
    false,
    'should return `false` when with invalid `element`'
  )

  assert.equal(
    transparent({
      type: 'element',
      tagName: 'div',
      children: [{type: 'text', value: 'Alpha'}]
    }),
    false,
    'should return `false` when without not transparent'
  )

  assert.equal(
    transparent({
      type: 'element',
      tagName: 'a',
      properties: {href: '#bravo', title: 'Charlie'},
      children: [{type: 'text', value: 'Delta'}]
    }),
    true,
    'should return `true` when with transparent'
  )
})
