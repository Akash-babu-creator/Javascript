// const tinderUser = new Object()
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name= " Sammy"
tinderUser.isLoggedIn = false
console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname : "akash",
            lastname: "Babu"
        }
    }
}
 console.log(regularUser.fullname.userfullname.firstname)

const obj1 = { 1: "a", 2: "b"}
const obj2 = { 3: "a", 4: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({},obj1,obj2)

const obj3 = {...obj1, ...obj2}
// console.log(obj3)


// when database se values ayengi

const users =[
    {
        id: 1, 
        email : "a@mail.com"
    },
    {
        id: 1, 
        email : "a@mail.com"
    },
    {
        id: 1, 
        email : "a@mail.com"
    }
]
// console.log(users[0].email)

// console.log(tinderUser);

// console.log(Object.keys(tinderUser))     // gives the list of keys
console.log(Object.values(tinderUser))     // gives the list of values

// console.log(Object.entries(tinderUser))     

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))
// console.log(tinderUser.hasOwnProperty('isLogged'))








const course = {
    course: "js",
    price: "999",
    courseInstructor: "Htesh"
}

// course.courseInstructor

const {courseInstructor} = course
const {courseInstructor: instructor} = course


console.log(courseInstructor);
console.log(instructor);

             // APIs

// {
//     "name"  : "hitesh",
//     "coursename" : "js",
//     "price" : "free"
// }

[
    {},
    {},
    {}
]