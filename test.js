import assert from 'node:assert/strict'
import test from 'node:test'
import {transparent} from 'hast-util-transparent'

test('transparent', async function (t) {
  await t.test('should expose the public api', async function () {
    assert.deepEqual(
      Object.keys(await import('hast-util-transparent')).sort(),
      ['transparent']
    )
  })

  await t.test('should return `false` without node', async function () {
    // @ts-expect-error: check how a missing `node` is handled.
    assert.equal(transparent(), false)
  })

  await t.test('should return `false` with `null`', async function () {
    assert.equal(transparent(null), false)
  })

  await t.test(
    'should return `false` when without `element`',
    async function () {
      assert.equal(transparent({type: 'text'}), false)
    }
  )

  await t.test(
    'should return `false` when with invalid `element`',
    async function () {
      assert.equal(transparent({type: 'element'}), false)
    }
  )

  await t.test(
    'should return `false` when without not transparent',
    async function () {
      assert.equal(
        transparent({
          type: 'element',
          tagName: 'div',
          children: [{type: 'text', value: 'Alpha'}]
        }),
        false
      )
    }
  )

  await t.test('should return `true` when with transparent', async function () {
    assert.equal(
      transparent({
        type: 'element',
        tagName: 'a',
        properties: {href: '#bravo', title: 'Charlie'},
        children: [{type: 'text', value: 'Delta'}]
      }),
      true
    )
  })
})
