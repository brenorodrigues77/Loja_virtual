import { lerlocalStorage, carrinhoCheckout } from "./src/utilidades";

function pedidosHistoricosCriados(comprasComData) {
    const itemsPedidos = `<p class="text-xl text-bold my-4">${new Date(comprasComData.momentoCompras).toLocaleDateString('pt-br',
        { hour: "2-digit", minute: "2-digit" })}</p>
    <section id='container-pedidos-${comprasComData.momentoCompras}'  class="bg-zinc-400 p-3 rounded-md"></section>`;

    const main = document.getElementsByTagName('main')[0];
    main.innerHTML += itemsPedidos;

    for (const idProduto in comprasComData.compras) {
        carrinhoCheckout(idProduto, `container-pedidos-${comprasComData.momentoCompras}`, comprasComData.compras[idProduto]);
    }

}

function lerHistoricosCompras() {
    const historico = lerlocalStorage('historico');
    for (const comprasComData of historico) {
        pedidosHistoricosCriados(comprasComData);
    }
}

lerHistoricosCompras();
