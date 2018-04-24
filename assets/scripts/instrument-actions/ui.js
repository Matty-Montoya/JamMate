'use strict'

const showInstrumentTemplate = require('../templates/instrument-listing.handlebars')

const getInstrumentSuccess = function (data) {
  console.log(data)
  const showInstrumentHTML = showInstrumentTemplate({instruments: data.instruments})
  $('.content').html(showInstrumentHTML)
}

const clearInstrumentSuccess = function (data) {
  $('.content').empty()
}

const createInstrumentSuccess = function (data) {

}

module.exports = {
  getInstrumentSuccess,
  clearInstrumentSuccess,
  createInstrumentSuccess
}
