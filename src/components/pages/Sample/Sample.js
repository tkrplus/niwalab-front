import React from 'react'

export default class Example extends React.Component {
  render() {
    const {
      sample,
      count,
      sampleAction,
      sampleCounterAction,
    } = this.props
    return (
      <div className="App">
        <div className="App-header">
          <h2 onClick={sampleAction}>{ sample }</h2>
        </div>
        <p
          className="App-intro"
          onClick={sampleCounterAction}
        >
          { count }
        </p>
      </div>
    )
  }
}
