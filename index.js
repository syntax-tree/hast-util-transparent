/**
 * @typedef {import('hast').Element & {tagName: 'a'|'audio'|'canvas'|'datalist'|'dd'|'del'|'ins'|'map'|'menu'|'noscript'|'object'|'ol'|'picture'|'select'|'table'|'tbody'|'tfoot'|'thead'|'tr'|'ul'|'video'}} Transparent
 * @typedef {import('hast-util-is-element').AssertPredicate<Transparent>} AssertTransparent
 */

import {convertElement} from 'hast-util-is-element'

/**
 * Check if a node is a script-supporting element.
 * @type {AssertTransparent}
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
