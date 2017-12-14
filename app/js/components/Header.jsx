import { h } from 'preact'

const Header = () => (
  <header className="header">
    <div className="container">
      <h1 className="header-heading">
        <a
          className="header-heading-link"
          href="https://github.com/kyleshevlin"
        >
          Kyle Shevlin
        </a>
      </h1>
      <h2 className="header-subheading">Front End JavaScript Engineer</h2>

      <div className="header-description">
        Conference and Meetup speaker, teacher, livecoding Twitch streamer, and
        podcast host.
      </div>
    </div>
  </header>
)

export default Header
