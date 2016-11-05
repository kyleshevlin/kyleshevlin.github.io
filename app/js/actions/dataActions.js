import { REQUEST_DATA, RECEIVE_DATA } from '../actionTypes'

export function requestData () {
  return { type: REQUEST_DATA }
}

export function receiveData (data) {
  return { type: RECEIVE_DATA, data }
}
