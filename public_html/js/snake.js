var snake;

var context;
var screenWidth;
var screenHeight;

function gameInitialize() {
    var canvas = document.getElementById("game-screen");
    context = canvas.getContext("2d");
    
    screenWidth = window.innerWidth;
    screenHeight = window.innerHeight;
    
    canvas.Width = screenWidth;
    canvas.Height = screenHeight;
}

function gameLoop () {
    
}

function gameDraw() {
    context.fillStyle = "rgb(129, 193, 92)";
}