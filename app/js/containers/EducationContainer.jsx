import { connect } from 'react-redux'
import Education from '../components/Education'

const mapStateToProps = (state) => {
  return {
    data: state.data
  }
}

export default connect(mapStateToProps)(Education)
