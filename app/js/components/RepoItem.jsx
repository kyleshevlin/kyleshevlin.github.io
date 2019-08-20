import { h } from 'preact'
import PropTypes from 'prop-types'

const RepoItem = ({ title, repoPath, desc, demoPath }) => {
  let demoLink = null

  if (demoPath) {
    demoLink = <a href={demoPath}>Demo</a>
  }

  return (
    <div className="repo-item">
      <h3 className="repo-item-heading">
        <a href={repoPath}>{title}</a>
      </h3>
      <p
        className="repo-item-content"
        dangerouslySetInnerHTML={{ __html: desc }}
      />
      {demoLink}
    </div>
  )
}

RepoItem.propTypes = {
  title: PropTypes.string,
  repoPath: PropTypes.string,
  desc: PropTypes.string,
  demoPath: PropTypes.string
}

export default RepoItem
