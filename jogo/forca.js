let lerLinhas = require('readline-sync');

function exibeMensagemDeBoasVindas() {
    console.log('**********************************');
    console.log('*   Bem-vindo ao jogo da Forca!  *');
    console.log('**********************************');
}

function verificacaoLetrasCertas(palavraSecreta, palpite, letrasCertas) {
    for (let posicao in palavraSecreta) {
        if (palpite.toUpperCase() === palavraSecreta[posicao]) {
            letrasCertas[posicao] = palavraSecreta[posicao];
        }
    }
}

function pedePalpite(erros) {
    let palpiteSemTratamento = lerLinhas.question(`\nErros possíveis: ${erros} de 6. Qual seu palpite? `);
    let primeiraLetra = palpiteSemTratamento[0];
    
    return primeiraLetra.toUpperCase();
}

function palavraPossui(palpite, palavraSecreta) {
    return palavraSecreta.includes(palpite)
}

function acertouAPalavra(letrasCertas) {
    return !letrasCertas.includes('_');
}

function exibeMensagemPerdedor(erros) {
    console.log(`\nErros possíveis: ${erros} de 6`);
    console.log('NÃO FOI DESSA VEZ... =/ TENTE NOVAMENTE!!!');
}

function exibeMensagemVencedor(palavra) {
    console.log(`A PALAVRA ERA ${palavra}... PARABÉNS! VOCÊ VENCEU!!!`);
}

function jogar(palavraSecreta, letrasCertas) {
    let erros = 0;
    let enforcou = false;
    

    exibeMensagemDeBoasVindas()
    while (!acertouAPalavra(letrasCertas) && !enforcou) {
        console.log(letrasCertas);
    
        let palpite = pedePalpite(erros);
        if (palavraPossui(palpite, palavraSecreta)) {
            verificacaoLetrasCertas(palavraSecreta, palpite, letrasCertas);
        } else {
            erros++;
        }
        
        enforcou = erros === 6;
    }
    
    if (enforcou) {
        exibeMensagemPerdedor(erros);
    } else {
        exibeMensagemVencedor(palavraSecreta);
    }
    
    console.log('### FIM DO JOGO! ###');
}

module.exports = {
    jogar
}
