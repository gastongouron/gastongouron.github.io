// Design Basic Game Solo Challenge

// This is a solo challenge

// Your mission description:
// Create a canvas game respecting the following definition of game as electronic game that involves human interaction with a user interface to generate visual feedback on a video device such as a TV screen or computer monitor.

// Overall mission:
// Use the <canvas> tag in order to make an interactive game playable with keyboard arrows based only on pure javascript.

// Goals:
// Cross the road and increse win count by one or get crushed by a car and increse death count by one.

// Characters:
// -> A slow dot moving in every direction, but wanting to reach the right of the screen. You!
// -> A very fast car coming randomly from the top to the bottom of your screen possibly crushing you!

// Objects:
// -> A canvas
// -> A background
// -> A Player
// -> A Car(s)
// -> A death counter
// -> A win counter
// -> Lines (start/arival)

// Event Functions:
// function drawWhatever()  a function per element to draw (see pseudocode)
// function drawEverything()a function to draw everyelement needed
// keysDown                 a function to listen to keyboard keys pressed and unpressed event
// update                   a function relying on keydown variable used to check which key is pressed by player

// Visual Functions (part of game loop):
// player["speed"] = 100;
// gameLoop                 a function to rArrivaler draweverything every drame
// resetCar                 a function used to reset car in a negative y index (out of screen on top) in order to make it come back down again
// resetPlayer              a function used to reset player to initial position if he is crushed by a car or touches the border of screen

// Pseudocode
// Note: The basic idea to animate elements of the game is to clear the canvas evey frame and draw a new frame with the required elements on new positions.
// In order to do this, we have to create objects and functions that will interact with those obejcts
// Define game variables
// Create event variables for key inputs
// Create reset functions for car
// Create reset functions for player
// Create an function for that modify player position if an event occurs
// Create drawing functions for:
// -> Background();
// -> Start
// -> Arrival
// -> Player
// -> Car
// -> TouchCar
// -> Wins
// -> Deaths
// Call all these functions in a render function
// Create a canvas context and get element by id Canvas to render the game in HTML environement
// Create a loop requesting animation frames contained in itself to call permanently items of the draw function
// Render it to canvas with player speed, reset cars reset player and game loop calls.


// Refactored Code (initial solution below reflection)

// Variables
//////////////////////////////////////////////////////////////////////////


// Environment
var canvas
var ctx

// Movement
var keysDown = {};

// User
var player = {};
var Car = {}
var numberOfDeaths = 0;
var numberOfWins = 0;

// RArrivalering
var gameLoop
var update
var resetCar
var resetPlayer


// Events
//////////////////////////////////////////////////////////////////////////


// Return True and false when a key is pressed
addEventListener("keydown", function (e) {
  keysDown[e.keyCode] = true;
}, false);

// Return True and false when a key is unpressed
addEventListener("keyup", function (e) {
  delete keysDown[e.keyCode];
}, false);


//////////////////////////////////////////////////////////////////////////


// Change player speed when key arrows are pressed
var update = function (modifier) {

  if (38 in keysDown) {
    player.y -= player.speed * modifier;
  }

  if (40 in keysDown) {
    player.y += player.speed * modifier;
  }

  if (37 in keysDown) {
    player.x -= player.speed * modifier;
  }

  if (39 in keysDown) {
    player.x += player.speed * modifier;
  }

};


//////////////////////////////////////////////////////////////////////////


// Drop player at its initial position
var resetPlayer = function () {

  player.x = 100;
  player.y = canvas.height /2 ;

};



//////////////////////////////////////////////////////////////////////////


// Drop a car somewhere in the top of the screen
var resetCar = function () {

  Car.x = 300 + (Math.random() * (canvas.width-600));
  Car.y = -10

};



//////////////////////////////////////////////////////////////////////////


// Do player touch car?
function drawTouchCar(){

  // Evaluate coordonates of both objects, reset of touch
  if (
    player.x <= (Car.x + 32)
    && Car.x <= (player.x + 10)
    && player.y <= (Car.y + 30) &&
    Car.y <= (player.y + 10)
    ){
    ++numberOfDeaths; // +1 Die
    resetPlayer();
    }
  // if player pass arival line
  if(player.x > (canvas.width - 170 )){
    resetPlayer();
    ++numberOfWins; // +1 Win
    }
}


// Draw
//////////////////////////////////////////////////////////////////////////


