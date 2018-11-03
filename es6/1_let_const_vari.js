//
// {
//     var a = 1;
//     let b = 1;
// }
//
// console.log(a);
// console.log(b); // error 错误消息信息

// var a = [];
// for (var i = 0; i < 10; i++) {
//     a[i] = function () {
//         console.log(i);
//     };
// }
// console.log(i); // i 全局变量
// a[6](); // 10
//
// var a = [];
// for (let i=0; i < 10; i++) {
//     a[i] = function () {
//         console.log(i);
//     }
// }
// a[5]();

// for (let i = 0; i < 3; i++) {
//     let i = 'abc';
//     console.log(i);
// }

// // var 的情况
// console.log(foo); // 输出undefined
// var foo = 2;
//
// // let 的情况
// console.log(bar); // 报错ReferenceError
// let bar = 2;

// var tmp = new Date();
// function f() {
//     console.log(tmp);
//     if (false) {
//         var tmp = 'hello world';
//     }
// }
// f();

const foo = 'bar';
const baz = {foo};
console.log(baz); // {foo: "bar"}

// 等同于
// const baz = {foo: foo};























