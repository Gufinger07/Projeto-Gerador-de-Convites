var botao_gerar = document.querySelector("#gerar-convite");
botao_gerar.addEventListener("click", function(event) {
    event.preventDefault();
    
    var nome_no_convite = document.querySelector(".nome-convite")
    var novo_nome = document.querySelector("#aniversariante")
    nome_no_convite.textContent = novo_nome.value

    var idade_no_convite = document.querySelector("#idade-mudavel")
    var nova_idade = document.querySelector("#idade")
    idade_no_convite.textContent = nova_idade.value

    var data_no_convite = document.querySelector(".data-convite")
    var nova_data = document.querySelector('input[type="date"]')
    data_no_convite.textContent = nova_data.value
    


    var hora_no_convite = document.querySelector(".hora-convite")
    var nova_hora = document.querySelector('input[type="time"]')
    hora_no_convite.textContent = nova_hora.value

    var local_no_convite = document.querySelector(".local-convite")
    var novo_local = document.querySelector("#local")
    local_no_convite.textContent = novo_local.value
    
    var radios = document.getElementsByName("opcao")

    
    if (radios[0].checked) {
        adiciona_classe_menino()
        console.log("Escolheu: Menino" );  
        return
    }
    if(radios[1].checked) {
        adiciona_classe_menina()
        console.log("Escolheu: Menina")
        return
    }
})

function adiciona_classe_menino() {
    var classe_menino = document.getElementById("fazendo-convite")
    classe_menino.classList.remove("convite-menina")
    classe_menino.classList.add("convite-menino")
}

function adiciona_classe_menina() {
    var classe_menina = document.getElementById("fazendo-convite")
    classe_menina.classList.remove("convite-menino")
    classe_menina.classList.add("convite-menina")
}
