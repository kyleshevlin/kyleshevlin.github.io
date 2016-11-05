import { TEST_ACTION_TYPE } from '..actionTypes'

const initalState = {
  testProperty: false
}

export default function (state = initialState, action) {
  switch (action.type) {
    case TEST_ACTION_TYPE:
      return Object.assign({}, state, { testProperty: !state.testProperty })
  }
}
