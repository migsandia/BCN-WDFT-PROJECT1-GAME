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
    this.speedItem;
    this.player1Win = false;
    this.player2Win = false;
    this.scorePlayer1Win = 0;
    this.scorePlayer2Win = 0;
  };

  startLoop() {
      
    this.player= new Player (this.canvas,4,100,100,1,"blue");
    this.player2= new Player (this.canvas,4,400,400,-1,"red");
    //this.speedItem= new SpeedItem (this.canvas,200,200);
    
    const loop = () => {
    
      this.trails.push(new Trail(this.canvas,this.player.x,this.player.y,this.player.directionX,this.player.directionY,'#5E8FAF'));
      this.trails2.push(new Trail(this.canvas,this.player2.x,this.player2.y,this.player2.directionX,this.player2.directionY,"#AF5E5E"));

      this.checkAllCollisions();
      this.updateCanvas();
      this.clearCanvas();
      this.drawCanvas();

      if(!this.player1Win && !this.player2Win) {
        window.requestAnimationFrame(loop);
      }
     
    }
    window.requestAnimationFrame(loop);
  }
  //----------------------Update Canvas---------------
  updateCanvas(){

    this.player.update();//Update Player1
    this.player2.update();//Update Player2
    
    //-----Update Trail1
    this.trails.forEach((trail1)=>{
      trail1.update(this.player.x,this.player.y);
    });
    //-----Update Trail2
    this.trails2.forEach((trail1)=>{
      trail1.update(this.player2.x,this.player2.y);
    });
  };

  clearCanvas(){
    this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
  };
  //-----------------------Dibujar Canvas--------------------------
  drawCanvas(){
    //Se crea imagen de fondo del canvas
        var img = new Image();
        img.src = "../images/tron-fondo-juego.jpg";
        img.onload = function(){
          ctx.drawImage(img, 0, 0);
        }
    
    this.player.draw();//Se crea jugador1
    this.player2.draw();//Se crea jugador2
    //Se crea Trail1
    this.trails.forEach((trail1)=>{
      trail1.draw();
    });
    //Se crea Trail2
    this.trails2.forEach((trail1)=>{
      trail1.draw();
    });
  };
  //--------------------------Colisiones---------------------------
  checkAllCollisions(){
    //Jugador1 choca contra la pared
    if(this.player.checkScreen() === true){
      this.player= new Player (this.canvas,4,100,100,1,"blue");
      this.player2= new Player (this.canvas,4,400,400,-1,"red");
      this.trails = [];
      this.trails2 = [];
      this.scorePlayer2Win += 1;
      if(this.scorePlayer2Win == 2){
        this.player2Win = true;
        this.onPlayer2Wins();
      }
    };
    //Jugador2 choca contra la pared
    if(this.player2.checkScreen() === true){
      this.player= new Player (this.canvas,4,100,100,1,"blue");
      this.player2= new Player (this.canvas,4,400,400,-1,"red");
      this.player1Win = false;
      this.trails2 = [];
      this.trails = [];
      this.scorePlayer1Win += 1;
      if(this.scorePlayer1Win == 2){
        this.player1Win = true;
        this.onPlayer1Wins();
      }
    };
    

    this.trails.forEach((trail) => {
      //Si el Jugador1 choca contra la estela del Jugador1
      if(this.player.checkCollisionEnemy(trail)){
        this.player= new Player (this.canvas,4,100,100,1,"blue");
        this.player2= new Player (this.canvas,4,400,400,-1,"red");
        this.trails = [];
        this.trails2 = [];
        this.scorePlayer2Win += 1;
        if(this.scorePlayer2Win == 2){
          this.player2Win = true;
          this.onPlayer2Wins();
        }
      }
      //Si el Jugador2 choca contra la estela del Jugador1
      if(this.player2.checkCollisionEnemy(trail)){
        this.player= new Player (this.canvas,4,100,100,1,"blue");
        this.player2= new Player (this.canvas,4,400,400,-1,"red");
        this.player1Win = false;
        this.trails2 = [];
        this.trails = [];
        this.scorePlayer1Win += 1;
        if(this.scorePlayer1Win == 2){
          this.player1Win = true;
          this.onPlayer1Wins();
        }
      }
      
    });
    this.trails2.forEach((trail) => {
      //Si el Jugador2 choca contra la estela del Jugador2
      if(this.player2.checkCollisionEnemy(trail)){
        this.player= new Player (this.canvas,4,100,100,1,"blue");
        this.player2= new Player (this.canvas,4,400,400,-1,"red");
        this.player1Win = false;
        this.trails2 = [];
        this.trails = [];
        this.scorePlayer1Win += 1;
        if(this.scorePlayer1Win == 2){
          this.player1Win = true;
          this.onPlayer1Wins();
        }
      }
      //Si el Jugador1 choca contra la estela del Jugador2
      if(this.player.checkCollisionEnemy(trail)){
        this.player= new Player (this.canvas,4,100,100,1,"blue");
        this.player2= new Player (this.canvas,4,400,400,-1,"red");
        this.trails = [];
        this.trails2 = [];
        this.scorePlayer2Win += 1;
        if(this.scorePlayer2Win == 2){
          this.player2Win = true;
          this.onPlayer2Wins();
        }
      }
    });
  };
  
  player1WinsCallback(callback) {
    this.onPlayer1Wins= callback;
  };
  player2WinsCallback(callback) {
    this.onPlayer2Wins= callback;
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