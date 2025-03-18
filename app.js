//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listaDeAmigos = [];
function exibirTextoNaTela(tag, texto) {
    let elemento = document.querySelector(tag);
    elemento.innerHTML = texto;
}

function adicionarAmigo() {
    let nomeAmigo = document.getElementById('amigo').value;

    if (nomeAmigo === "") {
        alert("Por favor, insira um nome.");
    } else {
        if (listaDeAmigos.includes(nomeAmigo)) {
            alert("Esse nome já foi adicionado!");
        } else {
            listaDeAmigos.push(nomeAmigo);
            atualizarLista();
            limparCampo();
        }
    }
}

function atualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = "";

    for (let i = 0; i < listaDeAmigos.length; i++) {
        let itemLista = document.createElement('li');
        itemLista.textContent = listaDeAmigos[i];
        lista.appendChild(itemLista);
    }
}