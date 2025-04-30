// Carrinho de compras (array para armazenar os produtos)
let carrinho = [];

// Função para adicionar um produto ao carrinho
function adicionarProduto(nome, preco) {
    // Criação de um objeto representando o produto
    let produto = { nome: nome, preco: preco };
    
    // Adicionando o produto ao array do carrinho
    carrinho.push(produto);
    
    // Exibindo mensagem no console
    console.log(`${nome} - R$${preco} foi adicionado`);
}

function calcularTotal() {
    // Inicializando a variável total
    let total = 0;
    
    // Percorrendo o array do carrinho e somando os preços
    for (let i = 0; i < carrinho.length; i++) {
        total += carrinho[i].preco;
    }
    
    // Exibindo o total no console
    return total;
}

// Adicionando produtos ao carrinho
adicionarProduto("Camisa", 50);
adicionarProduto("Blusa", 120);
adicionarProduto("Calça", 80);
adicionarProduto("Sapatos", 100);
adicionarProduto("Boné", 20);

//Exibir todos os produtos
console.log("\nProdutos no carrinho:");
carrinho.forEach((produto) => console.log(`- ${produto.nome}: R$${produto.preco}`));

// calcular o total do carrinho
let totalCompra = calcularTotal();
console.log(`\nTotal da compra: R$${totalCompra}`)

// aplicar desconto 
if(totalCompra > 150) {
    console.log("\nVocê ganhou um desconto de 10%!");
    totalCompra *= 0.9; // aplicando 10% de desconto
}

else {
    console.log("\nVocê não ganhou desconto.");
}

//mostrando o valor final com op. ternario
let mensagem = totalCompra >= 100 ? "Compra Aprovada!" : "Compra Reprovada!";
console.log(`\n$("mensagem")`);

// Exibindo o valor final
console.log(`\nValor final da compra: R$${totalCompra.toFixed(2)}`);