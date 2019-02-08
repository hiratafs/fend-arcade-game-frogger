
// Inimigos que nosso jogador deve evitar
function Enemy () {
        var coordY = [60, 140, 220];
        this.sprite = "images/enemy-bug.png";
        this.y = coordY[Math.floor(Math.random() * 3)];
        this.x = 0;           
        this.velocidade = Math.floor(Math.random() * 50 + 100);
}

Enemy.prototype.update = function (dt) {
        this.x += this.velocidade * dt;

        if(this.x > 505) {
            this.x = -50;
        }

        /*Confere se o objeto criado a partir deste construtor
        colide com o objeto construído pela classe Player */
        this.checkCollision(this, player);
        
}

//Método que checa as colisões entre os personagens
Enemy.prototype.checkCollision = function(enemy, hero) {
    if(enemy.x + 70 > hero.x &&
        enemy.x < hero.x + 70 &&
        enemy.y < hero.y + 60 &&
        enemy.y + 60 > hero.y) {
        this.resetGame(hero, allEnemies);
    }
    
}



//Reseta o game 
Enemy.prototype.resetGame = function(hero, arrayofEnemies) {
        hero.y = 400;
        hero.x = 200;
    for(let enemy of arrayofEnemies) {
        enemy["x"] = 0;
        enemy["y"] = this.y;
        enemy["velocidade"] = this.velocidade;
    }
}


Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}


//Classe para construir o objeto Player
class Player {
    constructor(x, y = 400) {
        this.sprite = "images/char-boy.png";
        this.x = x;
        this.y = y;
        this.points = 50;
    }

    update() {
        if(this.y <= -5) {
            this.y = 400;
            this.updateGame(allEnemies);
        }
    }

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

    updateGame(arrayofEnemies){
        var coordY = [60, 140, 220];
        for(let enemy of arrayofEnemies) {
            enemy["x"] = 0;
            enemy["y"] = coordY[Math.floor(Math.random() * 3)];
            enemy["velocidade"] += 10;
        }
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



// Represente seus objetos como instâncias.
// Coloque todos os objetos inimgos numa array allEnemies
// Coloque o objeto do jogador numa variável chamada jogador.
var allEnemies = [];

//For loop para criar as instâncias dos inimigos e inseri-los na allEnemies
for(var i = 0; i < 4; i++) {
    allEnemies.push(new Enemy());
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


