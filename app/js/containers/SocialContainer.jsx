import { connect } from 'react-redux'
import Social from '../components/Social'

const mapStateToProps = (state) => {
  return {
    social_media: state.data.social_media
  }
}

export default connect(mapStateToProps)(Social)
