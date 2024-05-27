// FUNÇÃO MENU
var MenuItens = document.getElementById("MenuItens");

MenuItens.style.maxHeight = "0px";

function menucelular() {
    if (MenuItens.style.maxHeight === "0px") {
        MenuItens.style.maxHeight = "200px";
    } else {
        MenuItens.style.maxHeight = "0px";
    }
}
//FIM FUNÇAO MENU

// FUNÇÃO PRODUTO MINIATURA

var produtoimg = document.getElementById('produtoimg');
var produtominiatura = document.getElementsByClassName('produtominiatura');

// Iterar sobre a coleção de elementos produtominiatura e adicionar evento de clique a cada um
for (var i = 0; i < produtominiatura.length; i++) {
    produtominiatura[i].onclick = function() {
        produtoimg.src = this.src; // 'this' refere-se ao elemento que foi clicado
    }
}

//FIM FUNÇÃO PRODUTO MINIATURA