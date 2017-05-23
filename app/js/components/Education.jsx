import React from 'react'
import PropTypes from 'prop-types'
import EducationItem from './EducationItem'

const Education = (props) => {
  return (
    <section>
      <h2>Education</h2>
      {props.education.map((item, index) => {
        return <EducationItem key={index} {...item} />
      })}
    </section>
  )
}

Education.propTypes = {
  education: PropTypes.array
}

export default Education
