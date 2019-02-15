'use strict'
class Game{
  constructor(canvas){
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.player;
    this.trail;

  };

startLoop() {
    
  this.player= new Player (this.canvas,4);
  //console.log(this.player);
  const loop = () => {
    
    
      
      //this.enemies.push(new Enemy(this.canvas,y));
    
    //this.checkAllCollisions();
    this.updateCanvas();
    this.clearCanvas();
    this.drawCanvas();

    window.requestAnimationFrame(loop);
  }

  window.requestAnimationFrame(loop);
}

updateCanvas(){
  this.player.update();
  //this.trail.update();
  /*this.enemies.forEach((enemy)=>{
    enemy.update();

  });*/
};

clearCanvas(){
  //this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
};

drawCanvas(){
  this.ctx.fillStyle = '#0B141F';
  this.ctx.fillRect(0, 0,this.canvas.width, this.canvas.height);
  this.player.draw();

  /*this.enemies.forEach((enemy)=>{
    enemy.draw();

  });*/
};

checkAllCollisions(){
  this.player.checkScreen();
  /*this.enemies.forEach((enemy) => {
    if(this.player.checkCollisionEnemy(enemy)){
      this.player.loseLive();
      this.enemies.splice('index', 1);
      if(this.player.lives===0){
          this.onGameOver();
      }
    //enemy.draw();
    }
  });*/
};
gameOverCallback(callback) {
  this.onGameOver= callback;
};
};