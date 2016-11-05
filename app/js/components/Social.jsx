import React from 'react'

const { object } = React.PropTypes

const Social = (props) => {
  return (
    <div>
      <ul>
        {props.data.social_media.map((item, index) => {
          return <li key={index}>{item.title}: <a href={item.path}>{item.path}</a></li>
        })}
      </ul>
    </div>
  )
}

Social.propTypes = {
  data: object
}

export default Social
