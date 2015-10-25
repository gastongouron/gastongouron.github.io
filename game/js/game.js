//

// This is a solo challenge

// Your mission description:
// Create a canvas game respecting the following definition of game as electronic game that involves human interaction with a user interface to generate visual feedback on a video device such as a TV screen or computer monitor.

// Overall mission:
// Use the <canvas> tag in order to make an interactive game playable with keyboard arrows based only on pure javascript objects.

// Goals:
// Cross the road and increse win count by one. Otherwise, if you try to escape or get crushed by a car and increse death count by one.

// Characters:
// -> A slow dot moving in every direction, but wanting to reach the right of the screen. You!
// -> A very fast car coming randomly from the top to the bottom of your screen possibly crushing you!

// Objects:
// -> Canvas
// -> Background
// -> Player
// -> Cars
// -> Death counter
// -> Win counter
// -> Lines (start/arival)

// Event Functions:
// function drawWhatever()  a function per element to draw (see pseudocode)
// function drawEverything()a function to draw everyelement needed
// keysDown                 a function to listen to keyboard keys pressed and unpressed event
// update                   a function relying on keydown variable used to check which key is pressed by player
// getRandomColor           a function that generates a random color for each car

// Visual Functions (part of game loop):
// player["speed"] = 100;
// gameLoop                 a function to rArrivaler draweverything every drame
// resetCar                 a function used to reset car in a negative y index (out of screen on top) in order to make it come back down again
// resetPlayer              a function used to reset player to initial position if he is crushed by a car or touches the border of screen
//

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

// Refactored solution (initial solution below)


// Game variables
//////////////////////////////////////////////////////////////////////////


// Environment
var canvas
var ctx


// Movement
var keysDown = {};


// User
var player = {};


// Opponents
var Cars = [];
var CarOne = {};
var CarTwo = {};
var CarThree = {};
var CarFour = {};
var CarFive = {};
var CarSix = {};
var CarSeven = {};


// Counters
var numberOfDeaths = 0;
var numberOfWins = 0;

// Rendering
var gameLoop
var update
var resetCar
var resetPlayer


// Events
//////////////////////////////////////////////////////////////////////////


// Return True and false when a key is pressed
addEventListener ("keydown", function (e) {
  keysDown[e.keyCode] = true;
}, false);

