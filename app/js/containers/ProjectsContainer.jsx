import { connect } from 'react-redux'
import Projects from '../components/Projects'

const mapStateToProps = (state) => {
  return {
    data: state.data
  }
}

export default connect(mapStateToProps)(Projects)
