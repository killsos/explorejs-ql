/**
 * 对于多个返回值
 * 对于一些函数或方法返回多个值通过数组或对象
 * 
 * 在ES5中个需要通过中间变量
 */

var matchObj =
    /^(\d\d\d\d)-(\d\d)-(\d\d)$/
    .exec('2999-12-31');
var year = matchObj[1];
var month = matchObj[2];
var day = matchObj[3];

/**
 * 在ES6中解构是这个简单了
 */

const [, year, month, day] =
/^(\d\d\d\d)-(\d\d)-(\d\d)$/
.exec('2999-12-31');

/**
 * 数据解构是按照位置匹配
 */

/**
 * 处理多个值通过对象
 * 
 * ES6中Object.getOwnPropertyDescriptor() 返回一个属性描述
 */

var obj = { foo: 123 };

var propDesc = Object.getOwnPropertyDescriptor(obj, 'foo');
var writable = propDesc.writable;
var configurable = propDesc.configurable;

console.log(writable, configurable); // true true

/**
 * 在ES6中可以使用解构
 */

const obj = { foo: 123 };

const { writable, configurable } =
Object.getOwnPropertyDescriptor(obj, 'foo');

console.log(writable, configurable); // true true

/**
 *  {writable, configurable} is an abbreviation for:
 * 
 * { writable: writable, configurable: configurable }
 */