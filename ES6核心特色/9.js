/**
 * 从arguments到剩余参数
 * 在ES5中如果函数中接受任意数量个参数
 * 你就必须有arguments
 */

function logAllArguments() {
    for (var i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}

/**
 * ES6中可以声明一个剩余参数通过剩余操作符...
 */

function logAllArguments(...args) {
    for (const arg of args) {
        console.log(arg);
    }
}

/**
 * 剩余参数看起来很nicer
 * 如果你对尾参数有兴趣
 */

function format(pattern, ...args) {···}

/**
 * 在ES5中处理这种情况就很麻烦
 */

function format(pattern) {
    var args = [].slice.call(arguments, 1);···
}

/**
 * 剩余参数提高代码的可读性
 */