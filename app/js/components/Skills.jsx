import { h } from 'preact'
import PropTypes from 'prop-types'

const Skills = ({ skills }) => (
  <section>
    <h2>Skills</h2>
    <ul>{skills.map(item => <li key={item}>{item}</li>)}</ul>
  </section>
)

Skills.propTypes = {
  skills: PropTypes.array
}

export default Skills
