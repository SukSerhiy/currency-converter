import Api from './sdk/api'

const apiHost = process.env.REACT_APP_API_HOST
const apiKey = process.env.REACT_APP_API_KEY

const api = new Api(apiHost, apiKey)

export { api }
