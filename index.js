/**
 * @author Titus Wormer
 * @copyright 2016 Titus Wormer
 * @license MIT
 * @module rehype:lint:util:transparent
 */

'use strict';

/* eslint-env commonjs */

/*
 * Dependencies.
 */

var is = require('hast-util-is-element');

/*
 * Tag-names.
 */

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

/**
 * Check if a node is a transparent element
 *
 * @param {*} node - Thing to check.
 * @return {boolean} - Whether a node is transparent.
 */
function transparent(node) {
    return is(node, names);
}

/*
 * Expose.
 */

module.exports = transparent;
