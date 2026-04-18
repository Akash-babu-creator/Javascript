const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function(acc , currval) {
//     console.log(`acc: ${acc} and Currval : ${currval}`)
//     return acc + currval
// }, 0 )

const myTotal = myNums.reduce((acc, currval) => acc + currval, 0)

// console.log(myTotal);



const shoppingCart = [

    {
        itemNam: 'js-course',
        price: 2999
    },
    {
        itemNam: 'python',
        price: 3999
    },
    {
        itemNam: 'mob-dev',
        price: 4999
    },
    {
        itemNam: 'data-science',
        price: 2999
    },

]

const PriceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(PriceToPay)