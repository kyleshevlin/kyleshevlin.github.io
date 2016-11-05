import React from 'react'
import WorkItem from './WorkItem'

const { array } = React.PropTypes

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
  work: array
}

export default Work
