let lista = [2, 5, 9, 4] //array

let nomes = ['Jaderson', 'Lucas', 'Kauã', 'Hyure', 'Diego', 'Vitor'] //array

console.log(nomes)
console.log(`O tamanho da lista é: ${nomes.length}`) //o metodo length retorna o tamanho da lista.

/* for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i])
} */

/* nomes.forEach(function (nome){
    console.log(nome)
}) */

nomes.unshift('Julius') //Adiciona um valor no inicio da lista.
console.log(nomes)
nomes.push('Aloy') //Adiciona um valor no final da lista.
console.log(nomes)
nomes.pop()//Remove o último elemento da lista.
console.log(nomes)
nomes.shift()//Remove o primeiro elemento da lista.
console.log(nomes)
nomes.sort()//Classifica em ordem crescente.
console.log(nomes)
nomes.reverse()//Classifica em ordem descrescente.
console.log(nomes)

console.log(nomes.indexOf('Aloy'))

nomes.splice(0, 2, 'Wallas', 'Ricardo') //A partir da indice 0 vai remover um valor e acrescentar o Wallas e o Ricardo

console.log(nomes)

let cadastro = ['Jaderson', 35, 67, ['Francisco', 'Marlene']]
console.log(cadastro[3][1])
