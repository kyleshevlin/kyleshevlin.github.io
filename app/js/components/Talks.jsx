import { h } from 'preact'
import PropTypes from 'prop-types'

const Talks = ({ talks }) =>
  talks ? (
    <section>
      <h2>Talks</h2>
      {talks.map(talk => (
        <div className="talk_item" key={talk.id}>
          <h4>{talk.title}</h4>
          <iframe
            id="ytplayer"
            type="text/html"
            width="640"
            height="360"
            src={`https://www.youtube.com/embed/${talk.id}`}
            frameBorder="0"
          />
        </div>
      ))}
    </section>
  ) : null

Talks.propTypes = {
  talks: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      id: PropTypes.string
    })
  )
}

export default Talks
