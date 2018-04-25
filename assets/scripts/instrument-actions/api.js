'use strict'

const config = require('../config')
const store = require('../store')

const getAllInstruments = function () {
  return $.ajax({
    url: config.apiUrl + '/instruments',
    method: 'GET',
    headers: {
      contentType: 'application/json',
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const getMyInstruments = function () {
  return $.ajax({
    url: config.apiUrl + '/users/' + store.user.id,
    method: 'GET',
    headers: {
      contentType: 'application/json',
      Authorization: `Token token=${store.user.token}`
    }
  })
}

const createInstrument = function (data) {
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

const updateInstrument = function (data, instrumentId) {
  return $.ajax({
    url: config.apiUrl + '/instruments/' + instrumentId,
    method: 'PATCH',
    headers: {
      contentType: 'application/json',
      Authorization: `Token token=${store.user.token}`
    },
    data
  })
}

const destroyInstrument = function (instrumentId) {
  return $.ajax({
    url: config.apiUrl + '/instruments/' + instrumentId,
    method: 'DELETE',
    headers: {
      contentType: 'application/json',
      Authorization: `Token token=${store.user.token}`
    }
  })
}

module.exports = {
  getAllInstruments,
  getMyInstruments,
  updateInstrument,
  createInstrument,
  destroyInstrument
}
