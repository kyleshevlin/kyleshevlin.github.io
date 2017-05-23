import React from 'react'
import PropTypes from 'prop-types'
import WorkItem from './WorkItem'

const Work = (props) => {
  return (
    <section>
      <h2>Work</h2>
      {props.work.map((item, index) => {
        return <WorkItem key={index} {...item} />
      })}
    </section>
  )
}

Work.propTypes = {
  work: PropTypes.array
}

export default Work
