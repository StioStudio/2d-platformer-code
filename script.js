/** @type {HTMLCanvasElement} */
var x = 0
var y = 200
var yvel = -5
var xvel = 5
const ThreeD_render = document.getElementById("canvas");
const ctx = ThreeD_render.getContext("2d");
ThreeD_render.width = window.innerWidth - 40
ThreeD_render.height = window.innerHeight - 200
var screenWidth = ThreeD_render.width;
var screenHeight = ThreeD_render.height;
ctx.fillStyle = "#f000f0";



function init() {
    return setInterval(draw, 10);
}
setInterval(() => {
    y += yvel;
    x += xvel;
    yvel += 0.1
    xvel *= 0.95
    if (y >= screenHeight - 40){
        y = screenHeight - 40
        yvel = 0
    }
    if (y <= 0){
        y = 0
        yvel = 0
    }
    if (x <= 0) {
        x = 0
        xvel = 0
    }
    if (x >= screenWidth - 40){
        x = screenWidth - 40
        xvel = 0
    }

}, 10);

setInterval(() => {
    ThreeD_render.width = window.innerWidth - 40
    ThreeD_render.height = window.innerHeight - 200
    screenWidth = ThreeD_render.width;
    screenHeight = ThreeD_render.height;
    ctx.fillStyle = "#f000f0";
    
    document.getElementById("widthScreen").innerHTML = screenWidth;

}, 1000);


function doKeyDown(evt){
    switch (evt.keyCode) {
        case 38:
            if (y >= screenHeight - 40) {
                yvel = -7;
            }
            break;
        case 37: 
            xvel -= 1;
            break;
        case 39:  
            xvel += 1;
            break;
    }
}


function draw() {
    ctx.clearRect(0, 0, screenWidth, screenHeight);
    ctx.fillRect(x, y, 40, 40);
}
init();

window.addEventListener('keydown',doKeyDown,true);