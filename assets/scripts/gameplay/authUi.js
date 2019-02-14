'use strict'

const store = require('../store.js')

const signUpSuccess = () => {
  $('#api-message').text('Successfully signed up.')
  $('form').trigger('reset')
  setTimeout(() => {
    $('#api-message').text('')
  }, 5000)
}

const signInSuccess = (responseData) => {
  $('#api-message').text('Successfully signed in.')
  $('form').trigger('reset')
  store.user = responseData.user
  setTimeout(() => {
    $('#api-message').text('')
  }, 5000)
}

const changePasswordSuccess = () => {
  $('#api-message').text('Successfully changed password.')
  $('form').trigger('reset')
  setTimeout(() => {
    $('#api-message').text('')
  }, 5000)
}

const signOutSuccess = () => {
  $('#api-message').text('Successfully signed out.')
  $('form').trigger('reset')
  store.user = null
  setTimeout(() => {
    $('#api-message').text('')
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
  signUpSuccess,
  signInSuccess,
  changePasswordSuccess,
  signOutSuccess,
  failure
}
