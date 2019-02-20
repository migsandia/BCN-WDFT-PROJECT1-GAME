'use strict'

const main = () => {
  const buildDom = (html) =>{
    const main = document.querySelector('main');
    main.innerHTML = html;
    return main;
  };

  const buildSplashScreen = () => {
    const  splashScreen = buildDom(`
    <audio autoplay>
    <source src="audios/splash-screen.mp3" type="audio/mp4">
    </audio>
    <section class="splash_screen">
      <div class="splash_screen_start">
        <img src="images/titulo.png" alt="titulo" class="splash-screen-title" />
        <a><img src="images/boton-start.png" alt="start" class="splash-screen-start-button" /></a>
      </div>
    </section>
    `);
    const startButton=document.querySelector('a');
    startButton.addEventListener('click',buildGameScreen);
  };
//--------------BUILD GAME SCREEEN
  const buildGameScreen = () => {
    const gameScreen = buildDom(`
      <section class="game-screen">
        <div class="game-screen-score">
          <h2 class="title-player1">PLAYER 1</h2>
          <h2 Class="title-player2">PLAYER 2</h2>
          <img src="images/player-blue.png" class="game-screen-blue-moto" />
          <img src="images/player-red.png" class="game-screen-red-moto" />
        </div>
        <div></div>
        <div class="game-screen-content">
          <canvas></canvas>
        </div>
      </section>
    `);
    const width = document.querySelector('.game-screen-content').offsetWidth;
    const height = document.querySelector('.game-screen-content').offsetHeight;

    const canvasElement = document.querySelector('canvas');

    canvasElement.setAttribute('width',width);
    canvasElement.setAttribute('height',height);
   


    const game =new Game(canvasElement);
    //game.gameOverCallback(buildGameOver);
    game.player1WinsCallback(buildPlayer1Wins);
    game.player2WinsCallback(buildPlayer2Wins);

    game.startLoop();

    const setPlayerDirection = (event) => {
      //Movimientos Jugador 1
      if (event.code === 'ArrowRight' && game.player.directionY !== 0){
        game.player.setDirection(1,0);
        
        
      } else if (event.code === 'ArrowDown' && game.player.directionX !== 0){
        game.player.setDirection(0,1);
        
      }else if(event.code === 'ArrowLeft' && game.player.directionY !== 0 ){
        game.player.setDirection(-1,0);
       
      } else if(event.code === 'ArrowUp' && game.player.directionX !== 0){
        game.player.setDirection(0,-1);
       
      }
      //Movimientos Jugador 2
      if (event.code === 'KeyD' && game.player2.directionY !== 0){
        game.player2.setDirection(1,0);
  
        
      } else if (event.code === 'KeyS' && game.player2.directionX !== 0){
        game.player2.setDirection(0,1);
       
      }else if(event.code === "KeyA" && game.player2.directionY !== 0 ){
        game.player2.setDirection(-1,0);
        
      } else if(event.code === 'KeyW' && game.player2.directionX !== 0){
        game.player2.setDirection(0,-1);
        
      }
    };
    document.addEventListener('keydown', setPlayerDirection);
  }

  

  const buildPlayer1Wins = () =>{
    const player1WinsScreen = buildDom(`
    <section class="player1-wins">
      <div class="player1-wins-screen">
        <h1>Player 1 Wins</h1>
        <button>RESTART</button>
      </div>
    </section>
    
    `);

    const restartButton = document.querySelector('button');
    restartButton.addEventListener('click',buildGameScreen);

  }

  const buildPlayer2Wins = () =>{
    const player2WinsScreen = buildDom(`
    <section class="player2-wins">
      <div class="player2-wins-screen">
        <h1>Player 2 Wins</h1>
        <button>RESTART</button>
      </div>
    </section>
    
    `);

    const restartButton = document.querySelector('button');
    restartButton.addEventListener('click',buildGameScreen);

  }
  buildSplashScreen();
};

window.addEventListener('load',main);