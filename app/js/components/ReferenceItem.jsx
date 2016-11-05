import React from 'react'

const { string } = React.PropTypes

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
  name: string,
  title: string,
  email: string,
  twitter: string
}

export default ReferenceItem
