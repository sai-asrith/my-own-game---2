var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;

var track, car1_img, car2_img, car3_img, car4_img;

var flag1 , flag2;
function preload(){
  runner1 = loadAnimation("runner1.png" , "runner2.png");
  runner2 = loadAnimation("runner3_prev_ui.png" , "runner4_prev_ui.png");
  track  = loadImage("track.jpg");
  flag1Img = loadImage("flags1.png");
  flag2 = loadImage("flags2.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
  drawSprites();
}

