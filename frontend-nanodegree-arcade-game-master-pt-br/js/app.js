// Inimigos que nosso jogador deve evitar
class Enemy {
    constructor() {
        this.sprite = "images/enemy-bug.png";
        this.width = 101;
        this.height = 171;
    }

    update(dt) {

    }

    render() {
        this.x = 100;
        this.y = 200;
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}

/* var Enemy = function() {
    // As variáveis aplicadas a nossas instâncias entram aqui.
    // Fornecemos uma a você para que possa começcar.

    // A imagem/sprite de nossos inimigos, isso usa um
    // ajudante que é fornecido para carregar imagens
    // com facilidade.
    this.sprite = "images/enemy-bug.png";
    this.width = 101;
    this.height = 171;

}; */

/* // Atualize a posição do inimigo, método exigido pelo jogo
// Parâmetro: dt, um delta de tempo entre ticks
Enemy.prototype.update = function(dt) {
    // Você deve multiplicar qualquer movimento pelo parâmetro
    // dt, o que garantirá que o jogo rode na mesma velocidade
    // em qualquer computador.
};

// Desenhe o inimigo na tela, método exigido pelo jogo
Enemy.prototype.render = function() {
    this.x = 100;
    this.y = 200;
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}; */

// Agora, escreva sua própria classe de jogador
// Esta classe exige um método update(), 
// um render() e um handleInput().

class Player {
    constructor() {
        this.jogador = "images/char-boy.png";
        this.width = 101;
        this.height = 171;
    }

    update(dt) {

    }

    render() {
        this.x = 400;
        this.y = 400;
        ctx.drawImage(Resources.get(this.jogador), this.x, this.y);
    }

    handleInput() {
        if(keycode === "left"){

        } else if (keycode === "up") {

        } else if (keycode === "right"){

        } else {

        }
    }
}



// Represente seus objetos como instâncias.
// Coloque todos os objetos inimgos numa array allEnemies
// Coloque o objeto do jogador numa variável chamada jogador.
var player = new Player();
var allEnemies = [];


// Isto reconhece cliques em teclas e envia as chaves para seu
// jogador. método handleInput(). Não é preciso mudar nada.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
