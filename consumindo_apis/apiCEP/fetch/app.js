document.getElementById('btn-cep').addEventListener('click', buscaCep)

async function buscaCep() {
    let cepClient = document.getElementById('cepCliente').value.replace(/\D/g, '')

    const url = `https://viacep.com.br/ws/${cepClient}/json/`

    //Verificando se o cep esta vazio

    if (!(cepClient == "")) {
        
        const validacep = /^[0-9]{8}$/

        //Verificando se o cep contem 8 digitos
        
        if (validacep.test(cepClient)) {
            
            try {

                //Corpo da requisicao

                const response = await fetch(url)
                const data = await response.json()

                //Preenchendo inputs
                document.getElementById('rua').value = (data.logradouro);
                document.getElementById('bairro').value = (data.bairro);
                document.getElementById('cidade').value = (data.localidade);
                document.getElementById('uf').value = (data.uf);
            } catch (error) {

                console.error(error)
            }
        } else {
            alert("Erro")
        }
    } else {
        alert("Erro")
    }


}