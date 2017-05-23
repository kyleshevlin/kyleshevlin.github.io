import React from 'react'
import PropTypes from 'prop-types'

const ReferenceItem = ({
  name,
  title,
  email,
  twitter
}) => (
  <div className='reference-item'>
    <strong>{name}</strong> &mdash; {title}<br />
    <a href={`mailto:${email}`}>{email}</a><br />
    <a href={`http://twitter.com/${twitter}`}>@{twitter}</a>
  </div>
)

ReferenceItem.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  email: PropTypes.string,
  twitter: PropTypes.string
}

export default ReferenceItem
