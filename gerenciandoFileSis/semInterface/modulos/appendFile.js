const fs = require('fs')

//appendFile

/**
 * O meto appendFile adiciona um conteudo expecifico a um aqrquivo, 
 * caso o arquivo não exista o metodo cria e add o conteudo ao arquivo
 */
const appendFile = (nomeDoArq,conteudo) => {
    fs.appendFile(nomeDoArq,conteudo, err => {
        if(err) throw err
        console.log('Salvo');
    })
}



module.exports = appendFile