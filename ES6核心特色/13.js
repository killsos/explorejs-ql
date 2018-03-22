/**
 * 从定义错误构造器到Error的继承
 */

/**
 * 在ES5中不能对于Error的内在构造函数的继承 无法实现子类
 * 下面代码给出一种变通方案 work-ground
 *  实现MyError类
 */

function MyError() {
    // Use Error as a function
    var superInstance = Error.apply(null, arguments);
    copyOwnPropertiesFrom(this, superInstance);
}
MyError.prototype = Object.create(Error.prototype);
MyError.prototype.constructor = MyError;

function copyOwnPropertiesFrom(target, source) {
    Object.getOwnPropertyNames(source)
        .forEach(function(propKey) {
            var desc = Object.getOwnPropertyDescriptor(source, propKey);
            Object.defineProperty(target, propKey, desc);
        });
    return target;
};

/**
 * ES6 轻松实现Error的子类继承
 */

class MyError extends Error {}