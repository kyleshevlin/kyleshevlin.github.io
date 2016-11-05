import { connect } from 'react-redux'
import Sites from '../components/Sites'

const mapStateToProps = (state) => {
  return {
    data: state.data
  }
}

export default connect(mapStateToProps)(Sites)
