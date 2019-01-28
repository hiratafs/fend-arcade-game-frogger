// Inimigos que nosso jogador deve evitar
class Enemy {
    constructor(x,y) {
        this.sprite = "images/enemy-bug.png";
        this.width = 101;
        this.height = 171;
        this.x = x;
        this.y = y;
    }

    update(dt) {
        
    }

    render() {

        var posicaoY = [50, 140, 220];
        this.x = 0
        this.y = 220;
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}


/* // Atualize a posição do inimigo, método exigido pelo jogo
// Parâmetro: dt, um delta de tempo entre ticks
Enemy.prototype.update = function(dt) {
    // Você deve multiplicar qualquer movimento pelo parâmetro
    // dt, o que garantirá que o jogo rode na mesma velocidade
    // em qualquer computador.
};

*/

// Agora, escreva sua própria classe de jogador
// Esta classe exige um método update(), 
// um render() e um handleInput().

class Player {
    constructor(x, y) {
        this.jogador = "images/char-boy.png";
        this.width = 101;
        this.height = 171;
    }

    update(dt) {
        
    }

    render() {
        this.x = 200;
        this.y = 400;
        ctx.drawImage(Resources.get(this.jogador), this.x, this.y);
    }

    handleInput(tecla) {
        if(tecla === "left") {
            this.x -=101;
            console.log(tecla)
        } else if (tecla === "up"){
            this.y -= 171;
            console.log(tecla)
        } else if (tecla === "right"){
            this.x += 101;
            console.log(tecla)
        } else if (tecla === "down"){
            this.y += 171;
            console.log(tecla)
        } else {
            return;
        }
    }
}



// Represente seus objetos como instâncias.
// Coloque todos os objetos inimgos numa array allEnemies
// Coloque o objeto do jogador numa variável chamada jogador.
var player = new Player();
var allEnemies = [];

var enemy_a = new Enemy();
var enemy_b = new Enemy();
var enemy_c = new Enemy();

allEnemies.push(enemy_a);
allEnemies.push(enemy_b);
allEnemies.push(enemy_c);

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
