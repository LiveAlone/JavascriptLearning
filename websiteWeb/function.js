// 参数配置方式， 参数类型判断， 参数结果的判断方式
// var abs = function (x) {
//     if (typeof x != 'number') {
//         throw 'Not a number';
//     }
//     if (x >= 0) {
//         return x;
//     }else{
//         return -x;
//     }
// }

// console.log(abs(1));
// console.log(abs(1,2,3));
// console.log(abs());

// params 自动 arguments 参数返回
// function foo(x) {
//     console.log('x = ' + x);
//     console.log('arguments length is ' + arguments.length);
//     for(var i = 0; i < arguments.length; i++){
//         console.log(' index i ： ' + i + ', value is : ' + arguments[i]);
//     }
// }
// foo(1,2,3,4);
// foo();

// 通过 arguments 参数设置可选参数
// function foo(a, b, ...rest) {
//     console.log('------------------------------');
//     console.log('a = ' + a);
//     console.log('b = ' + b);
//     console.log(rest);
//     console.log('------------------------------');
// }
// foo();foo(1);foo(1,2);foo(1,2,3);foo(1,2,3,4);

// !! return 记过不要换行
// function foo() {
//     return 
//         {name: 'foo'};
// }
// console.log(foo()); // undefined

// 函数作用域基础上，对于不存在的变量会提前
// 'use strict';
// function foo() {
//     var x = 'Hello, ' + y;
//     console.log(x);
//     // 执行到这个时候已经有 y ， y 的数值 u undefi
//     var y = 'Bob';
// }
// foo();

// 对于命名空间的保证
// 唯一的全局变量MYAPP:
// var MYAPP = {};
// // 其他变量:
// MYAPP.name = 'myapp';
// MYAPP.version = 1.0;
// // 其他函数:
// MYAPP.foo = function () {
//     return 'foo';
// };

// 通过嵌套
// let [x, [y, z]] = ['hello', ['JavaScript', 'ES6']];
// console.log(x);
// console.log(y);
// console.log(z);

// var person = {
//     name: '小明',
//     age: 20,
//     gender: 'male',
//     passport: 'G-12345678',
//     school: 'No.4 middle school',
//     address: {
//         city: 'Beijing',
//         street: 'No.1 Road',
//         zipcode: '100001'
//     }
// };
// var {
//     name,
//     address: {
//         city,
//         zip
//     }
// } = person;
// console.log(name);
// console.log(city);
// console.log(zip);

// 不存在的数值默认数值的支持方式
// var {
//     name,
//     single = true
// } = person;

// 声明变量: js 引擎不支持 代码块，仅仅 '()' 一定添加
// var x, y;
// // 解构赋值:
// ({
//     x,
//     y
// } = {
//     name: '小明',
//     x: 100,
//     y: 200
// });
// console.log(x); console.log(y);

// 变量交换方式
// var x = 1,
//     y = 2;
// [x, y] = [y, x]
// console.log(x, y);

// build date function 
function buildDate({
    year,
    month,
    day,
    hour = 0,
    minute = 0,
    second = 0
}) {
    return new Date(year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second);
}
console.log(buildDate({
    year: 2017,
    month: 1,
    day: 1
}));
console.log(buildDate({
    year: 2017,
    month: 1,
    day: 1,
    hour: 20,
    minute: 15
}));


