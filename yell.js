'use strict'

/*
 * Create a function `yell` that takes a string
 * and return the same string but all in upper case
 *
 * @next cut
 */
function yell(sentence){
    let newnewsentence= sentence.toUpperCase()
    return newnewsentence;
}
console.log(yell('How are you ?'));
// You must write your own tests
const assert = require('assert')

assert.strictEqual(typeof yell, 'function')
assert.strictEqual(yell('How are you ?'), 'HOW ARE YOU ?')
throw Error('No tests !')
