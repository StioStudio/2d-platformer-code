/** @type {HTMLCanvasElement} */
import{
    Trigger
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";
var x = 0
var y = 200
var yvel = -5
var xvel = 5
const ThreeD_render = document.getElementById("canvas");
const ctx = ThreeD_render.getContext("2d");
ThreeD_render.width = window.innerWidth - 40
ThreeD_render.height = window.innerHeight - 20
const screenWidth = ThreeD_render.width;
const screenHeight = ThreeD_render.height;
ctx.fillStyle = "#f000f0";



function init() {
    return setInterval(draw, 10);
}
setInterval(() => {
    y += yvel;
    x += xvel;
    yvel += 0.1
    xvel *= 0.95
    if (y >= 500){
        y = 500
    }
    
}, 10);


function doKeyDown(evt){
    switch (evt.keyCode) {
        case 38:
            if (y >= 500) {
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