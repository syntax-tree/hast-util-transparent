'use strict'

var is = require('hast-util-is-element')

module.exports = transparent

var names = [
  'ol',
  'ul',
  'dd',
  'picture',
  'table',
  'thead',
  'tbody',
  'tfoot',
  'tr',
  'select',
  'datalist',
  'menu',
  'a',
  'ins',
  'del',
  'object',
  'video',
  'audio',
  'map',
  'noscript',
  'canvas'
]

function transparent(node) {
  return is(node, names)
}
