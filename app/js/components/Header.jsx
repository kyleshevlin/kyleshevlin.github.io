import { h } from 'preact'
import NightModeToggle from './NightModeToggle'

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

      <div className='header-description'>
        Conference Speaker, Teacher, Livecoding Twitch Streamer, and Podcast Host.
      </div>

      <NightModeToggle />
    </div>
  </header>
)

export default Header
