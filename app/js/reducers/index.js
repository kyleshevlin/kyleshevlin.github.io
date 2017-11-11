import * as types from '../constants/actionTypes'

const initialState = {
  waitingForData: false,
  haveData: false,
  data: {
    education: [],
    experience: [],
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

    default:
      return state
  }
}
