import { h } from 'preact'
import PropTypes from 'prop-types'

const Social = ({ social_media }) => (
  <div>
    <ul>
      {social_media.map(({ title, path }) => (
        <li key={title}>
          {title}: <a href={path}>{path}</a>
        </li>
      ))}
    </ul>
  </div>
)

Social.propTypes = {
  social_media: PropTypes.array
}

export default Social
