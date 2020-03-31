import React from 'react'
import { Provider } from 'react-redux'
import { configureStore } from 'src/state/configureStore'
import { RootView } from 'src/modules/RootView'

export const store = configureStore()

const App = () => {
  return (
    <Provider store={store}>
      <RootView />
    </Provider>
  )
}

export default App