// Return True and false when a key is unpressed
addEventListener ("keyup", function (e) {
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

   Cars.forEach(function(uniqueCar) {
      uniqueCar.x = 300 + (Math.random() * (canvas.width-600));
      uniqueCar.y = -1000 * Math.random();
      uniqueCar.speed = 10 * Math.random(2.5,5);
      uniqueCar.size = 32 + Math.random(10,600)*100;
      uniqueCar.width = 32;
      uniqueCar.alpha = Math.random(1,100)
      uniqueCar.color = 'Black';
   });

};


//////////////////////////////////////////////////////////////////////////


// Do player touch car?
function drawTouchCar(){

  // Evaluate coordonates of both objects, reset of touch
  Cars.forEach(function(uniqueCar) {

     if (
        player.x <= (uniqueCar.x + uniqueCar.width)
        && uniqueCar.x <= (player.x + 10)
        && player.y <= (uniqueCar.y + uniqueCar.size)
        && uniqueCar.y <= (player.y + 10)
     ){
        ++numberOfDeaths; // +1 Die
        resetPlayer();

     }
  // if player pass arival line
     if(player.x > (canvas.width - 170 )){
        resetPlayer();
        ++numberOfWins; // +1 Win
     }
  });
}


// Draw
//////////////////////////////////////////////////////////////////////////


// Objects to draw : background
function drawBackground(){

  ctx.clearRect(0,0, canvas.width, canvas.height);
    ctx.beginPath();

  //   ctx.rect( 0, 0 ,186,canvas.height);
  //   ctx.fillStyle = "grey";
  //   ctx.fill();
  //   ctx.beginPath();
  //   ctx.rect( canvas.width-186, 0 ,186,canvas.height);
  //   ctx.fill();

}


//////////////////////////////////////////////////////////////////////////


// Player and reset if he goes beyound screen boders
function drawPlayer(){

  ctx.beginPath();
  ctx.arc(player.x,player.y,5,0,2*Math.PI);
  ctx.fillStyle = 'red';
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

  Cars.forEach(function(uniqueCar) {

     ctx.beginPath();
     ctx.globalAlpha = uniqueCar.alpha;
     ctx.rect(uniqueCar.x,uniqueCar.y,32,uniqueCar.size);
     ctx.fillStyle = uniqueCar.color;
     ctx.fill();
     uniqueCar.y += uniqueCar.speed;

     if (uniqueCar.y > canvas.height){
        uniqueCar.y = -10
      uniqueCar.x = 300 + (Math.random() * (canvas.width-600));
           };

  });

}


//////////////////////////////////////////////////////////////////////////


// Death counter and syntax variations
function drawDeaths(){
  if (numberOfDeaths < 2){
  document.getElementById("deathz").innerHTML = numberOfDeaths + " death";
  }

  else {
  document.getElementById("deathz").innerHTML = numberOfDeaths + " deaths";
  }

}


//////////////////////////////////////////////////////////////////////////


// Win counter and syntax variations
function drawWins (){

if (numberOfWins < 2){
  document.getElementById("winz").innerHTML = numberOfWins + " win";
  }

else {
  document.getElementById("winz").innerHTML = numberOfWins + " wins";
  }

}


//////////////////////////////////////////////////////////////////////////


// Start line
function drawStart(){

  ctx.globalAlpha = 1;
  ctx.beginPath();
  ctx.moveTo(200,30);
  ctx.lineTo(200,canvas.height-30);
  ctx.lineWidth = 2;
  ctx.strokeStyle="black";
  ctx.stroke();

}


//////////////////////////////////////////////////////////////////////////


// Arrival line
function drawArrival(){

  ctx.moveTo(canvas.width-200,30);
  ctx.lineTo(canvas.width-200,canvas.height-30);
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

  update(3/100);
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


// Game auto-launch (onload setup)
// Will be changed in the future when levels added.
player["speed"] = 100;
Cars.push(CarOne);
Cars.push(CarTwo);
Cars.push(CarThree);
Cars.push(CarFour);
Cars.push(CarFive);
Cars.push(CarSix);
Cars.push(CarSeven);
resetCar();
resetPlayer();
gameLoop();


/*
// Initial solution


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
*/



// Reflection

// What was the most difficult part of this challenge?
// Figuring out when to stop refining the game, when to stop working on this chalenge. Also, considering wisely the environement you want to use for your game. Here, I decided to use canvas since I had a little experience with processing and I belive it's barely the same process to render a game (based o n frame animation). More over, I have always dreamed of make a canvas game before but never took the time to do it. An other difficult part was to play with the elements in order to establish a consciencus between playability and difficulty, making the game both fun and challenging for the user. More cars added in refactored solution. I will take time to do it more elegantly in the future by creating a function to generate cars and a function to push generated cars in the car array.

// What did you learn about creating objects and functions that interact with one another?
// Functions can be called into other functions, and it offers a new and immense score of possibilities. Objects can be created on purpose and I believe my game can be improved in many ways. On my refactored solution, if you compare, you can see I found a new approach to add more cars based on an array of cars instead of car objects, compare code for more infos.

// Did you learn about any new built-in methods you could use in your refactored solution? If so, what were they and how do they work?
// -> ctx.methods are all methods related to the drawing event on cavas. you can draw a rectable and fill it with a color, then all recatngles will have this fill color unless you change it by declaring an other fill color for example.
// ->.requestAnimationFrame(gameLoop) and the interesting is the loop functions which uses it when running!
// ->.forEach that I used in order to create more cars objects and track each car object coordinates.
// ->.addEventListner to get the information of key pressed or unpressed by the user
// ->window.innerWidth used to get size of window element on load and assign it to to canvas.width variable
// ->window.innerHeight used to get size of window element on load and assign it to to canvas.height variable
// ->Math.random(x,y) used to create randoms between range x and y with an output between 0 and 1.
// -> Operators such as ++ to increment a value by one and the logical operator && (and) like: (x < 10 && y > 1) is true
// I learn more about global mecanisms than about function properly, but this exercice is very hard to consider over for me and I'd like to continue this game in order to create my cars more elegantly

// How can you access and manipulate properties of objects?
// In order to manipulate the properties of an object you have to call this object then his property and change its value, for example:
// var object = {}
// object["property"] = "value"
// console.log(object)
// -> { property: 'value' }

// Notes about refactored solution:
// Added HTML elements for javascript fnction out such as scores using getElementByID
// Added a car array to work with car objects independently and add cars.

// Notes for the future:
// Add levels, incrementing the speed and number of cars.
// Add sounds on events
// Fix some randome values making some vehicules too fasts on some games
// Add dynamic car creation with a function
// Add visual events (all become red when the player get crushed?)
// Use more js to add HTML elements to interact with the game (title, play/pause..)
// Think about memory usage, rendering and FPS.