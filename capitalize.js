'use strict'

/*
 * Create a function `capitalize` takes a string
 * and transform to upper case only the first letter
 *
 * @next jaden-case
 */
function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
console.log(capitalize('hello'));
// You must write your own tests
throw Error('No tests !')
