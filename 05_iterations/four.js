const myObject= {

    js: 'javascirpt',
    cpp:'c++',
    rb:'ruby'
}

for (const key in myObject) {
    // console.log(myObject[key])
    // console.log(`${key} shortcut is for ${myObject[key]}`)
}

const progrmamming =[ "js","rb", 'py','java']
for (const key in progrmamming) {
    // console.log(progrmamming[key])
    
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United states of America")
map.set('FR',"France")

for (const key in map) {
    
    console.log(key)
}