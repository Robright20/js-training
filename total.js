'use strict'

/*
 * Create a function `total` that takes an array on numbers
 * and return it's total
 *
 * @next multiply
 */

function total(array) {

    for (var i = 0, sum = 0; i < array.length; sum += array[i++]);
    return sum
};
console.log(total([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof total, 'function')
assert.strictEqual(total.length, 1)
assert.deepStrictEqual(total([1, 1, 1]), 3)
assert.deepStrictEqual(total([10, 10, 10]), 30)
assert.deepStrictEqual(total([24, -10, 10, 0, 0, 100]), 124)
// End of tests */
