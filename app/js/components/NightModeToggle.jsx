import { h, Component } from 'preact'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { toggleNightMode } from '../actions'

class NightModeToggle extends Component {
  constructor() {
    super()

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.toggleNightMode()
  }

  render() {
    return (
      <div className="nightmode_toggle-wrap">
        <button
          className="nightmode_toggle"
          onClick={this.handleClick}
        >
          <span className="nightmode_toggle-text">
            Toggle Night Mode
          </span>
          <svg className="nightmode_toggle-icon" viewBox="7 7 36 36">
            <g>
              <circle
                strokeWidth="3"
                fill="none"
                r="16"
                cy="25"
                cx="25"
              />
              <path
                strokeWidth="0"
                d="m25,9a16,16 0 0 1 0,32l0,-1.5a18,18 0 0 1 0,-29l0,-1.5z"
              />
            </g>
          </svg>
        </button>
      </div>
    )
  }
}

NightModeToggle.propTypes = {
  isNightMode: PropTypes.bool,
  toggleNightMode: PropTypes.func
}

const mapStateToProps = state => ({
  isNightMode: state.isNightMode
})

const mapDispatchToProps = {
  toggleNightMode
}

export default connect(mapStateToProps, mapDispatchToProps)(
  NightModeToggle
)
