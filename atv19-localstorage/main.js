// Cadastro de Produtos

// Criar objeto
let produto = {
    nome: "Camiseta",
    preco: 29.99,
    categoria: "Vestuário",
    emEstoque: true,
    quantidade: 100,
    tamanho: ["P", "M", "G"],
    tags: ["moda", "conforto", "estilo"],
    descricao: "Camiseta de algodão",
    material: "Algodão" // Adicionando a propriedade material
};

// Acessando o objeto
console.log("Nome do produto:", produto.nome);
console.log("Preço:", produto.preco);
console.log("Tamanhos disponíveis:", produto.tamanho);
console.log("Material:", produto.material);
console.log("Está em estoque?", produto.emEstoque);
console.log("Quantidade em estoque:", produto.quantidade);

// Alterando uma propriedade
produto.categoria = "Roupas";

// Removendo uma propriedade
delete produto.material;
console.log()

// Acessando o objeto após alterações
console.log("Nome do produto:", produto.nome);
console.log("Preço:", produto.preco);
console.log("Tamanhos disponíveis:", produto.tamanho);
console.log("Material:", produto.material); // Agora será undefined
console.log("Está em estoque?", produto.emEstoque);
console.log("Quantidade em estoque:", produto.quantidade);

// converter objeto em json

let jsonProduto=JSON.stringify(produto)
console.log("Objetos em json: ", jsonProduto)

// converter json em objeto

let produtoConvertido = JSON.parse(jsonProduto)
console.log("Objeto convertido: ", produtoConvertido)