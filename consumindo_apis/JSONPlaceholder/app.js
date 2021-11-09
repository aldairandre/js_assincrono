/**
 * Consumindo api de dados fakes da jsonplaceholder
 */
const axios = require('axios')

//Obtendo um recurso
axios.get('https://jsonplaceholder.typicode.com/posts/1').then((res) => {
    console.log(res.data);
})