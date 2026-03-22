// singleton 
// Object.create
// object literals

const mysym = Symbol("key1")
 
 const Jsuser = {
    name: "Hitesh",
    "full name": "Hitesh chaudhary",
    age: 28,
    location : "jainput",
    email: "dkjfkls.com:",
    isloggedin: false,
    last_loging_days: ["Monday", "Saturday"],
    [mysym] : "mykey1",
 }


 console.log(Jsuser.email)
 console.log(Jsuser["email"])
//  console.log(Jsuser."full name")  // will throw an error
 console.log(Jsuser["full name"])
 console.log(Jsuser[mysym])         //*****


Jsuser.email = "chatgpt.com"
console.log(Jsuser["email"])
// Object.freeze(Jsuser)         // it will freeze the object, no changes can be done
Jsuser.email ="ms.com"
console.log(Jsuser["email"])
console.log(Jsuser);
 
Jsuser.greeting = function(){
    console.log("Hello JS user")
}
Jsuser.greeting_two = function(){
    console.log(`Hello JS user, ${this.name}`)
}
console.log(Jsuser.greeting())
console.log(Jsuser.greeting_two())



