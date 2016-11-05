import { connect } from 'react-redux'
import References from '../components/References'

const mapStateToProps = (state) => {
  return {
    references: state.data.references
  }
}

export default connect(mapStateToProps)(References)
