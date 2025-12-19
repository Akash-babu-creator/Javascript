// Array

const myArr = [1, 5, 4, 2, 8, 3]
const myHeros = ["ironman, bucky, panther, steave"]

const myArr2 = new Array(1, 2, 3, 4, 5)

// console.log(myArr[1])

// Array Methods

// myArr.push(6)
// myArr.push(10)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(10))
// console.log(myArr.indexOf(10))
// console.log(myArr.indexOf(3))

// const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

// slice, splice

console.log("A", myArr);
const myn1 = myArr.slice(1, 3);

console.log(myn1);
console.log("B" , myArr);

const myn2 = myArr.splice(1, 3);
console.log(myn2);
console.log("C" , myArr);