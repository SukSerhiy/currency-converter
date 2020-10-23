import axios from 'axios'

class Api {
  constructor(apiHost, apiKey) {
    this.apiHost = apiHost
    this.apiKey = apiKey
    this.initialize()
  }

  initialize() {
    axios.defaults.baseURL = this.apiHost
    axios.interceptors.response.use(resp => {
      return resp.data;
    }, function (error) {
      return Promise.reject(error)
    })
  }

  async fetchCurrencies() {
   return await axios
      .get(`/api/v7/currencies?apiKey=${this.apiKey}`)
  }

  async fetchCountries() {
    return await axios
       .get(`/api/v7/countries?apiKey=${this.apiKey}`)
   }

  async convertCurrency(fromCurrency, toCurrency) {
    fromCurrency = encodeURIComponent(fromCurrency)
    toCurrency = encodeURIComponent(toCurrency)
    return await axios
        .get(`/api/v7/convert?q=${fromCurrency}_${toCurrency}&compact=ultra&apiKey=${this.apiKey}`)
  }
}

export default Api
