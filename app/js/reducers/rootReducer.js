import {
  REQUEST_DATA,
  RECEIVE_DATA
} from '..actionTypes'

const initalState = {
  waitingForData: false,
  haveData: false,
  data: {}
}

export default function (state = initialState, action) {
  switch (action.type) {
    case REQUEST_DATA:
      return Object.assign({}, state, {
        waitingForData: true
      })

    case RECEIVE_DATA:
      return Object.assign({}, state, {
        waitingForData: false,
        haveData: true,
        data: action.data
      })

    default:
      return state
  }
}
