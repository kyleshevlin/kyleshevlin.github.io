import axios from 'axios'
import * as types from '../constants/actionTypes'

function requestData() {
  return { type: types.REQUEST_DATA }
}

function receiveData(data) {
  return { type: types.RECEIVE_DATA, data }
}

export function fetchData() {
  return dispatch => {
    dispatch(requestData())

    axios
      .get('/data/data.json')
      .then(
        response => dispatch(receiveData(response.data)),
        error => console.error(error)
      )
  }
}

export function toggleNightMode() {
  return { type: types.TOGGLE_NIGHT_MODE }
}
