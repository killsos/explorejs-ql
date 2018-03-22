/**
 * 在ES5遍历数组 for
 */

var arr = ['a', 'b', 'c'];
for (var i = 0; i < arr.length; i++) {
    var elem = arr[i];
    console.log(elem);
}

/**
 * 在ES5遍历数组 forEach
 */

arr.forEach(function(elem) {
    console.log(elem);
});

/**
 * for优点是可以通过break中断
 * 
 * forEach优点是代码简洁
 */

/**
 * 在ES6中 forof兼具上面的两个优点
 */

const arr = ['a', 'b', 'c'];
for (const elem of arr) {
    console.log(elem);
}

/**
 * 如果需要index value 对于数组元素
 * forof 也可以 通过数组entries()方法和解构
 */

for (const [index, elem] of arr.entries()) {
    console.log(index + '. ' + elem);
}