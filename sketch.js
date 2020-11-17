var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var index

var form, player, game;

var runner1, runner2, runner3, runner4, runners

var track;

function preload()  {
  track = loadImage("../images/track.jpg")
}

function setup() {
  createCanvas(400, 400);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  if(playerCount === 4)  {
    game.update(1);
  }
  if(gameState === 1)  {
    clear();
    game.play();
  }
  if(gameState === 2)  {
    game.end();
  }
}