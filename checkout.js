import { carrinhoCheckout, lerlocalStorage, salvarlocalStorage, removerLocalStorage } from "./src/utilidades";

function produtosCheckout() {
    const idsQuantidadeItensCarrinho = lerlocalStorage("carrinho") ?? {};
    for (const idProduto in idsQuantidadeItensCarrinho) {
        carrinhoCheckout(idProduto, "container-produto-checkout", idsQuantidadeItensCarrinho[idProduto]);
    }
}

function finalizarCompras(evento) {
    evento.preventDefault();
    const idsQuantidadeItensCarrinho = lerlocalStorage("carrinho") ?? {};
    if (Object.keys(idsQuantidadeItensCarrinho).length === 0) {
        return;
    }

    const dataDaCompra = new Date();
    const pedidoRealizado = {
        momentoCompras: dataDaCompra,
        compras: idsQuantidadeItensCarrinho
    }

    const historicoDeCompras = lerlocalStorage('historico') ?? [];
    const historicosDeComprasFeitas = [pedidoRealizado, ...historicoDeCompras];

    salvarlocalStorage('historico', historicosDeComprasFeitas);
    removerLocalStorage('carrinho');

    window.location.href = window.location.origin + "/comprasFeitas.html";
}

produtosCheckout();

document.addEventListener('submit', (evento) => finalizarCompras(evento));