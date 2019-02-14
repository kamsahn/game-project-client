'use strict'

const gameplayUi = require('./ui.js')

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
  onGameStart
}
