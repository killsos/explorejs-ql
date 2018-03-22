/**
 * 在ES5中 如果约束变量作用域到一个块中
 *  IIFE (Immediately-Invoked Function Expression)
 * 
 */

(function() { // open IIFE
    var tmp = '';
}()); // close IIFE

console.log(tmp); // ReferenceError

/**
 * 在ES6就简单了 用let const就可以
 */

{ // open block
    let tmp = '';
} // close block

console.log(tmp); // ReferenceError