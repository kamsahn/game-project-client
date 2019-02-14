'use strict'

const gameLogic = require('./gamelogic.js')

const winMessage = () => {
  $('#user-messages').text('There was a winner')
}

const drawMessage = () => {
  $('#user-messages').text('There was a draw')
}

const updateBoard = space => {
  const check = gameLogic.updateLogic(space)
  if (check === 'win') {
    winMessage()
  } else if (check === 'draw') {
    drawMessage()
  }
}

module.exports = {
  updateBoard
}
