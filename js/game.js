'use strict'
class Game{
  constructor(canvas){
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.player;
    this.trails=[];
    this.numTrails=0;
};

startLoop() {
    
  this.player= new Player (this.canvas,4);
  
  //console.log(this.player);
  const loop = () => {
    console.log(this.trails);
    let x= this.player.x;
    let y= this.player.y;
    this.trails.push(new Trail(this.canvas,x,y));
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
  this.trails[this.numTrails].update(this.player.x,this.player.y);
  //this.trails.forEach((trail1)=>{
    //trail1.update();
  //});
};

clearCanvas(){

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
  //this.player.checkScreen();
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