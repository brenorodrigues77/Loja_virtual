export const catalogo = [{
    id: "1",
    nome: "Blusa em viscose azul florida",
    marca: "Renner",
    preco: 60,
    nomeArquivoImagem: "camiseta 1.webp",
    Bermuda: false
},
{
    id: "2",
    nome: "Blusa em viscose amarela e preto",
    marca: "Renner",
    preco: 60,
    nomeArquivoImagem: "camiseta 2.webp",
    Bermuda: false
},
{
    id: "3",
    nome: "Blusa em viscose azul e preto",
    marca: "Renner",
    preco: 39,
    nomeArquivoImagem: "camiseta 3.jpg",
    Bermuda: false
},
{
    id: "4",
    nome: "Blusa em viscose listrada",
    marca: "Renner",
    preco: 45,
    nomeArquivoImagem: "camiseta 4.jpeg",
    Bermuda: false
},
{
    id: "5",
    nome: "Bermuda listrada azul e branco",
    marca: "Renner",
    preco: 50,
    nomeArquivoImagem: "Bermuda 1.jpg",
    Bermuda: true
},
{
    id: "6",
    nome: "Bermuda clara",
    marca: "Renner",
    preco: 50,
    nomeArquivoImagem: "Bermuda 2.jpeg",
    Bermuda: true
},
{
    id: "7",
    nome: "Bermuda branca",
    marca: "Renner",
    preco: 50,
    nomeArquivoImagem: "Bermuda 3.jpeg",
    Bermuda: true
},
{
    id: "8",
    nome: "Bermuda cinza",
    marca: "Renner",
    preco: 50,
    nomeArquivoImagem: "Bermuda 4.jpeg",
    Bermuda: true
},
];

export function salvarlocalStorage(chave, informacao) {
    localStorage.setItem(chave, JSON.stringify(informacao));
}

export function lerlocalStorage(chave) {
    return JSON.parse(localStorage.getItem(chave));
}

export function removerLocalStorage(chave) {
    localStorage.removeItem(chave);
}



export function carrinhoCheckout(idProduto, idContainerHTML, quantidadeProduto) {

    const produto = catalogo.find((p) => p.id === idProduto);
    const containerProdutorCarrinho =
        document.getElementById(idContainerHTML);

    const elementoArticle = document.createElement("article");
    const articleClasses = ['flex', 'bg-slate-200', 'rounded-lg', 'p-1', 'relative', 'm-4', 'mb-2', 'w-96',];

    for (const articleClass of articleClasses) {
        elementoArticle.classList.add(articleClass);
    }

    const CartaoProdutoCarrinho = `
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
         <p id='quantidade-${produto.id}' class='ml-2'>${quantidadeProduto}</p>
      </div>`;

    elementoArticle.innerHTML = CartaoProdutoCarrinho;
    containerProdutorCarrinho.appendChild(elementoArticle);

}