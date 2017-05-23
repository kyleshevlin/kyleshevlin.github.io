import { h } from 'preact'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const SiteItem = ({
  title,
  path,
  comingsoon,
  award
}) => {
  const classes = classNames(
    'site-item',
    { 'is-coming-soon': comingsoon }
  )
  let heading
  let comingSoonSpan = null
  let awardSpan = null

  if (comingsoon) {
    heading = <span className='site-item-heading-span'>{title}</span>
    comingSoonSpan = <span className='site-item-coming_soon'> &mdash; Coming Soon</span>
  } else {
    heading = <a className='site-item-heading-link' href={path}>{title}</a>
  }

  if (award) {
    awardSpan = <span className='site-item-award'> &mdash; CommArts Award Winner</span>
  }

  return (
    <div className={classes}>
      <h3 className='site-item-heading'>
        {heading}
      </h3>
      {comingSoonSpan}
      {awardSpan}
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
