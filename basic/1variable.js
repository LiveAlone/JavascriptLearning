// 变量定义场景使用

// 1 let var 不同作用域，函数范围使用
// {
//     var a = 1;
//     let b = 1;
// }
// console.log(a);
// console.log(b); // error 错误消息信息

// 2 循环全局变量局部变量区别
// var a = [];
// for (var i = 0; i < 10; i++) {
//     a[i] = function () {
//         console.log(i);
//     };
// }
// console.log(i); // i 全局变量
// a[6](); // 10
// a[7](); // 10
//
// var a = [];
// for (let i=0; i < 10; i++) {
//     a[i] = function () {
//         console.log(i);
//     }
// }
// // console.log(i);
// a[5]();
// a[6]();
// a[7]();


// 3 var 变量提前初始化， let 运行状态初始化
// console.log(foo); // 输出undefined
// var foo = 2;
// console.log(bar); // 报错ReferenceError
// let bar = 2;

// 4 var 会在作用域中重新声明，f() 中重新声明了
// var tmp = new Date();
// function f() {
//     console.log(tmp);
//     if (false) {
//          var tmp = 'hello world';
//     }
// }
// f();

// 5 变量类型判断
// console.log(typeof 123);
// console.log(typeof "123");
// console.log(typeof false);
// console.log(typeof null);
// console.log(typeof undefined);
// console.log(typeof Object())
//
// function f() {
//     console.log(null)
// }
//
// console.log(typeof f);
// console.log(typeof {});
// console.log(typeof []);

// 变量数据类型定义, 上下文发生了变化
// if (!undefined) {
//     console.log('undefined is false');
// }
// if (!null) {
//     console.log('null is false content');
// }
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





















