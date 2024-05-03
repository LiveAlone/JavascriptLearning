// meta 类型信息

// var Student = {
//     name: 'Robot',
//     height: '1.2',
//     run: function () {
//         console.log(this.name + " is running ...");
//     }
// };
// var xiaoming = {
//     name: 'xiaoming'
// };
// xiaoming.__proto__ = Student;
// // xiaoming.run();
// // console.log(xiaoming.constructor);
// console.log(xiaoming.__proto__);
// console.log(xiaoming.__proto__.__proto__);
// console.log(xiaoming.__proto__.__proto__.__proto__);


// // js 中没有 Class 概念的定义，通过 prototype 原生链方式， 函数的执行调用方式
// var xiaoming = {
//     name: 'xiaoming'
// };
// var Bird = {
//     fly: function(){
//         console.log(this.name + " is flying ... ");
//     }
// };
// xiaoming.__proto__ = Bird;
// xiaoming.fly();

// 原生的调用链执行方式
// arr ----> Array.prototype ----> Object.prototype ----> null
// var arr = [1, 2, 3];
// console.log(arr);
// console.log(arr.__proto__);
// console.log(arr.__proto__.__proto__);
// console.log(arr.__proto__.__proto__.__proto__);

// function 原生调用链
// foo-- -- > Function.prototype-- -- > Object.prototype-- -- > null
// var f = function(){
//     console.log('test');
// };
// console.log(f);
// console.log(f.__proto__);
// console.log(f.__proto__.__proto__);
// console.log(f.__proto__.__proto__.__proto__);

// Student 对象的调用链
function Student(name) {
    this.name = name;
    this.hello = function () {
        console.log('Hello, ' + this.name + '!');
    }
}
var xiaoming = new Student('小明');
// console.log(xiaoming.name); // '小明'
// xiaoming.hello(); // Hello, 小明!

// xiaoming↘
// xiaohong - →Student.prototype-- -- > Object.prototype-- -- > null
// xiaojun↗
// 对象的调用链 执行方式

// console.log(xiaoming.__proto__);
// console.log(xiaoming.constructor); // studnet 创建出来
// console.log(xiaoming.__proto__);
// console.log(xiaoming.__proto__.constructor);
// console.log(xiaoming.constructor);

// 函数对象的定义 ， 通过 prototype 原型对象， 定义函数上
// function Student(name) {
//     this.name = name;
// }
// Student.prototype.hello = function () {
//     console.log('Hello, ' + this.name + '!');
// }
// var xiaoming = new Student('小明');
// xiaoming.hello();

// js 原生调用链 通过 Construct 指向 Function 函数， 通过 protoType 指向原生对象。



