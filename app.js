//let titulo = document.querySelector('h1'); // variavel que vai armazenar o titulo da pagina.
// titulo.innerHTML = "Jogo do numero secreto"; // o inner vai altera o elemento no html

// let paragrafo = document.querySelector('p'); // variavel que vai armazenar o paragrafo da pagina
// paragrafo.innerHTML = "Jogo do numero secreto";
let numeroSecreto = gerarNumeroAleatorio(); // varivel que vai armazenar o numero secreto


function verificaTextoNaTela(tag, texto){  // funcao quee vai receber o parametro de tag e de texto
    let campo = document.querySelector(tag); // a variavel campo vai armazenar a tag definida pelo parametro
    campo.innerHTML = texto ; // o inner vai alterar o texto do html que tem o parametro definido 
}

verificaTextoNaTela("h1", "Jogo do numero secreto"); // chama a funcao de texto na tela 
verificaTextoNaTela("p", "Escolha um numero de 1 a 10");

function verificarChute () {
    let chute = document.querySelector('input').value ;
    console.log(chute == numeroSecreto);
};

function gerarNumeroAleatorio() { // funçao que vai gerar um nunnero aleatorio 
   return parseInt(Math.random() * 10 + 1);
};