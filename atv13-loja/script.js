// 1. Saldo inicial do cliente
let saldo = 200.00;
const listaCarrinho = document.getElementById('lista-carrinho');
const totalEl       = document.getElementById('total');
const mensagemEl    = document.getElementById('mensagem');
const btnFinalizar  = document.getElementById('btn-finalizar');
const btnAdicionar  = document.getElementById('btn-adicionar');
const inputNome     = document.getElementById('produto-nome');
const inputPreco    = document.getElementById('produto-preco');

const carrinho = [];
let total = 0;

// Função para atualizar a exibição do carrinho e total
function atualizarCarrinho() {
  listaCarrinho.innerHTML = '';
  total = carrinho.reduce((acc, item) => acc + item.preco, 0);

  carrinho.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
    listaCarrinho.appendChild(li);
  });

  totalEl.textContent = `Total: R$ ${total.toFixed(2)}`;
}

// Função de adicionar produto
btnAdicionar.addEventListener('click', () => {
  const nome  = inputNome.value.trim();
  const preco = parseFloat(inputPreco.value);

  if (!nome || isNaN(preco) || preco <= 0) {
    mensagemEl.textContent = 'Informe nome e preço válidos!';
    mensagemEl.className = 'erro';
    return;
  }

  carrinho.push({ nome, preco });
  inputNome.value = '';
  inputPreco.value = '';
  mensagemEl.textContent = '';
  atualizarCarrinho();
});

// Função de finalizar compra
btnFinalizar.addEventListener('click', () => {
  const podePagar = total <= saldo;

  if (!podePagar) {
    mensagemEl.textContent = 'Saldo insuficiente!';
    mensagemEl.className = 'erro';
  } else {
    saldo -= total;
    mensagemEl.textContent = `Compra realizada! Saldo restante: R$ ${saldo.toFixed(2)}`;
    mensagemEl.className = 'sucesso';
    btnFinalizar.disabled = true;
  }
});

// Inicializa display vazio
atualizarCarrinho();