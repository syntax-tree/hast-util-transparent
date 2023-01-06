/**
 * @typedef {import('hast').Element} Element
 */

import {convertElement} from 'hast-util-is-element'

/**
 * Check if a node is an element with a transparent content model.
 *
 * @type {import('hast-util-is-element').AssertPredicate<Element & {tagName: 'a' | 'audio' | 'canvas' | 'datalist' | 'dd' | 'del' | 'ins' | 'map' | 'menu' | 'noscript' | 'object' | 'ol' | 'picture' | 'select' | 'table' | 'tbody' | 'tfoot' | 'thead' | 'tr' | 'ul' | 'video'}>}
 * @param value
 *   Thing to check (typically `Node`).
 * @returns
 *   Whether `value` is an element with a transparent content model.
 *
 *   The elements `a`, `audio`, `canvas`, `datalist`, `dd`, `del`, `ins`,
 *   `map`, `menu`, `noscript`, `object`, `ol`, `picture`, `select`, `table`,
 *   `tbody`, `tfoot`, `thead`, `tr`, `ul`, and `video` have transparent
 *   content models.
 */
// @ts-expect-error Sure, the assertion matches.
export const transparent = convertElement([
  'a',
  'audio',
  'canvas',
  'datalist',
  'dd',
  'del',
  'ins',
  'map',
  'menu',
  'noscript',
  'object',
  'ol',
  'picture',
  'select',
  'table',
  'tbody',
  'tfoot',
  'thead',
  'tr',
  'ul',
  'video'
])
