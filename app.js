//let titulo = document.querySelector('h1'); // variavel que vai armazenar o titulo da pagina.
// titulo.innerHTML = "Jogo do numero secreto"; // o inner vai altera o elemento no html

// let paragrafo = document.querySelector('p'); // variavel que vai armazenar o paragrafo da pagina
// paragrafo.innerHTML = "Jogo do numero secreto"

let listaDeNumeroSecreto = []; // variavel que vai armazenar um array vazio 
let numeroLimite = 10; // variavel que vai armazemar a quantidade de numeros
let numeroSecreto = gerarNumeroAleatorio() ; // varivel que vai armazenar o numero secreto

let tentativas = 1; // variavel que vai armazeanar o numero de tentativas 


function exibirTextoNaTela(tag, texto) { // funçao que vai pegar a tag e o texto e exibir na tela
    let campo = document.querySelector(tag); // variavel que vai armazenar o texto da tag
    campo.innerHTML = texto; // mostrar a varivel campo na tela 
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2} );
}

function exibirMensagemInicial() { 
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();




function verificarChute () {  // funçao que vai verificar os chute
    let chute = document.querySelector('input').value ; // variavel que vai amazenar o chute

    if (chute == numeroSecreto){ // se o chute for igual ao numero secreto

        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa"; // se a palavra tentativas for maior que 1 vai escrever tentativas se nao vai escrever tentantiva

        let numeroTentativas = `Voce descobriu o numero secreto com ${tentativas} ${palavraTentativa}` // varivel que vai armazenar o texto do numero de tentativas

        exibirTextoNaTela('h1', 'Voce acertou'); // exibe isso no texto
        exibirTextoNaTela('p', numeroTentativas );
 
        document.getElementById('reiniciar').removeAttribute('disabled'); // vai desabilitar o atributo que bloqueia o  otao reiniciar 

    } else { // se nao 

        if (chute < numeroSecreto){ // se o chute for menor que o numero secreto

            exibirTextoNaTela('p', 'O numero secreto é maior'); // exibe isso na tela

        } else { // se nao for 

            exibirTextoNaTela('p', 'O numero secreto é menor'); // exibe isso na tela 
        }
        tentativas++ ;
        limparCampo(); // chama a funçao de limpar campo
    }
};


function gerarNumeroAleatorio() { // funçao que vai gerar um nunnero aleatorio 
   let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
   let quantidadeDeElementosNaLista = listaDeNumeroSecreto.length;

   if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumeroSecreto = [];
    }

   if (listaDeNumeroSecreto.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
    } else {
        console.log(listaDeNumeroSecreto)
        listaDeNumeroSecreto.push(numeroEscolhido);
        return numeroEscolhido;
    }
};

function limparCampo(){ // funçao de limpar campo 
    chute = document.querySelector('input'); // seleciona o texto no input

    chute.value = ''; // define o campo como vazio 
}

function reiniciarJogo(){ // funçao que vai reiniciar no jogo
    numeroSecreto = gerarNumeroAleatorio(); // gera um numero novo
    limparCampo(); // limpa o campo
    tentativas = 1;  // zera as tentativas
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true); // abilia a funçao de bloquear o botao do numero secreto 
}