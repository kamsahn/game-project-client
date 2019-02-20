'use strict'

const store = require('../store.js')

const signUpSuccess = () => {
  $('.message-board').text('')
  $('#api-message').text('Successfully signed up. Sign in to play')
}

const signInSuccess = (responseData) => {
  $('.message-board').text('')
  $('#api-message').text('Successfully signed in')
  $('form').trigger('reset')
  store.user = responseData.user
  $('#game-area').fadeIn()
  $('#game-start').fadeIn()
  $('#init-change-password-form').show()
  $('#sign-out-form').show()
  $('#get-games-form').show()
  $('#sign-up-form').hide()
  $('#sign-in-form').hide()
  $('#footer').hide()
  $('#error-messages').text('Press Start to play')
  setTimeout(() => {
    $('#api-message').text('')
  }, 5000)
}

const initChangePasswordSuccess = () => {
  $('.message-board').text('')
  $('form').trigger('reset')
  $('#init-change-password-form').hide()
  $('#change-password-form').show()
}

const changePasswordSuccess = () => {
  $('#change-password-form').hide()
  $('#init-change-password-form').show()
  $('.message-board').text('')
  $('#api-message').text('Successfully changed password')
  $('form').trigger('reset')
  setTimeout(() => {
    $('#api-message').text('')
  }, 5000)
}

const signOutSuccess = () => {
  $('.message-board').text('')
  $('#api-message').text('Successfully signed out. Sign back in to play')
  $('form').trigger('reset')
  $('#game-start').hide()
  $('#change-password-form').hide()
  $('#init-change-password-form').hide()
  $('#sign-out-form').hide()
  $('#get-games-form').hide()
  $('#undo').hide()
  $('#sign-up-form').show()
  $('#sign-in-form').show()
  $('#footer').show()
  $('.placer').text('')
  $('#game-area').hide()
  store.user = null
  setTimeout(() => {
    $('#api-message').text('Sign back in to play')
  }, 5000)
}

const failure = () => {
  $('.message-board').text('')
  $('#api-message').text('There was an error')
  $('form').trigger('reset')
  setTimeout(() => {
    $('#api-message').text('')
  }, 5000)
}

module.exports = {
  signUpSuccess,
  signInSuccess,
  changePasswordSuccess,
  initChangePasswordSuccess,
  signOutSuccess,
  failure
}
