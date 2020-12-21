var botao_gerar = document.querySelector("#gerar-convite");
botao_gerar.addEventListener("click", function(event) {
    event.preventDefault();

    var nome_no_convite = document.querySelector(".nome-convite")
    var novo_nome = document.querySelector("#aniversariante")
    
   
    var idade_no_convite = document.querySelector("#idade-mudavel")
    var nova_idade = document.querySelector("#idade")
    

    var data_no_convite = document.querySelector(".data-convite")
    var nova_data = document.querySelector('input[type="date"]')
    
    


    var hora_no_convite = document.querySelector(".hora-convite")
    var nova_hora = document.querySelector('input[type="time"]')
    

    var local_no_convite = document.querySelector(".local-convite")
    var novo_local = document.querySelector("#local")
    
    
    var radios = document.getElementsByName("opcao")

    if(novo_nome.value.length == 0 || nova_idade.value.length == 0 || nova_data.value.length == 0 || nova_hora.value.length == 0 || novo_local.value.length == 0) {
        mostra_erro()
        return
    } else {
        nome_no_convite.textContent = novo_nome.value
        idade_no_convite.textContent = nova_idade.value
        data_no_convite.textContent = nova_data.value
        hora_no_convite.textContent = nova_hora.value
        local_no_convite.textContent = novo_local.value


    }
    if (radios[0].checked) {
        adiciona_classe_menino()
        return
    }
    if(radios[1].checked) {
        adiciona_classe_menina()
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
function mostra_erro() {
    var erro = document.querySelector(".mensagem-erro")
    erro.innerHTML = "Verifique os dados!!"
}
