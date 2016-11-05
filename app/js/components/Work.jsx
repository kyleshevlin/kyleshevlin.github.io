import React from 'react'
import WorkItem from './WorkItem'

const { object } = React.PropTypes

const Work = (props) => {
  return (
    <section>
      <h2>Work</h2>
      {props.data.work.map((item, index) => {
        return <WorkItem key={index} {...item} />
      })}
    </section>
  )
}

Work.propTypes = {
  data: object
}

export default Work
