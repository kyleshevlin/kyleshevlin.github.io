import { connect } from 'react-redux'
import Work from '../components/Work'

const mapStateToProps = (state) => {
  return {
    work: state.data.work
  }
}

export default connect(mapStateToProps)(Work)
