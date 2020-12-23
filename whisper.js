'use strict'

/*
 * Create a function `whisper` that takes a string
 * and return the same string but all in lower case
 *
 * @next yell
 */
function whisper(sentence){
    let newnewsentence= sentence.toLowerCase()
    return newnewsentence;
}
console.log(whisper('HOW ARE YOU ?'));
// You must write your own tests

const assert = require('assert')

assert.strictEqual(typeof whisper, 'function')
assert.strictEqual(whisper('HOW ARE YOU ?'), 'how are you ?')
throw Error('No tests !')
