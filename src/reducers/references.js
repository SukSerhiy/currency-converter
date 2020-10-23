import { actionTypes } from '../actions/references'

const defaultState = {
  currencies: {},
  countries: {}
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SET_CURRENCIES:
      return {
        ...state,
        currencies: action.data
      }
    case actionTypes.SET_COUNTRIES:
      return {
        ...state,
        countries: action.data
      }
    default:
      return state
  }
}
