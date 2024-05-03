// object 对象类型定义

// 1 对象定义 等同 {foo: foo};
// const foo = 'bar';
// const baz = {foo};
// console.log(baz)
// console.log(baz['foo']); // {foo: "bar"}

// 2 number 数据类型定义
// var obj = Object(1);
// var obj2 = 1
// console.log(obj)
// console.log(obj2)
// console.log(typeof obj);
// console.log(obj instanceof Object);
// console.log(obj instanceof Number);

// var obj = [];
// var obj2 = Object(obj);
// console.log(obj === obj2);

// object 提供对象基础操作, 属性获取元信息编程
// var obj = {p : 'a', q : 'b'};
// console.log(Object.getOwnPropertyDescriptor(obj, 'p'));
// console.log(Object.getOwnPropertyDescriptors(obj));
// console.log(Object.getOwnPropertyNames(obj));

// console.log(Object.keys([]));
// console.log(Object.getOwnPropertyNames([]));
// console.log(Object.keys(Object.prototype));
// console.log(Object.getOwnPropertyNames(Object.prototype));

// var obj = Object.defineProperty({}, 'p', {
//     value: 123,
//     writable: false,
//     enumerable: true,
//     configurable: false
// });
// console.log(obj.p);
// obj.p = 456;    // note writable, not support update
// console.log(obj.p);

var obj = Object.defineProperties({}, {
    p1: { value: 123, enumerable: true, writable: true, configurable: true},
    p2: { value: 'abc', enumerable: true },
    p3: { get: function () { return this.p1 + this.p2 },
        enumerable:true,
        configurable:true
    }
});
// console.log(obj.p3);
// obj.p1 = 456;
// console.log(obj.p1);
// console.log(obj.p3);

// 函数定义结构体对线，闭包定义
// var Vehicle = function (count) {
//     this.price = 1000;
//     this.count = count;
// };
//
// var v = new Vehicle(66);
// console.log(v.count);
// console.log(v.price);

// var Vehicle = function () {
//     this.price = 1000;
//     return 1000;
// };
//
// var result = new Vehicle();
// console.log(result);
// console.log((new Vehicle()));

// object 对象结构体定义
// var person1 = {
//     name: '张三',
//     age: 38,
//     greeting: function() {
//         console.log('Hi! I\'m ' + this.name + '.');
//     }
// };
// var person2 = Object.create(person1);
// console.log(person2.name); // 张三
// person2.greeting() // Hi! I'm 张三.

// var person = {
//     name: '张三',
//     describe: function () {
//         return '姓名：'+ this.name;
//     }
// };
// console.log(person.describe());

// 通过this传递当前上下文，函数执行隐形参数
// var f = function () {
//     console.log(this.x);
// }
// var x = 1;
// var obj = {
//     f: f,
//     x: 2,
// };
// f() // 1
// obj.f() // 2

// call 函数调用，默认第一个 this, 执行上下文
// var f = function () {
//     return this;
// };
// console.log(f.call(5));
// function add(a, b) {
//     console.log(this);
//     return a + b;
// }
//
// console.log(add.call(this, 1, 2)); // 3

// // proto 属性链
// console.log(Object.prototype.prototype);
// console.log(Object.getPrototypeOf(Object.prototype));
//
// function P() {}
// var p = new P();
// console.log(p.constructor === P); // true
// console.log(p.constructor === P.prototype.constructor); // true
// console.log(p.hasOwnProperty('constructor')); // false


// js 执行环境配置上下文
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
