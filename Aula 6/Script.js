var pontuacao = [0, 0];
var pontuacaoRodada = 0;
var jogadorAtual = 0;
var roundCounter = 0;
// Math.random() = [0-1), o *6  � para o intervalo ir de 1 a 5(pois nunca chega no 6) por isso se soma o +1

var botaoLancarDado = document.querySelector("#botao-lancar-dado");
var botaoPassarVez = document.querySelector("#botao-passar-vez");
var botaoNewGame = document.querySelector("#botao-novo-jogo");
var pontuacaoRodada0 = document.querySelector("#pontuacao-rodada-0");
var pontuacaoRodada1 = document.querySelector("#pontuacao-rodada-1");
var pontuacaoGlobal0 = document.querySelector("#pontuacao-global-0");
var pontuacaoGlobal1 = document.querySelector("#pontuacao-global-1");

var pontuacaoRodadas = [pontuacaoRodada0, pontuacaoRodada1];
var pontuacaoGlobais = [pontuacaoGlobal0, pontuacaoGlobal1];

var NewGame = function () {
    alert("iniciando novo Jogo");
    pontuacao = [0,0];
    // pontuacaoRodada = 0;
    jogadorAtual = Math.floor(Math.random()*2);
    roundCounter = 0;

    pontuacaoRodadas[0].textContent = pontuacaoRodadas[1].textContent = 0;
    pontuacaoGlobais[0].textContent = pontuacaoGlobais[1].textContent = 0;
}

var GameOver = function () {
    
    if (pontuacao[0] == pontuacao[1]){
        alert("Empate");
    }
    else if (pontuacao[0] > pontuacao[1]){
        alert("Player 1 ganhou");
    }
    else if (pontuacao[1] > pontuacao[0]){
        alert("Player 2 Ganhou")
    }
    else {
        alert("Unreachable Statement");
    }

    NewGame();
}

var SwitchPlayer = function () {
    if (++roundCounter > 1){
        GameOver()
    }
    else {
        alert("Trocando Jogador");
    }
}

botaoLancarDado.addEventListener("click", function () {
    var dado = Math.floor(Math.random() * 6) + 1;
    pontuacaoGlobais[jogadorAtual].textContent = pontuacao[jogadorAtual];
    pontuacaoRodadas[jogadorAtual].textContent = dado;

    if (dado == 1) {
        // pontuacao[jogadorAtual] = 0;
        // pontuacaoRodadas[jogadorAtual].textContent = 0;
        pontuacaoGlobais[jogadorAtual].textContent = pontuacao[jogadorAtual];
        jogadorAtual = 1 - jogadorAtual;
        
        SwitchPlayer();
    }
    else {
        pontuacao[jogadorAtual] += dado;
        pontuacaoGlobais[jogadorAtual].textContent = pontuacao[jogadorAtual];
        pontuacaoRodadas[jogadorAtual].textContent = dado;
    }
});

botaoPassarVez.addEventListener("click", function() {
    jogadorAtual = 1 - jogadorAtual;
    SwitchPlayer();
});

botaoNewGame.addEventListener("click", NewGame);





