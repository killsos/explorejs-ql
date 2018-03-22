/**
 * 命名参数
 * 在javascript命名参数方法通过对象
 * 称为选择对象模式
 */

selectEntries({ start: 0, end: -1 });

/**
 * 命名参数有两个优点
 * 1. 代码显得自我描述
 * 2. 很容易忽略任意的参数
 */

/**
 * ES5中实现
 */

function selectEntries(options) {
    var start = options.start || 0;
    var end = options.end || -1;
    var step = options.step || 1;···
}

/**
 * ES6中可以通过解构实现 并且变得简单
 */

function selectEntries({ start = 0, end = -1, step = 1 }) {···}

/**
 * 可选参数
 */

/**
 * ES5
 */

function selectEntries(options) {
    options = options || {}; // (A)
    var start = options.start || 0;
    var end = options.end || -1;
    var step = options.step || 1;···
}

/**
 * ES6 
 */

function selectEntries({ start = 0, end = -1, step = 1 } = {}) {···}