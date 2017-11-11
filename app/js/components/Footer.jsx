import { h } from 'preact'

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <section>
        <p>
          Follow me on Twitter{' '}
          <a href="//twitter.com/kyleshevlin">@kyleshevlin</a>
        </p>

        <p>
          Built with <a href="https://preactjs.com/">Preact</a>,{' '}
          <a href="https://webpack.js.org/">Webpack</a>, and{' '}
          <a href="http://sass-lang.com/">Sass</a>
        </p>
      </section>
    </div>
  </footer>
)

export default Footer
