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
//
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
// function buildDate({
//     year,
//     month,
//     day,
//     hour = 0,
//     minute = 0,
//     second = 0
// }) {
//     return new Date(year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second);
// }
// console.log(buildDate({
//     year: 2017,
//     month: 1,
//     day: 1
// }));
// console.log(buildDate({
//     year: 2017,
//     month: 1,
//     day: 1,
//     hour: 20,
//     minute: 15
// }));

// 定义对应的字段方法
// var xiaoming = {
//     name: '小明',
//     birth: '1990',
//     age: function(){
//         var year = new Date().getFullYear();
//         return year - this.birth;
//     }
// }

// console.log(xiaoming.age);
// console.log(xiaoming.age());

// 移动对象方法定义， this 对象调用链指向
// function getAge(){
//     var year = new Date().getFullYear();
//     return year - this.birth;  
// }

// var xiaoming = {
//     name: '小明',
//     birth: '1990',
//     age: getAge
// }
// console.log(xiaoming.age());
// console.log(getAge());

// 通过 apply 的方式控制 this 的指向
// function getAge() {
//     var y = new Date().getFullYear();
//     return y - this.birth;
// }

// var xiaoming = {
//     name: '小明',
//     birth: 1990,
//     age: getAge
// };

// console.log(xiaoming.age()); // 25
// console.log(getAge.apply(xiaoming, [])); // 25, this指向xiaoming, 参数为空

// apply 通过数组的传递方式, call 顺序传入对象
// console.log(Math.max.apply(null, [3, 5, 4])); // 5
// console.log(Math.max.call(null, 3, 5, 4)); // 5

// map， 通过高阶函数方式， 支持函数调用
// function pow(x){
//     return x*x;
// }
// var intArray = [1,2,3,4,5];
// console.log(intArray.map(pow));
// console.log(intArray);

// reduce 数据合并放电视
// var intArray = [1,2,3,4,5];
// console.log(intArray.reduce(function(x, y){
//     return x + y;
// }));
// console.log(intArray);

// filter 支持过滤配置方式
// var arr = ['A', 'B', 'C'];
// var r = arr.filter(function (element, index, self) {
//     console.log(element); // 依次打印'A', 'B', 'C'
//     console.log(index); // 依次打印0, 1, 2
//     console.log(self); // self就是变量arr
//     return true;
// });

// 闭包支持， 函数参数包含对应接口参数
// function lazy_sum(arr) {
//     var sum = function () {
//         return arr.reduce(function (x, y) {
//             return x + y;
//         });
//     }
//     return sum;
// }
// var f = lazy_sum([1, 2, 3, 4, 5]); // function sum()
// console.log(f)
// console.log(f());

// function count() {
//     var arr = [];
//     for (var i=1; i<=3; i++) {
//         arr.push(function () {
//             return i * i;
//         });
//     }
//     return arr;
// }

// function count() {
//     var arr = [];
//     for (var i=1; i<=3; i++) {
//         arr.push((function (n) {
//             return function () {
//                 return n * n;
//             }
//         })(i));
//     }
//     return arr;
// }
//
// var results = count();
// var f1 = results[0];
// var f2 = results[1];
// var f3 = results[2];
// console.log(f1(), f2(), f3());

// generator 函数生成器执行方式
// function* foo(x) {
//     yield x+1;
//     yield x+2;
//     return x+3;
// }
// var k = foo(10);
// console.log(k.next());
// console.log(k.next());
// console.log(k.next());

// 通过 yield方式 执行 避免 ajax 异步调用方式


























