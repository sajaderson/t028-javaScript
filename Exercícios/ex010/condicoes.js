// Condições IF e ELSE

let velocidade = 110;

console.log(`A velocidade do seu carro é de ${velocidade}Km/h`)

if (velocidade <= 100) {
    console.log(`Boa Viagem! Use sempre cinto de segurança!`)
} else if (velocidade <= 110) {
    console.log(`Está quase no limite, cuidado!`)
} else {
    console.log(`Você ultrapassou o limite de velocidade! Vai ser multado.`)
}