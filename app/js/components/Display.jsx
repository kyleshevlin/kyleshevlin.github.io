import React from 'react'
import { select } from 'd3-selection'
import { months } from '../helpers'
import largeVisual from '../visuals/large'
// import SmallVisual from '../visuals/small'

const { array, bool } = React.PropTypes

class Display extends React.Component {
  render () {
    return (
      <div className='display-wrap'>
        <div className='display-blank_space' />
        <div ref={(r) => { this.nodeRef = r }} className='display js-display' />
      </div>
    )
  }

  componentDidMount () {
    this.addDisplays()
    // const tabletVisual = new SmallVisual({
    //   container: this.nodeRef,
    //   className: 'tablet_visual',
    //   data
    // })

    // const mobileVisual = new SmallVisual({
    //   container: this.nodeRef
    //   className: 'mobile_visual',
    //   data
    // })
  }

  componentDidUpdate () {
    this.addDisplays()
  }

  addDisplays () {
    if (this.props.haveData) {
      const colorOne = '#0a2029'
      const colorTwo = '#33a1cc'
      const display = select('.js-display')
      const data = this.props.experience

      // This is a mutation, I should think of a better way to do this
      data.forEach((d) => {
        d.months = months(d.months)
      })

      const desktopVisual = largeVisual()
        .data(data)
        .colorOne(colorOne)
        .colorTwo(colorTwo)

      desktopVisual(display)
    }
  }
}

Display.propTypes = {
  haveData: bool,
  experience: array
}

export default Display
