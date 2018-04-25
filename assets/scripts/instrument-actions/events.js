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

const onGetAllArtists = (event) => {
  event.preventDefault()
  api.getAllInstruments()
    .then(ui.getAllArtistsSuccess)
}

const onGetMyInstruments = (event) => {
  event.preventDefault()
  api.getMyInstruments()
    .then(ui.getMyInstrumentSuccess)
}

const onUpdateInstrument = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  const instrumentId = $(event.target).closest('div').attr('data-id')
  api.updateInstrument(data, instrumentId)
    .then(ui.updateInstrumentSuccess)
}

const addHandlers = () => {
  $('#get-instruments').on('click', onGetMyInstruments)
  $('#clear-instruments').on('click', onClearInstruments)
  $('#create-instrument').on('submit', onCreateInstrument)
  $('#all-instruments').on('click', onGetAllArtists)
  $('.content').on('submit', '.update-instrument', onUpdateInstrument)
}
module.exports = {
  addHandlers,
  onGetMyInstruments,
  onClearInstruments,
  onCreateInstrument,
  onGetAllArtists
}
