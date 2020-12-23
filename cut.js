'use strict'

/*
 * Create the function `cutFirst` that takes a string and remove the 2 last characters
 * Create the function `cutLast` that takes a string and remove the 2 first charcters
 * Create the function `cutFistLast` that takes a string
 * and remove the 2 first charcters and 2 last characters
 *
 * @next keep
 */

 // * Create the function `cutFirst` that takes a string and remove the 2 last characters
function cutFirst(string) {
    
    return string.slice(0, -2);
}
console.log(cutFirst('AADD'));
//  * Create the function `cutLast` that takes a string and remove the 2 first charcters
function cutLast(string) {
    
    return string.slice(2);
}
console.log(cutLast('AAbb'));
// * Create the function `cutFistLast` that takes a string and remove the 2 first charcters and 2 last characters
function cutFistLast(string) {
   
    return string.slice(2, -2);
}
console.log(cutFistLast('AACCDD'));

// You must write your own tests
throw Error('No tests !')

