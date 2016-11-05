import React from 'react'
import RepoItem from './RepoItem'

const { object } = React.PropTypes

const Projects = (props) => {
  return (
    <section>
      <h2>Noteworthy Repos</h2>
      <div className='repos'>
        {props.data.projects.personal.map((item, index) => {
          return <RepoItem key={`personal-${index}`} {...item} />
        })}
      </div>

      <h2>Open Source Projects I Contribute To</h2>
      <div className='repos'>
        {props.data.projects.open_source.map((item, index) => {
          return <RepoItem key={`os-${index}`} {...item} />
        })}
      </div>
    </section>
  )
}

Projects.propTypes = {
  data: object
}

export default Projects
