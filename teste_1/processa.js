const fs = require('fs')

console.log(1)

fs.readFile('./in1.txt',(err,conteudo) => {
    fs.readFile('./in2.txt',(err2,conteudo2) =>{
        console.log(err, String(conteudo))
        console.log(err2, String(conteudo2))
    })
})
console.log(2)
console.log(3)