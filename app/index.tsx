import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import SignIn from './(auth)/Signin'

export default function index () {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <SignIn/>
    </SafeAreaView>
  )
}