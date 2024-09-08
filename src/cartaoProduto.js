import { catalogo } from "./utilidades";
import { adicionarAoCarrinho } from "./menuCarrinho";

export function renderizarCatalogo() {
    for (const produtocatalogo of catalogo) {
        const cartaoProduto = `<div class='border-solid w-48 m-2 flex flex-col p-2 justify-between shadow-xl shadow-slate-500 rounded-lg group ${produtocatalogo.Bermuda ? "Bermuda" : "Camiseta"}'
        id='card-produto-${produtocatalogo.id}'>
    <img 
    src="./produtos eecommerce/camisetas/${produtocatalogo.nomeArquivoImagem}" 
      alt="produto 1 do brenoshop."
      class="group-hover:scale-110 duration-300 my-3 rounded-lg"
    />
    <p class='text-sm'>${produtocatalogo.marca}</p>
    <p class='text-sm'>${produtocatalogo.nome}</p> 
    <p class='text-sm'>$${produtocatalogo.preco}</p>
    <button id='adicionar-${produtocatalogo.id}'class='bg-slate-950 hover:bg-slate-700 text-slate-200 rounded-sm'
    ><i class="fa-solid fa-cart-plus"></i></button>
    </div>`;

        document.getElementById("container-produto").innerHTML += cartaoProduto;
    }

    for (const produtocatalogo of catalogo) {
        document
            .getElementById(`adicionar-${produtocatalogo.id}`)
            .addEventListener("click", () => adicionarAoCarrinho(produtocatalogo.id));
    }
}