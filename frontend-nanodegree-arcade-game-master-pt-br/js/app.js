// Inimigos que nosso jogador deve evitar
class Enemy {
    constructor(x, y, velocidade) {
        this.sprite = "images/enemy-bug.png";
        this.y = y;
        this.x = x;
        this.velocidade = velocidade;
        
    }

    update(dt) {
        this.x += velocidade * dt;
        if(this.x > 505) {
            this.x = -50;
        }
    }

    render() {
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
    constructor() {
        this.jogador = "images/char-boy.png";
        this.width = 101;
        this.height = 171;
        this.x = 200;
        this.y = 400;
    }

    update() {
    }

    render() {
        ctx.drawImage(Resources.get(this.jogador), this.x, this.y);
    }

    handleInput(tecla) {
        this.tecla = tecla;
        if(tecla === "left") {
            this.x -=101;
            //console.log(this.x)
        } else if (tecla === "up"){
            this.y -= 82;
            //console.log(this.y)
        } else if (tecla === "right"){
            this.x += 101;
           //console.log(this.x)
        } else if (tecla === "down"){
            this.y += 82;
            //console.log(this.y)
        } else {
            return;
        }

        //Evita que o personagem ultrapasse as bordas do canvas na horizontal
        if(this.y < -10 || this.y > 400) {
            this.y = 400;
        }

        // Evita que o personagem ultrapasse as bordas do canvas na horizontal
        if(this.x < -2) {
            this.x = 0;
        } else if (this.x > 402){
            this.x = 402;
        }


    }


}

function checkCollision() {
}

// Represente seus objetos como instâncias.
// Coloque todos os objetos inimgos numa array allEnemies
// Coloque o objeto do jogador numa variável chamada jogador.
var player = new Player();
var allEnemies = [];
var velocidade = 100 + Math.floor(Math.random() * 400)
var posicaoY = [50, 130, 210];
var enemy_y = posicaoY[Math.floor(Math.random() * 3)];

var enemy_a = new Enemy(0, enemy_y, velocidade);
var enemy_b = new Enemy(0, enemy_y, velocidade);
var enemy_c = new Enemy(0, enemy_y, velocidade);

allEnemies.push(enemy_a);
allEnemies.push(enemy_b);
allEnemies.push(enemy_c)


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
