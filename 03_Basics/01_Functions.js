function SayMyname(){
    console.log("Akash Babu");
}

// SayMyname();

// function addTwoNumber(number1,number2){
//     console.log(number1+number2);
// }
// addTwoNumber(5,6);


function addTwoNumber(number1,number2){
    // let result = number1+number2;
    // return result;
    return number1+number2;

}
const result = addTwoNumber(5,6);

// console.log("Result", result);

function loginUserMessage(username)  // can provide default values like (userneame = sam)
{
    if(username === undefined) // (!username)   #same
        {
        console.log("please enter a username")
        return 

    }
    return `${username} just logged in`
}

// loginUserMessage("Akash");
// console.log(loginUserMessage("Akash"))
console.log(loginUserMessage());


// function calculateCartPrice(...num1){
//     return num1
// }
function calculateCartPrice(val1,val2,...num1){
    return num1
}
console.log(calculateCartPrice(200,500,300,5002));

const user = {
    username : "akash",
    price : 3943
};

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
//  handleObject(user);

handleObject(
    {
        username: "sam",
        price: 599
    }
)

const myNewArray = [33,55,33,55];

function returnSecondValue(getArray){
    return getArray[1];
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([44,9,66,32]))
