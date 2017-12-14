import { h } from 'preact'
import PropTypes from 'prop-types'
import RepoItem from './RepoItem'

const Projects = ({ projects }) =>
  projects ? (
    <section>
      <h2>Noteworthy Repos</h2>
      <div className="repos">
        {projects.personal.map(item => <RepoItem key={item.title} {...item} />)}
      </div>

      <h2>Open Source Projects I Contribute To</h2>
      <div className="repos">
        {projects.open_source.map(item => (
          <RepoItem key={item.title} {...item} />
        ))}
      </div>
    </section>
  ) : null

Projects.propTypes = {
  projects: PropTypes.object
}

export default Projects
