// Setup canvas
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

canvas.width = 420;
canvas.height = 560;
console.log(ctx);
ctx.fillStyle = 'red';

// Blocks
class Block {
    constructor(context) {
        //this.context = context;
        this.width = 60;
        this.height = 60;
        this.x = canvas.width / 2 - this.width / 2;
        this.y = this.height / 2;
        this.speedX = 0;
        this.speedY = 1;
        this.init(context);
    }
    init(context) {
        //spawn a rectangle at the top of the canvas
        context.fillRect(this.x, this.y, this.width, this.height);
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.y + this.height == canvas.height) {
            this.speedY = 0;
        }
    }
    draw(context) {
        context.fillRect(this.x, this.y, this.width, this.height);
    }
}

class Game {

}

const block = new Block(ctx);

// Animation loop
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    block.update();
    block.draw(ctx);
    requestAnimationFrame(animate);
}

animate();