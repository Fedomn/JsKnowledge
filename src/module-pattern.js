//JavaScript里括号里不能包含语句，所以解析器在解析括号里的function时，会将相应代码解析成function表达式，而不是function声明

//immediately-invoked-function-expression
//在一个表达式后加上()，该表达式就会立即执行
//在一个语句后加上()，它只是分组操作符


//松耦合扩展
var MODULE = (function (my) {
    my.age = 12;
    return my;
} (MODULE || {}));

var MODULE = (function (my) {
    console.log(my);
    my.name = '123';
    console.log(my);
    return my;
} (MODULE || {}));

console.log(MODULE);
console.log(MODULE.age);
console.log(MODULE.name);