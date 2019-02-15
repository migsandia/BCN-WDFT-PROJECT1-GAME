'use strict'
class Player{
  constructor(canvas,lives){
    
    this.size=40;
    this.canvas=canvas;
    this.ctx= this.canvas.getContext('2d');
    this.x = 0 + this.size/2;
    this.y = 0 + this.size/2;
    this.speed = 1;
    this.directionX=1;
    this.directionY=0;
    this.lives = lives;
  };

  update(){
    this.x = this.x + this.directionX * this.speed;
    this.y = this.y + this.directionY * this.speed;
  }

  draw(){
    this.ctx.fillStyle = '#1148CB';
    if(this.directionY === 0){
      this.ctx.fillRect(this.x- this.size/2, this.y-this.size/2,this.size,this.size/2);
    }else{
      this.ctx.fillRect(this.x- this.size/2, this.y-this.size/2,this.size/2,this.size);
    }
   
  }

  setDirection(directionx,directiony){
    this.directionX = directionx;
    this.directionY = directiony;
  }
/*
  checkScreen(){

    if(this.y - this.size/2 <=0){
      this.directionX = 1;
    }else if(this.y + this.size/2 >= this.canvas.height){
      this.directionX= -1;
    }
  }*/
    /*
    checkCollisionEnemy(enemy){
      
      const collideRight = this.x + this.size /2 > enemy.x -  enemy.size/2;
      const collideLeft = this.x - this.size /2 < enemy.x + enemy.size/2;
      const collideTop = this.y - this.size /2 < enemy.y + enemy.size/2;
      const collideBottom = this.y + this.size /2 > enemy.y - enemy.size/2;

      if(collideRight && collideLeft && collideTop && collideBottom){
          return true;
      }
      return false;
    }
    */
    loseLive(){
      this.lives--
    }
}
