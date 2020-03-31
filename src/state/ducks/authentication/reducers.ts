import { handleActions } from 'redux-actions'
import { IAuthenticationState } from 'src/state/ducks/authentication/types'
import { authenticationConstants } from 'src/state/ducks/authentication/constants'

const { AUTHENTICATE, CLEAR_AUTH } = authenticationConstants

const initialState: IAuthenticationState = {
  isAuthenticated: false,
}

export const authenticationReducer = handleActions(
  {
    [AUTHENTICATE]: (state) => ({
      isAuthenticated: true,
    }),
    [CLEAR_AUTH]: (state) => ({
      isAuthenticated: false,
    }),
  },
  initialState,
  {
    prefix: 'authentication',
  }
)
