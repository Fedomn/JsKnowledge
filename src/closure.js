/** 闭包概念 **/

//闭包是代码块和创建该代码块的上下文中数据的结合。

//Javascript语言特有的"链式作用域"结构（chain scope），子对象会一级一级地向上寻找所有父对象的变量，如下f2
//如下f2与val就构成了一个闭包，将函数内部和函数外部连接起来的一座桥梁
function f1() {
    var val = 2;

    function f2() {
        return val;
    }

    return f2;
}

var r = f1();
console.log(r());

/** 闭包用途 **/
console.log(
    [5, 627, 13, 0].sort(function (a, b) {
        return a - b;
    })
);

console.log(
    [1,2,3].map(function (ele) {
        return ele * 2;
    })
);

(function () {
    console.log([].join.call(arguments, ';'));
}).apply(this, [1, 2, 3]);

/** 实际上，闭包存储的是外部变量的引用，而不是他们的值副本。因此，闭包可以跟新外部变量的值**/
function box() {
    var val = undefined;

    return {
        set: function (newVal) {
            val = newVal;
        },
        get: function () {
            return val;
        },
        type: function () {
            return typeof val;
        }
    };
}

var b = box();
console.log(b.type());
b.set(12);
console.log(b.get());
console.log(b.type());