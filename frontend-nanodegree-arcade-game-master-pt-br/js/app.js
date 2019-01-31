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
        checkCollision(this, player);

        if(this.x > 505) {
            this.x = -50;
        }
        
    }

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

}
var pontos = 0;

//Classe para construir o objeto Player
class Player {
    constructor(x, y = 400) {
        this.sprite = "images/char-boy.png";
        this.x = x;
        this.y = y;
    }

    update() {
    }

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

    // Lógica da movimentação do player pelo canvas
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
  
    }

    
    
}


function checkCollision(charA, charB) {
        if(charA.x + 101 > charB.x &&
            charA.x < charB.x + 101 &&
            charA.y < charB.y + 83 &&
            charA.y + 83 > charB.y){
            console.log("Bateu!");
            return;
        }
    } 



// Represente seus objetos como instâncias.
// Coloque todos os objetos inimgos numa array allEnemies
// Coloque o objeto do jogador numa variável chamada jogador.

var allEnemies = [];

/* var enemy_a = new Enemy(0, 50, velocidade);
var enemy_b = new Enemy(0, 130, velocidade);
var enemy_c = new Enemy(0, 210, velocidade);

allEnemies.push(enemy_a);
allEnemies.push(enemy_b);
allEnemies.push(enemy_c);  */

for(var i = 0; i < 3; i++) {
    var velocidade = 101 + Math.floor(Math.random() * 400);
    var coordY = [50, 130, 210];
    var posicaoY = coordY[Math.floor(Math.random() * 3)]
    allEnemies.push(new Enemy(0, posicaoY, velocidade));
}


//Variáveis em array para a posição X do player
var posicaoX = [0, 101, 202, 303, 404];

// Determina de maneira randômica a posição X do player 
var player_x = posicaoX[Math.floor(Math.random() * 4)];

//var enemy_y = posicaoY[Math.floor(Math.random() * 2)];
var player = new Player(player_x);

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


