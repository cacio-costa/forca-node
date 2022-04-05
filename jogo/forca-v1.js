let lerLinhas = require('readline-sync');

console.log('**********************************');
console.log('*   Bem-vindo ao jogo da Forca!  *');
console.log('**********************************');

const palavraSecreta = 'BANANA';
const letrasCertas = ['_', '_', '_', '_', '_', '_'];

let erros = 0;
let enforcou = false;
let acertouAPalavra = false;

while (!acertouAPalavra && !enforcou) {
    console.log(letrasCertas);
    let palpite = lerLinhas.question(`\nErros possíveis: ${erros} de 6. Qual seu palpite? `)[0]; // Array é indexado zero-based

    if (palavraSecreta.includes(palpite.toUpperCase())) {
        for (let posicao in palavraSecreta) {
            if (palpite.toUpperCase() === palavraSecreta[posicao]) {
                letrasCertas[posicao] = palavraSecreta[posicao];
            }
        }
    } else {
        // erros += 1;
        erros++;
    }
    
    enforcou = erros === 6;
    acertouAPalavra = !letrasCertas.includes('_');
}

if (enforcou) {
    console.log(`\nErros possíveis: ${erros} de 6`);
    console.log('NÃO FOI DESSA VEZ... =/ TENTE NOVAMENTE!!!');
} else {
    console.log(`A PALAVRA ERA ${palavraSecreta}... PARABÉNS! VOCÊ VENCEU!!!`);
}

console.log('### FIM DO JOGO! ###');