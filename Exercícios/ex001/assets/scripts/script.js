/* alert('Olá Mundo!');
console.log('Olá Mundo!');

let nome = prompt('Qual e o seu nome?');

alert(`Seja bem vindo! ${nome}`);

console.log(`Seja bem vindo! ${nome}`)  */

function alterar() {
    let p = document.getElementById('paragrafo');
    
    p.innerHTML = '<strong>Novo</strong> Texto';

    p.style.backgroundColor = 'red';    
}

function acender() {
    document.getElementById('imgLamp').src = 'assets/imagens/pic_bulbon.gif'
}

function apagar() {
    document.getElementById('imgLamp').src = 'assets/imagens/pic_bulboff.gif'
}
