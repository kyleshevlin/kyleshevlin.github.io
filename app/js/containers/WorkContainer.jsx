import { connect } from 'react-redux'
import Work from '../components/Work'

const mapStateToProps = state => ({
  work: state.data.work
})

export default connect(mapStateToProps)(Work)
