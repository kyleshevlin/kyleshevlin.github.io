import { h } from 'preact'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const SiteItem = ({ title, path, comingsoon, award, solo }) => {
  const classes = classNames('site-item', { 'is-coming-soon': comingsoon })
  let heading
  let comingSoonSpan = null
  let awardSpan = null
  let soloDiv = null

  if (comingsoon) {
    heading = <span className="site-item-heading-span">{title}</span>
    comingSoonSpan = (
      <span className="site-item-coming_soon"> &mdash; Coming Soon</span>
    )
  } else {
    heading = (
      <a className="site-item-heading-link" href={path}>
        {title}
      </a>
    )
  }

  if (award) {
    awardSpan = (
      <span className="site-item-award"> &mdash; CommArts Award Winner</span>
    )
  }

  if (solo) {
    let kind

    if (solo.front && solo.back) {
      kind = 'Full Stack'
    } else if (solo.front) {
      kind = 'Sole Front End'
    } else if (solo.back) {
      kind = 'Sole Back End'
    }

    soloDiv = (
      <div className="site-item-solo">{kind} Developer</div>
    )
  }

  return (
    <div className={classes}>
      <h3 className="site-item-heading">{heading}</h3>
      {comingSoonSpan}
      {awardSpan}
      {soloDiv}
    </div>
  )
}

SiteItem.propTypes = {
  title: PropTypes.string,
  path: PropTypes.string,
  comingsoon: PropTypes.bool,
  award: PropTypes.bool,
  solo: PropTypes.shape({
    front: PropTypes.bool,
    back: PropTypes.bool
  })
}

export default SiteItem
