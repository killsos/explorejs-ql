// 在ES6中 全局属性Math 新方法

// 1 Math.sign() 判断一个正负数 零

/**
 * -1 if x is a negative number (including -Infinity).
 * 0 if x is zero
 * +1 if x is a positive number (including Infinity).
 * NaN if x is NaN or not a number.
 */

Math.sign(-0)
    // -0

Math.sign(+0)
    // 0

Math.sign(NaN)

// Math.sigin 无法区分 +0 -0 都是0

Math.sign(-8)
    // -1
Math.sign(3)
    // 1

Math.sign(0)
    // 0
Math.sign(NaN)
    // NaN

Math.sign(-Infinity)
    // -1
Math.sign(Infinity)
    // 1


// 2 Math.trunc() 去掉小数点后的
// 不足Math.floor Math.ceil Math.round

Math.trunc(3.1)
    // 3
Math.trunc(3.9)
    // 3
Math.trunc(-3.1)
    // -3
Math.trunc(-3.9)
    // -3

function trunc(x) {
    return Math.sign(x) * Math.floor(Math.abs(x));
}

// Math.cbrt(x) 对x开三次方
Math.cbrt(8)
    // 2

//  Math.expm1() 函数返回 Ex - 1, 其中 x 是该函数的参数, 
// E 是自然对数的底数 2.718281828459045.
//Math.expm1(1e-10)
// 1.00000000005e-10
console.log('====================================');
console.log(Math.exp(1e-10) - 1);
console.log('====================================');
// 1.000000082740371e-1

// 如果想保持高精度 请使用decimal.js

var Decimal = require('decimal.js').config({ precision: 50 });
new Decimal(1e-10).exp().minus(1).toString()
    // '1.000000000050000000001666666666708333333e-10'

// Math.log1p(x)
// returns Math.log(1 + x). The inverse of Math.expm1()
// 函数返回一个数字加1后的自然对数 (底为 E), 既log(x+1).

Math.log(1 + 1e-16)
    // 0
Math.log(1 + 0)
    // 0

Math.log1p(1e-16)
1e-16
Math.log1p(0)
0

1 + 1e-16 === 1
    // true
1e-16 === 0
    // false

// Math.log2(x)

Math.log2(8)


// Math.log10(x)

Math.log10(100)

// Math.fround(x) 

//  Math.fround(x) rounds x to a 32 bit floating point value (float). 
// Used by asm.js to tell an engine to internally use a float value.

// 可以将任意的数字转换为离它最近的单精度浮点数形式的数字

// Math.imul(x, y)
// 函数返回两个参数的类C的32位整数乘法运算的运算结果


/**
 *  Bitwise operations
 *  按位操作
 * 
 */

// Math.clz32(x)
// 返回一个数字在转换成 32 无符号整形数字的二进制形式后, 开头的 0 的个数

/**
 * Trigonometric methods
 * 三角函数
 */

// Math.sinh(x)
// Computes the hyperbolic sine of x.
// Math.cosh(x)
// Computes the hyperbolic cosine of x.
// Math.tanh(x)
// Computes the hyperbolic tangent of x.
// Math.asinh(x)
// Computes the inverse hyperbolic sine of x.
// Math.acosh(x)
// Computes the inverse hyperbolic cosine of x.
// Math.atanh(x)
// Computes the inverse hyperbolic tangent of x.
// Math.hypot(...values)
// Computes the square root of the sum of the squares of its arguments (Pythagoras’ theorem):

Math.hypot(3, 4)
    // 5