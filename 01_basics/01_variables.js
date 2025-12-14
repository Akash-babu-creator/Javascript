const accountId = 144553
let accountEmail = "akashbabu@gmail.com"
var accountPassword = "123450"
accountCity = "Jaipur"
let accountState;

// accountId= 2   not allowed
accountEmail = "hc@dls;jf.com"
accountPassword = "47390"
accountCity = "bengaluru"
/*
Prefer not to use var
because of issue in block scope and functional scope
*/
// console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])