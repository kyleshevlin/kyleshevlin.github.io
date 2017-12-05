import * as types from '../constants/actionTypes'

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
  },
  isNightMode: false
}

export default function(state = initialState, action) {
  switch (action.type) {
    case types.REQUEST_DATA:
      return { ...state, waitingForData: true }

    case types.RECEIVE_DATA:
      return {
        ...state,
        waitingForData: false,
        haveData: true,
        data: action.data
      }

    case types.TOGGLE_NIGHT_MODE:
      return {
        ...state,
        isNightMode: !state.isNightMode
      }

    default:
      return state
  }
}
