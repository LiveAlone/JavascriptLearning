// 数据集合

// Array
// var array = [1, 1.23, 'Hello', true];
// console.log(array);
// console.log(array.length);
// array.length = 10;
// console.log(array);
// console.log(array[4]);

// array.length = 2;
// console.log(array);

// array[10] = 100;
// console.log(array);

// console.log(array.slice(1,2));
// var arrayNew = array.slice();
// console.log(array == arrayNew);

// array.push('111');
// console.log(array);
// console.log(array.pop());
// console.log(array.pop());
// console.log(array);

// array.unshift('A','B');
// console.log(array);
// console.log(array.shift());
// console.log(array.shift());
// console.log(array);

// revert 转换
// var array = ['B', 'C', 'A'];
// array.sort();
// console.log(array);
// array.reverse();
// console.log(array);

var arr = ['Microsoft', 'Apple', 'Yahoo', 'AOL', 'Excite', 'Oracle'];
// // 从索引2开始删除3个元素,然后再添加两个元素:
// arr.splice(2, 3, 'Google', 'Facebook'); // 返回删除的元素 ['Yahoo', 'AOL', 'Excite']
// console.log(arr); // ['Microsoft', 'Apple', 'Google', 'Facebook', 'Oracle']
// // 只删除,不添加:
// arr.splice(2, 2); // ['Google', 'Facebook']
// console.log(arr); // ['Microsoft', 'Apple', 'Oracle']
// // 只添加,不删除:
// arr.splice(2, 0, 'Google', 'Facebook'); // 返回[],因为没有删除任何元素
// console.log(arr); // ['Microsoft', 'Apple', 'Google', 'Facebook', 'Oracle']

// foreach iterator
// var a = ['A', 'B', 'C'];
// var s = new Set(['A', 'B', 'C']);
// var m = new Map([
//     [1, 'x'],
//     [2, 'y'],
//     [3, 'z']
// ]);
// for (var x of a) { // 遍历Array
//     console.log(x);
// }
// for (var x of s) { // 遍历Set
//     console.log(x);
// }
// for (var x of m) { // 遍历Map
//     console.log(x[0] + '=' + x[1]);
// }


// iterable foreach 支持方式 (Array Set Map)
// var a = ['A', 'B', 'C'];
// a.forEach(function (element, index, array) {
//     console.log(element + ', index = ' + index);
// });

// var s = new Set(['A', 'B', 'C']);
// s.forEach(function (element, sameElement, set) {
//     console.log(element);
// });

// var m = new Map([
//     [1, 'x'],
//     [2, 'y'],
//     [3, 'z']
// ]);
// m.forEach(function (value, key, map) {
//     console.log(value);
// });

// map support
// var m = new Map([
//     ['Michael', 95],
//     ['Bob', 75],
//     ['Tracy', 85]
// ]);
// console.log(m.get('Michael')); // 95

//get set 操作
// var m = new Map(); // 空Map
// m.set('Adam', 67); // 添加新的key-value
// m.set('Bob', 59);
// console.log(m.has('Adam')); // 是否存在key 'Adam': true
// console.log(m.get('Adam')); // 67
// m.delete('Adam'); // 删除key 'Adam'
// console.log(m.get('Adam')); // undefined
// console.log(m);

// set support
// var s = new Set([1, 2, 3, 3, '3']);
// console.log(s);




