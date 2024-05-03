// 程序执行流程


// 1 switch case
// function switchCase(x) {
//     switch(x){
//         case 1:
//             console.log('value is 1 content');
//             break;
//         case 2:
//             console.log('value is 2 content');
//             break;
//         default:
//             console.log('none know value content ' + x);
//     }
// }
// switchCase(2);
// switchCase(4);

// 2 循环 loop
// function sum(n) {
//     var sum = 0;
//     // while (n > 0) {
//     //     sum += n;
//     //     n--;
//     // }
//     // for (var i = n; i > 0; i--) {
//     //     sum += i;
//     // }
//     // for (;;) {
//     //     sum += n;
//     //     n--;
//     //     if (n < 1){
//     //         break;
//     //     }
//     // }
//     do{
//         sum += n;
//         n--;
//     }while (n > 0);
//     return sum;
// }
//
// var n = 1000;
// console.log(sum(1000));
// console.log(n);


// 5 错误消息异常处理
// var error = Error('errorContent');
// console.log(error.name);
// console.log(error.message);
// console.log(error.stack);

// function throwit() {
//     throw new Error('');
// }
// function catchit() {
//     try {
//         throwit();
//     } catch(e) {
//         console.log(e.stack); // print stack trace
//     }
// }
// catchit()

// try{
//     throw 'errorContent';
// }catch (e) {
//     console.log(e)
// }

// function f() {
//     try {
//         console.log(0);
//         throw 'bug';
//     } catch(e) {
//         console.log(1);
//         return true; // 这句原本会延迟到 finally 代码块结束再执行
//         console.log(2); // 不会运行
//     } finally {
//         console.log(3);
//         return false; // 这句会覆盖掉前面那句 return
//         console.log(4); // 不会运行
//     }
//
//     console.log(5); // 不会运行
// }
//
// var result = f();
// console.log(result);

// var add = new Function(
//     'x',
//     'y',
//     'return x + y'
// );
// console.log(add(1, 100));

// 函数定义变量作用域提升
// testHelloWorld();
// function testHelloWorld() {
//     console.log("test hello world");
// }
// var f;
// f(); // error
// f = function () {
//     console.log('test');
// };

// (function () {
//     var a = 100;
//     console.log(a);
// }());

// (function f() {
//     'use strict';
//     var foo = 1;
//     eval('foo = 2');
//     console.log(foo);  // 2
// })();

// 通过 arguments 参数设置可选参数
// function foo(a, b, ...rest) {
//     console.log('------------------------------');
//     console.log('a = ' + a);
//     console.log('b = ' + b);
//     console.log(rest);
//     console.log('------------------------------');
// }
// foo();foo(1);foo(1,2);foo(1,2,3);foo(1,2,3,4);

// 函数作用域基础上，对于不存在的变量会提前
// 'use strict';
// function foo() {
//     var x = 'Hello, ' + y;
//     console.log(x);
//     // 执行到这个时候已经有 y ， y 的数值 u undefi
//     var y = 'Bob';
// }
// foo();

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
