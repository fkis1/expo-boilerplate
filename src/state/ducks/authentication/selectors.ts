import { IRootState } from 'src/state/ducks'

const isAuthenticatedSelector = (state: IRootState) => {
  return state.authentication.isAuthenticated
}

export const authenticationSelectors = {
  isAuthenticatedSelector,
}
