import React from 'react'
import EducationItem from './EducationItem'

const { object } = React.PropTypes

const Education = (props) => {
  return (
    <section>
      <h2>Education</h2>
      {props.data.education.map((item, index) => {
        return <EducationItem key={index} {...item} />
      })}
    </section>
  )
}

Education.propTypes = {
  data: object
}

export default Education
