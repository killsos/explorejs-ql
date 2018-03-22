/**
 * 在NodeJS文件模块
 * 有些函数需要mode参数
 * 这个值被用来说明文件权限
 * 这个编码继承Unix
 */

/**
 * 权限对用户分为三类
 * User: 文件所有者
 * Goup: 文件关联组
 * All: 每一个
 */

/**
 * 每个分类有三个权限
 * r-read  读
 * w-write 写
 * x-execute 执行
 */

// User  Group  All

/**
 * 000 --- 0
 * 001 --x 1
 * 010 -w- 2
 * 011 -wx 3
 * 100 r-- 4
 * 101 r-x 5
 * 110 rw- 6
 * 111 rwx 7
 * 
 * 读 4
 * 读执行 5
 * 读写 6
 * 读写执行 7
 */

/**
 * Number.parseInt(string, radix?)
 * 将字符串解析为数字
 * parseInt对十六进制的支持以0x位开头
 * radix 缺失或为0  这时候radix将设为16
 * 作为规则 不要省略radix
 * 
 */

Number.parseInt('0xFF')
    // 255
Number.parseInt('0xFF', 0)
    // 255 
Number.parseInt('0xFF', 16)
    // 255

/**
 * 在其他进制 二进制 八进制 十进制
 * 解析以第一个数字字符开始解析
 */

Number.parseInt('0xFF', 10)
0
Number.parseInt('0xFF', 17)
0

/**
 * Number.parseInt()不支持二进制和八进制字面量
 * 
 */

Number.parseInt('0b111')
    // 0
Number.parseInt('0b111', 2)
    // 0
Number.parseInt('111', 2)
    // 7

Number.parseInt('0o10')
    // 0
Number.parseInt('0o10', 8)
    // 0
Number.parseInt('10', 8)
    // 8

/**
 * Number()支持二进制和八进制字面量
 */

Number('0b111')
    // 7
Number('0o10')
    // 8

/**
 * Number.parseInt()可以解析没有前缀的字符串
 * 但是必须提供radix的参数
 */

Number.parseInt('111', 2)
    // 7
Number.parseInt('10', 8)
    // 8