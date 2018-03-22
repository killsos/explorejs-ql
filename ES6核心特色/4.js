/**
 * 从函数表达式 到  箭头函数
 * 
 * 在ES5代码中 必须仔细使用this当使用函数表达式
 * 
 */

function UiComponent() {
    var _this = this; // (A)
    var button = document.getElementById('myButton');
    button.addEventListener('click', function() {
        console.log('CLICK');
        _this.handleClick(); // (B)
    });
}
UiComponent.prototype.handleClick = function() {···};

/**
 * 在ES6 可以使用箭头函数 不需要_this
 */

function UiComponent() {
    var button = document.getElementById('myButton');
    button.addEventListener('click', () => {
        console.log('CLICK');
        this.handleClick(); // (A)
    });
}

/**
 * 箭头函数有一个简写对于仅仅返回值的表达式
 */

/**
 * 在ES5中 回调函数很冗长
 */

var arr = [1, 2, 3];
var squares = arr.map(function(x) { return x * x });

/**
 * 在ES6中就很简洁
 */

const arr = [1, 2, 3];
const squares = arr.map(x => x * x);

/**
 * 箭头函数 如果只有一个参数 就可以省略花括号
 * 例如 x) => x * x and x => x * x 
 */