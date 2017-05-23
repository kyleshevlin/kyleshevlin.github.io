import React from 'react'
import PropTypes from 'prop-types'
import SiteItem from './SiteItem'

const Sites = (props) => {
  return (
    <section>
      <h2>Noteworthy Websites I Have Built</h2>
      <div className='sites'>
        {props.sites.map((item, index) => {
          return <SiteItem key={index} {...item} />
        })}
      </div>
    </section>
  )
}

Sites.propTypes = {
  sites: PropTypes.array
}

export default Sites
