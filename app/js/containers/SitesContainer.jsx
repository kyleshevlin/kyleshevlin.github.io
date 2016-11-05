import { connect } from 'react-redux'
import Sites from '../components/Sites'

const mapStateToProps = (state) => {
  return {
    sites: state.data.sites
  }
}

export default connect(mapStateToProps)(Sites)
