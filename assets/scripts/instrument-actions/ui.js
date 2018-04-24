'use strict'

const showInstrumentTemplate = require('../templates/instrument-listing.handlebars')

const getInstrumentSuccess = function (data) {
  console.log(data)
  const showInstrumentHTML = showInstrumentTemplate({instruments: data.instruments})
  $('.content').html(showInstrumentHTML)
}

const clearInstrumentDiv = function (data) {
  $('.content').empty()
}

module.exports = {
  getInstrumentSuccess,
  clearInstrumentDiv
}
