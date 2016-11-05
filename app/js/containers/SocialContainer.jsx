import { connect } from 'react-redux'
import Social from '../components/Social'

const mapStateToProps = (state) => {
  return {
    data: state.data
  }
}

export default connect(mapStateToProps)(Social)
