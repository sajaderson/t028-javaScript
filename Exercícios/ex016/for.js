let passo = 2;

for (let cont = 0; cont < 5; cont += passo) {
    console.log(`O contador vale: ${cont}`)
}

let tarefas = ["Comprar leite", "Estudar JavaScript", "Dormir", "Acordar", "Tomar Café", "Escovar", "Tomar Banho", "CLT"]

for (let c = 0; c < tarefas.length; c++) {
    resultado.innerHTML += `<p>${tarefas[c]}</p>`
}