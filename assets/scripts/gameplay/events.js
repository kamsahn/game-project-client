'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const gameplayUi = require('./gameplayUi.js')
const authUi = require('./authUi.js')
const crudUi = require('./crudUi.js')
const store = require('../store.js')

const onCreateGame = (event, formData) => {
  event.preventDefault()
  api.createGame(formData)
    .then(crudUi.createGameSuccess)
    .catch(crudUi.failure)
}

const onGetGames = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.getGames(formData)
    .then(crudUi.getGamesSuccess)
    .catch(crudUi.getGames)
}

const onGetGame = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.getGame(formData)
    .then(crudUi.getGameSuccess)
    .catch(crudUi.failure)
}

const onUpdateGame = (player, space, over) => {
  const data =
  {
    'game': {
      'cell': {
        'index': space,
        'value': player
      },
      'over': over
    }
  }
  api.updateGame(data)
    .then(crudUi.updateGameSuccess)
    .catch(crudUi.failure)
}

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

const onPreClick = (event) => {
  gameplayUi.preClick()
}

const onSpaceClick = (event) => {
  gameplayUi.updateBoard(event.target)
  onUpdateGame(store.currentPlayer, store.spaceIndex, store.over)
  // player and space marked
}

const onGameStart = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
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
  onCreateGame(event, formData)
}

module.exports = {
  onSpaceClick,
  onGameStart,
  onPreClick,
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut,
  onCreateGame,
  onGetGames,
  onGetGame,
  onUpdateGame
}
