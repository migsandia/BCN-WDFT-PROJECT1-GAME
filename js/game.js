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
    this.pauseItems=[];
    this.player1Win = false;
    this.player2Win = false;
    this.scorePlayer1Win = 5;
    this.scorePlayer2Win = 5;
    this.pauseCountPlayer= 300;
  };

  startLoop() {
   
    this.player= new Player (this.canvas,100,50,1,"blue");
    this.player2= new Player (this.canvas,800,400,-1,"red");
    
    
    const loop = () => {
      if(Math.random() > 0.99 && this.pauseItems.length<1) {
        const y = Math.random() * this.canvas.height;
        const x = Math.random() * this.canvas.width;
        this.pauseItems.push(new PauseItem(this.canvas,x,y));
      };
      this.trails.push(new Trail(this.canvas,this.player.x,this.player.y,this.player.directionX,this.player.directionY,'#5E8FAF'));
      this.trails2.push(new Trail(this.canvas,this.player2.x,this.player2.y,this.player2.directionX,this.player2.directionY,"#AF5E5E"));
      this.updateScore();
      this.checkAllCollisions();
      this.updateCanvas();
      this.clearCanvas();
      this.drawCanvas();
      if(this.player.speed===0){
        this.pauseCountPlayer-=1;
        if(this.pauseCountPlayer===0){
          this.timePauseItem();
          this.pauseCountPlayer=300;
        }
      }
      

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
    
    this.player.draw();//Se crea jugador1
    this.player2.draw();//Se crea jugador2
    //Se crea item de pausa
    this.pauseItems.forEach((pauseItem)=>{
      pauseItem.draw();
    });
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
      this.player= new Player (this.canvas,100,100,1,"blue");
      this.player2= new Player (this.canvas,800,400,-1,"red");
      this.trails = [];
      this.trails2 = [];
      this.scorePlayer1Win -= 1;
      if(this.scorePlayer1Win < 1){
        this.player2Win = true;
        this.onPlayer2Wins();
      }
    };
    //Jugador2 choca contra la pared
    if(this.player2.checkScreen() === true){
      this.player= new Player (this.canvas,100,100,1,"blue");
      this.player2= new Player (this.canvas,800,400,-1,"red");
      this.trails2 = [];
      this.trails = [];
      this.scorePlayer2Win -= 1;
      if(this.scorePlayer2Win < 1){
        this.player1Win = true;
        this.onPlayer1Wins();
      }
    }
    //Si el jugador choca contra el Pause Item
    this.pauseItems.forEach((item,index) => {
      if(this.player.checkPauseItem(item)){
        this.pauseItems.splice(index, 1);
        this.player2.speed = 0;
        
      }
      if(this.player2.checkPauseItem(item)){
        this.pauseItems.splice(index, 1);
        this.player.speed = 0;
      }
    });

    

    this.trails.forEach((trail) => {
      //Si el Jugador1 choca contra la estela del Jugador1
      if(this.player.checkCollisionEnemy(trail)){
        this.player= new Player (this.canvas,100,100,1,"blue");
        this.player2= new Player (this.canvas,400,400,-1,"red");
        this.trails = [];
        this.trails2 = [];
        this.scorePlayer1Win -= 1;
        if(this.scorePlayer1Win < 1){
          this.player2Win = true;
          this.onPlayer2Wins();
        }
      }
      //Si el Jugador2 choca contra la estela del Jugador1
      if(this.player2.checkCollisionEnemy(trail)){
        this.player= new Player (this.canvas,100,100,1,"blue");
        this.player2= new Player (this.canvas,800,400,-1,"red");
        this.trails2 = [];
        this.trails = [];
        this.scorePlayer2Win -= 1;
        if(this.scorePlayer2Win < 1){
          this.player1Win = true;
          this.onPlayer1Wins();
        }
      }
      
    });
    this.trails2.forEach((trail) => {
      //Si el Jugador2 choca contra la estela del Jugador2
      if(this.player2.checkCollisionEnemy(trail)){
        this.player= new Player (this.canvas,100,100,1,"blue");
        this.player2= new Player (this.canvas,800,400,-1,"red");
        this.trails2 = [];
        this.trails = [];
        this.scorePlayer2Win -= 1;
        if(this.scorePlayer2Win < 1){
          this.player1Win = true;
          this.onPlayer1Wins();
        }
      }
      //Si el Jugador1 choca contra la estela del Jugador2
      if(this.player.checkCollisionEnemy(trail)){
        this.player= new Player (this.canvas,100,100,1,"blue");
        this.player2= new Player (this.canvas,800,400,-1,"red");
        this.trails = [];
        this.trails2 = [];
        this.scorePlayer1Win -= 1;
        if(this.scorePlayer1Win < 1){
          this.player2Win = true;
          this.onPlayer2Wins();
        }
      }
    });
  };

  timePauseItem(){
    this.player.speed=4;
  }
  
  player1WinsCallback(callback) {
    this.onPlayer1Wins= callback;
  };
  player2WinsCallback(callback) {
    this.onPlayer2Wins= callback;
  };

  scoreCallback(callback){
    this.updateScore=callback;
  }
  
};