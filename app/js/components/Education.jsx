import React from 'react'
import EducationItem from './EducationItem'

const { array } = React.PropTypes

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
  education: array
}

export default Education
