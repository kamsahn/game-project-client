'use strict'

const store = require('../store.js')
const gameLogic = require('./gameLogic.js')

const createGameSuccess = (responseData) => {
  $('#api-message').text('Successfully started a new game')
  store.game = responseData.game
  store.over = responseData.game.over
}

const formGameStats = (games) => {
  let gamesWon = 0
  for (let i = 0; i < games.length; i++) {
    if (games[i].over) {
      const winX = gameLogic.gameEndTest(games[i].cells)
      if (winX[1] === 'X') {
        gamesWon++
      }
    }
  }
  const playerStats = (`
    <p>You have won ${gamesWon} games out of ${games.length} games played.</p>
    `)
  return playerStats
}

const getGamesSuccess = (responseData) => {
  $('#api-message').text('Successfully got games.')
  $('#user-stats').text('Games:')
  $('#user-stats').html(formGameStats(responseData.games))
}

const getGameSuccess = (responseData) => {
  $('form').trigger('reset')
  $('#user-stats').html(responseData.game.id + ': ' + responseData.game.cells)
}

const updateGameSuccess = (responseData) => {
  $('#api-message').text('Updated example')
  $('#user-stats').html(responseData.game.id + ': ' + responseData.game.cells)
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
  getGameSuccess,
  updateGameSuccess,
  failure
}
