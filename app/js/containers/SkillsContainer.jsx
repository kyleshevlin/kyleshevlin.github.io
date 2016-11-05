import { connect } from 'react-redux'
import Skills from '../components/Skills'

const mapStateToProps = (state) => {
  return {
    skills: state.data.skills
  }
}

export default connect(mapStateToProps)(Skills)
