import { connect } from 'react-redux'
import Education from '../components/Education'

const mapStateToProps = state => ({
  education: state.data.education
})

export default connect(mapStateToProps)(Education)
