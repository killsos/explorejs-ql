/**
 * Number.isInteger()
 * 判断一个数字是否是整数
 * 判断依据是否有小数点后部分
 */

Number.isInteger(-17)
    // true
Number.isInteger(33)
    // true
Number.isInteger(33.1)
    // false
Number.isInteger('33')
    // false
Number.isInteger(NaN)
    // false
Number.isInteger(Infinity)
    // false