import { catalogo, salvarlocalStorage, lerlocalStorage } from "./utilidades";

const idsQuantidadeItensCarrinho = lerlocalStorage("carrinho") ?? {};


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

function removerProdutoCarrinho(idProduto) {
  delete idsQuantidadeItensCarrinho[idProduto];
  salvarlocalStorage("carrinho", idsQuantidadeItensCarrinho);
  atualizarPrecoCarrinho();
  renderizarProdutosCarrinho();
}

function maiorQuantidadeNoCarrinho(idProduto) {
  idsQuantidadeItensCarrinho[idProduto]++;
  salvarlocalStorage("carrinho", idsQuantidadeItensCarrinho);
  atualizarPrecoCarrinho();
  atualizarQuantidadeItensCarrinho(idProduto);
}

function menorQuantidadeNoCarrinho(idProduto) {
  if (idsQuantidadeItensCarrinho[idProduto] === 1) {
    removerProdutoCarrinho(idProduto);
    return;
  }
  idsQuantidadeItensCarrinho[idProduto]--;
  salvarlocalStorage("carrinho", idsQuantidadeItensCarrinho);
  atualizarPrecoCarrinho();
  atualizarQuantidadeItensCarrinho(idProduto);
}

function atualizarQuantidadeItensCarrinho(idProduto) {
  document.getElementById(`quantidade-${idProduto}`).innerText = idsQuantidadeItensCarrinho[idProduto];
}

function desenharProdutoCarrinho(idProduto) {

  const produto = catalogo.find((p) => p.id === idProduto);
  const containerProdutorCarrinho =
    document.getElementById("produtos-carrinho");

  const elementoArticle = document.createElement("article");
  const articleClasses = ['flex', 'bg-slate-200', 'rounded-lg', 'p-1', 'relative'];

  for (const articleClass of articleClasses) {
    elementoArticle.classList.add(articleClass);
  }

  const CartaoProdutoCarrinho = `<button id="remover-item${produto.id}" class="absolute top-0 right-2">
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
       <button id='maiorquantidade${produto.id}'>+</button>
       <p id='quantidade-${produto.id}' class='ml-2'>${idsQuantidadeItensCarrinho[produto.id]}</p>
       <button class='ml-2' id='menorquantidade${produto.id}' >-</button>
    </div>`;

  elementoArticle.innerHTML = CartaoProdutoCarrinho;
  containerProdutorCarrinho.appendChild(elementoArticle);

  document.getElementById(`maiorquantidade${produto.id}`).
    addEventListener('click', () => maiorQuantidadeNoCarrinho(produto.id))

  document.getElementById(`menorquantidade${produto.id}`).
    addEventListener('click', () => menorQuantidadeNoCarrinho(produto.id))

  document.getElementById(`remover-item${produto.id}`).
    addEventListener('click', () => removerProdutoCarrinho(produto.id))

}

export function renderizarProdutosCarrinho() {
  const containerProdutorCarrinho =
    document.getElementById("produtos-carrinho");
  containerProdutorCarrinho.innerHTML = "";

  for (const idProduto in idsQuantidadeItensCarrinho) {
    desenharProdutoCarrinho(idProduto);
  }
}

export function adicionarAoCarrinho(idProduto) {
  if (idProduto in idsQuantidadeItensCarrinho) {
    maiorQuantidadeNoCarrinho(idProduto);
    return;
  }
  idsQuantidadeItensCarrinho[idProduto] = 1;
  salvarlocalStorage("carrinho", idsQuantidadeItensCarrinho);
  desenharProdutoCarrinho(idProduto)
  atualizarPrecoCarrinho();
}

export function atualizarPrecoCarrinho() {
  const precoCarrinho = document.getElementById("preco-total");
  let totalPrecoCarrinho = 0;
  for (const idProdutoCarrinho in idsQuantidadeItensCarrinho) {
    totalPrecoCarrinho +=
      catalogo.find((p) => p.id === idProdutoCarrinho).preco *
      idsQuantidadeItensCarrinho[idProdutoCarrinho];
  }
  precoCarrinho.innerText = `Total: $${totalPrecoCarrinho}`;
}