import {convertElement} from 'hast-util-is-element'

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
