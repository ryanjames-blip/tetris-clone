// Setup canvas
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

canvas.width = 500;
canvas.height = 800;

let score = 0;
let gameFrame = 0;

// Arrow keys
addEventListener('keydown', moveBlock);

// Blocks
class Block {
    constructor() {
        this.x = canvas.width / 2;
        this.y = canvas.height / 2;
        this.radius = 50;
        this.angle = 0;
        this.frameX = 0;
        this.frameY = 0;
        this.spriteWidth = 498;
        this.spriteHeight = 327;
    }
    update() {
        
    }
}

function moveBlock(event) {
    console.log(event.code);
}

// Animation loop

