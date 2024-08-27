import { catalogo } from "./utilidades";

const idsQuantidadeItensCarrinho = {};


function abrirCarrinho() {
  document.getElementById("carrinho").classList.add("right-[0px]");
  document.getElementById("carrinho").classList.remove("right-[-360px]");

}

function fecharcarrinho() {
  document.getElementById("carrinho").classList.remove("right-[0px]");
  document.getElementById("carrinho").classList.add("right-[-360px]");
}

export function inicializarCarrinho() {
  const botaoFecharCarrinho = document.getElementById("Fechar-Carrinho")
  const botaoAbrirCarrinho = document.getElementById("abrir-Carrinho")

  botaoFecharCarrinho.addEventListener("click", fecharcarrinho);
  botaoAbrirCarrinho.addEventListener("click", abrirCarrinho);
}

export function adicionarAoCarrinho(idProduto) {
  idsQuantidadeItensCarrinho[idProduto] = 1;
  const produto = catalogo.find((p) => p.id === idProduto);
  const containerProdutorCarrinho =
    document.getElementById("produtos-carrinho");
  const CartaoProdutoCarrinho = `<article class="flex bg-slate-200 rounded-lg p-1 relative">
    <button id="Fechar-Carrinho" class="absolute top-0 right-2">
      <i class="fa-solid fa-circle-xmark text-slate-500 hover:text-slate-900"
      ></i>
    </button>
    <img 
      src="./produtos eecommerce/camisetas/${produto.nomeArquivoImagem}"
      alt="Carrinho: ${produto.nome}"
      class="h-24 rounded-lg">
    <div class="p-2 flex flex-col justify-between">
      <p class="text-slate-900 text-sm"> ${produto.nome}</p>
      <p class="text-slate-400 text-xs"> Tamanho M </p>
      <p class="text-green-700 text-lg"> $${produto.preco}</p>
    </div>
    <div class='flex items-end absolute bottom-0 right-2 text-l'>
       <button>+</button>
       <p id='quantidade-${produto.id}' class='ml-2'>${idsQuantidadeItensCarrinho[produto.id]}</p>
       <button class='ml-2'>-</button>
    </div>
  </article>`;
  containerProdutorCarrinho.innerHTML += CartaoProdutoCarrinho;
}