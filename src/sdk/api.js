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
    const resp = await axios
      .get(`/api/v7/currencies?apiKey=${this.apiKey}`)
    return resp.results
  }
}

export default Api
