'use strict';

var is = require('hast-util-is-element');

module.exports = transparent;

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
];

/* Check if a node is a transparent element */
function transparent(node) {
  return is(node, names);
}
