import { h, Component } from 'preact'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Layout from '../components/Layout'
import { fetchData } from '../actions'

class LayoutContainer extends Component {
  componentDidMount () {
    if (!this.props.haveData) {
      this.props.fetchData()
    }
  }

  render () {
    return <Layout />
  }
}

LayoutContainer.propTypes = {
  haveData: PropTypes.bool,
  fetchData: PropTypes.func
}

const mapStateToProps = state => ({
  haveData: state.haveData
})

const mapDispatchToProps = {
  fetchData
}

export default connect(mapStateToProps, mapDispatchToProps)(LayoutContainer)
