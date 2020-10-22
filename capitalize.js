'use strict'

/*
 * Create a function `capitalize` takes a string
 * and transform to upper case only the first letter
 *
 * @next jaden-case
 */

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

// You must write your own tests
const assert = require('assert');

let expected = 'capitalize';
assert.equal(typeof capitalize, 'function', `dude you forget ${expected} function`);
assert.equal(capitalize.length, 1, `${expected} needs a params`);
assert.strictEqual(capitalize(''), '', `${expected} should return the same string`);
assert.strictEqual(capitalize('twoLast'), 'TwoLast', `${expected} up case the 1st character`);
