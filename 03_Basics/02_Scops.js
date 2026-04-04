
let a = 300
if (true) {
    let a = 10
    const b = 30
    var c = 8
    console.log("inner:", a)
}
// console.log(a)   error dega that a is not defined
// console.log(b)   error dega that b is not defined
// c onsole.log(c)   // it will princt the value of 
// console.log(a)

function one() {
    const username = "Akash"
    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website );  // website is not accesible here
    two()
}
// one()

if (true) {
    const username = "Akash"
    if (username === "Akash") {
        const website = "youtube"
        console.log(username + website);
    }
    // console.log(website);
}

//console.log(username);

// *************** INTERESTING*************
console.log(addone(5))
function addone(num){
    return num + 1
}

console.log(addTwo(5))
const addTwo = function(num){
    return num+2
}

