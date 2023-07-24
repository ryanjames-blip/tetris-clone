// Blocks
class Block {
    constructor(game) {
        this.game = game;
        this.width = 60;
        this.height = 60;
        this.x = this.game.canvas.width / 2 - this.width / 2;
        this.y = this.height / 2;
        this.speedX = 0;
        this.speedY = 1;
    }
    init(context) {
        //spawn a rectangle at the top of the canvas
        context.fillRect(this.x, this.y, this.width, this.height);
    }
    update(canvas) {
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
    constructor(canvas) {
        this.canvas = canvas;
        this.width = this.canvas.width;
        this.height = this.canvas.height; 
        this.block = new Block(this);
    }
    render(context) {
        console.log(this);
        this.block.init(context);
        this.block.draw(context);
    }


}

window.addEventListener('load', function() {
    // Setup canvas
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 420;
    canvas.height = 560;
    console.log(ctx);
    ctx.fillStyle = 'red';

    const game = new Game(canvas);
    game.render(ctx);
    
    
    
    // Animation loop
    /*
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        block.update(canvas);
        block.draw(ctx);
        requestAnimationFrame(animate);
    }
    */
    //animate();

});