import React from 'react'

const { array } = React.PropTypes

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
  social_media: array
}

export default Social
