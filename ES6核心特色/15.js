/**
 * 新字符串方法
 * 
 */

// startsWith

if (str.indexOf('x') === 0) {} // ES5
if (str.startsWith('x')) {} // ES6

// endsWith

function endsWith(str, suffix) { // ES5
    var index = str.indexOf(suffix);
    return index >= 0 &&
        index === str.length - suffix.length;
}
str.endsWith(suffix); // ES6

// includes

if (str.indexOf('x') >= 0) {} // ES5
if (str.includes('x')) {} // ES6

// form join to repeat

new Array(3 + 1).join('#') // ES5
'#'.repeat(3) // ES6