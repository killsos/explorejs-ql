/**
 * Safe integers
 * 
 * Javascript数字 53位的空间
 * 整数 -2*53 < i < 2 *53
 */

// Number.isSafeInteger(number)
//  (−253, 253) 范围之内是安全

Math.pow(2, 53)
    // 9007199254740992

9007199254740992
// 9007199254740992
9007199254740993
// 9007199254740992
9007199254740994
// 9007199254740994
9007199254740995
// 9007199254740996
9007199254740996
// 9007199254740996
9007199254740997
// 9007199254740996

// Number.MIN_SAFE_INTEGER

// Number.MAX_SAFE_INTEGER

Number.MAX_SAFE_INTEGER = Math.pow(2, 53) - 1;

Number.MIN_SAFE_INTEGER = -Number.MAX_SAFE_INTEGER;

Number.isSafeInteger = function(n) {
    return (typeof n === 'number' &&
        Math.round(n) === n &&
        Number.MIN_SAFE_INTEGER <= n &&
        n <= Number.MAX_SAFE_INTEGER);
}

// Math.round() 函数返回一个数字四舍五入后最接近的整数

// 如何保证整数计算的正确性

// 这个例子是错误的

9007199254740990 + 3
    // 9007199254740992

// 我们有安全操作 但未必是安全的结果

Number.isSafeInteger(9007199254740990)
    // true
Number.isSafeInteger(3)
    // true
Number.isSafeInteger(9007199254740992)
    // false

// 下面也是不正确的结果

9007199254740995 - 10
    // 9007199254740986

Number.isSafeInteger(9007199254740995)
    //    false
Number.isSafeInteger(10)
    //    true
Number.isSafeInteger(9007199254740986)
    //    true

// 保证正确结果

isSafeInteger(a) && isSafeInteger(b) && isSafeInteger(a op b)