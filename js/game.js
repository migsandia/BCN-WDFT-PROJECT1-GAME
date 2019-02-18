'use strict'
class Game{
  constructor(canvas){
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.player;
    this.trails=[];
    this.numTrails=0;
    this.isGameOver = false;
  };

  startLoop() {
      
    this.player= new Player (this.canvas,4);
    this.trails=[];
    
    const loop = () => {
      
      let x= this.player.x;
      let y= this.player.y;
      let dx= this.player.directionX;
      let dy= this.player.directionY;
      this.trails.push(new Trail(this.canvas,x,y,dx,dy));
      this.checkAllCollisions();
      this.updateCanvas();
      this.clearCanvas();
      this.drawCanvas();

      if(!this.isGameOver) {
        window.requestAnimationFrame(loop);
      };
     
    }

    window.requestAnimationFrame(loop);
  }

  updateCanvas(){
    this.player.update();
    //this.trails[this.numTrails].update(this.player.x,this.player.y);
    this.trails.forEach((trail1)=>{
      trail1.update(this.player.x,this.player.y);
    });
  };

  clearCanvas(){
    this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
  };

  drawCanvas(){
    this.ctx.fillStyle = '#0B141F';
    this.ctx.fillRect(0, 0,this.canvas.width, this.canvas.height);
    this.player.draw();
    this.trails.forEach((trail1)=>{
      trail1.draw();
    });
  };

  checkAllCollisions(){
    if(this.player.checkScreen() === true){
      this.isGameOver = true;
      this.onGameOver();
    };
    
    this.trails.forEach((trail) => {
      if(this.player.checkCollisionEnemy(trail)){
        console.log("has chocado");
        //this.isGameOver = true;
        //this.onGameOver();
        //this.startLoop();
        //this.player.loseLive();
        //this.trails.splice('index', 1);
        /*if(this.player.lives===0){
            this.onGameOver();
        }*/
      //enemy.draw();
      }
    });
  };
  gameOverCallback(callback) {
    this.onGameOver= callback;
  };
};