import { connect } from 'react-redux'
import Work from '../components/Work'

const mapStateToProps = (state) => {
  return {
    data: state.data
  }
}

export default connect(mapStateToProps)(Work)
