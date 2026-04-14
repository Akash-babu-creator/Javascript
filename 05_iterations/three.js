
// ARRAY SPECIFIC LOOPS

// for of 

// const arr =[3,5,3,6,4]

// for (const num of arr) {
//     console.log(num);
// }

// const greetings = "Hellow world!"

// for (const greet of greetings) {
//     console.log(`each cahr is ${greet}`)
// }

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United states of America")
map.set('FR',"France")

console.log(map)

for (const [key,value] of map) {
    console.log(key, ':-',value)
}

const myObject = {
    'game': 'NFS',
    'game2':'Spiderman'
}

// for (const [key,value] of myObject) {
//     console.log(key, ':-',value)
// }