let cont = 10;

while (cont >= 0) {
    console.log(`Cont vale: ${cont}`)
    cont--
}

//Quando usar o for? R: Quando você já sabe quantas vezes quer repetir algo.

//Quando usar o while? R: Quando você não saber quantas vezes repetir algo e espera algo mudar.

let senha = Number.parseInt(prompt('Digite sua senha:'))

while (senha !== 1234) {
    alert(`Senha Incorreta!`)
    senha = Number.parseInt(prompt('Digite sua senha:'))
} 

alert(`Acesso autorizado.`)
