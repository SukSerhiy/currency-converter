import { setLoading, setError } from './global'
import { api } from '../config'

export const actionTypes = {
  FETCH_CURRENCIES: 'references/FETCH_CURRENCIES',
  SET_CURRENCIES: 'references/SET_CURRENCIES',
  FETCH_COUNTRIES: 'references/FETCH_COUNTRIES',
  SET_COUNTRIES: 'references/SET_COUNTRIES'
}

export const fetchCurrencies = () => dispatch => {
  dispatch(setLoading(true))
  api.fetchCurrencies()
    .then(resp => {
      dispatch(setCurrencies(resp.results))
    })
    .catch(error => setError(error))
    .finally(() => dispatch(setLoading(false)))
}

export const fetchCountries = () => dispatch => {
  dispatch(setLoading(true))
  api.fetchCountries()
    .then(resp => {
      dispatch(setCountries(resp.results))
    })
    .catch(error => setError(error))
    .finally(() => dispatch(setLoading(false)))
}

export const setCurrencies = data => ({
  type: actionTypes.SET_CURRENCIES,
  data
})

export const setCountries = data => ({
  type: actionTypes.SET_COUNTRIES,
  data
})
