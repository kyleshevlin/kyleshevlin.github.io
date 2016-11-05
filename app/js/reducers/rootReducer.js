import {
  REQUEST_DATA,
  RECEIVE_DATA
} from '../actionTypes'

const initialState = {
  waitingForData: false,
  haveData: false,
  data: {
    education: [],
    projects: {
      personal: [],
      open_source: []
    },
    references: [],
    sites: [],
    skills: [],
    social_media: [],
    work: []
  }
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
