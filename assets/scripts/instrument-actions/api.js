'use strict'

const config = require('../config')

const getInstruments = function () {
  return $.ajax({
    url: config.apiUrl + '/instruments',
    method: 'GET',
    headers: {
      contentType: 'application/json'
    }
  })
}

module.exports = {
  getInstruments
}
