'use strict'

class PauseItem{
  constructor(canvas,x,y){
    
    this.size=40;
    this.canvas=canvas;
    this.ctx= this.canvas.getContext('2d');
    this.x = x;
    this.y = y;
    
  };

  draw(){
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(this.x-this.size/2, this.y-this.size/2,this.size,this.size);
    
  }
  
}