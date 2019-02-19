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
    .catch(crudUi.failure)
}

const onSignIn = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signIn(formData)
    .then(authUi.signInSuccess)
    .catch(authUi.failure)
}

const onSignUp = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signUp(formData)
    .then(authUi.signUpSuccess)
    .then(() => {
      onSignIn(event)
    })
    .then(() => {
      $('form').trigger('reset')
    })
    .catch(authUi.failure)
}

const onInitChangePassword = (event) => {
  event.preventDefault()
  authUi.initChangePasswordSuccess()
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

const onPreUndo = (event) => {
  event.preventDefault()
  gameplayUi.preUndo()
}

const onSpaceClick = (event) => {
  store.space = event
  $('#undo').off('submit')
  $('#undo').on('submit', onUndo)
  gameplayUi.updateBoard(event.target)
  onUpdateGame(store.currentPlayer, store.spaceIndex, store.over)
  // player and space marked and game end state
}

const onGameStart = (event) => {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  $('#api-message').text('')
  $('.placer').text('')
  $('.placer').on('click', onSpaceClick)
  gameplayUi.gameRun()
  onCreateGame(event, formData)
}

const onUndo = (event) => {
  event.preventDefault()
  const isBlank = elem => {
    return elem === ''
  }
  if (!store.game.cells.every(isBlank)) {
    gameplayUi.undoBoard(store.space.target)
    onUpdateGame('', store.spaceIndex, store.over)
    $(store.space.target).off('click')
    $(store.space.target).on('click', onSpaceClick)
    $('#undo').off('submit')
    $('#undo').on('submit', onPreUndo)
  } else {
    gameplayUi.prePreUndo()
  }
}

module.exports = {
  onSpaceClick,
  onGameStart,
  onPreClick,
  onSignUp,
  onSignIn,
  onChangePassword,
  onInitChangePassword,
  onSignOut,
  onCreateGame,
  onGetGames,
  onUpdateGame,
  onUndo
}
