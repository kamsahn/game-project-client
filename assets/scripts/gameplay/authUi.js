'use strict'

const store = require('../store.js')

const signUpSuccess = () => {
  $('.message-board').text('')
  $('#api-message').text('Successfully signed up.')
  $('form').trigger('reset')
  setTimeout(() => {
    $('#api-message').text('')
  }, 5000)
}

const signInSuccess = (responseData) => {
  $('.message-board').text('')
  $('#api-message').text('Successfully signed in.')
  $('form').trigger('reset')
  store.user = responseData.user
  $('#game-area').show()
  $('#game-start').show()
  $('#change-password-form').show()
  $('#sign-out-form').show()
  $('#get-games-form').show()
  $('#sign-up-form').hide()
  $('#sign-in-form').hide()
  setTimeout(() => {
    $('#api-message').text('')
  }, 5000)
}

const changePasswordSuccess = () => {
  $('.message-board').text('')
  $('#api-message').text('Successfully changed password.')
  $('form').trigger('reset')
  setTimeout(() => {
    $('#api-message').text('')
  }, 5000)
}

const signOutSuccess = () => {
  $('.message-board').text('')
  $('#api-message').text('Successfully signed out.')
  $('form').trigger('reset')
  $('#game-start').hide()
  $('#change-password-form').hide()
  $('#sign-out-form').hide()
  $('#get-games-form').hide()
  $('#sign-up-form').show()
  $('#sign-in-form').show()
  $('.placer').text('')
  $('#game-area').hide()
  store.user = null
  setTimeout(() => {
    $('#api-message').text('Sign in to play')
  }, 5000)
}

const failure = () => {
  $('.message-board').text('')
  $('#api-message').text('There was an error.')
  $('form').trigger('reset')
  setTimeout(() => {
    $('#api-message').text('')
  }, 5000)
}

module.exports = {
  signUpSuccess,
  signInSuccess,
  changePasswordSuccess,
  signOutSuccess,
  failure
}
