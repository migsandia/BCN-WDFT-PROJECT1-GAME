
# PROJECT 1 - TRON LEGACY

## Descripción
El Jugador que ha entrado accidentalmente en un juego de realidad virtual necesita encontrar a "Tron", un programa de seguridad. Tron puede ayudar a Flynn a pelear contra el despótico PCM para liberar el mainframe de la compañía y escapar al mundo real. En el camino tiene que participar en varios juegos de acción que incluyen las "motos de luz", este juego de "motos de luz" es el que se implementa en este proyecto. 


## MVP - Tecnología (DOM - CANVAS)

El proyecto consta de un juego que se divide en 4 pantallas(Splash,Game,Game Over y You Win). 
  -Splash: Contiene una imagen de fondo y un boton para comenzar.
  -Game:
    -La parte superior de esta pantalla muestra las vidas del jugador y el nivel en el que te encuentras. 
    -En la parte inferior se encuentra el juego, que consta de un enemigo y de un jugador los cuales:
        - Dejan estelas a su paso y que pueden girar tanto a izquierda como a derecha pero sin chocar con las estelas que se           dejan a su paso. 
        - El enemigo seguira la posicion del juegador para acorralarlo.
  -Game Over: consta de una imagen de fondo y de un boton restart para empezar de nuevo.
  -You WIN: consta de una imagen de fondo y de un boton para volver a la pagina principal.

## Backlog
 - Introdudir sonidos
 - Introducir videos al terminar el juego, uno si pierdes y uno si ganas antes de mostrar las paantallas de You win o Game Over
 - Introducir mas enemigos
 - Introducir mas inteligencia a los enemigos para que te hagan trampas.

## Estructuras de Datos

Clases: 
  -Enemigo
  -Jugador
  -Juego
  -Estelas
  
 Propiedades/Metodos 
  -Enemigo:
     -Variables:
      - posicion x
      - posicion y
      - tamaño
      - velocidad
      - color
      - direccion x
      - direccion y
    -Metodos:
      - update()
      - draw()
      - setDirection()
      - checkScreen()
      - checkCollisionTrail()
      
   -Jugador:
    -Variables:
      - posicion x
      - posicion y
      - tamaño
      - velocidad
      - vidas
      - color
      - direccion x
      - direccion y
      
    -Metodos:
      - update()
      - draw()
      - setDirection()
      - checkCollisionTrail()
      - lostLive()
      - checkScreen()
      
    -Estelas:
      - contiene 2 sub clases: una para la estela del enemigo y otra para la estela del jugador.
        -Variables:
         - posicion x
         - posicion y
         - tamaño
         - color
         - direction x
        
        -Metodos:
  
         - draw()
         
         
    -Juego
      -Variables
        -jugadores
        -enemigo
        -estelas
      - Metodos
        -update
        -startLoop()
        -Loop()
        -gameOver()
        -clearCanvas()
        -drawCanvas() 
        -checkAllColisions()
      
      

## States y States Transitions

El juego base contiene 4 pantallas:

- splashScreen: pasa a la gameScreen
- gameScreen:
       |
       |
       |--------: gameOverScreen
       |
       |--------: winScreen
       
- gameoverScreen
       |
       |
       |--------: gameScreen
       
- winScreen
       |
       |
       |-------: splashScreen



## Task

1. Display Screen
2. Display player1
3. Display player2
4. Move player1
5. Move player2
6. Display Trails
7. Conectar Pantallas
8. 

## Links

### Trello

[Link url](https://trello.com)

### Git

Especificar las url del proyecto y del deploy

[Link Repositorio](http://github.com)

[Link Deploy](http://github.com)

### Slides.com

Especificar la url de la presentacion

[Link Slides.com](http://slides.com)

## Instrucciones del juego 

Al finalizar el juego generar las instrucciones