import React from 'react'
import PropTypes from 'prop-types'

const Skills = (props) => {
  return (
    <section>
      <h2>Skills</h2>
      <ul>
        {props.skills.map((item, index) => {
          return <li key={index}>{item}</li>
        })}
      </ul>
    </section>
  )
}

Skills.propTypes = {
  skills: PropTypes.array
}

export default Skills
