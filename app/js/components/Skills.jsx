import React from 'react'

const { array } = React.PropTypes

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
  skills: array
}

export default Skills
