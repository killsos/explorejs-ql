/**
 * 新Number属性
 * 
 * 全局对象Number新增属性
 */

/**
 * Number.EPSILON 用于比较浮点数的一个忍受度对于错误范围
 */

x = 0.2;
y = 0.3;
z = 0.1;
equal = (Math.abs(x - y + z) < Number.EPSILON);

/**
 * Number.isInteger(num) 
 * 用于判断一个数是否整数
 * 
 */

Number.isInteger(1.05)
    //false
Number.isInteger(1)
    //true

Number.isInteger(-3.1)
    //false
Number.isInteger(-3)
    //true

/**
 * 判断一个数字是安全数字 最小整数 最大整数
 * 
 * within the signed 53 bit range in which there is no loss of precision
 * 
 * 最大是53位
 */

Number.isSafeInteger(number)

Number.MIN_SAFE_INTEGER

Number.MAX_SAFE_INTEGER

/**
 * Number.isNaN(num)
 * 判断num是否NaN
 * 不会强制将参数转为数字
 * 因此参数不是数字类型是安全的
 * 
 * 相反 全局的isNaN的不一样
 * 全局的isNaN会将参数先尝试转为数字
 */

isNaN('???')
    // true

Number.isNaN('???')
    // false

/**
 * Number三个新方法
 * 
 * Number.isFinite()
 * 
 * Number.parseFloat()
 * 
 * Number.parseInt()

 */