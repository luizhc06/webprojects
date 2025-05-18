// Funções dos exercícios

// Exercício 1
function somaArray(arr) {
  return arr.reduce((acc, val) => acc + val, 0);
}

// Exercício 2
function paraMaiusculas(arr) {
  return arr.map(str => str.toUpperCase());
}

// Exercício 3
function adicionarItem(arr, item) {
  arr.push(item);
  return arr;
}

// Exercício 4
function removerPrimeiro(arr) {
  arr.shift();
  return arr;
}

// Exercício 5
function filtrarPares(arr) {
  return arr.filter(num => num % 2 === 0);
}

// Exercício 6
function contarPalavrasLongas(arr) {
  return arr.filter(str => str.length > 5).length;
}

// Exercício 7
function maiorNumero(arr) {
  return Math.max(...arr);
}

// Exercício 8
function nomesSeparados(arr) {
  return arr.join(', ');
}

// Exercício 9
function arrayReverso(arr) {
  return [...arr].reverse(); 
}

// Exercício 10
function quadrados(arr) {
  return arr.map(num => num * num);
}

// Exemplos de uso:

console.log("Exercício 1:", somaArray([1, 2, 3, 4])); 

console.log("Exercício 2:", paraMaiusculas(["maçã", "banana", "uva"])); 

let frutas = ["maçã", "banana"];
console.log("Exercício 3:", adicionarItem(frutas, "laranja")); 

let numeros = [1, 2, 3];
console.log("Exercício 4:", removerPrimeiro(numeros)); 

console.log("Exercício 5:", filtrarPares([1, 2, 3, 4, 5, 6])); 

console.log("Exercício 6:", contarPalavrasLongas(["cachorro", "gato", "elefante", "sol"])); 

console.log("Exercício 7:", maiorNumero([5, 10, 3, 8]));

console.log("Exercício 8:", nomesSeparados(["Ana", "João", "Carlos"])); 

console.log("Exercício 9:", arrayReverso([1, 2, 3, 4]));

console.log("Exercício 10:", quadrados([1, 2, 3, 4])); 