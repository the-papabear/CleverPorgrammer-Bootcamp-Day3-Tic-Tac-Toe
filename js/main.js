import Game from './game.js';
import GameView from './gameView.js';

let game = new Game();
let gameView = new GameView();

let playerX = document.querySelector('.player-x');
let playerO = document.querySelector('.player-o');

document
  .querySelector('.restart')
  .addEventListener('click', () => onRestartClick());

//Personal contribution as homework:
document
  .querySelector('.add-player-name')
  .addEventListener('click', () => playerNameChange());

/////////////////////////////////////

let tiles = document.querySelectorAll('.board-tile');
tiles.forEach(tile => {
  tile.addEventListener('click', () => {
    onTileClick(tile.dataset.index);
  });
});

function onTileClick(i) {
  game.makeMove(i);
  gameView.updateBoard(game);
}

function onRestartClick() {
  game = new Game();
  gameView.updateBoard(game);
  document.querySelector('.game').classList.remove('hidden');
  document.querySelector('.winner').classList.add('hidden');
}

//My contribution to the project:
function playerNameChange() {
  let nameValue1 = document.querySelector('.player-name--1');
  let nameValue2 = document.querySelector('.player-name--2');

  if (!nameValue1.value || !nameValue2.value) return;

  playerX.textContent = nameValue1.value;
  playerO.textContent = nameValue2.value;

  nameValue1.value = '';
  nameValue2.value = '';
}
///////////////////////////////////////
gameView.updateBoard(game);
