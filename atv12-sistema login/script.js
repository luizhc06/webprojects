const campoNome = document.getElementById('nome');
const campoSenha = document.getElementById('senha');
const btnEnviar = document.getElementById('enviar');
const btnToggle = document.getElementById('toggleSenha');
const mensagem = document.getElementById('mensagem');

const SENHA_CORRETA = '12345';
const MAX_TENTATIVAS = 3;
let tentativas = 0;

btnToggle.addEventListener('click', () => {
    const tipo = campoSenha.getAttribute('type') === 'password' ? 'text' : 'password';
    campoSenha.setAttribute('type', tipo);
    btnToggle.textContent = tipo === 'password' ? 'Mostrar senha' : 'Ocultar senha';
});

btnEnviar.addEventListener('click', () => {
    const nome = campoNome.value.trim();
    const senha = campoSenha.value;

    // Checa campos vazios
    if (!nome || !senha) {
        mensagem.textContent = 'Por favor, preencha todos os campos corretamente!';
        mensagem.style.color = 'red';
        return;
    }

    // Verifica se já bloqueado
    if (tentativas >= MAX_TENTATIVAS) {
        mensagem.textContent = 'Usuário bloqueado após 3 tentativas.';
        mensagem.style.color = 'red';
        btnEnviar.disabled = true;
        return;
    }

    // Verifica senha
    if (senha === SENHA_CORRETA) {
        mensagem.textContent = `Bem-vindo, ${nome}!`;
        mensagem.style.color = 'green';
        btnEnviar.disabled = true;
        campoNome.disabled = true;
        campoSenha.disabled = true;
    } else {
        tentativas++;
        const restam = MAX_TENTATIVAS - tentativas;
        mensagem.textContent = `Senha incorreta. Você tem ${restam} tentativa(s) restante(s).`;
        mensagem.style.color = 'red';
        if (tentativas >= MAX_TENTATIVAS) {
            mensagem.textContent = 'Usuário bloqueado após 3 tentativas.';
            btnEnviar.disabled = true;
        }
    }
});