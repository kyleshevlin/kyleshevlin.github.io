import React from 'react'
import PropTypes from 'prop-types'

const EducationItem = ({
  teaser,
  degree,
  school,
  city,
  year
}) => {
  let teaserSpan = null

  if (teaser) {
    teaserSpan = <span> {teaser}</span>
  }

  return (
    <div className='education-item'>
      <strong>{degree}</strong>{teaserSpan}<br />
      {school} - {city} - {year}
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
