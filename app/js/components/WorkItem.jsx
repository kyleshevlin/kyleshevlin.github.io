import React from 'react'

const { arrayOf, string } = React.PropTypes

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
  company: string,
  location: string,
  dates: string,
  jobtitle: string,
  points: arrayOf(string)
}

export default WorkItem
