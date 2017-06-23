import { h, render } from 'preact'
import App from './components/App'

import '../scss/base.scss'

if (process.env.NODE_ENV === 'development') {
  require('preact/devtools')
}

render(<App />, document.getElementById('app'))
