'use strict'

// There is one UI function happening on this page and that is placing markers
// on the board. messages will come from ui.js

// two possible plater options
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

// empty game board to start game
const currentGameBoard = ['','','','','','','','','']

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
  $('#space0').off('click')
  $('#space1').off('click')
  $('#space2').off('click')
  $('#space3').off('click')
  $('#space4').off('click')
  $('#space5').off('click')
  $('#space6').off('click')
  $('#space7').off('click')
  $('#space8').off('click')
  return 'win'
}

// displays to user that no winner was found. adds button to play again
const endDraw = () => {
  return 'draw'
}

// selects current player, places marker and disables boxes
// adds marker on board to array game board and checks for winner
// some ui happens on game end
const updateLogic = space => {
  playerTurn ? $(space).text(players[0]) : $(space).text(players[1])
  playerTurn ? currentGameBoard[uiToValue[space.id]] = players[0] : currentGameBoard[uiToValue[space.id]] = players[1]
  const check = gameEndTest(currentGameBoard)
  if (check[0]) {
    return endWin(check[1])
  } else if (!currentGameBoard.includes('')) {
    return endDraw()
  }
  playerTurn = !playerTurn
  $(space).off('click')
  return 'continue'
}

module.exports = {
  updateLogic
}
