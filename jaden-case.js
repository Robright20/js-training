'use strict'

/*
 * Jaden Smith Case
 *
 * Make a function `jadenCase` that takes a String
 * and return capitalize each words: "How are you ?" -> "How Are You ?"
 *
 * @next total
 */

const jadenCase = (str) => {
	let words = str.split(' ');
	str = '';
	for (let i in words) {
		words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
		str += words[i];
	}
	console.log(str);
}

//jadenCase('bonjour');

// You must write your own tests
const assert = require('assert');

assert.equal(typeof jadenCase, 'function', 'jadenCase is not defined');
assert.equal(jadenCase.length, 1, 'needs a params');
assert.strictEqual(jadenCase(''), '', 'should return the same string');
assert.strictEqual(jadenCase('two last'), 'Two Last', 'incorrect result');
