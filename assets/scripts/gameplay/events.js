'use strict'

const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const gameplayUi = require('./gameplayUi.js')
const gameLogic = require('./gameLogic.js')
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

// will turn off all space click actions
// will check which ones have marks and apply the error to those
// will apply the onSpaceClick to any with an empty text attr
const reapply = () => {
  $('.placer').off('click')
  const allCells = gameLogic.reapplyListeners()
  // this will check store.game.cells
  allCells[0].forEach(cell => {
    $(cell).on('click', gameplayUi.userErrorMessage)
  })
  allCells[1].forEach(cell => {
    $(cell).on('click', onSpaceClick)
  })
}

const onSpaceClick = (event) => {
  store.space = event
  $('#undo').off('submit')
  $('#undo').on('submit', onUndo)
  const timeout = gameplayUi.updateBoard(event.target)
  if (timeout) {
    setTimeout(() => {
      $('#user-messages').text('')
      if ($('#user-stats').text === 'Computer O is thinking...') {
        $('#user-stats').text('')
      }
      // if undo has not been clicked
      if (!store.undoHit && !store.newGame) {
        gameplayUi.updateBoardComputer(event.target)
      }
      reapply()
      store.undoHit = false
      store.undoReady = false
    }, 1500)
  }
  onUpdateGame(store.currentPlayer, store.spaceIndex, store.game.over)
  // player and space marked and game end state
  store.newGame = false
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

// if there is something on the board and your turn to undo will run
// only works once. will hide after click
const onUndo = (event) => {
  event.preventDefault()
  const isBlank = elem => {
    return elem === ''
  }
  if (!store.game.cells.every(isBlank) && store.undoReady) {
    store.undoHit = true
    gameplayUi.undoBoard(store.space.target)
    // targets the space that you want to undo
    onUpdateGame('', store.spaceIndex, store.over)
    reapply()
  } else {
    gameplayUi.preUndo()
  }
}

const onToggleClick = (event) => {
  event.preventDefault()
  authUi.toggle()
  $('#toggle').on('click', onToggleClick)
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
  onUndo,
  onToggleClick
}
