/**
 * Math.max() 
 * 返回参数中的最大数 参数必须是数字
 * 参数可以是任意个 但不能是数组
 */

// ES5 – apply():

Math.max.apply(Math, [-1, 5, 11, 3])
11

// ES6 – spread operator:

Math.max(...[-1, 5, 11, 3])
11

/**
 *  Array.prototype.push()
 * 
 */

// ES5 – apply():

var arr1 = ['a', 'b'];
var arr2 = ['c', 'd'];

arr1.push.apply(arr1, arr2);
// arr1 is now ['a', 'b', 'c', 'd']


// ES6 – spread operator:

const arr1 = ['a', 'b'];
const arr2 = ['c', 'd'];

arr1.push(...arr2);

// arr1 is now ['a', 'b', 'c', 'd']

/**
 * From concat() to the spread operator (...) 
 * 在concat用扩展操作符
 * he spread operator can also (non-destructively) 
 * turn the contents of its operand into Array elements. 
 * That means that it becomes an alternative to the Array method concat().
 * 
 */

// ES5 – concat():

var arr1 = ['a', 'b'];
var arr2 = ['c'];
var arr3 = ['d', 'e'];

console.log(arr1.concat(arr2, arr3));

// [ 'a', 'b', 'c', 'd', 'e' ]

// ES6 – spread operator:

const arr1 = ['a', 'b'];
const arr2 = ['c'];
const arr3 = ['d', 'e'];

console.log([...arr1, ...arr2, ...arr3]);

// [ 'a', 'b', 'c', 'd', 'e' ]