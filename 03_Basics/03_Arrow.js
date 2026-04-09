const user = {
    username: "Hitesh",
    price: 99,
    welcomeMessage: function () {
        console.log(`${this.username} , welcome to website`);
        // console.log(this);

    }
}                        // this.username is used to refer the current context

// user.welcomeMessage();
// user.username = "sam";
// user.welcomeMessage();

console.log(this);

// function chai(){
//     let username = "akash"
//     console.log(this);
// }
// chai();

// const chai =   function(){
//     let username = "akash"
//     console.log(this.usernamw);
// }
// chai();

// ARROW functino

const chai = () => {
    let username = "aksh"
    console.log(this);
}
// chai();


// const addTwo = (num1,num2) => {
//     return num1+num2;
// }


// const addTwo = (num1,num2) => num1+num2

// const addTwo = (num1,num2) => (num1+num2)

const addTwo = (num1,num2) => ({username: "aksh"})
    


console.log(addTwo(3,4));


// const myArray = [2,4,6,7,6]

// myArray.forEach()