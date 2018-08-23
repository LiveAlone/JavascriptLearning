var xiaoming = {
    name: '小明',
    birth: 1990,
    school: 'No.1 Middle School',
    height: 1.70,
    weight: 65,
    score: null
};

// console.log(xiaoming.name);
// console.log(xiaoming['name']);

// 添加属性方式
// console.log(xiaoming.name2);
// xiaoming.name2 = 'again';
// console.log(xiaoming.name2);
// delete xiaoming.name2;
// console.log(xiaoming.name2);
// console.log('name' in xiaoming);
// console.log('name2' in xiaoming);
console.log(xiaoming.hasOwnProperty('name'));
console.log(xiaoming.hasOwnProperty('toString'));