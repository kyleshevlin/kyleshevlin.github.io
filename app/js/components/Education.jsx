import { h } from 'preact'
import PropTypes from 'prop-types'
import EducationItem from './EducationItem'

const Education = ({ education }) =>
  education ? (
    <section>
      <h2>Education</h2>
      {education.map(item => <EducationItem key={item.school} {...item} />)}
    </section>
  ) : null

Education.propTypes = {
  education: PropTypes.array
}

export default Education
