import { connect } from 'react-redux'
import Talks from '../components/Talks'

const mapStateToProps = state => ({
  talks: state.data.talks
})

export default connect(mapStateToProps)(Talks)
