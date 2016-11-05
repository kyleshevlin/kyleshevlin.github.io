import { connect } from 'react-redux'
import References from '../components/References'

const mapStateToProps = (state) => {
  return {
    data: state.data
  }
}

export default connect(mapStateToProps)(References)
