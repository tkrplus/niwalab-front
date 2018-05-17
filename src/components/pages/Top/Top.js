import React from 'react'

export default class Top extends React.Component {
  render() {
    const {
      history
    } = this.props

    return (
      <div className="App">
        <div className="App-header">
          <h2
            onClick={() => { history.push('/sample') }}
          >
            Welcome to React
          </h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}
