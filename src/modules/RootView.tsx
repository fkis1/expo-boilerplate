import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import {
  authenticationSelectors,
  authenticationActions,
} from 'src/state/ducks/authentication'

const { isAuthenticatedSelector } = authenticationSelectors
const { authenticate, clearAuth } = authenticationActions

export const RootView = () => {
  const dispatch = useDispatch()
  const [password, setPassword] = useState('')
  const isAuthenticated = useSelector(isAuthenticatedSelector)

  const handlePasswordChange = e => {
    setPassword(e)
  }

  useEffect(() => {
    if (password === 'aaa') {
      dispatch(authenticate())
    } else {
      isAuthenticated && dispatch(clearAuth())
    }
  }, [password])

  return (
    <View style={styles.container}>
      <Text>Hello World! Hint: aaa</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={handlePasswordChange}
        value={password}
      />
      <Text>
        {isAuthenticated ? 'User is authenticated' : 'Authentication required'}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
