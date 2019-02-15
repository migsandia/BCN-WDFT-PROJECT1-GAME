'use strict'
class Trail{
  constructor(canvas,x,y){
    
    this.size=20;
    this.canvas=canvas;
    this.ctx= this.canvas.getContext('2d');
    this.x = x;
    this.y = y;
    this.directionX=1;
    this.directionY=0;
    
  };

  update(x,y){
    //this.x = x;
    //this.y = y;
  }

  draw(){
    this.ctx.fillStyle = 'white';
    if(this.directionY === 0 && this.directionX !== -1){
      this.ctx.fillRect(this.x-this.size, this.y-this.size,1,this.size);
    }else{
      this.ctx.fillRect(this.x+this.size, this.y-this.size,this.size,this.size);
    }
   
  }

  setDirection(directionx,directiony){
    this.directionX = directionx;
    this.directionY = directiony;
  }
}