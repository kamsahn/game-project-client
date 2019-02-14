'use strict'

const gameplayUi = require('./ui.js')

const onSpaceClick = (event) => {
  gameplayUi.updateBoard(event.target)
}

module.exports = {
  onSpaceClick
}
