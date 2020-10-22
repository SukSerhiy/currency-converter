export const actionTypes = {
  FETCH_CURRENCIES: 'currencies/FETCH_CURRENCIES',
  SET_CURRENCIES: 'currencies/SET_CURRENCIES'
}

export const fetchCurrencies = () => {
  type: actionTypes.FETCH_CURRENCIES
}

export const setCurrencies = data => {
  type: actionTypes.SET_CURRENCIES,
  data
}