// Objects to draw : background
function drawBackground(){

  ctx.clearRect(0,0, canvas.width, canvas.height);

}


//////////////////////////////////////////////////////////////////////////


// Player and reset if he goes beyound screen boders
function drawPlayer(){

  ctx.beginPath();
  ctx.arc(player.x,player.y,5,0,2*Math.PI);
  ctx.fillStyle = 'white';
  ctx.fill();

  if (player.x < 0){
    ++numberOfDeaths;
    resetPlayer();
  }

  if (player.y < 0){
    ++numberOfDeaths;
    resetPlayer();
  }

  if (player.y >= canvas.height){
    resetPlayer();
    ++numberOfDeaths;
  }

}


//////////////////////////////////////////////////////////////////////////


// car and reset car when car goes beyound screen height
function drawCar(){

  ctx.beginPath();
  ctx.rect(Car.x,Car.y,32,32);
  ctx.fillStyle = 'white';
  ctx.fill();
  Car.y += Math.random() * 80

  if (Car.y > canvas.height){
    resetCar();
  };

}


//////////////////////////////////////////////////////////////////////////


// Death counter and syntax variations
function drawDeaths(){

  ctx.font = "30px Helvetica";
  ctx.textAlign = "left";
  ctx.textBaseline = "top";
  ctx.fillText("Rough", 33, 30);
  ctx.fillText("Crossing", 33, 64);
  ctx.fillText("←↑↓→", 33 , 98);

  if (numberOfDeaths < 2){
  ctx.fillText(numberOfDeaths + " Death", canvas.width-160, 30);
  }

  else {
  ctx.fillText(numberOfDeaths + " Deaths", canvas.width-160, 30);
  }

}


//////////////////////////////////////////////////////////////////////////


// Win counter and syntax variations
function drawWins (){

if (numberOfWins < 2){
  ctx.fillText(numberOfWins + " Win", canvas.width-160, 64);
  }

else {
  ctx.fillText(numberOfWins + " Wins", canvas.width-160, 64);
  }

}


//////////////////////////////////////////////////////////////////////////


// Start line
function drawStart(){

  ctx.beginPath();
  ctx.moveTo(200,0);
  ctx.lineTo(200,canvas.height);
  ctx.lineWidth = 4;
  ctx.strokeStyle="white";
  ctx.stroke();

}


//////////////////////////////////////////////////////////////////////////


// Arrival line
function drawArrival(){

  ctx.moveTo(canvas.width-200,0);
  ctx.lineTo(canvas.width-200,canvas.height);
  ctx.stroke();

}


// Render functions
//////////////////////////////////////////////////////////////////////////


// Draw all elements needed
function drawEverything (){

  drawTouchCar();
  drawBackground();
  drawStart();
  drawArrival();
  drawPlayer();
  drawCar();
  drawWins();
  drawDeaths();
  drawWins();

};


//////////////////////////////////////////////////////////////////////////


// Game loop
var gameLoop = function () {

  update(Math.PI/100);
  drawEverything();
  requestAnimationFrame(gameLoop);

};


//////////////////////////////////////////////////////////////////////////


// Canvas setup
canvas = document.getElementById('canvas'),
ctx = canvas.getContext("2d");

canvas.width  = window.innerWidth;
canvas.height = window.innerHeight;


//////////////////////////////////////////////////////////////////////////


// Game auto)launch (onload setup)
// Will be changed in the future when levels added.
player["speed"] = 100;
resetCar();
resetPlayer();
gameLoop();



// Reflection
// What was the most difficult part of this challenge?
// Making a good attack plan about the environement you want to use for your game. I decided to use canvas since I had a little experience with processing and I belive it's not very different. The difficult part was to play with the elements in order to establish a consciencus between playability and difficulty, making the game both fun and challenging for the user. I'm working on adding more car, but slower at the moment.

// What did you learn about creating objects and functions that interact with one another?
// Functions can be called into other functions, and it offers a new and immense universe of possibilities. Objects can be created on purpose and I believe my game can be improved by creating dynamicly new car objects with random x/y properties but I can't find a working solutiosn with the approaches I tried so I'm submitting this version on the game for a v.1.

// Did you learn about any new built-in methods you could use in your refactored solution? If so, what were they and how do they work?
// All ctx. related methods used to draw objects on canvas were new to me so I'd sad I learn these ones. But the most interesting is the loop functions which uses requestAnimationFrame(gameLoop) when running! I learn more about mecanisms than about function properly, but this exercice is very hard to consider over for me and I'd like to continue this game (what I will probably do saturday/sunday)

