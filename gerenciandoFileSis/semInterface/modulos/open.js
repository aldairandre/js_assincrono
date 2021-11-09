const fs = require('fs')

//open

/**
 * O metodo open cria um arquivo vazio
 */

const open = fs.open(nomeDoArq,'w',err => {
    if(err) throw err
    console.log('Aberto');
})

module.exports = open