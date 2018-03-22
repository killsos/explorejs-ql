/**
 * ES6类中构造器函数很简洁
 */

/**
 * 在ES5的时代需要自己实现构造器函数
 */

function Person(name) {
    this.name = name;
}

Person.prototype.describe = function() {
    return 'Person called ' + this.name;
};

/**
 * 在ES6提供方便语法对于构造器函数
 */

class Person {
    constructor(name) {
        this.name = name;
    }
    describe() {
        return 'Person called ' + this.name;
    }
}

/**
 * 类的继承
 */

/**
 * 在ES5实现类的继承 相当麻烦
 */

function Employee(name, title) {
    Person.call(this, name); // super(name)
    this.title = title;
}
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;
Employee.prototype.describe = function() {
    return Person.prototype.describe.call(this) // super.describe()
        +
        ' (' + this.title + ')';
};

/**
 * 在ES6自身实现类的继承 
 */

class Employee extends Person {
    constructor(name, title) {
        super(name);
        this.title = title;
    }
    describe() {
        return super.describe() + ' (' + this.title + ')';
    }
}