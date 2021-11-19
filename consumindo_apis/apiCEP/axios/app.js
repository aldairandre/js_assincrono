document.getElementById('btn-cep').addEventListener('click', buscaCep)

function preencheForm(conteudo) {
    document.getElementById('rua').value = (conteudo.logradouro);
    document.getElementById('bairro').value = (conteudo.bairro);
    document.getElementById('cidade').value = (conteudo.localidade);
    document.getElementById('uf').value = (conteudo.uf);
}

async function buscaCep() {
    let cepClient = document.getElementById('cepCliente').value.replace(/\D/g, '')

    const url = `https://viacep.com.br/ws/${cepClient}/json/`

    const validacep = /^[0-9]{8}$/

    //Verificando se o cep e tem 8 digitos e se nao esta vazio

    if (!(cepClient == "") && validacep.test(cepClient)) {

        try {

            //Corpo da requisicao

            const response = await axios.get(url).then(response => {
                return response.data
            })

            preencheForm(response)

            //Preenchendo inputs

        } catch (error) {

            console.error(error)
        }
    } else {
        alert("Verifica o seu CEP")
    }


}