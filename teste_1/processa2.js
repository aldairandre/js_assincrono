const fs = require('fs')

console.log(1)
//Promises
const readFile = file => new Promise((resolve,reject) => {
    fs.readFile(file,(err, conteudo) => {
        if(err){
            reject(err)
        }else{
           resolve(conteudo)
        }
    })
})
readFile('./in1.txt').then(conteudo => {
    console.log(String(conteudo))
    return readFile('./in2.txt')
}).then(conteudo => {
    console.log(String(conteudo))
})
console.log(2)
console.log(3)