'use strict'

const main = () => {
  const buildDom = (html) =>{
    const main = document.querySelector('main');
    main.innerHTML = html;
    return main;
  };

  const buildSplashScreen = () => {
    const  splashScreen = buildDom(`
    <section class="splash_screen">
      <div class="splash_screen_start">
        <h1>TRON LEGACY</h1>
        <button>Start</button>
      </div>
    </section>
    `);
    const startButton=document.querySelector('button');
    startButton.addEventListener('click',buildGameScreen);
  };
//--------------BUILD GAME SCREEEN
  const buildGameScreen = () => {
    const gameScreen = buildDom(`
      <section class="game-screen">
        <canvas></canvas>
      </section>
    `);
    const width = document.querySelector('.game-screen').offsetWidth;
    const height = document.querySelector('.game-screen').offsetHeight;

    const canvasElement = document.querySelector('canvas');

    canvasElement.setAttribute('width',width);
    canvasElement.setAttribute('height',height);
   


    const game =new Game(canvasElement);
    game.gameOverCallback(buildGameOver);

    game.startLoop();

    const setPlayerDirection = (event) => {
      
      if (event.code === 'ArrowUp' && game.player.directionX !== 0){
        game.player.setDirection(0,-1);
      } else if (event.code === 'ArrowDown' && game.player.directionX !== 0){
        game.player.setDirection(0,1);
      }else if(event.code === 'ArrowLeft' && game.player.directionY !== 0 ){
        game.player.setDirection(-1,0);
      } else if (event.code === 'ArrowRight' && game.player.directionY !== 0){
        game.player.setDirection(1,0);
      }
    };
    document.addEventListener('keydown', setPlayerDirection);
  }

  const buildGameOver = () =>{
    const gameOverScreen = buildDom(`
    <section class="game-over">
      <h1>Game Over Screen</h1>
      <button>Restart</button>
    </section>
    
    `);

    const restartButton = document.querySelector('button');
    restartButton.addEventListener('click',buildGameScreen);

  }
  buildSplashScreen();
};

window.addEventListener('load',main);