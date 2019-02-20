'use strict'
class Player{
  constructor(canvas,x,y,direction,color){
    
    this.size=20;
    this.canvas=canvas;
    this.ctx= this.canvas.getContext('2d');
    this.x = x + this.size/2;
    this.y = y + this.size/2;
    this.speed = 4;
    this.directionX=direction;
    this.directionY=0;
    this.color = color;
  };

  update(){
    this.x = this.x + this.directionX * this.speed;
    this.y = this.y + this.directionY * this.speed;
  }

  draw(){
    this.ctx.fillStyle = this.color;
    // Si el jugador va ahacia la derecha
    if(this.directionX === 1 && this.directionY === 0){
      this.ctx.fillRect(this.x- this.size/2, this.y-this.size/2,this.size,this.size);
    }//Si el jugador va hacia abajo
    else if(this.directionX === 0 && this.directionY === 1){
      this.ctx.fillRect(this.x- this.size/2, this.y-this.size/2,this.size,this.size);
    }//Si el jugador va hacia la izquierda
    else if(this.directionX === -1 && this.directionY === 0 ){
      this.ctx.fillRect(this.x - this.size/2, this.y-this.size/2,this.size,this.size);
    }//Si el Jugador girar hacia arriba
    else if(this.directionX === 0 && this.directionY === -1 ){
      this.ctx.fillRect(this.x- this.size/2, this.y-this.size/2,this.size,this.size);
    }
   
  }

  setDirection(directionx,directiony){
    this.directionX = directionx;
    this.directionY = directiony;
  }

  checkScreen(){

    if(this.y - this.size/2 <=0 || this.x-this.size/2 <=0){
      return true;
    }else if(this.y + this.size/2 >= this.canvas.height || this.x + this.size/2 >= this.canvas.width){
      return true;
    }
  }
    
    checkCollisionEnemy(trail){
      let collideRight=false;
      let collideLeft=false;
      let collideTop=false;
      let collideBottom=false;

      if(this.directionX===1){
        collideRight = this.x + this.size / 2 > trail.x-this.size/2;  
        collideLeft = this.x - this.size/2 < trail.x-this.size/2;
        collideTop = this.y - this.size / 2 < trail.y + trail.size / 2;
        collideBottom = this.y + this.size / 2 > trail.y - trail.size / 2;
      }else if(this.directionX===-1){
        collideRight = this.x - this.size / 2 < trail.x+this.size/2;  
        collideLeft = this.x + this.size/2 > trail.x+this.size/2;
        collideTop = this.y - this.size / 2 < trail.y + trail.size / 2;
        collideBottom = this.y + this.size / 2 > trail.y - trail.size / 2;
      }else if(this.directionY===1){
        collideRight = this.x + this.size / 2 > trail.x-trail.size /2;  
        collideLeft = this.x - this.size/2 < trail.x-trail.size /2;
        collideTop = this.y + this.size / 2 > trail.y - this.size / 2;
        collideBottom = this.y - this.size / 2 < trail.y - this.size / 2;
      }else if(this.directionY===-1){
        collideRight = this.x + this.size / 2 > trail.x-trail.size /2;  
        collideLeft = this.x - this.size/2 < trail.x-trail.size /2;
        collideTop = this.y - this.size / 2 < trail.y + this.size / 2;
        collideBottom = this.y + this.size / 2 > trail.y + this.size / 2;
      }
     

        if(collideRight && collideTop && collideBottom && collideLeft){
          
          return true;
        }
      
      
      return false;
}
     
checkPauseItem(pauseItem){
      let collideRight=false;
      let collideLeft=false;
      let collideTop=false;
      let collideBottom=false;

      if(this.directionX===1){
        collideRight = this.x + this.size / 2 > pauseItem.x-this.size/2;  
        collideLeft = this.x - this.size/2 < pauseItem.x-this.size/2;
        collideTop = this.y - this.size / 2 < pauseItem.y + pauseItem.size / 2;
        collideBottom = this.y + this.size / 2 > pauseItem.y - pauseItem.size / 2;
      }else if(this.directionX===-1){
        collideRight = this.x - this.size / 2 < pauseItem.x+this.size/2;  
        collideLeft = this.x + this.size/2 > pauseItem.x+this.size/2;
        collideTop = this.y - this.size / 2 < pauseItem.y + pauseItem.size / 2;
        collideBottom = this.y + this.size / 2 > pauseItem.y - pauseItem.size / 2;
      }else if(this.directionY===1){
        collideRight = this.x + this.size / 2 > pauseItem.x-pauseItem.size /2;  
        collideLeft = this.x - this.size/2 < pauseItem.x-pauseItem.size /2;
        collideTop = this.y + this.size / 2 > pauseItem.y - this.size / 2;
        collideBottom = this.y - this.size / 2 < pauseItem.y - this.size / 2;
      }else if(this.directionY===-1){
        collideRight = this.x + this.size / 2 > pauseItem.x-pauseItem.size /2;  
        collideLeft = this.x - this.size/2 < pauseItem.x-pauseItem.size /2;
        collideTop = this.y - this.size / 2 < pauseItem.y + this.size / 2;
        collideBottom = this.y + this.size / 2 > pauseItem.y + this.size / 2;
      }
     

        if(collideRight && collideTop && collideBottom && collideLeft){
          
          return true;
        }

}
}
