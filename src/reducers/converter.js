import { actionTypes } from '../actions/converter'

const defaultState = {
  loading: false,
  fromCurrency: 'USD',
  toCurrency: 'USD',
  inputAmount: null,
  outputAmount: null
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SET_LOADING:
      return {
        ...state,
        loading: action.loading
      }
    case actionTypes.SET_INPUT_CURRENCY:
      return {
        ...state,
        fromCurrency: action.data
      }
    case actionTypes.SET_OUTPUT_CURRENCY:
      return {
        ...state,
        toCurrency: action.data
      }
    case actionTypes.SET_INPUT_AMOUNT:
      return {
        ...state,
        inputAmount: action.data
      }
    case actionTypes.SET_OUTPUT_AMOUNT:
      return {
        ...state,
        outputAmount: action.data
      }
    case actionTypes.REVERSE:
      const { fromCurrency, toCurrency} = state
      return {
        ...state,
        fromCurrency: toCurrency,
        toCurrency: fromCurrency
      }
    default:
      return state
  }
}
