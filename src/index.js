import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './redux/configureStore'
import Router from './Router'

render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('root')
)
