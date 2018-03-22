/**
 * Number.isFinite(number)
 * 决定参数是一个具体数 Infinity -Infinity NaN
 * 这个方法不会将参数强制转为数字
 */

Number.isFinite(Infinity)
    // false
Number.isFinite(-Infinity)
    // false
Number.isFinite(NaN)
    // false
Number.isFinite(123)
    // true

Number.isFinite('123')
    //  false
isFinite('123')
    //  true

/**
 * Number.isNaN(number)
 * 判断值是不是NaN
 */

// 在ES5判断NaN是通过自身不等于自身

const x = NaN;
x !== x
    // true

// 更具体方法是window.isNaN()
const x = NaN;
isNaN(x)
    // true

// 然而window.isNaN()会强制将参数转为数字
isNaN('???')
    // true

// Number.isNaN不会强制将参数转为数字
Number.isNaN('???')
    // false

/**
 * Number.parseFloat and Number.parseInt 
 * 和window.parseFloat window.parseInt
 * 作用相同
 * 只是为了补全Number类型的缺少
 */

Number.parseFloat(string)

Number.parseInt(string, radix)