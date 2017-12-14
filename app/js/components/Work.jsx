import { h } from 'preact'
import PropTypes from 'prop-types'
import WorkItem from './WorkItem'

const Work = ({ work }) =>
  work ? (
    <section>
      <h2>Work</h2>
      {work.map(item => <WorkItem key={item.company} {...item} />)}
    </section>
  ) : null

Work.propTypes = {
  work: PropTypes.array
}

export default Work
