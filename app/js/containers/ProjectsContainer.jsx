import { connect } from 'react-redux'
import Projects from '../components/Projects'

const mapStateToProps = state => ({
  projects: state.data.projects
})

export default connect(mapStateToProps)(Projects)
