import { h, Component } from 'preact'
import PropTypes from 'prop-types'
import { select } from 'd3-selection'
import { months } from '../helpers'
import largeVisual from '../visuals/large'
import smallVisual from '../visuals/small'

class Display extends Component {
  addDisplays () {
    if (this.props.haveData) {
      const colorOne = '#0a2029'
      const colorTwo = '#33a1cc'
      const display = select('.js-display')
      const data = this.props.experience

      data.forEach(d => {
        d.months = months(d.startDate)
      })

      const desktopVisual = largeVisual()
        .data(data)
        .colorOne(colorOne)
        .colorTwo(colorTwo)

      const tabletVisual = smallVisual()
        .className('tablet_visual')
        .width(500)
        .data(data)
        .colorOne(colorOne)
        .colorTwo(colorTwo)

      const mobileVisual = smallVisual()
        .data(data)
        .colorOne(colorOne)
        .colorTwo(colorTwo)

      desktopVisual(display)
      tabletVisual(display)
      mobileVisual(display)
    }
  }

  componentDidMount () {
    this.addDisplays()
  }

  componentDidUpdate () {
    this.addDisplays()
  }

  render () {
    return (
      <div className='display-wrap'>
        <div className='display-blank_space' />
        <div ref={r => { this.nodeRef = r }} className='display js-display' />
      </div>
    )
  }
}

Display.propTypes = {
  haveData: PropTypes.bool,
  experience: PropTypes.array
}

export default Display
