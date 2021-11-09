const fs = require('fs')

//appendFile

/**
 * O meto append adiciona um conteudo expecifico a um aqrquivo, 
 * caso o arquivo nao exista o meto cria e ad o conteudo ao arquivo
 */
const appendFile = (nomeDoArq,conteudo) => {
    fs.appendFile(nomeDoArq,conteudo, err => {
        if(err) throw err
        console.log('Salvo');
    })
}



module.exports = appendFile