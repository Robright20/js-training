'use strict'

/*
 * Create the function `cutFirst` that takes a string and remove the 2 last characters
 * Create the function `cutLast` that takes a string and remove the 2 first charcters
 * Create the function `cutFistLast` that takes a string
 * and remove the 2 first charcters and 2 last characters
 *
 * @next keep
 */
// cutFirst
function cutFirst(string) {

    return string.slice(0, -2);
}
console.log(cutFirst('souraya'));

// cutLast
function cutLast(string) {

    return string.slice(2);
}
console.log(cutLast('souraya'));

// cutFistLast
function cutFistLast(string) {

    return string.slice(2, -2);
}
console.log(cutFistLast('souraya'));
// You must write your own tests
throw Error('No tests !')

