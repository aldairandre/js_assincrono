document.getElementById('btn-cep').addEventListener('click', buscaCep)

function buscaCep() {
    let cepClient = document.getElementById('cepCliente').value.replace(/\D/g, '')

    const url = `https://viacep.com.br/ws/${cepClient}/json/`

    const req = new XMLHttpRequest()

    /**
     * Corpo da requisicao 
     */
    if(!(cepClient == "")){

        //Expressão regular para validar o CEP.
        
        const validacep = /^[0-9]{8}$/;

        if(validacep.test(cepClient)){
            req.open('GET', url, true)
    
            req.onload = () => {
                let responseAPI = JSON.parse(req.response)
    
                document.getElementById('rua').value = (responseAPI.logradouro);
                document.getElementById('bairro').value = (responseAPI.bairro);
                document.getElementById('cidade').value = (responseAPI.localidade);
                document.getElementById('uf').value = (responseAPI.uf);
            }
    
            req.send()
        }else {
            alert("Erro")
        }
        

    }else{
        alert('Algo esta errado')
    }
}