const fs = require('fs')

//Escrevendo em um arquivo ja existente

const writeFile = (nomeDoArq,conteudo) => {

    fs.writeFile(nomeDoArq,conteudo,err => {
        if(err) throw err
        console.log('Salvo');
    })
}

module.exports = writeFile