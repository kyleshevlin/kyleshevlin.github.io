import { h } from 'preact'
import PropTypes from 'prop-types'

const WorkItem = ({ company, location, dates, jobTitle, points }) => (
  <div className="work-item">
    <p>
      <strong>{company}</strong> - {location} - {dates}
      <br />
      <strong>{jobTitle}</strong>
    </p>

    <ul>{points.map(item => <li key={item}>{item}</li>)}</ul>
  </div>
)

WorkItem.propTypes = {
  company: PropTypes.string,
  location: PropTypes.string,
  dates: PropTypes.string,
  jobTitle: PropTypes.string,
  points: PropTypes.arrayOf(PropTypes.string)
}

export default WorkItem
