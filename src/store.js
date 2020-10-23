import thunk from 'redux-thunk'
import rootReducer from './reducers'
import storage from 'redux-persist/lib/storage'
import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import { composeWithDevTools } from 'redux-devtools-extension'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['references']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default function configureStore() {
  const store = createStore(
    persistedReducer,
    {},
    composeWithDevTools(
      applyMiddleware(thunk)
    ))

  const  persistor = persistStore(store)

  return { persistor, store }
}
