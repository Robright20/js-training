'use strict'

/*
 * Create the function `cutFirst` that takes a string and remove the 2 last characters
 * Create the function `cutLast` that takes a string and remove the 2 first charcters
 * Create the function `cutFistLast` that takes a string
 * and remove the 2 first charcters and 2 last characters
 *
 * @next keep
 */

const cutFirst = (str) => str.substring(0, str.length - 2);

const cutLast = (str) => str.substring(2);

const cutFirstLast = (str) => str.slice(2, str.length - 2);

// You must write your own tests
const assert = require('assert');

let expected = 'cutFirst';
assert.equal(typeof cutFirst, 'function', `dude you forget ${expected} function`);
assert.equal(cutFirst.length, 1, `${expected} needs a params`);
assert.strictEqual(cutFirst(''), '', `${expected} should return the same string`);
assert.strictEqual(cutFirst('twoLast'), 'twoLa', `${expected} did not remove the 2 last characters`);

expected = 'cutLast';
assert.equal(typeof cutLast, 'function', `dude you forget ${expected} function`);
assert.equal(cutLast.length, 1, `${expected} needs a params`);
assert.strictEqual(cutLast(''), '', `${expected} should return the same string`);
assert.strictEqual(cutLast('twoFirst'), 'oFirst', `${expected} did not remove the 2 1st characters`);

expected = 'cutFirstLast';
assert.equal(typeof cutFirstLast, 'function', `dude you forget ${expected} function`);
assert.equal(cutFirstLast.length, 1, `${expected} needs a params`);
assert.strictEqual(cutFirstLast(''), '', `${expected} should return the same string`);
assert.strictEqual(cutFirstLast('twoFirst'), 'oFir', `${expected} did not remove the 2nd & 1st characters`);
