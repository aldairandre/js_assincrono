const url = 'https://www.viacep.com.br/ws/01001000/json/'

const req = new XMLHttpRequest


/**
 * Corpo da requisicao
 */

req.open('GET',url,true)

req.onload = () => {
    let responseAPI = JSON.parse(req.response)

    console.log(responseAPI);
}

req.send()