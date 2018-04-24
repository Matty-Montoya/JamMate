'use strict'
const getFormFields = require('../../../lib/get-form-fields')
const api = require('./api.js')
const ui = require('./ui.js')

const onClearInstruments = (event) => {
  event.preventDefault()
  ui.clearInstrumentSuccess()
}

const onCreateInstrument = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createInstrument(data)
    .then(ui.createInstrumentSuccess)
}

const onGetInstruments = (event) => {
  event.preventDefault()
  api.getInstruments()
    .then(ui.getInstrumentSuccess)
}

const addHandlers = () => {
  $('#get-instruments').on('click', onGetInstruments)
  $('#clear-instruments').on('click', onClearInstruments)
  $('#create-instrument').on('submit', onCreateInstrument)
}
module.exports = {
  addHandlers,
  onGetInstruments,
  onClearInstruments,
  onCreateInstrument
}
