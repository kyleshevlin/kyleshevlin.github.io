import React from 'react'

const { object } = React.PropTypes

const Skills = (props) => {
  return (
    <section>
      <h2>Skills</h2>
      <ul>
        {props.data.skills.map((item, index) => {
          return <li key={index}>{item}</li>
        })}
      </ul>
    </section>
  )
}

Skills.propTypes = {
  data: object
}

export default Skills
