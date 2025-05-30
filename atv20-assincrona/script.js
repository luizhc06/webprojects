//Sistema de carregamento de dados Assincrono
console.log("Iniciando o carregamento de dados...");

//setTimeout para simular atraso
setTimeout(() => {
    console.log("Dados carregados com sucesso!");
    // Aqui você pode chamar uma função para processar os dados carregados
    processarDados(); // Chama a função para processar os dados carregados
}, 2000)

//setInterval (executa a cada 1 segundo)
let contador = 0;
const intervalo = setInterval(() => {
    contador++;
    console.log(`Contador: ${contador}`);

        if (contador === 3) {
            console.log("Contador atingiu o limite de 3, parando o intervalo.");
            clearInterval(intervalo); // Para o intervalo quando contador atinge 3
        }
    }, 1000);

// Função para processar os dados carregados
function processarDados() {
    console.log("Processando os dados carregados...");
    // Adicione aqui a lógica para processar os dados
    // Simula sucesso ou falha aleatoriamente, mas não é mais necessário usar a variável 'sucesso'
}

// Promise para simular uma operação assíncrona
function carregarDados() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const sucesso = Math.random() > 0.5;
            if (sucesso) {
                resolve({ nome: "João", idade: 30 });
            } else {
                reject("Falha ao carregar os dados.");
            }
        }, 1000);
    });
}

carregarDados().then((usuario) => {
    console.log(`Dados do usuário: ${usuario.nome}, idade: ${usuario.idade}`);
    console.log(usuario.nome + usuario.idade + " foram carregados com sucesso!");
}).catch((erro) => {
    console.error("Erro ao carregar os dados do usuário:", erro);
});

console.log("Script finalizado, operações assíncronas em andamento...");