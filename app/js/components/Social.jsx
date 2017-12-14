import { h } from 'preact'
import PropTypes from 'prop-types'

const Social = ({ social_media: socialMedia }) =>
  socialMedia ? (
    <div>
      <h3>Places to Find Me</h3>
      <ul>
        {socialMedia.map(({ title, path }) => (
          <li key={title}>
            {title}: <a href={path}>{path}</a>
          </li>
        ))}
      </ul>
    </div>
  ) : null

Social.propTypes = {
  social_media: PropTypes.array
}

export default Social
