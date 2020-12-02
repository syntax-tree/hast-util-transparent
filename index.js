'use strict'

var convert = require('hast-util-is-element/convert')

module.exports = convert([
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
