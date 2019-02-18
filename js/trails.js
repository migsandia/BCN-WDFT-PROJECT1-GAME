'use strict'
class Trail{
  constructor(canvas,x,y,dx,dy){
    
    this.size=20;
    this.canvas=canvas;
    this.ctx= this.canvas.getContext('2d');
    this.x = x;
    this.y = y;
    this.directionX=dx;
    this.directionY=dy;
    
  };

  update(x,y){
    //this.x = x;
    //this.y = y;
  }

  draw(){
    this.ctx.fillStyle = 'white';
    if(this.directionX === 1 && this.directionY === 0){
      this.ctx.fillRect(this.x-this.size/2, this.y-this.size/2,1,this.size);
    }//Girar Abajo
    else if(this.directionX === 0 && this.directionY === 1){
      this.ctx.fillRect(this.x-this.size/2, this.y-this.size/2,this.size,1);
    }//Girar a la izquierda
    
    else if(this.directionX === -1 && this.directionY === 0){
      this.ctx.fillRect(this.x+this.size/2-1, this.y-this.size/2,1,this.size);
    }
    else if(this.directionX === 0 && this.directionY === -1){
      this.ctx.fillRect(this.x-this.size/2, this.y+this.size/2-1,this.size,1);
    }
  }

  setDirection(directionx,directiony){
    this.directionX = directionx;
    this.directionY = directiony;
  }
}