'use strict'

const gameLogic = require('./gamelogic.js')

const gameRun = () => {
  $('#user-stats').text('New game started! Player X begins.')
  $('#user-messages').text('')
  gameLogic.newGame()
}

const winMessage = (winner) => {
  $('#user-stats').text('Want to play again? Hit the Start button.')
  $('#user-messages').text(`Player ${winner[1]} won!`)
}

const drawMessage = () => {
  $('#user-stats').text('Want to play again? Hit the Start button.')
  $('#user-messages').text('There was a draw.')
}

const updateTurn = (player) => {
  $('#user-stats').text(`Player ${player}, it's your turn!`)
}

const updateBoard = space => {
  const check = gameLogic.updateLogic(space)
  if (check[0] === 'win') {
    winMessage(check)
  } else if (check === 'draw') {
    drawMessage()
  } else {
    updateTurn(check)
  }
}

module.exports = {
  updateBoard,
  gameRun
}
