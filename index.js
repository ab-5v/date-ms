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
module.exports = function(ts){
    var res;
    switch (typeof ts) {
        case 'object': res = +ts; break;
        case 'number': res = ts; break;
        case 'string': res = parse(ts); break;
        case 'undefined': res = +new Date(); break;
    }
    return res;
};

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
