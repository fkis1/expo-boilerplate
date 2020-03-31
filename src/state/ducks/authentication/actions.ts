import { authenticationConstants } from 'src/state/ducks/authentication/constants'
import { noPayload } from 'src/state/utils/actionUtils'
import { createActions } from 'redux-actions'

const { AUTHENTICATE, CLEAR_AUTH } = authenticationConstants

export const authenticationActions = createActions(
  {
    [AUTHENTICATE]: noPayload,
    [CLEAR_AUTH]: noPayload,
  },
  {
    prefix: 'authentication',
  }
)
