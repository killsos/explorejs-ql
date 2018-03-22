/**
 * Number.EPSILON
 * 浮点数的精度问题是javascript的要害的错误
 * 
 * 在ES5中会呈现下面的问题
 * 
 */

0.1 + 0.2 === 0.3
    // false

/**
 * Number.EPSILON 就是解决这个问题的
 * 
 */

function epsEqu(x, y) {
    return Math.abs(x - y) < Number.EPSILON;
}
console.log(epsEqu(0.1 + 0.2, 0.3)); // true