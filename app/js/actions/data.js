import * as types from '../constants/actionTypes'

export function requestData () {
  return { type: types.REQUEST_DATA }
}

export function receiveData (data) {
  return { type: types.RECEIVE_DATA, data }
}
