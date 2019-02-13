'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const events = require('./gameplay/events.js')

$(() => {
  $('#space-0').on('click', events.onSpaceClick)
  $('#space-1').on('click', events.onSpaceClick)
  $('#space-2').on('click', events.onSpaceClick)
  $('#space-3').on('click', events.onSpaceClick)
  $('#space-4').on('click', events.onSpaceClick)
  $('#space-5').on('click', events.onSpaceClick)
  $('#space-6').on('click', events.onSpaceClick)
  $('#space-7').on('click', events.onSpaceClick)
  $('#space-8').on('click', events.onSpaceClick)
})
