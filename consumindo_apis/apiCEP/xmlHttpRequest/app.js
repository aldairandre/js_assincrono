document.getElementById('btn-cep').addEventListener('click', buscaCep)

function buscaCep(cepClient) {
    cepClient = document.getElementById('cepCliente').value

    const url = `https://viacep.com.br/ws/${cepClient}/json/`

    const req = new XMLHttpRequest()

    /**
     * Corpo da requisicao 
     */

    req.open('GET', url, true)

    req.onload = () => {
        let responseAPI = JSON.parse(req.response)

        document.getElementById('rua').value = (responseAPI.logradouro);
        document.getElementById('bairro').value = (responseAPI.bairro);
        document.getElementById('cidade').value = (responseAPI.localidade);
        document.getElementById('uf').value = (responseAPI.uf);
    }

    req.send()
}