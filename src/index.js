import React from 'react'
import ReactDOM from 'react-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux';
import './index.css';
import { App } from './components'
import configureStore from './store'
import reducer from './reducers'

const { persistor, store } = configureStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <PersistGate  loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)
