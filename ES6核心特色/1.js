/**
 * 在ES5中 声明变量是通过var实现的，这样声明的变量是函数作用域
 * 变量作用域是离自己最近的函数中 
 */

var x = 3;

function func(randomize) {
    if (randomize) {
        var x = Math.random(); // (A) scope: whole function
        return x;
    }
    return x; // accesses the x from line A
}
func(false); // undefined

/**
 * 运行结果分析
 * func执行后返回undefined 
 * var 声明变量 x 会变量提升
 * 真正运行时候代码如下
 * 
 */

var x = 3;

function func(randomize) {
    var x;
    if (randomize) {
        x = Math.random(); // (A) scope: whole function
        return x;
    }
    return x; // accesses the x from line A
}
func(false); // undefined

/**
 * ES6中新增量两种声明变量方式 let const 
 * 通过let const 声明变量是块级作用域
 * 也就是离变量最近的块范围 {}
 * const 定义变量不可以修改变量的值
 * 其实是不会重新分配内存地址
 */

/**
 * let const运行时候更加严格 会抛出更多意外情况
 * 例如 访问一个变量必须在变量声明之后 因为存在TDZ
 * 也就是说let const 声明的变量不会预解析
 * 
 * Block-scoping helps with keeping the effects of code fragments more local
 * 块级作用域会使代码更加本地化 减少意外情况
 * 块级作用域相对于函数作用域更加主流
 * 
 */

let x = 3;

function func(randomize) {
    if (randomize) {
        let x = Math.random();
        return x;
    }
    return x;
}
func(false); // 3

/**
 * 建议:
 * 不变用const
 * 变用let
 * 尽量避免var
 */