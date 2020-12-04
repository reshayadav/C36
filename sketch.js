
var database , gameState, playerCount;
var form , player, game;

function setup(){
    createCanvas(500,500);

    database = firebase.database();
    player = new Player();
    form = new Form();
    playerCount =0;
    gameState =0;

    form.display();
    
}

function draw(){
  
}




