'use strict'

/*
 * Create a function `keepFirst` takes a string
 * and only keep the 2 first characters
 *
 * Create a function `keepLast` takes a string
 * and only keep the 2 last characters
 *
 * Create a function `keepFirstLast` takes a string
 * and only keep 2 characters from the third character
 *
 * @next capitalize
 */

const keepFirst = (str) => str.slice(0, 2);
const keepLast = (str) => str.slice(str.length - 2);
const keepFirstLast = (str) => keepFirst(str) + keepLast(str);

// You must write your own tests
const assert = require('assert');

let expected = 'keepFirst';
assert.equal(typeof keepFirst, 'function', `dude you forget ${expected} function`);
assert.equal(keepFirst.length, 1, `${expected} needs a params`);
assert.strictEqual(keepFirst(''), '', `${expected} should return the same string`);
assert.strictEqual(keepFirst('twoLast'), 'tw', `${expected} keep the two 1st characters`);

expected = 'keepLast';
assert.equal(typeof keepLast, 'function', `dude you forget ${expected} function`);
assert.equal(keepLast.length, 1, `${expected} needs a params`);
assert.strictEqual(keepLast(''), '', `${expected} should return the same string`);
assert.strictEqual(keepLast('twoFirst'), 'st', `${expected} keep the 2 last characters`);

expected = 'keepFirstLast';
assert.equal(typeof keepFirstLast, 'function', `dude you forget ${expected} function`);
assert.equal(keepFirstLast.length, 1, `${expected} needs a params`);
assert.strictEqual(keepFirstLast(''), '', `${expected} should return the same string`);
assert.strictEqual(keepFirstLast('twoFirst'), 'twst', `${expected} keeps two 1st & last characters`);
