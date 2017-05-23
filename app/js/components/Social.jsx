import React from 'react'
import PropTypes from 'prop-types'

const Social = (props) => {
  return (
    <div>
      <ul>
        {props.social_media.map((item, index) => {
          return <li key={index}>{item.title}: <a href={item.path}>{item.path}</a></li>
        })}
      </ul>
    </div>
  )
}

Social.propTypes = {
  social_media: PropTypes.array
}

export default Social
