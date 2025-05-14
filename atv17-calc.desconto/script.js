// Função para calcular o desconto
function calcularDesconto(valorOriginal, percentualDesconto) { 
    const desconto = valorOriginal * (percentualDesconto / 100);
    return valorOriginal - desconto;
}

// Preço original e cálculo do desconto
let precoOriginal = 100;
let percentualDesconto = 10;
let precoComDesconto = calcularDesconto(precoOriginal, percentualDesconto);

console.log("Preço com desconto: R$", precoComDesconto);

// Função anônima para exibir a mensagem final
const mensagemFinal = function(nomeProduto, valorOriginal, percentualDesconto) {
    const valorFinal = calcularDesconto(valorOriginal, percentualDesconto);
    return `O produto ${nomeProduto} sai por R$ ${valorFinal.toFixed(2)} com desconto de ${percentualDesconto}%`;
};

// Exibindo a mensagem final
console.log(mensagemFinal("camiseta", precoOriginal, percentualDesconto));

let taxa= 5 //Escopo Global

function aplicarTaxa(valor){
    let taxa = 10 //Escopo Local
    return valor + taxa}

console.log("Valor com taxa: R$", aplicarTaxa(90))
console.log("Taxa: R$", taxa) // Acessando a variável global

// Juros
function calcularJuros(valor, taxa, tempo) {
    return valor * (1 + taxa / 100) ** tempo;}

console.log("Valor com juros: R$", calcularJuros(100, 5, 2).toFixed(2))