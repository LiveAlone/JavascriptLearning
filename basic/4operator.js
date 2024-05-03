// 1 符号操作类型自动转换
// var result = 3 + 4 + "5";
// console.log(typeof result)
// console.log(3 + 4 + "5");
// console.log(1 * '2');
// console.log(1 - '2');
// console.log(1 / '2');

// 2 valueOf 自动类型转换
// var obj = {p : 1};
// console.log(obj + 1);
// var obj = {
//     valueOf: function () {
//         return 1;
//     }
// };
// console.log(obj + 2);

// var obj = new Date();
// obj.valueOf = function () { return 1 };
// obj.toString = function () { return 'hello' };
// console.log(obj + 2); // "hello2"

// 3 类型相等判断
// console.log( 2 ** 4 );
// console.log(undefined === undefined);
// console.log(null === null);
// console.log( 0 == false );
// console.log('\n 123 \t' == 123);
// console.log(null==undefined);

// 4 位操作
// console.log(1 | 2);
// console.log(-4 >> 1);
// console.log(-4 >>> 1);  // 带符号移动方式









