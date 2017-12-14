import { h } from 'preact'
import PropTypes from 'prop-types'

const Accomplishments = ({ accomplishments }) =>
  accomplishments ? (
    <section>
      <h2>Other Accomplishments</h2>
      <ul>
        {accomplishments.map(item => <li key={item}>{item}</li>)}
      </ul>
    </section>
  ) : null

Accomplishments.propTypes = {
  accomplishments: PropTypes.arrayOf(PropTypes.string)
}

export default Accomplishments
