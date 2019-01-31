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

        /*Confere se o objeto criado a partir deste construtor
        colide com o objeto construído pela classe Player */
        checkCollision(this, player);

        if(this.x > 505) {
            this.x = -50;
        }
        
    }

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

}


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
            this.y -= 85;
            //console.log(this.y)
        } else if (tecla === "right" && this.x < 402){
            this.x += 101;
           //console.log(this.x)
        } else if (tecla === "down" && this.y < 400){
            this.y += 85;
            //console.log(this.y)
        } else {
            return;
        }
  
    }

    
    
}

var pontos = 0;

function checkCollision(enemy, hero) {
        if(enemy.x + 102 > hero.x &&
            enemy.x < hero.x + 101 &&
            enemy.y < hero.y + 85 &&
            enemy.y + 86 > hero.y){
                pontos += 50;
                
            
        }
    } 


// Represente seus objetos como instâncias.
// Coloque todos os objetos inimgos numa array allEnemies
// Coloque o objeto do jogador numa variável chamada jogador.
var allEnemies = [];

//For loop para criar as instâncias dos inimigos e inseri-los na allEnemies
for(var i = 0; i < 4; i++) {
    var velocidade = 101 + Math.floor(Math.random() * 400);
    var coordY = [60, 140, 220];
    var posicaoY = coordY[Math.floor(Math.random() * 3)]
    allEnemies.push(new Enemy(0, posicaoY, velocidade));
}


//Variáveis em array para a posição X do player
var posicaoX = [0, 101, 202, 303, 404];

// Determina de maneira randômica a posição X do player 
var player_x = posicaoX[Math.floor(Math.random() * 4)];
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


