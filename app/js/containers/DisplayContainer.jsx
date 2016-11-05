import { connect } from 'react-redux'
import Display from '../components/Display'

const mapStateToProps = (state) => {
  return {
    experience: state.data.experience
  }
}

export default connect(mapStateToProps)(Display)
