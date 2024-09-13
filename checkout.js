import { carrinhoCheckout, lerlocalStorage } from "./src/utilidades";

function produtosCheckout() {
    const idsQuantidadeItensCarrinho = lerlocalStorage("carrinho");
    for (const idProduto in idsQuantidadeItensCarrinho) {
        carrinhoCheckout(idProduto, "container-produto-checkout", idsQuantidadeItensCarrinho[idProduto]);
    }
}

produtosCheckout();