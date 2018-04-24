'use strict'

const api = require('./api.js')
const ui = require('./ui.js')

const addHandlers = () => {
  $('#get-instruments').on('click', onGetInstruments)
  $('#clear-instruments').on('click', onClearInstruments)
}

const onGetInstruments = (event) => {
  event.preventDefault()
  api.getInstruments()
    .then(ui.getInstrumentSuccess)
}

const onClearInstruments = (event) => {
  event.preventDefault()
  ui.clearInstrumentDiv()
}

module.exports = {
  addHandlers,
  onGetInstruments,
  onClearInstruments
}
