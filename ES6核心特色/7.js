/**
 * 参数默认值
 */

/**
 * ES5
 */

function foo(x, y) {
    x = x || 0;
    y = y || 0;
}

/**
 * ES6
 */

function foo(x = 0, y = 0) {}