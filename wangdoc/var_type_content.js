
// null undefined == false
// if (!undefined) {
//     console.log('undefined is false');
// }
// if (!null) {
//     console.log('null is false content');
// }
//
// console.log(null == undefined);
// console.log(null === undefined);

// console.log(Number(0));
// console.log(null + 100);
// console.log(Number(undefined));
// console.log(0 + undefined);
// console.log(typeof "");
// console.log(typeof '');

// if ([]) {
//     console.log("object is note empty");
// }
// if ({}) {
//     console.log("object is note empty");
// }

// Number
// console.log(1 === 1.0);
// console.log(0.1 + 0.2 === 0.3);
// console.log((0.3 - 0.2) === (0.2 - 0.1));
// console.log(0.1 / 0.3);
// console.log(Math.pow(2, 1024));
// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);

// console.log(2e10);
// console.log(2e-2);
// console.log(2E2);

// console.log(1/+0);
// console.log(1/-0);

// console.log(5 + NaN);
// console.log(Math.acos(66));
// console.log(0 / 0);
// console.log(typeof NaN);
// console.log(NaN === NaN);   // nan 与自己不相同
// console.log(Boolean(NaN));

// console.log(Infinity > Number.MAX_VALUE);
// console.log(0 * Infinity);
// console.log(Infinity * Infinity);

// String
// console.log('\u00A9');
// console.log('\u006F\u006F ');

// function b64Encode(str) {
//     return btoa(encodeURIComponent(str));
// }
//
// function b64Decode(str) {
//     return decodeURIComponent(atob(str));
// }
//
// b64Encode('你好'); // "JUU0JUJEJUEwJUU1JUE1JUJE"
// // b64Decode('JUU0JUJEJUEwJUU1JUE1JUJE') // "你好"

// obj 数据对象映射方式
// var obj = {
//     foo: 'hello',
//     bar: 'world',
// };
// obj = {
//     1: 'a',
//     3.2: 'b',
//     1e2: true,
//     1e-2: true,
//     .234: true,
//     0xFF: true
// };
// console.log(obj);

// var obj = {
//     p: function (x) {
//         return 2 * x;
//     },
//     "p2": function (x) {
//         return 4 * x;
//     }
// };
//
// console.log(obj.p(66));
// console.log(obj['p'](66));
// console.log(obj["p2"](99));
// console.log(obj.p2(99));
//
// console.log(eval('{foo: 123}')); // 123
// console.log(eval('({foo: 123})')); // {foo: 123}
//
// var foo = 'bar';
//
// var obj = {
//     foo: 1,
//     bar: 2
// };
//
// console.log(obj.foo);  // 1
// console.log(obj[foo]);  // 2

// var obj = {
//     123: 'hello world'
// };
//
// // console.log(obj.123); // 报错
// console.log(obj[123]); // "hello world" 123 自动字符串转换， 如果不是变量

// var obj = {
//     key1: 1,
//     key2: 2
// };
//
// console.log(Object.keys(obj));
// console.log(delete  obj.key1);
//
// var person = { name: '老张' };
//
// for (var key in person) {
//     if (person.hasOwnProperty(key)) {
//         console.log(key);
//     }
// }

// 例一
// var obj = {
//     p1: 1,
//     p2: 2,
// };
// with (obj) {
//     p1 = 4;
//     p2 = 5;
// }
// // 等同于
// obj.p1 = 4;
// obj.p2 = 5;
//
// // 例二
// with (document.links[0]){
//     console.log(href);
//     console.log(title);
//     console.log(style);
// }
// // 等同于
// console.log(document.links[0].href);
// console.log(document.links[0].title);
// console.log(document.links[0].style);

// var add = new Function(
//     'x',
//     'y',
//     'return x + y'
// );
// console.log(add(1, 100));

// testHelloWorld();
// function testHelloWorld() {
//     console.log("test hello world");
// }

// var f;
// f(); // error
// f = function () {
//     console.log('test');
// };

// var a = 1;
// var x = function () {
//     console.log(a);
// };
//
// function f() {
//     var a = 2;
//     x();
// }
//
// f(); // 1

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

// array 指定任务数据类型
// var arr = [
//     {a: 1},
//     [1, 2, 3],
//     function() {return true;}
// ];
//
// console.log(arr[0]); // Object {a: 1}
// console.log(arr[1]); // [1, 2, 3]
// console.log(arr[2]); // function (){return true;}

// var arr = ['a', 'b', 'c'];
//
// console.log(Object.keys(arr));

