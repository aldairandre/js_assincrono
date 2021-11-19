/**
 * Consumindo api de dados fakes da jsonplaceholder
 */
const axios = require('axios')

const url = 'https://jsonplaceholder.typicode.com/posts/1'

function mostraDados(response){
    for(conteudo in response){
        console.log(`${conteudo}: ${response[conteudo]}`);
    }
}

const get = (async function() {

    //Corpo da requisicao
    const response = await axios.get(url).then(response => {
        return response.data
    }).catch(err => {
        console.error(err)
    });
    mostraDados(response)
})()

console.log(get);