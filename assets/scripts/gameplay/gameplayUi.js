'use strict'

const gameLogic = require('./gamelogic.js')

const preClick = () => {
  $('#user-messages').text('Want to start a new game? Press the start button below the board!')
}

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

const userErrorMessage = () => {
  $('#user-messages').text(`You can't place a marker there!`)
}

const updateTurn = (player, space) => {
  $('#user-stats').text(`Player ${player}, it's your turn!`)
  $(space).on('click', userErrorMessage)
}

const updateBoard = space => {
  $('#user-messages').text('')
  const check = gameLogic.updateLogic(space)
  if (check[0] === 'win') {
    winMessage(check)
  } else if (check === 'draw') {
    drawMessage()
  } else {
    updateTurn(check, space)
  }
}

module.exports = {
  updateBoard,
  gameRun,
  preClick
}
