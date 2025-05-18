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

let taxa = 5; // Escopo Global

function aplicarTaxa(valor) {
    let taxa = 10; // Escopo Local
    return valor + taxa;
}

console.log("Valor com taxa: R$", aplicarTaxa(90));
console.log("Taxa global: R$", taxa); // Acessando a variável global

// Juros simples
function calcularJurosSimples(capital, taxa, tempo) {
    return capital * (1 + (taxa / 100) * tempo);
}

// Juros compostos
function calcularJurosCompostos(capital, taxa, tempo) {
    return capital * Math.pow((1 + taxa / 100), tempo);
}

// Função genérica para mostrar os valores
function exibirJuros(capital, taxa, tempo) {
    const valorSimples = calcularJurosSimples(capital, taxa, tempo);
    const valorComposto = calcularJurosCompostos(capital, taxa, tempo);

    console.log(`\n--- Cálculo de Juros ---`);
    console.log(`Capital: R$ ${capital}`);
    console.log(`Taxa: ${taxa}%`);
    console.log(`Tempo: ${tempo} ano(s)`);
    console.log("Juros simples: R$", valorSimples.toFixed(2));
    console.log("Juros compostos: R$", valorComposto.toFixed(2));
}

// Exemplo de uso
exibirJuros(100, 5, 2);
