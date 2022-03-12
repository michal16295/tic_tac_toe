# Tic Tac Toe

This repository contains a smart and responsive Tic Tac Toe game, which can be played using mobile or computer.
In the current version the user can only play against the computer.
The game is a "smart game" and is based on the "MinMax" algorithm.

## Running the game

* git clone https://github.com/michal16295/tic_tac_toe.git

## Client:
#### `npm i`
#### `npm start`

## Server:
#### `npm i`
#### `npx tsc`  
#### `node dist/app.js` 


![mobile (7)](https://user-images.githubusercontent.com/44338182/158026248-00899452-1265-46d5-98fd-20c07eb517e5.png)

# Tools and technologies:
## Client Side:
* ReactJS
* Axios
* Context
* Styled components

## Server Side:
* NodeJS
* Express

# General Architecture

All of the game logic was calculated on the server.
The client sends to the server his step (i,j), and the server returns a whole board with his step. The reason for this implementation is to prevent cheating.

## Client side:
All of the client's logic is separated from the ui, and implemented using Context.

### Context:
Holds all of the variables and functions related to each Model.
* Game
* Player

### Screens:
Each screen consist of reusable Components 
* Onboarding - user creation.
* Game.

### Apis:
Holds all of the Api's request related to each Model.
* Game
* Player

## Server Side:
Developed using Singleton pattern. 
Separated by models: Player and Game, each model contains the following:
* Model - inteface
* Controller - middlware between the service and the route.
* Service - game class: performs all of the game and player logic.
* Route - contains routing.

# Gameplay:
## Onboarding:
### Entering a nickname

![mobile (1)](https://user-images.githubusercontent.com/44338182/158026623-b0e1872c-a348-4103-9825-5185743629c6.png)

### Choosing difficulty level

The user can choose his preferable game difficulty from easy to expart. The game is based on the Min Max algorithm so we can limit the depth of the scan based on the user's difficulty level choise. If the user chooses level 0, then a "dumb" algorithm(random choise) will generate computer's next move.

![mobile (3)](https://user-images.githubusercontent.com/44338182/158026723-4e54fbf1-7e0f-4bcc-8fd5-c05dedbe4376.png)

### Starting a new game

* Difficulty level can be changed at any given time of the game.
* User can go back to the main screen.
* User can start a new game at any given time

![mobile (4)](https://user-images.githubusercontent.com/44338182/158026651-dc286cbf-7ac6-4112-aa9d-596458cfefed.png)

## Game

In this current version, the user can only play against the computer.

### Players list

Displayin 10 top players sorted by score.

![mobile (5)](https://user-images.githubusercontent.com/44338182/158027436-9868ed29-4669-48ca-a2f6-ea0fee529fbb.png)

# Future Development
## Online Game

Adding the ability to play the game online.
* Displaying a list of online players.
* Sending an invitation to a player.
* Playing online

This feature will be implemented using Websocket.

## Game History

Saving each players game history, including game steps and score and giving the ability to replay.

In the current version, a players list is displayed including each player score.
To save the steps and replay the game, in addition each player will hold a Stack containing his previous moves.




