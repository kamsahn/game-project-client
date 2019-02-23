'use strict'

const store = require('../store.js')

// There is one UI function happening on this page and that is placing markers
// on the board. messages will come from ui.js

// two possible player options
const players = ['X', 'O']

// playerTurn used to switch between players (true/false, on/off)
// will always start with player 'X'
let playerTurn = true

// maps div id's to values used for game board
const uiToValue = {
  space0: 0,
  space1: 1,
  space2: 2,
  space3: 3,
  space4: 4,
  space5: 5,
  space6: 6,
  space7: 7,
  space8: 8
}

// maps spaces to adjacent spaces
const adjSpace = {
  space0: ['space1', 'space3', 'space4'],
  space1: ['space0', 'space2', 'space3', 'space4', 'space5'],
  space2: ['space1', 'space4', 'space5'],
  space3: ['space0', 'space1', 'space4', 'space6', 'space7'],
  space4: ['space0', 'space1', 'space2', 'space3', 'space5', 'space6', 'space7', 'space8'],
  space5: ['space1', 'space2', 'space4', 'space7', 'space8'],
  space6: ['space3', 'space4', 'space7'],
  space7: ['space3', 'space4', 'space5', 'space6', 'space8'],
  space8: ['space4', 'space5', 'space7']
}

// checks if a win has occured
// make condition for filled array and no winner
const gameEndTest = gameBoard => {
  let gameEnd = [false]
  for (let i = 0; i < players.length; i++) {
    if (gameBoard[0] === players[i] && gameBoard[1] === players[i] && gameBoard[2] === players[i]) {
      gameEnd = [true, players[i]]
      return gameEnd
    } else if (gameBoard[3] === players[i] && gameBoard[4] === players[i] && gameBoard[5] === players[i]) {
      gameEnd = [true, players[i]]
      return gameEnd
    } else if (gameBoard[6] === players[i] && gameBoard[7] === players[i] && gameBoard[8] === players[i]) {
      gameEnd = [true, players[i]]
      return gameEnd
    } else if (gameBoard[0] === players[i] && gameBoard[3] === players[i] && gameBoard[6] === players[i]) {
      gameEnd = [true, players[i]]
      return gameEnd
    } else if (gameBoard[1] === players[i] && gameBoard[4] === players[i] && gameBoard[7] === players[i]) {
      gameEnd = [true, players[i]]
      return gameEnd
    } else if (gameBoard[2] === players[i] && gameBoard[5] === players[i] && gameBoard[8] === players[i]) {
      gameEnd = [true, players[i]]
      return gameEnd
    } else if (gameBoard[0] === players[i] && gameBoard[4] === players[i] && gameBoard[8] === players[i]) {
      gameEnd = [true, players[i]]
      return gameEnd
    } else if (gameBoard[2] === players[i] && gameBoard[4] === players[i] && gameBoard[6] === players[i]) {
      gameEnd = [true, players[i]]
      return gameEnd
    }
  }
  return gameEnd
}

// turns off all handlers and displays winner. adds button to play again
const endWin = winner => {
  const winArray = ['win', winner]
  $('.placer').off('click')
  return winArray
}

// displays to user that no winner was found. adds button to play again
const endDraw = () => {
  return 'draw'
}

// takes chosen space and picks a random adjacent space
const randomAdj = space => {
  const index = adjSpace[space][Math.floor(Math.random() * adjSpace[space].length)]
  $(`#${index}`).text('O')
}

// selects current player, places marker and disables boxes
// adds marker on board to array game board and checks for winner
// some ui happens on game end
const updateLogic = space => {
  const currentPlayerPass = playerTurn ? players[0] : players[1]
  store.currentPlayer = currentPlayerPass
  $(space).text(currentPlayerPass)
  store.previousCells = store.game.cells.slice()
  store.game.cells[uiToValue[space.id]] = currentPlayerPass
  store.spaceIndex = uiToValue[space.id]
  const check = gameEndTest(store.game.cells)
  if (check[0]) {
    return endWin(check[1])
  } else if (!store.game.cells.includes('')) {
    return endDraw()
  }
  playerTurn = !playerTurn
  $(space).off('click')
  randomAdj(space.id)
  return playerTurn ? players[0] : players[1]
}

// switches the current player back to the previous player
const undoLogic = player => {
  player === players[0] ? playerTurn = true : playerTurn = false
}

// initializes game with player X
const newGame = () => {
  playerTurn = true
}

module.exports = {
  updateLogic,
  undoLogic,
  newGame,
  gameEndTest
}
