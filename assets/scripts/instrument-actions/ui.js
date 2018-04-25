'use strict'

const showInstrumentTemplate = require('../templates/instrument-listing.handlebars')
const showArtistTemplate = require('../templates/artist-listing.handlebars')

const getMyInstrumentSuccess = function (data) {
  console.log(data)
  const showInstrumentHTML = showInstrumentTemplate({instruments: data.user.instruments})
  $('.content').html(showInstrumentHTML)
}

const getAllArtistsSuccess = function (data) {
  const showArtistHTML = showArtistTemplate({instruments: data.instruments})
  $('.content').html(showArtistHTML)
}

const clearInstrumentSuccess = function (data) {
  $('.content').empty()
}

const createInstrumentSuccess = function (data) {
  $('input[type=text]').val('')
}

const updateInstrumentSuccess = function () {
  $('input[type=text]').val('')
  $('#updateModal').modal('toggle')
}

module.exports = {
  getAllArtistsSuccess,
  getMyInstrumentSuccess,
  clearInstrumentSuccess,
  createInstrumentSuccess,
  updateInstrumentSuccess
}
