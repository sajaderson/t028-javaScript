let inicio = 10;
let fim = 1;
let passo = 1;

if (passo <= 0) {
  resultado.innerHTML = `O passo não pode ser zero ou negativo.`;
} else if (inicio < fim) {
  for (let cont = inicio; cont <= fim; cont += passo) {
    if (cont + passo <= fim) {
      resultado.innerHTML += `${cont} ➡️`;
    } else {
      resultado.innerHTML += `${cont} 🏁`;
    }
  }
} else {
  for (let cont = inicio; cont >= fim; cont -= passo) {
    if (cont - passo >= fim) {
      resultado.innerHTML += `${cont} ➡️`;
    } else {
      resultado.innerHTML += `${cont} 🏁`;
    }
  }
}
