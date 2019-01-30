// Inimigos que nosso jogador deve evitar

class Enemy  {
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


class Player {
    constructor() {
        this.sprite = "images/char-boy.png";
        this.x = 200;
        this.y = 400;
    }

    update() {
        
    }

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

    handleInput(tecla) {
        this.tecla = tecla;
        if(tecla === "left" && this.x > 2) {
            this.x -=101;
            //console.log(this.x)
        } else if (tecla === "up" && this.y > -10){
            this.y -= 83;
            //console.log(this.y)
        } else if (tecla === "right" && this.x < 402){
            this.x += 101;
           //console.log(this.x)
        } else if (tecla === "down" && this.y < 400){
            this.y += 83;
            //console.log(this.y)
        } else {
            return;
        }

        checkCollision();
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
var enemy_y = posicaoY[Math.floor(Math.random() * 2)];

var enemy_a = new Enemy(0, 50, velocidade);
var enemy_b = new Enemy(0, 130, velocidade);
var enemy_c = new Enemy(0, 210, velocidade);

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
