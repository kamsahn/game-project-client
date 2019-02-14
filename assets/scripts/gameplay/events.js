'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const gameplayUi = require('./gameplayUi.js')
const authUi = require('./authUi.js')

const onSignUp = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signUp(formData)
    .then(authUi.signUpSuccess)
    .catch(authUi.failure)
}

const onSignIn = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signIn(formData)
    .then(authUi.signInSuccess)
    .catch(authUi.failure)
}

const onChangePassword = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.changePassword(formData)
    .then(authUi.changePasswordSuccess)
    .catch(authUi.failure)
}

const onSignOut = (event) => {
  event.preventDefault()
  api.signOut()
    .then(authUi.signOutSuccess)
    .catch(authUi.failure)
}

const onPreClick = event => {
  gameplayUi.preClick()
}

const onSpaceClick = (event) => {
  gameplayUi.updateBoard(event.target)
}

const onGameStart = event => {
  $('.placer').text('')
  $('#space0').on('click', onSpaceClick)
  $('#space1').on('click', onSpaceClick)
  $('#space2').on('click', onSpaceClick)
  $('#space3').on('click', onSpaceClick)
  $('#space4').on('click', onSpaceClick)
  $('#space5').on('click', onSpaceClick)
  $('#space6').on('click', onSpaceClick)
  $('#space7').on('click', onSpaceClick)
  $('#space8').on('click', onSpaceClick)
  gameplayUi.gameRun()
}

module.exports = {
  onSpaceClick,
  onGameStart,
  onPreClick,
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut
}
