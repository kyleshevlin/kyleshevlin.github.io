import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import { connect } from 'react-redux'
import Layout from '../components/Layout'
import { requestData, receiveData } from '../actions/data'

class LayoutContainer extends Component {
  componentDidMount () {
    if (!this.props.haveData) {
      this.props.requestData()

      axios.get('/data/data.json').then((response) => {
        this.props.receiveData(response.data)
      })
    }
  }

  render () {
    return <Layout />
  }
}

LayoutContainer.propTypes = {
  haveData: PropTypes.bool,
  requestData: PropTypes.func,
  receiveData: PropTypes.func
}

const mapStateToProps = state => ({
  haveData: state.haveData
})

const mapDispatchToProps = {
  requestData,
  receiveData
}

export default connect(mapStateToProps, mapDispatchToProps)(LayoutContainer)
