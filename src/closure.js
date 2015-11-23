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
console.log(r());//2

/** 闭包用途 **/
console.log(
    [5, 627, 13, 0].sort(function (a, b) {
        return a - b;
    })
);

console.log(
    [1, 2, 3].map(function (ele) {
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
console.log(b.type());//undefined
b.set(12);
console.log(b.get());//12
console.log(b.type());//number

//如下：证明闭包存储的是外部变量的引用，循环体里分配的每个闭包，都存储的是i的引用，所以创建完毕后，变量i为最后的值
function wrapElements(a) {
    var result = [];
    for (var i = 0, n = a.length; i < n; i++) {
        result[i] = function () {
            return a[i];
        };
    }
    return result;
}

var wrapped = wrapElements([10, 20, 30, 40, 50]);
var f = wrapped[0];
console.log(f());//undefined

//解决方法：使用立即调用的函数表达式，来强制创建局部作用域
function wrapElements2(a) {
    var result = [];
    for (var i = 0, n = a.length; i < n; i++) {
        (function (j) {
            result[i] = function () {
                return a[j];
            }
        }(i));
    }
    return result;
}
console.log(wrapElements2([10, 20, 30, 40, 50])[3]());
