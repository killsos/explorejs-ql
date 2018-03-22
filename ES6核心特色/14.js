/**
 * 从对象到Maps
 * makeshift 权宜之计
 * 对象的属性名是字符串
 * 而map也是对象只是属性名不仅字符串可以是任意类型
 * 
 */

let map1 = new Map();

console.log(map1);

/**
 * 创建一个原型为null的对象最安全依然是下面这样做
 * 并且必须确定对象的没有__proto__的属性名
 * 这是因为__proto__会触发特定函数在许多JS引擎
 */

/**
 * 在ES5中通过对象实现Map
 */

var dict = Object.create(null);

function countWords(word) {
    var escapedWord = escapeKey(word);
    if (escapedWord in dict) {
        dict[escapedWord]++;
    } else {
        dict[escapedWord] = 1;
    }
}

function escapeKey(key) {
    if (key.indexOf('__proto__') === 0) {
        return key + '%';
    } else {
        return key;
    }
}

/**
 * downside 缺点
 * 在ES6本身有Map类型
 * 缺点是Map增加一个属性不方便
 */

const map = new Map();

function countWords(word) {
    const count = map.get(word) || 0;
    map.set(word, count + 1);
}

console.log(123, Object.getPrototypeOf(map));