// How can you access and manipulate properties of objects?
// In order to manipulate the properties of an object you have to call this object then his property and change its value:
// var object = {}
// object["property"] = "value"
// console.log(object)
// { property: 'value' }


/*
// Initial Code:
// Canvas
canvas = document.getElementById('canvas'),
ctx = canvas.getContext("2d");
canvas.width  = window.innerWidth;
canvas.height = window.innerHeight;

// game objects
// Game objects
var player = {};
player["speed"] = 600;

var Cars = []
var numberOfDeaths = 0;
var numberOfWins = 0;

// Events
var resetPlayer = function () {
  player.x = 100;
  player.y = canvas.height /2 ;
};

var resetCar = function () {
  // Throw the Car somewhere on the screen randomly
  Car.x = 300 + (Math.random() * (canvas.width-600));
  Car.y = -10
};

resetCar();


function drawTouchCar(){
  // Die
if (
  player.x <= (Car.x + 32) && Car.x <= (player.x + 10) && player.y <= (Car.y + 30) && Car.y <= (player.y + 10)
  ) {
    ++numberOfDeaths;
    resetPlayer();
  }

 // Win
if(
  player.x > (canvas.width - 170 )
  ){
    resetPlayer();
    ++numberOfWins;
  }
}

// Event listenr for controls
var keysDown = {};
addEventListener("keydown", function (e) {
  keysDown[e.keyCode] = true;
}, false);
addEventListener("keyup", function (e) {
  delete keysDown[e.keyCode];
}, false);

// Update game objects
var update = function (modifier) {
  if (38 in keysDown) {
    player.y -= player.speed * modifier;
  }
  if (40 in keysDown) {
    player.y += player.speed * modifier;
  }
  if (37 in keysDown) {
    player.x -= player.speed * modifier;
  }
  if (39 in keysDown) {
    player.x += player.speed * modifier;
  }
};

// elements to draw
function drawBackground(){
ctx.clearRect(0,0, canvas.width, canvas.height);
}

function drawPlayer(){
ctx.beginPath();
ctx.arc(player.x,player.y,5,0,2*Math.PI);
ctx.fillStyle = 'white';
ctx.fill();
if (player.x < 0){
  ++numberOfDeaths;
  resetPlayer();
}
if (player.y < 0){
  ++numberOfDeaths;
  resetPlayer();
}
if (player.y >= canvas.height){
  resetPlayer();
  ++numberOfDeaths;
}
}

function drawCar(){
ctx.beginPath();
ctx.rect(Car.x,Car.y,32,32);
ctx.fillStyle = 'white';
ctx.fill();
Car.y += Math.random() * 20
if (Car.y > canvas.height){
  resetCar();
};
}

function drawGameName(){
ctx.fillStyle = "rgb(255, 255, 255)";
ctx.font = "18px Helvetica";
ctx.textAlign = "left";
ctx.textBaseline = "top";
ctx.fillText("THE ROAD", 50, 50);
}

function drawDeaths(){
ctx.fillStyle = "rgb(255, 255, 255)";
ctx.font = "18px Helvetica";
ctx.textAlign = "left";
ctx.textBaseline = "top";
ctx.fillText("Deaths: " + numberOfDeaths, 50, 80);
}

function drawWins (){
ctx.fillStyle = "rgb(255, 255, 255)";
ctx.font = "18px Helvetica";
ctx.textAlign = "left";
ctx.textBaseline = "top";
ctx.fillText("Wins: " + numberOfWins, 50, 110);
}

function drawStart(){
ctx.beginPath();
ctx.moveTo(200,0);
ctx.lineTo(200,canvas.height);
ctx.stroke();
ctx.strokeStyle="#FF5A5A";
}

function drawArrival(){
ctx.beginPath();
ctx.moveTo(canvas.width-200,0);
ctx.lineTo(canvas.width-200,canvas.height);
ctx.stroke();
ctx.strokeStyle="#FF5A5A";
}

function drawEverything (){

drawTouchCar();
drawBackground();
drawStart();
drawArrival();
drawPlayer();
drawCar();
drawWins();
drawDeaths();
drawGameName();
drawWins();
};

var gameLoop = function () {
update(1/100);
drawEverything();
requestAnimationFrame(gameLoop);
};

resetPlayer();
gameLoop();
*/

