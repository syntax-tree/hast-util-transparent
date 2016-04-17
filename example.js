// Dependencies:
var transparent = require('./index.js');

// Given a non-transparent value:
var result = transparent({
    'type': 'element',
    'tagName': 'div',
    'children': [{
        'type': 'text',
        'value': 'Alpha'
    }]
});

// Yields:
console.log('js', String(result));

// Given a transparent element:
result = transparent({
    'type': 'element',
    'tagName': 'a',
    'properties': {
        'href': '#bravo',
        'title': 'Charlie'
    },
    'children': [{
        'type': 'text',
        'value': 'Delta'
    }]
});

// Yields:
console.log('js', String(result));
