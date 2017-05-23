import React from 'react'
import PropTypes from 'prop-types'

const ReferenceItem = (props) => {
  return (
    <div className='reference-item'>
      <strong>{props.name}</strong> &mdash; {props.title}<br />
      <a href={`mailto:${props.email}`}>{props.email}</a><br />
      <a href={`http://twitter.com/${props.twitter}`}>@{props.twitter}</a>
    </div>
  )
}

ReferenceItem.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  email: PropTypes.string,
  twitter: PropTypes.string
}

export default ReferenceItem
