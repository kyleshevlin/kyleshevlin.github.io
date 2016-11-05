import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import Layout from '../components/Layout'
import { REQUEST_DATA, RECEIVE_DATA } from '../actionTypes'
import { requestData, receiveData } from '../actions/dataActions'

class LayoutContainer extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <Layout />
    )
  }

  componentDidMount () {
    this.props.requestData()

    axios.get('/data/data.json').then((response) => {
      this.props.receiveData(response.data)
    })
  }
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
