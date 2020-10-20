'use strict'

/*
 * Create a function `whisper` that takes a string
 * and return the same string but all in lower case
 *
 * @next yell
 */

const whisper = (str) => str.toLowerCase();
// You must write your own tests
//throw Error('No tests !')

const assert = require('assert');
assert.equal(typeof(whisper), 'function', 'should be a function');
assert.equal(whisper.length, 1, 'should take one params');
assert.strictEqual(whisper('bonjour'), 'bonjour', 'should return the string');
assert.strictEqual(whisper('BonJour'), 'bonjour', 'should be lower case');
