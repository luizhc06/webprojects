// Seleciona os elementos do DOM
const nameInput = document.getElementById('name-input');
const likeButton = document.getElementById('like-button');
const greeting = document.getElementById('greeting');
const clickCount = document.getElementById('click-count');

// Variável para armazenar o número de cliques
let count = 0;

// Evento para capturar o nome do usuário e exibir logs no console
nameInput.addEventListener('keydown', (event) => {
    console.log(`Tecla pressionada: ${event.key}`);
});

// Evento para atualizar a saudação em tempo real
nameInput.addEventListener('input', () => {
    const name = nameInput.value.trim();
    greeting.innerText = name ? `Olá, ${name}!` : '';
});

// Evento para incrementar o contador de cliques
likeButton.addEventListener('click', () => {
    count++;
    const name = nameInput.value.trim();
    clickCount.innerText = `Cliques: ${count}`;
    greeting.innerText = name ? `Olá, ${name}! Você clicou ${count} vez(es).` : `Você clicou ${count} vez(es).`;
});

// Evento para estilizar o botão ao passar o mouse
likeButton.addEventListener('mouseover', () => {
    likeButton.style.backgroundColor = '#0056b3';
});

likeButton.addEventListener('mouseout', () => {
    likeButton.style.backgroundColor = '#007bff';
});