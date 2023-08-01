import {convertElement} from 'hast-util-is-element'

const names = new Set([
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

/**
 * Check if a node is an element with a [*transparent content model*].
 *
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
export const transparent = convertElement(
  /**
   * @param element
   * @returns {element is {tagName: 'a' | 'audio' | 'canvas' | 'datalist' | 'dd' | 'del' | 'ins' | 'map' | 'menu' | 'noscript' | 'object' | 'ol' | 'picture' | 'select' | 'table' | 'tbody' | 'tfoot' | 'thead' | 'tr' | 'ul' | 'video'}}
   */
  function (element) {
    return names.has(element.tagName)
  }
)
