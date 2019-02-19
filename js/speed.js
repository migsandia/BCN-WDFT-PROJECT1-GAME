'use strict'

class SpeedItem{
  constructor(canvas,x,y){
    
    this.size=40;
    this.canvas=canvas;
    this.ctx= this.canvas.getContext('2d');
    this.x = x;
    this.y = y;
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
      this.ctx.fillRect(this.x-this.size/2, this.y-this.size/2,2,this.size);
    }//Girar Abajo
    else if(this.directionX === 0 && this.directionY === 1){
      this.ctx.fillRect(this.x-this.size/2, this.y-this.size/2,this.size,2);
    }//Girar a la izquierda
    else if(this.directionX === -1 && this.directionY === 0){
      this.ctx.fillRect(this.x+this.size/2-2, this.y-this.size/2,2,this.size);
    }//Girar Arriba
    else if(this.directionX === 0 && this.directionY === -1){
      this.ctx.fillRect(this.x-this.size/2, this.y+this.size/2-2,this.size,2);
    }
  }

  setDirection(directionx,directiony){
    this.directionX = directionx;
    this.directionY = directiony;
  }
}