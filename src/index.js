import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

window.log = {
  primary: (...msg) => {
    if (process.env.DEV_MODE !== 'Y') {
      return
    }

    return console.log(
      '%c%s',
      'color: #007bff',
      ...msg,
    )
  },
  success: (...msg) => {
    if (process.env.DEV_MODE !== 'Y') {
      return
    }

    return console.log(
      '%c%s',
      'color: #28a745',
      ...msg,
    )
  },
  danger: (...msg) => {
    if (process.env.DEV_MODE !== 'Y') {
      return
    }

    return console.log(
      '%c%s',
      'color: #dc3545',
      ...msg,
    )
  }
}

// Redux DevTools Chrome Extension
const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

ReactDOM.render(
  <Provider
    store={process.env.DEV_MODE !== 'Y'
      ? createStore(reducer)
      : createStore(reducer, enhancer)}
  >
    <App/>
  </Provider>,
  document.getElementById('root')
)