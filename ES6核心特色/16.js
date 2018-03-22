/**
 * 数组新方法
 */


// indexOf findIndex

/**
 * findIndex 可以发现NaN 
 * indexOf 不可以发现NaN 
 */

const arr = ['a', NaN];

arr.indexOf(NaN); // -1
arr.findIndex(x => Number.isNaN(x)); // 1

// as a silde 顺便一提 另外

/**
 * Number.isNaN() 提供一种发现NaN的方法
 * 并且不会尝试将非数字转为数字
 * 
 * window.isNaN() 是尝试将非数字转数字
 */

isNaN('abc')
    // true

Number.isNaN('abc')
    // false

/**
 * slice from
 * 
 * 在ES5 Array.prototype.slice() 通常被用来
 * 将类数组转为数组
 * 
 * 在ES6 Array.from()可以将将类数组转为数组
 */

var arr1 = Array.prototype.slice.call(arguments); // ES5
const arr2 = Array.from(arguments); // ES6

/**
 * 如果一个值是可迭代的 例如现在的DOM数据结构
 * 也可以用扩展操作符转为数组
 */

const arr1 = [...
    'abc'
];
// ['a', 'b', 'c']

const arr2 = [...new Set().add('a').add('b')];
// ['a', 'b']

/**
 * apply fill
 * 
 * 在ES5中可以apply()方法作为一种hack方法
 * 创建一个任意长度的数组
 * 数组中的值undefined
 */

// Same as Array(undefined, undefined)
var arr1 = Array.apply(null, new Array(2));
// [undefined, undefined]

/**
 * 在ES6中 用fill()方法很简单实现
 */

const arr2 = new Array(2).fill(undefined);
// [undefined, undefined]

/**
 * fill 方法可以填充任意值
 */

// ES5
var arr3 = Array.apply(null, new Array(2))
    .map(function(x) { return 'x' });
// ['x', 'x']

// ES6
const arr4 = new Array(2).fill('x');
// ['x', 'x']