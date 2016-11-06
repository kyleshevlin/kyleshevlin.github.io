import { connect } from 'react-redux'
import Display from '../components/Display'

const mapStateToProps = (state) => {
  return {
    haveData: state.haveData,
    experience: state.data.experience
  }
}

export default connect(mapStateToProps)(Display)
