import { connect } from 'react-redux'
import References from '../components/References'

const mapStateToProps = state => ({
  references: state.data.references
})

export default connect(mapStateToProps)(References)
