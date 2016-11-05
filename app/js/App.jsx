import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import LayoutContainer from './containers/LayoutContainer'

const App = () => {
  return (
    <Provider store={store}>
      <LayoutContainer />
    </Provider>
  )
}

export default App
