import React from 'react'
import PropTypes from 'prop-types'

const RepoItem = ({
  title,
  repopath,
  desc,
  demopath
}) => {
  let demoLink = null

  if (demopath) {
    demoLink = <a href={demopath}>Demo</a>
  }

  return (
    <div className='repo-item'>
      <h3 className='repo-item-heading'><a href={repopath}>{title}</a></h3>
      <p
        className='repo-item-content'
        dangerouslySetInnerHTML={{__html: desc}}
      />
      {demoLink}
    </div>
  )
}

RepoItem.propTypes = {
  title: PropTypes.string,
  repopath: PropTypes.string,
  desc: PropTypes.string,
  demopath: PropTypes.string
}

export default RepoItem
