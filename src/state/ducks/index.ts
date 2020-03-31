import { combineReducers } from 'redux'
import { authenticationReducer as authentication } from 'src/state/ducks/authentication'
import { IAuthenticationState } from 'src/state/ducks/authentication/types'

export interface IRootState {
  readonly authentication: IAuthenticationState
}

export const rootReducer = combineReducers<IRootState>({
  authentication,
})
