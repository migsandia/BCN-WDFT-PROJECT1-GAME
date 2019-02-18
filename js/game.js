'use strict'
class Game{
  constructor(canvas){
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.player;
    this.player2;
    this.trails=[];
    this.trails2=[];
    this.numTrails=0;
    this.isGameOver = false;
  };

  startLoop() {
      
    this.player= new Player (this.canvas,4,100,100,1,"blue");
    this.player2= new Player (this.canvas,4,400,400,-1,"red");
   
    
    const loop = () => {
    
      this.trails.push(new Trail(this.canvas,this.player.x,this.player.y,this.player.directionX,this.player.directionY,'#5E8FAF'));
      this.trails2.push(new Trail(this.canvas,this.player2.x,this.player2.y,this.player2.directionX,this.player2.directionY,"#AF5E5E"));

      this.checkAllCollisions();
      this.updateCanvas();
      this.clearCanvas();
      this.drawCanvas();

      if(!this.isGameOver) {
        window.requestAnimationFrame(loop);
      }
     
    }
    window.requestAnimationFrame(loop);
  }

  updateCanvas(){
    this.player.update();
    this.player2.update();
   
    this.trails.forEach((trail1)=>{
      trail1.update(this.player.x,this.player.y);
    });
    this.trails2.forEach((trail1)=>{
      trail1.update(this.player2.x,this.player2.y);
    });
  };

  clearCanvas(){
    this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
  };

  drawCanvas(){
    this.ctx.fillStyle = '#0B141F';
    this.ctx.fillRect(0, 0,this.canvas.width, this.canvas.height);
    this.player.draw();
    this.player2.draw();
    this.trails.forEach((trail1)=>{
      trail1.draw();
    });
    this.trails2.forEach((trail1)=>{
      trail1.draw();
    });
  };

  checkAllCollisions(){
    //Jugador1 choca contra la pared
    if(this.player.checkScreen() === true){
      this.isGameOver = true;
      this.onGameOver();
    };
    //Jugador2 choca contra la pared
    if(this.player2.checkScreen() === true){
      this.isGameOver = true;
      this.onGameOver();
    };
    

    this.trails.forEach((trail) => {
      //Si el Jugador1 choca contra la estela del Jugador1
      if(this.player.checkCollisionEnemy(trail)){
        this.isGameOver = true;
        this.onGameOver();
        /*
        if(this.player.lives===0){
            this.onGameOver();
        }*/
      }
      //Si el Jugador2 choca contra la estela del Jugador1
      if(this.player2.checkCollisionEnemy(trail)){
        this.isGameOver = true;
        this.onGameOver();
        /*
        if(this.player2.lives===0){
            this.onGameOver();
        }
       */
      }
      
    });
    this.trails2.forEach((trail) => {
      //Si el Jugador2 choca contra la estela del Jugador2
      if(this.player2.checkCollisionEnemy(trail)){
        this.isGameOver = true;
        this.onGameOver();
        /*if(this.player2.lives===0){
            this.onGameOver();
        }*/
      }
      //Si el Jugador1 choca contra la estela del Jugador2
      if(this.player.checkCollisionEnemy(trail)){
        this.isGameOver = true;
        this.onGameOver();
        /*if(this.player.lives===0){
          this.onGameOver();
        }*/
      }
    });
  };
  gameOverCallback(callback) {
    this.onGameOver= callback;
  };

  resetItems(){
    this.player.x=100+this.size/2;
    this.player.y=100+this.size/2;
    this.player.directionX=1;
    this.player.directionY=0;
    this.player2.x=400+this.size/2;
    this.player2.y=400+this.size/2;
    this.player2.directionX=-1;
    this.player2.directionY=0;
    this.trails=[];
    this.trails2=[];
  }
};