'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const events = require('./gameplay/events.js')

$(() => {
  $('#game-start').hide()
  $('#sign-up-form').hide()
  $('#change-password-form').hide()
  $('#init-change-password-form').hide()
  $('#sign-out-form').hide()
  $('#get-games-form').hide()
  $('#game-area').hide()
  $('#undo').hide()
  $('#toggle').on('click', events.onToggleClick)
  $('.placer').on('click', events.onPreClick)
  $('#game-start').on('submit', () => {
    $('.placer').off('click')
    events.onGameStart(event)
  })
  $('#sign-up-form').on('submit', events.onSignUp)
  $('#sign-in-form').on('submit', events.onSignIn)
  $('#change-password-form').on('submit', events.onChangePassword)
  $('#init-change-password-form').on('submit', events.onInitChangePassword)
  $('#sign-out-form').on('submit', events.onSignOut)
  $('#get-games-form').on('submit', events.onGetGames)
  $('#undo').on('submit', events.onUndo)
  $('#api-message').text('Sign in to play')
})
