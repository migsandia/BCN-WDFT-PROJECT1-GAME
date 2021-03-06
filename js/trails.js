'use strict'
class Trail{
  constructor(canvas,x,y,dx,dy,color){
    
    this.size=20;
    this.canvas=canvas;
    this.ctx= this.canvas.getContext('2d');
    this.x = x;
    this.y = y;
    this.directionX=dx;
    this.directionY=dy;
    this.color = color;
  };

  update(x,y){
    //this.x = x;
    //this.y = y;
  }

  draw(){
    this.ctx.fillStyle = this.color;
    //Girar la derecha
    if(this.directionX === 1 && this.directionY === 0){
      this.ctx.fillRect(this.x-this.size/2, this.y-this.size/2,4,this.size);
    }//Girar Abajo
    else if(this.directionX === 0 && this.directionY === 1){
      this.ctx.fillRect(this.x-this.size/2, this.y-this.size/2,this.size,4);
    }//Girar a la izquierda
    else if(this.directionX === -1 && this.directionY === 0){
      this.ctx.fillRect(this.x+this.size/2-4, this.y-this.size/2,4,this.size);
    }//Girar Arriba
    else if(this.directionX === 0 && this.directionY === -1){
      this.ctx.fillRect(this.x-this.size/2, this.y+this.size/2-4,this.size,4);
    }
  }

  setDirection(directionx,directiony){
    this.directionX = directionx;
    this.directionY = directiony;
  }
}