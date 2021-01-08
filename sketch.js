var database;
var form, player, game;
var playerCount = 0;
var gameState = 0;

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);
  game = new Game();
  game.getGameState();
  game.start();
}

function draw(){
  background("green");
  
    drawSprites();
  
}
