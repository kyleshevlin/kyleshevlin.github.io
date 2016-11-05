import React from 'react'
import SiteItem from './SiteItem'

const { object } = React.PropTypes

const Sites = (props) => {
  return (
    <section>
      <h2>Noteworthy Websites I Have Built</h2>
      <div className='sites'>
        {props.data.sites.map((item, index) => {
          return <SiteItem key={index} {...item} />
        })}
      </div>
    </section>
  )
}

Sites.propTypes = {
  data: object
}

export default Sites
