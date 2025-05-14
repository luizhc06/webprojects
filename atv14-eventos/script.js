const inputNome = document.getElementById("nome");
const saudacao = document.getElementById("mensagem");
const botao = document.getElementById("botao");

function exibirSaudacao() {
    const nome = inputNome.value; // Obtém o valor do campo de entrada
    
    saudacao.innerText = `Olá, ${nome}! Bem-vindo(a) ao nosso site!`; // Atualiza o conteúdo do elemento de saudação
}

botao.addEventListener("click", exibirSaudacao); // Adiciona um evento de clique ao botão

botao.addEventListener("mouseover", function() {
    botao.style.backgroundColor = "blue"; // Altera a cor de fundo do botão para azul 
})

botao.addEventListener("input", function() {
    alert("Texto sendo digitado...")
})

inputNome.addEventListener("keydown", function(event) {
    alert(`Tecla pressionada... ${event.key}`);
});