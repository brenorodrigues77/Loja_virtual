const catalogoProdutos = document.getElementById("container-produto");

function visualizarTodos() {
    const produtosOcultados = Array.from(catalogoProdutos.getElementsByClassName("hidden"));
    for (const produto of produtosOcultados) {
        produto.classList.remove("hidden");
    }
}

function ocultarBermuda() {
    visualizarTodos();
    const produtosBermuda = Array.from(
        catalogoProdutos.getElementsByClassName("Bermuda"));

    for (const produto of produtosBermuda) {
        produto.classList.add("hidden");
    }
}

function ocultarCamiseta() {
    visualizarTodos();
    const produtosCamiseta = Array.from(
        catalogoProdutos.getElementsByClassName("Camiseta"));

    for (const produto of produtosCamiseta) {
        produto.classList.add("hidden");
    }
}

export function inicialiazarFiltros() {
    document
        .getElementById("visualizar-todos")
        .addEventListener("click", visualizarTodos);
    document
        .getElementById("visualizar-bermuda")
        .addEventListener("click", ocultarCamiseta);
    document
        .getElementById("visualizar-camiseta")
        .addEventListener("click", ocultarBermuda);
}


