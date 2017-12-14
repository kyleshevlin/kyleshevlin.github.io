import { h } from 'preact'
import PropTypes from 'prop-types'
import SiteItem from './SiteItem'

const Sites = ({ sites }) =>
  sites ? (
    <section>
      <h2>Noteworthy Websites I Have Worked On</h2>
      <div className="sites">
        {sites.map(item => <SiteItem key={item.title} {...item} />)}
      </div>
    </section>
  ) : null

Sites.propTypes = {
  sites: PropTypes.array
}

export default Sites
