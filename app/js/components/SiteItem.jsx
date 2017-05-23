import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const SiteItem = (props) => {
  const classes = classNames(
    'site-item',
    { 'is-coming-soon': props.comingsoon }
  )
  let heading
  let comingSoon = null
  let award = null

  if (props.comingsoon) {
    heading = (
      <span className='site-item-heading-span'>
        {props.title}
      </span>
    )

    comingSoon = <span className='site-item-coming_soon'> &mdash; Coming Soon</span>
  } else {
    heading = (
      <a
        className='site-item-heading-link'
        href={props.path}
      >
        {props.title}
      </a>
    )
  }

  if (props.award) {
    award = <span className='site-item-award'> &mdash; CommArts Award Winner</span>
  }

  return (
    <div className={classes}>
      <h3 className='site-item-heading'>
        {heading}
      </h3>
      {comingSoon}
      {award}
    </div>
  )
}

SiteItem.propTypes = {
  title: PropTypes.string,
  path: PropTypes.string,
  comingsoon: PropTypes.bool,
  award: PropTypes.bool
}

export default SiteItem
