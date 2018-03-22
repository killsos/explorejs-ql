/**
 * 在对象字面量从函数表达式到方法的定义
 * Javascript 方法就是一个属性 只是属性值是函数
 */

/**
 * In ES5 object literals, methods are created like other properties. 
 * The property values are provided via function expressions.
 */

var obj = {
    foo: function() {},
    bar: function() {
        this.foo();
    }, // trailing comma is illegal in ES5
}

/**
 * ES6 has method definitions, special syntax for creating methods:
 * 在ES6中有方法的定义---特定语法用来创建方法
 */

const obj = {
    foo() {},
    bar() {
        this.foo();
    }, // trailing comma is legal in ES6
}