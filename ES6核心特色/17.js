/**
 * 在ES5中为了实现模块化
 * 模块化AMD CommonJS方式
 * 
 * 而在ES6自身提供模块化 modules
 * 到现在还没有JS引擎支持module
 * 而需要通过browserify webpack jspm等工具来
 * 完成将ES6模块语法的转化
 * 
 */

/**
 * miltiple exports
 * 
 * 在CommonJS 可以输出多个值
 */

//------ lib.js ------
var sqrt = Math.sqrt;

function square(x) {
    return x * x;
}

function diag(x, y) {
    return sqrt(square(x) + square(y));
}
module.exports = {
    sqrt: sqrt,
    square: square,
    diag: diag,
};

//------ main1.js ------
var square = require('lib').square;
var diag = require('lib').diag;

console.log(square(11)); // 121
console.log(diag(4, 3)); // 5

/**
 * 替换方法：
 * 可以引入整个模块作为一个对象
 * 想调用 square diag 必须通过这个对象
 */

//------ main2.js ------
var lib = require('lib');
console.log(lib.square(11)); // 121
console.log(lib.diag(4, 3)); // 5


/**
 * 在ES6 多个输出值调用export方法
 */

//------ lib.js ------
export const sqrt = Math.sqrt;
export function square(x) {
    return x * x;
}
export function diag(x, y) {
    return sqrt(square(x) + square(y));
}

//------ main1.js ------
import { square, diag } from 'lib';
console.log(square(11)); // 121
console.log(diag(4, 3)); // 5

// 引入一个模块作为一个对象

import * as lib from 'lib'; // (A)
console.log(lib.square(11)); // 121
console.log(lib.diag(4, 3)); // 5

/**
 * 单个输出
 * 
 * 单个输出在CommonJS
 * 
 * Nodejs继承CommonJS
 * 输出单个值从模块通过module.exports
 * 
 */

//------ myFunc.js ------
module.exports = function() {};

//------ main1.js ------
var myFunc = require('myFunc');
myFunc();

/**
 * 单个输出在ES6
 * 
 * 在ES6 单个输出通过default输出
 * 通过声明 默认输出
 * export default 语法
 * 
 */

//------ myFunc.js ------
export default function() {} // no semicolon!

//------ main1.js ------
import myFunc from 'myFunc';
myFunc();