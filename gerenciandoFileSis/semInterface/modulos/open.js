const fs = require('fs')

//open

/**
 * O metodo open cria um arquivo vazio
 */

fs.open('meuNovoArquivo2.txt','w',err => {
    if(err) throw err
    console.log('Aberto');
})
