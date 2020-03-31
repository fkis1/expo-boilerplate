import { createStore } from 'redux'
import { rootReducer, IRootState } from 'src/state/ducks'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: any
  }
}

export const configureStore = (initialState?: IRootState) =>
  createStore(
    rootReducer,
    initialState,
    typeof window !== 'undefined' &&
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
  )
