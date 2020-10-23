import { api } from '../config'
import { setError } from './global'

export const actionTypes = {
  SET_LOADING: 'converter/CONVERT_CURRENCY',
  SET_INPUT_CURRENCY: 'converter/SET_INPUT_CURRENCY',
  SET_OUTPUT_CURRENCY: 'converter/SET_OUTPUT_CURRENCY',
  SET_INPUT_AMOUNT: 'converter/SET_INPUT_AMOUNT',
  SET_OUTPUT_AMOUNT: 'converter/SET_OUTPUT_AMOUNT',
  REVERSE: 'converter/REVERSE'
}

export const convertCurrency = (inputAmount, fromCurrency, toCurrency) => dispatch => {
  dispatch(setLoading(true))
  if (inputAmount) {
    api.convertCurrency(fromCurrency, toCurrency)
    .then(resp => {
      const coefficient = Object.values(resp).pop()
      const outputAmount = parseFloat(`${coefficient * inputAmount}`).toFixed(2)
      dispatch(setOutputAmount(outputAmount))
    })
    .catch(error => setError(error))
    .finally(() => dispatch(setLoading(false)))
  }
}

export const reverse = () => ({
  type: actionTypes.REVERSE
})

export const setInputCurrency = data => ({
  type: actionTypes.SET_INPUT_CURRENCY,
  data
})

export const setInputAmount = data => ({
  type: actionTypes.SET_INPUT_AMOUNT,
  data
})

export const setOutputCurrency = data => ({
  type: actionTypes.SET_OUTPUT_CURRENCY,
  data
})

export const setLoading = loading => ({
  type: actionTypes.SET_LOADING,
  loading
})

const setOutputAmount = data => ({
  type: actionTypes.SET_OUTPUT_AMOUNT,
  data
})
