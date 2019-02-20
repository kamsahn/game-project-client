'use strict'

const store = require('../store.js')
const gameLogic = require('./gameLogic.js')

const createGameSuccess = (responseData) => {
  store.game = responseData.game
  store.over = responseData.game.over
  // over is stored (and updated) in store.game.over
  $('#undo').show()
}

const formGameStats = (games) => {
  let gamesWon = 0
  if (games.length === 0) {
    return `${store.user.email} has not played any games yet!`
  }
  for (let i = 0; i < games.length; i++) {
    if (games[i].over) {
      const winX = gameLogic.gameEndTest(games[i].cells)
      if (winX[1] === 'X') {
        gamesWon++
      }
    }
  }
  const playerStats = (`
    <p>${store.user.email} has won ${gamesWon} games out of ${games.length} games</p>
    `)
  return playerStats
}

const getGamesSuccess = (responseData) => {
  $('#crud-message').html(formGameStats(responseData.games))
  setTimeout(() => {
    $('#crud-message').html('')
  }, 5000)
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
