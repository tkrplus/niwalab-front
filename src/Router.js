import React from 'react'
import {
  HashRouter,
  Route
} from 'react-router-dom'
import Top from 'src/components/pages/Top'
import Sample from 'src/components/pages/Sample'

const Router = () => (
  <HashRouter>
    <div>
      <Route path='/sample' component={Sample} />

      <Route exact path='/' component={Top} />
    </div>
  </HashRouter>
)

export default Router
