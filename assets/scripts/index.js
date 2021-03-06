'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const userEvents = require('./user-actions/events')
const instrumentEvents = require('./instrument-actions/events')

$(() => {
  userEvents.addHandlers()
  instrumentEvents.addHandlers()
})
