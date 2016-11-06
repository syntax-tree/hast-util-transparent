'use strict';

/* Dependencies. */
var is = require('hast-util-is-element');

/* Expose. */
module.exports = transparent;

/* Tag-names. */
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
