import { combineReducers } from 'redux'
import global from './global'
import references from './references'
import converter from './converter'

export default combineReducers({
  global,
  references,
  converter
})
