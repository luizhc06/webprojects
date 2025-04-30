// Capturar os elementos do HTML
const botao = document.getElementById("enviar");
console.log(botao);

const campoNome = document.getElementById("nome");
console.log(campoNome);

const campoIdade = document.getElementById("idade");
console.log(campoIdade);

const mensagem = document.getElementById("mensagem");

// Adicionar evento de clique ao botão
botao.addEventListener("click", function () {
    // Capturando os valores dos campos
    let nome = campoNome.value;
    let idade = Number(campoIdade.value);

    // Validação dos campos
    if (nome === "" || campoIdade.value === "" || isNaN(idade)) {
        mensagem.textContent = "Por favor, preencha todos os campos corretamente!";
        mensagem.style.color = "red";
        return;
    }

    // Exibir mensagem com base na idade
    if (idade >= 18) {
        mensagem.textContent = `Olá, ${nome}! Você é maior de idade.`;
        mensagem.style.color = "green";
    } else {
        mensagem.textContent = `Olá, ${nome}! Você é menor de idade.`;
        mensagem.style.color = "orange";
    }

});