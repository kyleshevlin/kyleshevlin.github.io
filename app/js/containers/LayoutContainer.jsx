import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import Layout from '../components/Layout'
import { requestData, receiveData } from '../actions/dataActions'

const { bool, func } = React.PropTypes

class LayoutContainer extends React.Component {
  render () {
    return (
      <Layout />
    )
  }

  componentDidMount () {
    if (!this.props.haveData) {
      this.props.requestData()

      axios.get('/data/data.json').then((response) => {
        this.props.receiveData(response.data)
      })
    }
  }
}

LayoutContainer.propTypes = {
  haveData: bool,
  requestData: func,
  receiveData: func
}

const mapStateToProps = (state) => {
  return {
    haveData: state.haveData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    requestData () {
      dispatch(requestData())
    },
    receiveData (data) {
      dispatch(receiveData(data))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LayoutContainer)
