import React from 'react'
import PropTypes from 'prop-types'
import RepoItem from './RepoItem'

const Projects = (props) => {
  return (
    <section>
      <h2>Noteworthy Repos</h2>
      <div className='repos'>
        {props.projects.personal.map((item, index) => {
          return <RepoItem key={`personal-${index}`} {...item} />
        })}
      </div>

      <h2>Open Source Projects I Contribute To</h2>
      <div className='repos'>
        {props.projects.open_source.map((item, index) => {
          return <RepoItem key={`os-${index}`} {...item} />
        })}
      </div>
    </section>
  )
}

Projects.propTypes = {
  projects: PropTypes.object
}

export default Projects
