'use strict'

const store = require('../store.js')
const gameLogic = require('./gameLogic.js')

const createGameSuccess = (responseData) => {
  store.game = responseData.game
  store.over = responseData.game.over
  store.newGame = true
  $('#undo').show()
}

const quickWinCondition = cells => {
  if (cells[0] === 'X' && cells[1] === 'X' && cells[2] === 'X') {
    return 1
  } else if (cells[3] === 'X' && cells[4] === 'X' && cells[5] === 'X') {
    return 1
  } else if (cells[6] === 'X' && cells[7] === 'X' && cells[8] === 'X') {
    return 1
  } else if (cells[0] === 'X' && cells[3] === 'X' && cells[6] === 'X') {
    return 1
  } else if (cells[1] === 'X' && cells[4] === 'X' && cells[7] === 'X') {
    return 1
  } else if (cells[2] === 'X' && cells[5] === 'X' && cells[8] === 'X') {
    return 1
  } else if (cells[0] === 'X' && cells[4] === 'X' && cells[8] === 'X') {
    return 1
  } else if (cells[2] === 'X' && cells[4] === 'X' && cells[6] === 'X') {
    return 1
  } else {
    return 0
  }
}

const quickWinCheck = games => {
  let gameCount = 0
  for (let i = 0; i < games.length; i++) {
    if (games[i].over) {
      gameCount += quickWinCondition(games[i].cells)
    }
  }
  return gameCount
}

const formGameStats = (games) => {
  if (games.length === 0) {
    return `${store.user.email} has not played any games yet!`
  }
  const gamesWon = quickWinCheck(games)
  const playerStats = (`
    <p>${store.user.email} has won ${gamesWon} of ${games.length} games as player 'X'</p>
    `)
  return playerStats
}

const getGamesSuccess = (responseData) => {
  $('#crud-message').html(formGameStats(responseData.games))
  setTimeout(() => {
    $('#crud-message').html('')
  }, 6000)
}

const failure = () => {
  $('#user-messages').text('There was an error.')
  $('form').trigger('reset')
  setTimeout(() => {
    $('#api-message').text('')
  }, 5000)
}

module.exports = {
  createGameSuccess,
  getGamesSuccess,
  failure
}
