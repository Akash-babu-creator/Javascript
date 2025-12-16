/* Primitive  (primitive datatypes are call by value)

 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

 */

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

const bigNumber = 5847597438943n


/*
        Reference ( Non Primitive)
        Arry, Objects, Functions

*/
const heros = ["shaktman", "naagraj","doga"]
let myObj ={
    name: "akash",
    age: 22
} 

const myFunction = function(){
    console.log("hello world");
}
console.log(typeof myFunction)
console.log(typeof heros)
console.log(typeof myObj)


// *********************************************

// Stack(Primitive), Heap(Non-Primitive)