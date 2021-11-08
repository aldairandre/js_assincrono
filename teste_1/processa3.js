const fs = require('fs')

//Async/Await

console.log(1)

const readFile = file => new Promise((resolve,reject) => {
    fs.readFile(file,(err, conteudo) => {
        if(err){
            reject(err)
        }else{
           resolve(conteudo)
        }
    })
})

const init = async() => {
    try {
        const conteudo = await readFile('./in1.txt')
        const conteudo2 = await readFile('./in22.txt')
        console.log(String(conteudo))
        console.log(String(conteudo2))
    } catch (err) {
        console.log(err)
    }
}

console.log('init',init())
console.log(2)
console.log(3)