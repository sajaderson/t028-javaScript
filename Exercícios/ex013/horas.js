//menor que 12 = Bom dia!
//menor ou igual 18 = Boa Tarde!
//Acima de 18 = Boa Noite!

let hora = new Date().getHours();

if (hora < 12) {
    console.log("Bom dia!")
} else if (hora <= 18) {
    console.log("Boa Tarde!")
} else {
    console.log("Boa Noite!")
}

