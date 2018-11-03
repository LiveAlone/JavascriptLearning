//
// var result = 3 + 4 + "5";
// console.log(typeof result)
// console.log(3 + 4 + "5");
//
// console.log(1 * '2');
// console.log(1 - '2');
// console.log(1 / '2');
//
// var obj = {p : 1};
// console.log(obj + 1);
//

// var obj = {
//     valueOf: function () {
//         return 1;
//     }
// };
//
// console.log(obj + 2);

// var obj = new Date();
// obj.valueOf = function () { return 1 };
// obj.toString = function () { return 'hello' };
//
// console.log(obj + 2); // "hello2"

// console.log( 2 ** 4 );
// console.log(undefined === undefined);
// console.log(null === null);
// console.log( 0 == false );

// console.log('\n 123 \t' == 123);
// console.log(null==undefined);

// byte calculate content
// console.log(1 | 2);
// console.log(-4 >> 1);
// console.log(-4 >>> 1);  // 带符号移动方式

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

// // 支持 不同的数据Error 异常信息
// try{
//     throw 'errorContent';
// }catch (e) {
//     console.log(e)
// }


function f() {
    try {
        console.log(0);
        throw 'bug';
    } catch(e) {
        console.log(1);
        return true; // 这句原本会延迟到 finally 代码块结束再执行
        console.log(2); // 不会运行
    } finally {
        console.log(3);
        return false; // 这句会覆盖掉前面那句 return
        console.log(4); // 不会运行
    }

    console.log(5); // 不会运行
}

var result = f();
console.log(result);










