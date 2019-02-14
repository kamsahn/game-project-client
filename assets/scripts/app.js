'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const events = require('./gameplay/events.js')

$(() => {
  $('#space0').on('click', events.onSpaceClick)
  $('#space1').on('click', events.onSpaceClick)
  $('#space2').on('click', events.onSpaceClick)
  $('#space3').on('click', events.onSpaceClick)
  $('#space4').on('click', events.onSpaceClick)
  $('#space5').on('click', events.onSpaceClick)
  $('#space6').on('click', events.onSpaceClick)
  $('#space7').on('click', events.onSpaceClick)
  $('#space8').on('click', events.onSpaceClick)
})
