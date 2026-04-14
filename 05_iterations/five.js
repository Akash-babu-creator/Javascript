const codding = ['js','ruby','java','python','cpp']


codding.forEach( function (item) {
    // console.log(item)
} )

// forEach needs a callback function

codding.forEach((item)=>{
    // console.log(item)
})

function printMe (item) {
    // console.log(item)
}

codding.forEach(printMe)


codding.forEach( (item, index, arr)=> {
    
    // console.log(item,index,arr)

}  )

mycoding = [

    {
        languageName : 'javascipt',
        languageFileName: 'js'
    },
    {
        languageName : 'python',
        languageFileName: 'oy'
    },
    {
        languageName : 'java',
        languageFileName: 'java'
    }
]

mycoding.forEach( (item) => {
    
    console.log(item.languageFileName)
})