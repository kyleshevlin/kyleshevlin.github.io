import { connect } from 'react-redux'
import Skills from '../components/Skills'

const mapStateToProps = (state) => {
  return {
    data: state.data
  }
}

export default connect(mapStateToProps)(Skills)
