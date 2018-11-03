
// type object
// var obj = Object(1);
// console.log(typeof obj);
// console.log(obj instanceof Object);
// console.log(obj instanceof Number);

// var obj = [];
// var obj2 = Object(obj);
// console.log(obj === obj2);

// object 提供对象基础操作
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

// var obj = Object.defineProperties({}, {
//     p1: { value: 123, enumerable: true, writable: true, configurable: true},
//     p2: { value: 'abc', enumerable: true },
//     p3: { get: function () { return this.p1 + this.p2 },
//         enumerable:true,
//         configurable:true
//     }
// });
// console.log(obj.p3);
// obj.p1 = 456;
// console.log(obj.p1);
// console.log(obj.p3);

// console.log(typeof 123);
// console.log(typeof new Number(123));

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

// var person1 = {
//     name: '张三',
//     age: 38,
//     greeting: function() {
//         console.log('Hi! I\'m ' + this.name + '.');
//     }
// };
//
// var person2 = Object.create(person1);
//
// console.log(person2.name); // 张三
// person2.greeting() // Hi! I'm 张三.

// var person = {
//     name: '张三',
//     describe: function () {
//         return '姓名：'+ this.name;
//     }
// };
//
// console.log(person.describe());

// 通过this 内存对象 进行对象
// var f = function () {
//     console.log(this.x);
// }
//
// var x = 1;
// var obj = {
//     f: f,
//     x: 2,
// };
//
// // 单独执行
// f() // 1
//
// // obj 环境执行
// obj.f() // 2
//
// var obj ={
//     foo: function () {
//         console.log(this);
//     }
// };
// {
//     obj.foo(); // obj
//     (obj.foo = obj.foo())();
// }

// var b = {
//     m: function() {
//         console.log(this.p);
//     }
// };
//
// var a = {
//     p: 'Hello',
//     b: b
// };

// (a.b).m() // 等同于 b.m()

// var f = function () {
//     return this;
// };
//
// console.log(f.call(5));

// function add(a, b) {
//     console.log(this);
//     return a + b;
// }
//
// console.log(add.call(this, 1, 2)); // 3

// console.log(Object.prototype.prototype);
// console.log(Object.getPrototypeOf(Object.prototype));

function P() {}
var p = new P();

console.log(p.constructor === P); // true
console.log(p.constructor === P.prototype.constructor); // true
console.log(p.hasOwnProperty('constructor')); // false


