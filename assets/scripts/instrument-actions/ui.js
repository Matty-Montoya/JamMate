'use strict'

const showInstrumentTemplate = require('../templates/instrument-listing.handlebars')
const showArtistTemplate = require('../templates/artist-listing.handlebars')

const getMyInstrumentSuccess = function (data) {
  const showInstrumentHTML = showInstrumentTemplate({instruments: data.user.instruments})
  $('.content').html(showInstrumentHTML)
  // $('.status').text('Successfully loaded your instruments!')
  setTimeout(() => $('.status').text(''), 3000)
  if (data.user.instruments.length === 0) {
    $('.content').html('<h3>You do not have any instruments. Create an instrument!</h3>')
  }
}

const getInstrumentStatus = function (data) {
  $('.status').text('Successfully loaded your instruments!')
}

const getAllArtistsSuccess = function (data) {
  const showArtistHTML = showArtistTemplate({instruments: data.instruments})
  $('.content').html(showArtistHTML)
  $('.status').text('Successfully loaded all artists!')
  setTimeout(() => $('.status').text(''), 3000)
}

const clearInstrumentSuccess = function (data) {
  $('.content').empty()
  $('.status').text('Successfully cleared content!')
  setTimeout(() => $('.status').text(''), 3000)
}

const createInstrumentSuccess = function (data) {
  $('input[type=text]').val('')
  $('.status1').text('Successfully created an instrument!')
  setTimeout(() => $('.status1').text(''), 3000)
}

const updateInstrumentSuccess = function () {
  $('input[type=text]').val('')
  $('#updateModal').modal('toggle')
  $('.status').text('Successfully updated your instrument!')
  setTimeout(() => $('.status').text(''), 3000)
}

const deleteInstrumentSuccess = function () {
  $('.status2').text('Successfully deleted your instrument!')
  setTimeout(() => $('.status2').text(''), 3000)
}

module.exports = {
  getAllArtistsSuccess,
  getMyInstrumentSuccess,
  clearInstrumentSuccess,
  createInstrumentSuccess,
  updateInstrumentSuccess,
  deleteInstrumentSuccess,
  getInstrumentStatus
}
