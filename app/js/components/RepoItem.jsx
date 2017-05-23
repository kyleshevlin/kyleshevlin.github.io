import React from 'react'
import PropTypes from 'prop-types'

const RepoItem = (props) => {
  let demo = null

  if (props.demopath) {
    demo = <a href={props.demopath}>Demo</a>
  }

  return (
    <div className='repo-item'>
      <h3 className='repo-item-heading'><a href={props.repopath}>{props.title}</a></h3>
      <p
        className='repo-item-content'
        dangerouslySetInnerHTML={{__html: props.desc}}
      />
      {demo}
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
