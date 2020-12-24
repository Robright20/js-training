'use strict'

/*
 * Create a function `keepFirst` takes a string
 * and only keep the 2 first characters
 *
 * Create a function `keepLast` takes a string
 * and only keep the 2 last characters
 *
 * Create a function `keepFirstLast` takes a string
 * and only keep 2 characters from the third character
 *
 * @next capitalize
 */
//  * Create a function `keepFirst` takes a string and only keep the 2 first characters
function keepFirst(str) {
    return str.slice(0, 2);
}
console.log(keepFirst('bonjour'))
//  Create a function `keepLast` takes a string and only keep the 2 last characters
function keeplast(str) {
    return str.slice(-2);
}
console.log(keeplast('salut'));
// Create a function `keepFirstLast` takes a string and only keep 2 characters from the third character
function keepFirstlast(str) {
    return str.substr(2, 2);
}
console.log(keepFirstlast('Sarah'));
// You must write your own tests
throw Error('No tests !')
