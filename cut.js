'use strict'

/*
 * Create the function `cutFirst` that takes a string and remove the 2 last characters
 * Create the function `cutLast` that takes a string and remove the 2 first charcters
 * Create the function `cutFistLast` that takes a string
 * and remove the 2 first charcters and 2 last characters
 *
 * @next keep
 */

const cutFirst = (str) => {
	if (str.length >= 2)
		return str.substring(0, str.length - 2);
	return str;
}

// You must write your own tests
const assert = require('assert');
const expected = 'cutFirst';

assert.equal(typeof cutFirst, 'function', `dude you forget ${expected} function`);
assert.equal(cutFirst.length, 1, `${expected} needs a params`);
assert.equal(cutFirst(''), '', `${expected} should return the same string`);
assert.equal(cutFirst('h'), 'h', `${expected} should return the same string`);
assert.equal(cutFirst('twoLast'), 'twoLa', `${expected} did not remove the 2 last characters`);
/*
**	**	
**
*/
