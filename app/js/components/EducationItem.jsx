import React from 'react'
import PropTypes from 'prop-types'

const EducationItem = (props) => {
  let teaser = null

  if (props.teaser) {
    teaser = <span> { props.teaser }</span>
  }

  return (
    <div className='education-item'>
      <strong>{props.degree}</strong>{teaser}<br />
      { props.school } - { props.city } - { props.year }
    </div>
  )
}

EducationItem.propTypes = {
  city: PropTypes.string,
  degree: PropTypes.string,
  school: PropTypes.string,
  teaser: PropTypes.string,
  year: PropTypes.number
}

export default EducationItem
