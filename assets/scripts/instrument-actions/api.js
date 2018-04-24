'use strict'

const config = require('../config')
const store = require('../store')

const getInstruments = function () {
  return $.ajax({
    url: config.apiUrl + '/instruments',
    method: 'GET',
    headers: {
      contentType: 'application/json'
    }
  })
}

const createInstrument = function (data) {
  console.log('Instrument data is', data)
  return $.ajax({
    url: config.apiUrl + '/instruments',
    method: 'POST',
    headers: {
      contentType: 'application/json',
      Authorization: `Token token=${store.user.token}`
    },
    data
  })
}

module.exports = {
  getInstruments,
  createInstrument
}
