'use strict'

const gameLogic = require('./gameLogic.js')
const store = require('../store.js')

const preClick = () => {
  $('#error-messages').text('Want to start a new game? Press the start button!')
  setTimeout(() => {
    $('#error-messages').text('')
  }, 5000)
}

const prePreUndo = () => {
  $('#error-messages').text('Make a move before you undo!')
  setTimeout(() => {
    $('#error-messages').text('')
  }, 5000)
}

const preUndo = () => {
  $('#error-messages').text('Make another move before you undo again!')
  setTimeout(() => {
    $('#error-messages').text('')
  }, 5000)
}

const gameRun = () => {
  $('#user-messages').text('')
  $('#error-messages').text('')
  $('#user-stats').text('New game started! You start as X.')
  gameLogic.newGame()
}

const winMessage = (winner) => {
  $('.placer').on('click', preClick)
  $('#user-messages').text(`Player ${winner[1]} won!`)
  $('#user-stats').text('Want to play again? Hit the Start button.')
  $('#undo').hide()
  store.game.over = true
}

const drawMessage = () => {
  $('.placer').on('click', preClick)
  $('#user-stats').text('Want to play again? Hit the Start button.')
  $('#user-messages').text('There was a draw.')
  $('#undo').hide()
  store.game.over = true
}

const userErrorMessage = () => {
  $('#error-messages').text(`You can't place a marker there!`)
  setTimeout(() => {
    $('#error-messages').text('')
  }, 5000)
}

const updateBoardComputer = oldSpace => {
  const check = gameLogic.updateLogic(gameLogic.updateLogicComputer(oldSpace))
  if (check[0] === 'win') {
    return winMessage(check)
  } else if (check === 'draw') {
    return drawMessage()
  }
  updateTurn(check[0], check[1])
}

const updateTurn = (player, space) => {
  $('#error-messages').text('')
  $(space).on('click', userErrorMessage)
  if (player === 'O') {
    $('#user-stats').text(`Player ${player} you're up!`)
    updateBoardComputer(space)
  } else {
    $('#user-stats').text(`Player ${player} you're up!`)
  }
}

const updateBoard = space => {
  $('#user-messages').text('')
  const check = gameLogic.updateLogic(space)
  if (check[0] === 'win') {
    return winMessage(check)
  } else if (check === 'draw') {
    return drawMessage()
  }
  updateTurn(check, space)
}

const undoBoard = space => {
  $('#user-messages').text('')
  $(space).text('')
  store.game.cells = store.previousCells.slice()
  gameLogic.undoLogic(store.currentPlayer)
  $('#user-stats').text(`Player ${store.currentPlayer}, it's your turn!`)
}

module.exports = {
  updateBoard,
  undoBoard,
  gameRun,
  preClick,
  preUndo,
  prePreUndo
}
