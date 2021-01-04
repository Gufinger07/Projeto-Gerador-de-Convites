var botaoAdicionar = document.querySelector("#adicionar-convidado");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var convidado = obtemconvidadoDoFormulario(form);
    
    adicionaConvidadoNaTabela(convidado);

    form.reset();

    

})
function obtemconvidadoDoFormulario(form) {

    var convidado = {
        nome: form.nome.value,
        idade: form.idade.value
    }
    
    return convidado;
}
function montaTr(convidado) {
    var convidadoTr = document.createElement("tr");
    convidadoTr.classList.add("convidado");
    convidadoTr.appendChild(montaTd(convidado.nome, "info-nome"));
    convidadoTr.appendChild(montaTd(convidado.idade, "info-idade"));
    

    return convidadoTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado;

    return td;
}
function adicionaConvidadoNaTabela(convidado) {
    var convidadoTr = montaTr(convidado);
    var tabela = document.querySelector("#tabela-convidados");
    tabela.appendChild(convidadoTr);
}
