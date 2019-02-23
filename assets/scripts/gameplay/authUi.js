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
  $('#sign-up-form').hide()
  $('#sign-in-form').hide()
  $('#footer').hide()
  $('#sign-toggle').hide()
  $('#game-area').fadeIn()
  $('#game-start').fadeIn()
  $('#init-change-password-form').show()
  $('#sign-out-form').show()
  $('#get-games-form').show()
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

// if toggleCheck is true, sign-in-form is shown
// if toggleCheck is false, sign-up-form is shown
let toggleCheck = true

const signOutSuccess = () => {
  $('.message-board').text('')
  $('#api-message').text('Successfully signed out')
  $('form').trigger('reset')
  $('#game-start').hide()
  $('#change-password-form').hide()
  $('#init-change-password-form').hide()
  $('#sign-out-form').hide()
  $('#get-games-form').hide()
  $('#undo').hide()
  $('#sign-in-form').show()
  toggleCheck = true
  $('#footer').show()
  $('#sign-toggle').show()
  $('.placer').text('')
  $('#game-area').hide()
  store.user = null
  setTimeout(() => {
    $('#api-message').text('Sign back in to play')
  }, 5000)
}

const toggle = () => {
  if (toggleCheck) {
    $('#sign-in-form').hide()
    $('#sign-up-form').show()
    $('#sign-toggle').html(
      `<p id="sign-toggle">Have an account? <span id="toggle">Sign In</span></p>`
    )
  } else {
    $('#sign-up-form').hide()
    $('#sign-in-form').show()
    $('#sign-toggle').html(
      `<p id="sign-toggle">New here? <span id="toggle">Sign Up</span></p>`
    )
  }
  toggleCheck = !toggleCheck
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
  toggle,
  failure
}
