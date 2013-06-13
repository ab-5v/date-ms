;(function(root) {
/**
 * Helpers.
 */
var mult = {
    'ms': 1,
    's': 1000,
    'm': 1000 * 60,
    'h': 1000 * 60 * 60,
    'd': 1000 * 60 * 60 * 24,
    'y': 1000 * 60 * 60 * 24 * 365.25
};

var rems = /^((?:\d+)?\.?\d+)\s*(ms|s|m|h|d|y)?$/i;

/**
 * Parse given `ts`.
 *
 * @param {String|Number} ts
 *
 * @return {Number}
 * @api public
 */
var ms = function(ts) {
    switch (ts) {
        case '':
        case null:
        case undefined:
            return +new Date();
    }
    switch (typeof ts) {
        case 'string': return parse(ts);
        case 'object': return +ts;
        case 'number': return ts;
    }
};

ms.tz = (new Date()).getTimezoneOffset() * mult['m'];

Object.defineProperty(ms, 'tz', {
    writable: false,
    enumerable: true,
    value: (new Date()).getTimezoneOffset() * mult['m']
});

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */
function parse(str) {
    var match = rems.exec(str);
    return match ?
        parseFloat(match[1]) * mult[match[2] || 'ms'] :
        Date.parse(str);
}

if (typeof module === 'object' && module.exports) {
    module.exports = ms;
} else {
    this.ms = ms;
}

})(this);
