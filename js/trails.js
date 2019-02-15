'use strict'
class Trails{
  constructor(canvas,lives){
    
    this.size=40;
    this.canvas=canvas;
    this.ctx= this.canvas.getContext('2d');
    this.x = 0 + this.size/2;
    this.y = 0 + this.size/2;
    this.directionX=1;
    this.directionY=0;
   
  };

  update(){
    this.x = this.x + this.directionX * this.speed;
    this.y = this.y + this.directionY * this.speed;
  }

  draw(){
    this.ctx.fillStyle = '#fff';
    if(this.directionY === 0){
      this.ctx.fillRect(this.x- this.size/2, this.y-this.size/2,this.size,this.size/2);
    }else{
      this.ctx.fillRect(this.x- this.size/2, this.y-this.size/2,this.size/2,this.size);
    }
   
  }
}