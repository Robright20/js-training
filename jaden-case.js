'use strict'

/*
 * Jaden Smith Case
 *
 * Make a function `jadenCase` that takes a String
 * and return capitalize each words: "How are you ?" -> "How Are You ?"
 *
 * @next total
 */
function jadenCase(sentence){
    let newnewsentence= sentence.toUpperCase()
    return newnewsentence;
}
console.log(jadenCase('How are you ?'));

// You must write your own tests
const assert = require('assert')

assert.strictEqual(typeof jadenCase, 'function')
assert.strictEqual(jadenCase('How are you ?'), 'HOW ARE YOU ?')

throw Error('No tests !')
