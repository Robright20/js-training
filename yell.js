'use strict'

/*
 * Create a function `yell` that takes a string
 * and return the same string but all in upper case
 *
 * @next cut
 */

const yell = (str) => str.toUpperCase();
// You must write your own tests
//throw Error('No tests !')
const assert = require('assert');

assert.equal(typeof(yell), 'function', 'should be a function');
assert.equal(yell.length, 1, 'should have one param');
assert.strictEqual(yell('BON!'), 'BON!', 'should return the string');
assert.strictEqual(yell('Bon!'), 'BON!', 'returned string must be upper case');
