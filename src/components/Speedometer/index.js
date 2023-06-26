import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onAccelerate = () => {
    const {count} = this.state
    if (count < 200) {
      this.setState(previousState => ({count: previousState.count + 10}))
    }
  }

  onApplyBrakes = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(previousState => ({count: previousState.count - 10}))
    }
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">SPEEDOMETER</h1>
        <div>
          <img
            className="img"
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            alt="speedometer"
          />
        </div>
        <h1 className="sub-heading">Speed is {count}mph</h1>
        <p className="description">Min Limit is 0mph, Max Limit is 200mph</p>

        <div className="button-container">
          <button
            className="buttons btn1"
            type="button"
            onClick={this.onAccelerate}
          >
            Accelerate
          </button>

          <button
            className="buttons btn2"
            type="button"
            onClick={this.onApplyBrakes}
          >
            Apply brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
