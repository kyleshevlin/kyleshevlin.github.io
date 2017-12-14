import { h } from 'preact'
import PropTypes from 'prop-types'

const Skills = ({ skills }) =>
  skills ? (
    <section>
      <h2>Skills</h2>
      <ul>{skills.primary.map(item => <li key={item}>{item}</li>)}</ul>

      {skills.secondary.length > 0 && (
        <div>
          <h4>Also Skilled In</h4>
          <p>{skills.secondary.join(', ')}</p>
        </div>
      )}
    </section>
  ) : null

Skills.propTypes = {
  skills: PropTypes.shape({
    primary: PropTypes.array,
    secondary: PropTypes.array
  })
}

export default Skills
