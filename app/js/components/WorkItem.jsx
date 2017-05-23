import React from 'react'
import PropTypes from 'prop-types'

const WorkItem = (props) => {
  return (
    <div className='work-item'>
      <p>
        <strong>{props.company}</strong> - {props.location} - {props.dates}<br />
        <strong>{props.jobtitle}</strong>
      </p>

      <ul>
        {props.points.map((item, index) => {
          return <li key={index}>{item}</li>
        })}
      </ul>
    </div>
  )
}

WorkItem.propTypes = {
  company: PropTypes.string,
  location: PropTypes.string,
  dates: PropTypes.string,
  jobtitle: PropTypes.string,
  points: PropTypes.arrayOf(PropTypes.string)
}

export default WorkItem
