import { connect } from 'react-redux'
import Accomplishments from '../components/Accomplishments'

const mapStateToProps = state => ({
  accomplishments: state.data.accomplishments
})

export default connect(mapStateToProps)(Accomplishments)
