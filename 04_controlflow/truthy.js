const userEmail = []
if(userEmail){
    console.log("got user email")
}
else{
    console.log("Don't have user email")
}

// falsy values 

// false, 0, -0 , BigInt 0n, "" , null, underfined , NaN

//truthy values

// "0" , 'fa;se' , " ", [],{}, function(){}

if (userEmail.length ===0){
    console.log("array is empty")
}
const emptyobj = {}

if(Object.keys(emptyobj).length ===0){
    console.log('object is empty')
}

// nullish voalescing operator (??): null undefined

let val1;
// val1 = 5??10

// val1 = null ?? 10

// val1 = undefined ?? 15\

val1 = null ?? 20 ?? 49

console.log(val1)

// Terniary operator

// consition ? true : false

const iceTeaPrice = 200;
iceTeaPrice <= 80 ? console.log('less than 80') : console.log('more than 80')