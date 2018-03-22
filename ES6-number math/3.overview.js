/**
 * 新 Math 方法
 * 数字  三角 按位操作
 */

/**
 * Math.sign 判断一个数字是 正数 负数  零
 * 返回  1  -1  0
 */

Math.sign(-8)
    // -1
Math.sign(0)
    // 0
Math.sign(3)
    // 1

/**
 * Math.trunc() 移除一个数字的小数部分
 * 不会四舍五入
 */

Math.trunc(3.1)
    // 3
Math.trunc(3.9)
    // 3
Math.trunc(-3.1)
    // -3
Math.trunc(-3.9)
    // -3

/**
 * Math.log10()
 * 求10的对数
 */

Math.log10(100)
    // 2

/**
 * 三角函数
 * 
 * Math.hypot()
 */

Math.hypot(3, 4)
    // 5