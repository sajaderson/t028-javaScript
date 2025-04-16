let valor1 = 8;
let valor2 = 5;
let valor3 = 10;

let firstName = 'Jaderson' //string
let lastName = 'Araujo'

let resultado = (valor1 + valor2) * valor3;

let nome = firstName + lastName //Concatenação

console.log(`A soma dos valores é ${resultado}`)

console.log(`${nome}`)

let a = 5 + 3; //Adição
let b = a % 5; //Resto da divisão
let c = 5 * b ** 2; //Multiplicação e Expoente
let d = 10 - a / 2; //Subtração e Divisão
let e = 6 * 2 / d; //Multiplicação e Divisão
let f = b % e + 4 / e; //Resto da Divisão, Adição e Divisão

/* ------------------------------- */
/* Encontrar números pares e impares */
/* Se o resto da divisão de um número por 2 for igual a 0 ele é par, se for igual a 1 ele é impar. */

let x = 13 % 2;
console.log(x)
console.log(typeof x)