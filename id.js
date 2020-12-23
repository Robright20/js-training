'use strict'

/*
 * Create a function `id` that takes one argument and return it
 *
 * @notions Functions
 * @next concat-str
 */

// Your code :
function id(idp) {
    
   return idp;
}
console.log(id('salam'));
console.log(id(9));

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof id, 'function')
assert.strictEqual(id.length, 1)
assert.strictEqual(id(5), 5)
assert.strictEqual(id('pouet'), 'pouet')
assert.strictEqual(id(assert), assert)
// End of tests */
