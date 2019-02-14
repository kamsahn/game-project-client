'use strict'

const gameplayUi = require('./ui.js')

const onSpaceClick = (event) => {
  gameplayUi.updateBoard(event.target)
}

const onGameStart = event => {
  gameplayUi.gameRun()
}

module.exports = {
  onSpaceClick,
  onGameStart
}
