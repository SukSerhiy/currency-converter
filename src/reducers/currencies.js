import { actionTypes } from '../actions/currencies'

const defaultState = {
  list: []
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SET_CURRENCIES:
      return {
        ...state,
        list: action.data
      }
    default:
      return state
  }
}
