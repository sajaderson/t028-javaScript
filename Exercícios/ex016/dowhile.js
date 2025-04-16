/* let senha = "";
do {
  senha = prompt("Digite sua senha: ");
} while (senha !== "Senac");

 */
let terminouAtividade = ''

do {
    terminouAtividade = prompt("Você terminou a atividade? (Digite 'sim' ou 'não')").toUpperCase()
} while (terminouAtividade !== 'SIM')

console.log('Ótimo! Você terminou a atividade.')