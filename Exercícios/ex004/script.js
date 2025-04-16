/* 

Evento é tudo que pode acontecer com um elemento (div, botões, etc...)
Ex:
   - mouseenter (quando o mouse sobrepoe o elemento)
   - mousemove
   - mousedown
   - click
   - mouseout

*/

function clicar() {
  let area = document.getElementById("area");
  area.innerHTML = "Você clicou!";
  area.style.background = "red";
}

function entrar() {
  let area = document.getElementById("area");
  area.innerHTML = 'Entrou!'
}

function sair() {
  let area = document.getElementById("area");
  area.innerHTML = 'Saiu!'
  area.style.background = 'none'
}
