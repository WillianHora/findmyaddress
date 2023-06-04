function limitNumberLength(input) {
    if (input.value.length > input.maxLength) {
      input.value = input.value.slice(0, input.maxLength);
    }
  }
  

function openDialog() {
    let cep = document.getElementById("cep").value;
    document.getElementById("showCep").innerText = cep;
    
    if(cep.length==0){
       document.getElementById("error").removeAttribute("hidden",true)
    }
    else{
    var minhaJanela = document.querySelector('#minhaJanela');
    minhaJanela.showModal();
    
    let url = "https://brasilapi.com.br/api/cep/v1/"+cep;
    
    fetch(url).then(function(dados){
        dados.json().then(function(address){
            if(address.street == undefined){
                document.getElementById("estado").innerText = "ERRO CEP NÃO ENCONTRADO"

            }else{
                document.getElementById("estado").innerText = address.state;
                document.getElementById("cidade").innerText = address.city;
                document.getElementById("bairro").innerText = address.neighborhood;
                document.getElementById("rua").innerText = address.street;
            }
        })
    })
}
}

function closeDialog() {
    var minhaJanela = document.querySelector('#minhaJanela');
    minhaJanela.close();
    document.getElementById("estado").innerText = ""
    document.getElementById("cidade").innerText =""
    document.getElementById("bairro").innerText = ""
    document.getElementById("rua").innerText = ""
    document.getElementById("error").setAttribute("hidden",false)
    
    
}