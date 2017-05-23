import React from 'react'
import PropTypes from 'prop-types'
import SiteItem from './SiteItem'

const Sites = ({ sites }) => (
  <section>
    <h2>Noteworthy Websites I Have Built</h2>
    <div className='sites'>
      {sites.map(item => <SiteItem key={item.title} {...item} />)}
    </div>
  </section>
)

Sites.propTypes = {
  sites: PropTypes.array
}

export default Sites
