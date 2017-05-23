import { h } from 'preact'
import { Provider } from 'react-redux'
import store from '../store'
import LayoutContainer from '../containers/LayoutContainer'

const App = () => (
  <Provider store={store}>
    <LayoutContainer />
  </Provider>
)

export default App
